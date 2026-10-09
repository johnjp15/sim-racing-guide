import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/* Interactive 3D rig diagram — dimensions follow a real aluminum-profile
 * rig. Driver faces +X. Hip point (seated) is at the origin-ish (0, 0.38, 0).
 * Right-hand side of driver is +Z. */

const container = document.getElementById('rig3d');
const tip = document.getElementById('rig-tip');
if (!container) throw new Error('rig3d container missing');

const PARTS = {
  chassis:    { name: 'Chassis', url: 'chassis-mounts/' },
  seat:       { name: 'Seat', url: 'seating/' },
  wheelbase:  { name: 'Wheelbase', url: 'wheelbases/' },
  wheel:      { name: 'Wheel', url: 'wheel-rims/' },
  pedals:     { name: 'Pedals', url: 'pedals/' },
  shifter:    { name: 'Shifter', url: 'shifters-handbrakes/' },
  handbrake:  { name: 'Handbrake', url: 'shifters-handbrakes/' },
  buttonbox:  { name: 'Button box', url: 'button-boxes-accessories/' },
  displays:   { name: 'Displays', url: 'displays-vr/' },
  machine:    { name: 'PC / Console', url: 'pc-console/' },
  sound:      { name: 'Sound', url: 'audio/' },
  mounts:     { name: 'Mounts', url: 'chassis-mounts/' },
};

const scene = new THREE.Scene();
// ---- theme-aware backdrop: floor + background follow the page theme.
// The rig model itself never changes. ----
const THEMES = {
  dark:  { bg: 0x0d1117, floor: 0x11151a, gridC: 0x2a3340, grid: 0x1a2230 },
  light: { bg: 0xedf0f4, floor: 0xdde2e8, gridC: 0xaeb9c4, grid: 0xc6cfd8 },
};
const pageTheme = () =>
  document.body.getAttribute('data-md-color-scheme') === 'slate' ? 'dark' : 'light';
scene.background = new THREE.Color(0x0d1117);
scene.fog = new THREE.Fog(0x0d1117, 7, 15);

const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
camera.position.set(2.6, 1.8, 2.7);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0.15, 0.55, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.52;
controls.minDistance = 1.2;
controls.maxDistance = 8;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.7;
controls.addEventListener('start', () => { controls.autoRotate = false; });

scene.add(new THREE.HemisphereLight(0x8ea2c0, 0x0b0e14, 0.9));
const key = new THREE.DirectionalLight(0xffffff, 1.7);
key.position.set(3, 5, 2);
scene.add(key);
const fill = new THREE.DirectionalLight(0x88aaff, 0.5);
fill.position.set(-3, 2, -2);
scene.add(fill);

const floor = new THREE.Mesh(
  new THREE.CircleGeometry(6, 48),
  new THREE.MeshStandardMaterial({ color: 0x11151a, roughness: 1 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);
let grid = null;
function applyBackdrop() {
  const th = THEMES[pageTheme()];
  scene.background.setHex(th.bg);
  floor.material.color.setHex(th.floor);
  if (grid) { scene.remove(grid); grid.geometry.dispose(); grid.material.dispose(); }
  grid = new THREE.GridHelper(12, 24, th.gridC, th.grid);
  grid.position.y = 0.001;
  scene.add(grid);
}
applyBackdrop();
// MkDocs Material flips data-md-color-scheme on <body> when the user toggles theme
new MutationObserver(applyBackdrop).observe(document.body,
  { attributes: true, attributeFilter: ['data-md-color-scheme'] });

// ---- helpers ----
const mat = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.6, metalness: 0.35 }, o));
const PROFILE = () => mat(0x1c2027, { roughness: 0.55, metalness: 0.5 });
const DARK = () => mat(0x262b34, { roughness: 0.7, metalness: 0.2 });
const ACCENT = () => mat(0xff9100, { roughness: 0.4, metalness: 0.1, emissive: 0xff9100, emissiveIntensity: 0.25 });

