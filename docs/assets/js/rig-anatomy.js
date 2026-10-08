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
const grid = new THREE.GridHelper(12, 24, 0x2a3340, 0x1a2230);
grid.position.y = 0.001;
scene.add(grid);

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
  // wheel-deck uprights (x=0.72)
  [-0.17, 0.17].forEach(z => g.add(box(0.04, 0.5, 0.04, p, 0.72, 0.33, z)));
  // wheel deck, top at y=0.60, front edge at 0.54
  g.add(box(0.36, 0.04, 0.42, p, 0.72, 0.58, 0));
  // pedal supports: meet the tray underside, don't poke through
  [-0.17, 0.17].forEach(z => g.add(box(0.04, 0.24, 0.04, p, 0.93, 0.185, z, -0.5)));
  // seat rails
  [-0.18, 0.18].forEach(z => g.add(box(0.55, 0.035, 0.05, p, -0.05, 0.10, z)));
  // monitor post BEHIND the pedal tray, arms reach forward to the screens
  g.add(box(0.05, 1.15, 0.05, p, 1.3, 0.65, 0));
  g.add(box(0.04, 0.04, 1.2, p, 1.3, 1.0, 0));
  // shifter + handbrake risers: tops meet the plates (nothing floats)
  g.add(box(0.04, 0.4, 0.04, p, -0.05, 0.26, 0.30));
  g.add(box(0.04, 0.4, 0.04, p, 0.14, 0.26, 0.30));
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

// ================= WHEELBASE =================
{
  const g = part('wheelbase'), d = DARK(), a = ACCENT(), p = PROFILE();
  g.add(box(0.2, 0.02, 0.18, p, 0.66, 0.61, 0));            // front-mount plate on deck
  g.add(box(0.18, 0.13, 0.15, d, 0.66, 0.685, 0));          // base, bottom 0.62
  g.add(box(0.182, 0.02, 0.152, a, 0.66, 0.74, 0));         // accent stripe
}

// ================= WHEEL =================
{
  const g = part('wheel'), d = DARK();
  const wg = new THREE.Group();                            // tilted wheel assembly
  wg.position.set(0.47, 0.70, 0);
  wg.rotation.z = 0.25;                                    // top toward driver
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.018, 12, 42), d);
  rim.rotation.y = Math.PI / 2;
  wg.add(rim);
  const hub = cyl(0.028, 0.028, 0.05, d, 0, 0, 0, 0, Math.PI / 2);
  wg.add(hub);
  [[0.1, 0], [-0.05, 0.087], [-0.05, -0.087]].forEach(([dy, dz]) => {
    const s = box(0.02, 0.11, 0.025, d, 0, dy / 2, dz / 2);
    s.rotation.x = Math.atan2(dz, dy);
    wg.add(s);
  });
  // grips at 3 and 9 o'clock
  [0.62, Math.PI - 0.62].forEach(a0 => {
    const grip = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.024, 10, 12, 0.55), d);
    grip.rotation.y = Math.PI / 2;
    grip.rotation.x = a0;
    wg.add(grip);
  });
  // dash on hub, facing driver
  wg.add(box(0.035, 0.075, 0.11, d, -0.035, 0.075, 0));
  const dashScr = new THREE.Mesh(new THREE.PlaneGeometry(0.085, 0.055),
    new THREE.MeshBasicMaterial({ color: 0x0ea5e9 }));
  dashScr.position.set(-0.054, 0.075, 0); dashScr.rotation.y = -Math.PI / 2;
  wg.add(dashScr);
  g.add(wg);
  g.add(cyl(0.016, 0.016, 0.10, d, 0.52, 0.70, 0, 0, Math.PI / 2)); // shaft base->hub
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
  g.add(box(0.16, 0.025, 0.1, p, -0.05, 0.45, 0.33));       // plate on riser
  g.add(cyl(0.012, 0.012, 0.14, d, -0.05, 0.53, 0.33));     // lever
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.026, 18, 14), a);
  knob.position.set(-0.05, 0.61, 0.33);
  g.add(knob);
}