function box(w, h, d, material, x, y, z, rz = 0, ry = 0, rx = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  return m;
}
function cyl(rt, rb, h, material, x, y, z, rx = 0, rz = 0, seg = 20) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material);
  m.position.set(x, y, z);
  m.rotation.x = rx; m.rotation.z = rz;
  return m;
}
// horizontal strut between two plan-view points, at height y
function strut(x1, z1, x2, z2, y, material, t = 0.03) {
  const dx = x2 - x1, dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  const m = box(len, t, t, material, (x1 + x2) / 2, y, (z1 + z2) / 2);
  m.rotation.y = Math.atan2(-dz, dx);
  return m;
}

const groups = {};
function part(k) {
  const g = new THREE.Group();
  g.userData.partKey = k;
  scene.add(g);
  groups[k] = g;
  return g;
}

// ================= CHASSIS =================
{
  const g = part('chassis'), p = PROFILE(), d = DARK();
  // base rails: x -0.8 .. 1.4 (monitor post sits behind the pedals)
  [-0.26, 0.26].forEach(z => g.add(box(2.2, 0.04, 0.04, p, 0.3, 0.06, z)));
  // cross members
  [-0.7, 0.15, 1.3].forEach(x => g.add(box(0.04, 0.04, 0.56, p, x, 0.06, 0)));
  // leveling feet
  [[-0.7, -0.26], [-0.7, 0.26], [1.3, -0.26], [1.3, 0.26]].forEach(([x, z]) =>
    g.add(cyl(0.03, 0.036, 0.04, d, x, 0.02, z)));
  // wheel-deck uprights (x=0.66)
  [-0.17, 0.17].forEach(z => g.add(box(0.04, 0.5, 0.04, p, 0.66, 0.33, z)));
  // wheel deck, top at y=0.60, front edge at 0.48
  g.add(box(0.36, 0.04, 0.42, p, 0.66, 0.58, 0));
  // pedal supports: meet the tray underside, don't poke through
  [-0.17, 0.17].forEach(z => g.add(box(0.04, 0.24, 0.04, p, 0.93, 0.185, z, -0.5)));
  // seat rails
  [-0.18, 0.18].forEach(z => g.add(box(0.55, 0.035, 0.05, p, -0.05, 0.10, z)));
  // (monitor stand is freestanding — part of the displays group, not the rig)
  // shifter + handbrake risers: tops meet the plates (nothing floats)
  g.add(box(0.04, 0.4, 0.04, p, 0.32, 0.26, 0.30));
  g.add(box(0.04, 0.4, 0.04, p, 0.50, 0.26, 0.30));
}

// ================= SEAT =================
{
  const g = part('seat');
  const s = mat(0x2e3a4d, { roughness: 0.9, metalness: 0.05 });
  const d = DARK();
  g.add(box(0.48, 0.09, 0.5, s, -0.05, 0.30, 0));          // cushion, top 0.345
  [-0.24, 0.24].forEach(z => g.add(box(0.4, 0.12, 0.08, s, -0.05, 0.33, z, 0, 0, 0.12)));
  g.add(box(0.09, 0.6, 0.5, s, -0.38, 0.63, 0, 0.42));      // backrest, reclined 24°
  [-0.22, 0.22].forEach(z => g.add(box(0.1, 0.5, 0.09, s, -0.34, 0.63, z, 0.42)));
  g.add(box(0.09, 0.15, 0.28, s, -0.53, 0.98, 0, 0.42));    // headrest
  g.add(box(0.5, 0.03, 0.38, d, -0.05, 0.135, 0));          // slider plate
}

// ================= WHEELBASE + WHEEL (column tilted 18° like a real car) =================
{
  const d = DARK(), a = ACCENT(), p = PROFILE();
  const TILT = -18 * Math.PI / 180; // top of wheel away from driver
  const gWb = part('wheelbase');
  const col = new THREE.Group();          // tilted steering column
  col.position.set(0.60, 0.63, 0);
  col.rotation.z = TILT;
  gWb.add(col);
  col.add(box(0.24, 0.025, 0.18, p, 0, -0.012, 0)); // angled mount bracket
  col.add(box(0.18, 0.13, 0.15, d, 0, 0.065, 0));   // base
  col.add(box(0.182, 0.02, 0.152, a, 0, 0.12, 0));  // accent stripe
  col.add(cyl(0.016, 0.016, 0.12, d, -0.15, 0.065, 0, 0, Math.PI / 2)); // shaft

  const gWh = part('wheel');
  scene.remove(gWh); col.add(gWh);        // wheel rides on the tilted column
  gWh.position.set(-0.21, 0.065, 0);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.018, 12, 42), d);
  rim.rotation.y = Math.PI / 2;
  gWh.add(rim);
  gWh.add(cyl(0.028, 0.028, 0.05, d, 0, 0, 0, 0, Math.PI / 2)); // hub
  [[0.1, 0], [-0.05, 0.087], [-0.05, -0.087]].forEach(([dy, dz]) => {
    const s = box(0.02, 0.11, 0.025, d, 0, dy / 2, dz / 2);
    s.rotation.x = Math.atan2(dz, dy);
    gWh.add(s);
  });
  [0.62, Math.PI - 0.62].forEach(a0 => {  // grips at 3 and 9 o'clock
    const grip = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.024, 10, 12, 0.55), d);
    grip.rotation.y = Math.PI / 2;
    grip.rotation.x = a0;
    gWh.add(grip);
  });
  gWh.add(box(0.035, 0.075, 0.11, d, -0.035, 0.075, 0)); // dash housing
  const dashScr = new THREE.Mesh(new THREE.PlaneGeometry(0.085, 0.055),
    new THREE.MeshBasicMaterial({ color: 0x0ea5e9 }));
  dashScr.position.set(-0.054, 0.075, 0); dashScr.rotation.y = -Math.PI / 2;
  gWh.add(dashScr);
}

// ================= PEDALS =================
{
  const g = part('pedals'), p = PROFILE(), d = DARK();
  const TILT = 0.5; // tray angle
  g.add(box(0.32, 0.025, 0.4, p, 1.0, 0.30, 0, TILT));      // tray
  [-0.11, 0, 0.11].forEach(z => {
    g.add(box(0.02, 0.17, 0.03, d, 0.985, 0.335, z, TILT)); // arm
    g.add(box(0.02, 0.13, 0.07, d, 0.962, 0.365, z, TILT)); // pad
    g.add(box(0.024, 0.02, 0.075, mat(0x3a4250), 0.948, 0.375, z, TILT)); // pad face
  });
  g.add(box(0.1, 0.02, 0.36, d, 0.885, 0.20, 0, TILT));     // heel rest
}

// ================= SHIFTER =================
{
  const g = part('shifter'), p = PROFILE(), d = DARK(), a = ACCENT();
  g.add(box(0.16, 0.025, 0.1, p, 0.32, 0.45, 0.33));        // plate on riser
  g.add(cyl(0.012, 0.012, 0.14, d, 0.32, 0.53, 0.33));      // lever
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.026, 18, 14), a);
  knob.position.set(0.32, 0.61, 0.33);
  g.add(knob);
}

// ================= HANDBRAKE =================
{
  const g = part('handbrake'), p = PROFILE(), d = DARK();
  g.add(box(0.14, 0.025, 0.09, p, 0.50, 0.45, 0.33));       // plate on riser
  const lever = cyl(0.011, 0.011, 0.2, d, 0.53, 0.53, 0.33);
  lever.rotation.z = -0.5;
  g.add(lever);
  const grip = cyl(0.02, 0.02, 0.09, d, 0.575, 0.615, 0.33);
  grip.rotation.z = Math.PI / 2 - 0.5;
  g.add(grip);
}