// ================= HANDBRAKE =================
{
  const g = part('handbrake'), p = PROFILE(), d = DARK();
  g.add(box(0.14, 0.025, 0.09, p, 0.14, 0.45, 0.33));       // plate on riser
  const lever = cyl(0.011, 0.011, 0.2, d, 0.17, 0.53, 0.33);
  lever.rotation.z = -0.5;
  g.add(lever);
  const grip = cyl(0.02, 0.02, 0.09, d, 0.215, 0.615, 0.33);
  grip.rotation.z = Math.PI / 2 - 0.5;
  g.add(grip);
}

// ================= BUTTON BOX =================
{
  const g = part('buttonbox'), d = DARK();
  g.add(box(0.1, 0.04, 0.14, d, 0.66, 0.62, 0.16));         // sits on deck, right of base
  const cols = [0xff9100, 0x4ade80, 0x60a5fa, 0xf43f5e];
  cols.forEach((c, i) => g.add(cyl(0.013, 0.013, 0.02,
    mat(c, { emissive: c, emissiveIntensity: 0.4 }),
    0.635 + (i % 2) * 0.05, 0.645, 0.125 + Math.floor(i / 2) * 0.06)));
}

// ================= DISPLAYS (triples, close FOV) =================
{
  const g = part('displays'), d = DARK(), p = PROFILE();
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 288;
  const cx = cv.getContext('2d');
  const sky = cx.createLinearGradient(0, 0, 0, 288);
  sky.addColorStop(0, '#0b1a33'); sky.addColorStop(0.55, '#274b73');
  sky.addColorStop(0.56, '#1c2b1a'); sky.addColorStop(1, '#101a12');
  cx.fillStyle = sky; cx.fillRect(0, 0, 512, 288);
  cx.fillStyle = '#5b6470';
  cx.beginPath(); cx.moveTo(236, 288); cx.lineTo(252, 160); cx.lineTo(260, 160); cx.lineTo(276, 288); cx.fill();
  cx.fillStyle = '#e8e8e8';
  for (let y = 170; y < 288; y += 24) cx.fillRect(254, y, 12, 4);
  const tex = new THREE.CanvasTexture(cv);
  const screenMat = new THREE.MeshBasicMaterial({ map: tex });
  const mk = (x, z, ry) => {
    const grp = new THREE.Group();
    grp.add(box(0.03, 0.44, 0.76, d, 0, 0, 0));             // slim bezel
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.40), screenMat);
    scr.position.x = -0.017; scr.rotation.y = -Math.PI / 2;
    grp.add(scr);
    grp.add(box(0.02, 0.12, 0.12, d, 0.025, 0, 0));         // vesa plate on back
    grp.add(box(0.014, 0.014, 0.014,
      mat(0x4ade80, { emissive: 0x4ade80, emissiveIntensity: 0.9 }),
      -0.005, -0.19, 0.33));                               // power LED
    grp.position.set(x, 1.0, z); grp.rotation.y = ry;
    return grp;
  };
  g.add(mk(0.80, 0, 0));                                    // center
  g.add(mk(1.111, -0.598, -0.96));                          // sides, 55° wrap
  g.add(mk(1.111, 0.598, 0.96));
  // arms: post -> screen backs (end AT the vesa plate, never through)
  g.add(strut(1.3, 0, 0.83, 0, 1.0, p));
  g.add(strut(1.3, -0.35, 1.13, -0.575, 1.0, p));
  g.add(strut(1.3, 0.35, 1.13, 0.575, 1.0, p));
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
  // headphones hanging on monitor post
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.014, 10, 22, Math.PI), d);
  band.position.set(1.32, 0.82, 0.08); band.rotation.y = Math.PI / 2;
  g.add(band);
  [-0.055, 0.055].forEach(dz => g.add(box(0.03, 0.09, 0.05, d, 1.32, 0.76, 0.08 + dz)));
}

// ================= MOUNTS =================
{
  const g = part('mounts'), a = ACCENT();
  [
    [0.72, 0.10, -0.17], [0.72, 0.10, 0.17],   // deck upright feet
    [0.72, 0.54, -0.17], [0.72, 0.54, 0.17],   // deck joints
    [1.3, 0.10, 0], [1.3, 0.98, 0],            // monitor post
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
function setHighlight(g, on) {
  g.traverse(o => {
    if (o.isMesh && o.material && o.material.emissive) {
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