// ================= BUTTON BOX =================
{
  const g = part('buttonbox'), d = DARK(), p = PROFILE();
  // mounted on the wheel deck, right of the base, angled up toward the driver
  // (like a real Stream Deck / button box on a profile mount)
  g.add(box(0.03, 0.05, 0.03, p, 0.62, 0.625, 0.17));       // mount post
  const bb = new THREE.Group();
  bb.position.set(0.62, 0.66, 0.17);
  bb.rotation.z = 0.6;                                      // face up toward driver
  g.add(bb);
  bb.add(box(0.1, 0.03, 0.14, d, 0, 0, 0));
  const cols = [0xff9100, 0x4ade80, 0x60a5fa, 0xf43f5e];
  cols.forEach((c, i) => bb.add(cyl(0.013, 0.013, 0.02,
    mat(c, { emissive: c, emissiveIntensity: 0.4 }),
    -0.025 + (i % 2) * 0.05, 0.02, -0.035 + Math.floor(i / 2) * 0.07)));
}

// ================= DISPLAYS (triples on a freestanding stand) =================
{
  const g = part('displays'), d = DARK(), p = PROFILE();
  // Racing POV, rendered with a true perspective camera per screen:
  // each screen is yawed to its angle, like a real triple-screen sim render.
  // (48° h-FOV per 32" screen at 0.85 m — matches the model.)
  function renderPOV(cv, yawDeg) {
    const W = cv.width = 512, H = cv.height = 288;
    const c = cv.getContext('2d');
    const yaw = yawDeg * Math.PI / 180;
    const fx = (W / 2) / Math.tan(24.1 * Math.PI / 180);
    const fy = (H / 2) / Math.tan(14.5 * Math.PI / 180);
    const sy = Math.sin(yaw), cy = Math.cos(yaw), h = 1.15;
    const P = (x, y, z) => {
      const zc = x * sy + z * cy;
      if (zc < 0.4) return null;
      return [W / 2 + fx * (x * cy - z * sy) / zc, H / 2 - fy * (y - h) / zc];
    };
    const quad = (pts, fill) => {
      const q = pts.map(p => P(p[0], p[1], p[2]));
      if (q.some(p => !p)) return;
      c.fillStyle = fill; c.beginPath(); c.moveTo(q[0][0], q[0][1]);
      for (let i = 1; i < 4; i++) c.lineTo(q[i][0], q[i][1]);
      c.closePath(); c.fill();
    };
    let g = c.createLinearGradient(0, 0, 0, H);       // sky + grass
    g.addColorStop(0, '#6aa9e8'); g.addColorStop(0.5, '#bcd9f2');
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    c.fillStyle = '#6f9457'; c.fillRect(0, H / 2, W, H / 2);
    const sp = P(-30, 25, 250);                        // sun
    if (sp) { c.fillStyle = 'rgba(255,246,220,0.95)'; c.beginPath(); c.arc(sp[0], sp[1], 15, 0, 7); c.fill(); }
    c.fillStyle = '#8a9bb0';                           // mountains
    [[-120, 320], [-40, 300], [60, 330], [140, 310]].forEach(([mx, mz]) => {
      const a = P(mx - 45, 0, mz), b = P(mx, 40, mz), d2 = P(mx + 45, 0, mz);
      if (a && b && d2) { c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineTo(d2[0], d2[1]); c.closePath(); c.fill(); }
    });
    for (let z = 220; z > 3; z -= 4) {                // road, far -> near
      quad([[-5, 0.01, z], [5, 0.01, z], [5, 0.01, z + 4], [-5, 0.01, z + 4]], '#3c4147');
      const cc = (Math.floor(z / 8) % 2 === 0) ? '#d83a34' : '#e8e8e8';
      quad([[-6.4, 0.01, z], [-5, 0.01, z], [-5, 0.01, z + 4], [-6.4, 0.01, z + 4]], cc);
      quad([[5, 0.01, z], [6.4, 0.01, z], [6.4, 0.01, z + 4], [5, 0.01, z + 4]], cc);
      if (Math.floor(z / 6) % 3 === 0)
        quad([[-0.18, 0.02, z], [0.18, 0.02, z], [0.18, 0.02, z + 3], [-0.18, 0.02, z + 3]], '#dfe3e6');
    }
    [[-14, 30], [16, 46], [-18, 70], [20, 95], [-15, 130], [17, 170]].forEach(([tx, tz]) => {
      const b = P(tx, 0, tz); if (!b) return;         // trees
      const s = fx / (tx * sy + tz * cy);
      c.fillStyle = '#5a4632'; c.fillRect(b[0] - 0.15 * s, b[1] - 2.2 * s, 0.3 * s, 2.2 * s);
      c.fillStyle = '#3f6b34'; c.beginPath(); c.arc(b[0], b[1] - 3.2 * s, 1.6 * s, 0, 7); c.fill();
    });
    c.fillStyle = '#101216';                          // cockpit dash + a-pillars
    c.beginPath();
    c.moveTo(0, H); c.lineTo(0, H * 0.90); c.lineTo(W * 0.5, H * 0.86); c.lineTo(W, H * 0.90); c.lineTo(W, H);
    c.closePath(); c.fill();
    c.fillStyle = '#0b0d10';
    c.beginPath(); c.moveTo(0, H * 0.62); c.lineTo(W * 0.035, H * 0.66); c.lineTo(W * 0.025, H); c.lineTo(0, H); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(W, H * 0.62); c.lineTo(W * 0.965, H * 0.66); c.lineTo(W * 0.975, H); c.lineTo(W, H); c.closePath(); c.fill();
    c.fillStyle = 'rgba(255,255,255,0.07)'; c.fillRect(0, H * 0.885, W, 2);
  }

  // driver head (same height => screens stay vertical, each faces the driver)
  const HX = -0.05, HY = 1.0;
  const screens = [];
  const mk = (deg) => {
    const grp = new THREE.Group();
    grp.add(box(0.76, 0.44, 0.03, d, 0, 0, 0));        // bezel, faces +z
    const cv = document.createElement('canvas');
    renderPOV(cv, deg);                                // this screen's own yawed view
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.40),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv) }));
    scr.position.z = 0.017;                            // toward driver
    grp.add(scr);
    grp.add(box(0.12, 0.12, 0.025, d, 0, 0, -0.028));  // vesa plate on back
    grp.add(box(0.014, 0.014, 0.014,
      mat(0x4ade80, { emissive: 0x4ade80, emissiveIntensity: 0.9 }),
      0.30, -0.19, 0.02));                             // power LED
    const a = deg * Math.PI / 180, R = 0.85;          // arc around driver
    grp.position.set(HX + R * Math.cos(a), HY, R * Math.sin(a));
    grp.lookAt(HX, HY, 0);                            // face the driver
    g.add(grp);
    screens.push(grp);
    return grp;
  };
  mk(0); mk(40); mk(-40);

  // freestanding stand: two posts + feet + wide crossbar (like a real triple stand)
  [-0.45, 0.45].forEach(z => {
    g.add(box(0.05, 1.2, 0.05, p, 0.95, 0.60, z));     // post
    g.add(box(0.34, 0.04, 0.14, p, 0.95, 0.02, z));    // foot
  });
  g.add(box(0.05, 0.07, 2.0, p, 0.95, 1.0, 0));         // crossbar
  // vesa arms: each runs perpendicular from its screen's back to the crossbar
  screens.forEach(sg => {
    sg.updateWorldMatrix(true, false);
    const plateC = sg.localToWorld(new THREE.Vector3(0, 0, -0.028));
    const nOut = new THREE.Vector3(0, 0, -1).applyQuaternion(sg.quaternion).normalize();
    const L = (0.95 - plateC.x) / nOut.x;
    const end = plateC.clone().addScaledVector(nOut, L);
    const dir = end.clone().sub(plateC), len = dir.length();
    const arm = new THREE.Mesh(new THREE.BoxGeometry(len, 0.025, 0.025), p);
    arm.position.copy(plateC).addScaledVector(dir, 0.5);
    arm.rotation.y = Math.atan2(-dir.z, dir.x);
    g.add(arm);
    g.add(box(0.07, 0.1, 0.07, p, 0.95, 1.0, end.z));       // mount block on crossbar
  });
}

// ================= MACHINE (PC, side of rig) =================
{
  const g = part('machine'), d = DARK(), a = ACCENT();
  const px = 0.3, pz = 1.0;
  g.add(box(0.24, 0.52, 0.46, d, px, 0.34, pz));
  g.add(box(0.245, 0.5, 0.02, a, px, 0.34, pz + 0.225));    // LED strip, outward
  const fan = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.012, 10, 28), mat(0x3a4250));
  fan.position.set(px - 0.122, 0.4, pz); fan.rotation.y = Math.PI / 2;
  g.add(fan);
  g.add(box(0.02, 0.06, 0.3, d, px - 0.115, 0.15, pz));     // front IO
}

// ================= SOUND =================
{
  const g = part('sound'), d = DARK(), p = PROFILE();
  [-0.62, 0.62].forEach(z => {
    g.add(cyl(0.02, 0.02, 0.34, p, 0.75, 0.17, z));         // stand
    g.add(box(0.11, 0.17, 0.11, d, 0.75, 0.42, z));         // speaker
    g.add(cyl(0.035, 0.035, 0.012, mat(0x11141a), 0.69, 0.44, z, 0, Math.PI / 2)); // cone faces driver
  });
  // headphones resting on top of the PC tower
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.014, 10, 22, Math.PI), d);
  band.position.set(0.3, 0.635, 1.0); band.rotation.x = Math.PI / 2;
  g.add(band);
  [-0.06, 0.06].forEach(dz => g.add(box(0.05, 0.035, 0.09, d, 0.3, 0.6175, 1.0 + dz)));
}

// ================= MOUNTS =================
{
  const g = part('mounts'), a = ACCENT();
  [
    [0.66, 0.10, -0.17], [0.66, 0.10, 0.17],   // deck upright feet
    [0.66, 0.54, -0.17], [0.66, 0.54, 0.17],   // deck joints
    [-0.05, 0.10, -0.18], [-0.05, 0.10, 0.18], // seat rails
    [0.93, 0.10, -0.17], [0.93, 0.10, 0.17],   // pedal supports
  ].forEach(([x, y, z]) => g.add(box(0.055, 0.055, 0.055, a, x, y, z)));
}

// ================= interaction =================
// Desktop: hover highlights + tooltip, click navigates.
// Touch: first tap selects (highlight + info card), second tap on the
// same part or the card link navigates. Tap empty space to deselect.
const ray = new THREE.Raycaster();
const ptr = new THREE.Vector2();
const card = document.getElementById('rig-card');
const isTouch = window.matchMedia('(pointer: coarse)').matches;
let hovered = null;
let selectedKey = null;

const anchors = {};
Object.entries(groups).forEach(([k, g]) => {
  anchors[k] = new THREE.Box3().setFromObject(g).getCenter(new THREE.Vector3());
});

function findPart(obj) {
  while (obj) { if (obj.userData.partKey) return obj; obj = obj.parent; }
  return null;
}
const partMeshes = {};
Object.entries(groups).forEach(([k, g]) => {
  partMeshes[k] = [];
  g.traverse(o => {
    if (!o.isMesh) return;
    let p = o, owner = null;                       // nearest partKey ancestor
    while (p) { if (p.userData.partKey) { owner = p.userData.partKey; break; } p = p.parent; }
    if (owner === k) partMeshes[k].push(o);
  });
});
function setHighlight(g, on) {
  partMeshes[g.userData.partKey].forEach(o => {
    if (o.material && o.material.emissive) {
      if (on) { o.material.emissive.setHex(0xff9100); o.material.emissiveIntensity = 0.45; }
      else { o.material.emissive.setHex(o.material.userData._c); o.material.emissiveIntensity = o.material.userData._e; }
    }
  });
  document.querySelectorAll('.leg[data-part="' + g.userData.partKey + '"]').forEach(el => el.classList.toggle('active', on));
}
Object.values(groups).forEach(g => g.traverse(o => {
  if (o.isMesh && o.material && o.material.emissive) {
    o.material.userData = o.material.userData || {};
    o.material.userData._c = o.material.emissive.getHex();
    o.material.userData._e = o.material.emissiveIntensity;
  }
}));

function castAt(cx, cy) {
  const r = renderer.domElement.getBoundingClientRect();
  ptr.x = ((cx - r.left) / r.width) * 2 - 1;
  ptr.y = -((cy - r.top) / r.height) * 2 + 1;
  ray.setFromCamera(ptr, camera);
  const hits = ray.intersectObjects(Object.values(groups), true);
  return hits.length ? findPart(hits[0].object) : null;
}

function select(key) {
  if (selectedKey && selectedKey !== key) setHighlight(groups[selectedKey], false);
  selectedKey = key;
  setHighlight(groups[key], true);
  card.innerHTML = '<b>' + PARTS[key].name + '</b><a href="' + PARTS[key].url + '">Open page &rarr;</a>';
  card.style.display = 'block';
  positionCard();
}
function deselect() {
  if (selectedKey) setHighlight(groups[selectedKey], false);
  selectedKey = null;
  card.style.display = 'none';
}
function positionCard() {
  if (!selectedKey) return;
  const v = anchors[selectedKey].clone().project(camera);
  const r = container.getBoundingClientRect();
  let x = (v.x * 0.5 + 0.5) * r.width + 14;
  let y = (-v.y * 0.5 + 0.5) * r.height - 14;
  x = Math.min(x, r.width - 150); y = Math.max(y, 8);
  card.style.left = x + 'px';
  card.style.top = y + 'px';
}

renderer.domElement.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  const g = castAt(e.clientX, e.clientY);
  if (g !== hovered) {
    if (hovered && hovered.userData.partKey !== selectedKey) setHighlight(hovered, false);
    hovered = g;
    if (hovered) setHighlight(hovered, true);
    renderer.domElement.style.cursor = hovered ? 'pointer' : 'grab';
  }
  if (hovered) {
    const r = container.getBoundingClientRect();
    tip.style.display = 'block';
    tip.style.left = (e.clientX - r.left + 14) + 'px';
    tip.style.top = (e.clientY - r.top + 10) + 'px';
    tip.textContent = PARTS[hovered.userData.partKey].name + ' — click for page';
  } else tip.style.display = 'none';
});
renderer.domElement.addEventListener('pointerleave', () => {
  if (hovered && hovered.userData.partKey !== selectedKey) setHighlight(hovered, false);
  hovered = null; tip.style.display = 'none';
});

let downX = 0, downY = 0;
renderer.domElement.addEventListener('pointerdown', e => { downX = e.clientX; downY = e.clientY; });
renderer.domElement.addEventListener('pointerup', e => {
  if (Math.hypot(e.clientX - downX, e.clientY - downY) > 8) return; // was a drag
  const g = castAt(e.clientX, e.clientY);
  const k = g ? g.userData.partKey : null;
  if (isTouch || e.pointerType !== 'mouse') {
    if (!k) { deselect(); return; }
    if (selectedKey === k) location.href = PARTS[k].url; // second tap goes
    else select(k);
  } else if (k) {
    location.href = PARTS[k].url;
  }
});

document.querySelectorAll('.leg[data-part]').forEach(el => {
  const k = el.getAttribute('data-part');
  el.addEventListener('mouseenter', () => setHighlight(groups[k], true));
  el.addEventListener('mouseleave', () => { if (k !== selectedKey) setHighlight(groups[k], false); });
});

function resize() {
  const w = container.clientWidth, h = container.clientHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(container);
resize();

document.getElementById('rig-loading').style.display = 'none';
renderer.setAnimationLoop(() => {
  controls.update();
  if (selectedKey) positionCard();
  renderer.render(scene, camera);
});
