import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/* Interactive 3D rig diagram. Driver faces +X. Units ~meters. */

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
camera.position.set(2.7, 1.9, 2.9);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0.1, 0.55, 0);
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

// floor
const floor = new THREE.Mesh(
  new THREE.CircleGeometry(6, 48),
  new THREE.MeshStandardMaterial({ color: 0x11151a, roughness: 1 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);
const grid = new THREE.GridHelper(12, 24, 0x2a3340, 0x1a2230);
grid.position.y = 0.001;
scene.add(grid);

// material factory (per-part instances so highlight doesn't leak)
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

const groups = {};
function part(key) {
  const g = new THREE.Group();
  g.userData.partKey = key;
  scene.add(g);
  groups[key] = g;
  return g;
}

// ---------- CHASSIS ----------
{
  const g = part('chassis'), p = PROFILE();
  [-0.26, 0.26].forEach(z => g.add(box(1.7, 0.045, 0.045, p, 0.1, 0.07, z)));
  [-0.6, 0.1, 0.8].forEach(x => g.add(box(0.045, 0.045, 0.565, p, x, 0.07, 0)));
  [[-0.7, -0.26], [-0.7, 0.26], [0.9, -0.26], [0.9, 0.26]].forEach(([x, z]) =>
    g.add(cyl(0.032, 0.038, 0.05, DARK(), x, 0.025, z)));
  // wheel uprights + deck
  [-0.17, 0.17].forEach(z => g.add(box(0.045, 0.55, 0.045, p, 0.35, 0.35, z)));
  g.add(box(0.42, 0.045, 0.42, p, 0.35, 0.645, 0));
  // pedal uprights (angled)
  [-0.17, 0.17].forEach(z => g.add(box(0.045, 0.52, 0.045, p, 0.72, 0.3, z, -0.45)));
  // monitor post + arm
  g.add(box(0.05, 1.2, 0.05, p, 1.12, 0.68, 0));
  g.add(box(0.04, 0.04, 0.72, p, 1.12, 1.08, 0));
  // seat rails
  [-0.19, 0.19].forEach(z => g.add(box(0.6, 0.04, 0.05, p, -0.55, 0.12, z)));
}

// ---------- SEAT ----------
{
  const g = part('seat'), s = mat(0x2e3a4d, { roughness: 0.9, metalness: 0.05 });
  const d = DARK();
  g.add(box(0.5, 0.09, 0.52, s, -0.55, 0.3, 0));
  g.add(box(0.09, 0.62, 0.52, s, -0.83, 0.6, 0, 0.35));
  [-0.22, 0.22].forEach(z => g.add(box(0.1, 0.5, 0.1, s, -0.79, 0.6, z, 0.35)));
  g.add(box(0.09, 0.16, 0.3, s, -0.95, 0.94, 0, 0.35));
  g.add(box(0.52, 0.03, 0.4, d, -0.55, 0.16, 0)); // slider plate
}

// ---------- WHEELBASE ----------
{
  const g = part('wheelbase'), d = DARK(), a = ACCENT();
  const base = box(0.17, 0.13, 0.15, d, 0.35, 0.76, 0, -0.1);
  g.add(base);
  g.add(box(0.172, 0.02, 0.152, a, 0.35, 0.72, 0, -0.1));
}

// ---------- WHEEL ----------
{
  const g = part('wheel'), d = DARK();
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.018, 12, 42), d);
  rim.position.set(0.235, 0.76, 0); rim.rotation.y = Math.PI / 2;
  g.add(rim);
  const hub = cyl(0.028, 0.028, 0.05, d, 0.235, 0.76, 0, 0, Math.PI / 2);
  g.add(hub);
  [[0, 0.1], [0.087, -0.05], [-0.087, -0.05]].forEach(([dy, dz]) => {
    const s = box(0.02, 0.11, 0.025, d, 0.235, 0.76 + dy / 2, dz / 2);
    s.rotation.x = Math.atan2(dz, dy);
    g.add(s);
  });
  g.add(cyl(0.016, 0.016, 0.09, d, 0.285, 0.76, 0, 0, Math.PI / 2)); // shaft
}

// ---------- PEDALS ----------
{
  const g = part('pedals'), p = PROFILE(), d = DARK();
  const tray = box(0.3, 0.03, 0.4, p, 0.8, 0.32, 0, -0.5);
  g.add(tray);
  [-0.11, 0, 0.11].forEach(z => {
    g.add(box(0.025, 0.13, 0.07, d, 0.76, 0.4, z, -0.5));
    g.add(box(0.028, 0.02, 0.075, mat(0x3a4250), 0.745, 0.46, z, -0.5));
  });
}

// ---------- SHIFTER ----------
{
  const g = part('shifter'), p = PROFILE(), d = DARK(), a = ACCENT();
  g.add(box(0.16, 0.03, 0.1, p, -0.18, 0.5, 0.34));
  g.add(cyl(0.012, 0.012, 0.16, d, -0.18, 0.59, 0.34));
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.026, 18, 14), a);
  knob.position.set(-0.18, 0.68, 0.34);
  g.add(knob);
}

// ---------- HANDBRAKE ----------
{
  const g = part('handbrake'), p = PROFILE(), d = DARK();
  g.add(box(0.14, 0.03, 0.09, p, -0.0, 0.5, 0.34));
  const lever = cyl(0.011, 0.011, 0.2, d, 0.03, 0.58, 0.34);
  lever.rotation.z = -0.5;
  g.add(lever);
  g.add(cyl(0.02, 0.02, 0.09, d, 0.078, 0.66, 0.34, 0, -0.5 + Math.PI / 2));
}

// ---------- BUTTON BOX ----------
{
  const g = part('buttonbox'), d = DARK();
  g.add(box(0.1, 0.05, 0.15, d, 0.35, 0.7, 0.27));
  const cols = [0xff9100, 0x4ade80, 0x60a5fa, 0xf43f5e];
  cols.forEach((c, i) => g.add(cyl(0.013, 0.013, 0.02,
    mat(c, { emissive: c, emissiveIntensity: 0.4 }),
    0.325 + (i % 2) * 0.05, 0.73, 0.235 + Math.floor(i / 2) * 0.06)));
}

// ---------- DISPLAYS (triples) ----------
{
  const g = part('displays'), d = DARK();
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 288;
  const cx = cv.getContext('2d');
  const sky = cx.createLinearGradient(0, 0, 0, 288);
  sky.addColorStop(0, '#0b1a33'); sky.addColorStop(0.55, '#274b73'); sky.addColorStop(0.56, '#1c2b1a'); sky.addColorStop(1, '#101a12');
  cx.fillStyle = sky; cx.fillRect(0, 0, 512, 288);
  cx.fillStyle = '#5b6470';
  cx.beginPath(); cx.moveTo(236, 288); cx.lineTo(252, 160); cx.lineTo(260, 160); cx.lineTo(276, 288); cx.fill();
  cx.fillStyle = '#e8e8e8';
  for (let y = 170; y < 288; y += 24) cx.fillRect(254, y, 4, 12);
  const tex = new THREE.CanvasTexture(cv);
  const screenMat = new THREE.MeshBasicMaterial({ map: tex });
  const mk = (x, z, ry) => {
    const grp = new THREE.Group();
    const bez = box(0.03, 0.4, 0.68, d, 0, 0, 0);
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.36), screenMat);
    scr.position.x = -0.017; scr.rotation.y = -Math.PI / 2;
    grp.add(bez, scr);
    grp.position.set(x, 1.06, z); grp.rotation.y = ry;
    return grp;
  };
  g.add(mk(1.06, 0, 0));
  g.add(mk(0.9, -0.36, 0.85));
  g.add(mk(0.9, 0.36, -0.85));
  // vesa arms
  g.add(box(0.2, 0.03, 0.03, PROFILE(), 1.02, 1.06, -0.2, 0, 0.5));
  g.add(box(0.2, 0.03, 0.03, PROFILE(), 1.02, 1.06, 0.2, 0, -0.5));
}

// ---------- MACHINE (PC) ----------
{
  const g = part('machine'), d = DARK(), a = ACCENT();
  g.add(box(0.24, 0.52, 0.46, d, -1.15, 0.34, 0.58));
  g.add(box(0.245, 0.5, 0.02, a, -1.15, 0.34, 0.36));
  const fan = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.012, 10, 28), mat(0x3a4250));
  fan.position.set(-1.028, 0.4, 0.58); fan.rotation.y = Math.PI / 2;
  g.add(fan);
}

// ---------- SOUND ----------
{
  const g = part('sound'), d = DARK();
  [-0.62, 0.62].forEach(z => {
    g.add(cyl(0.02, 0.02, 0.34, PROFILE(), 0.95, 0.17, z));
    g.add(box(0.11, 0.17, 0.11, d, 0.95, 0.42, z));
    g.add(cyl(0.035, 0.035, 0.012, mat(0x11141a), 0.893, 0.44, z, 0, Math.PI / 2));
  });
  // headphones on seat side
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.014, 10, 22, Math.PI), d);
  band.position.set(-0.72, 0.78, 0.3); band.rotation.z = Math.PI; band.rotation.y = Math.PI / 2;
  g.add(band);
  [-0.055, 0.055].forEach(dz => g.add(box(0.05, 0.09, 0.03, d, -0.72, 0.72, 0.3 + dz)));
}

// ---------- MOUNTS ----------
{
  const g = part('mounts'), a = ACCENT();
  const joints = [
    [0.35, 0.1, -0.26], [0.35, 0.1, 0.26], [0.35, 0.62, -0.17], [0.35, 0.62, 0.17],
    [1.12, 0.1, 0], [1.12, 1.06, 0], [-0.55, 0.1, -0.19], [-0.55, 0.1, 0.19],
    [0.72, 0.12, -0.17], [0.72, 0.12, 0.17],
  ];
  joints.forEach(([x, y, z]) => g.add(box(0.055, 0.055, 0.055, a, x, y, z)));
}

// ---------- interaction ----------
const ray = new THREE.Raycaster();
const ptr = new THREE.Vector2();
let hovered = null;

function findPart(obj) {
  while (obj) { if (obj.userData.partKey) return obj; obj = obj.parent; }
  return null;
}
function setHighlight(g, on) {
  g.traverse(o => {
    if (o.isMesh && o.material && o.material.emissive) {
      if (on) { o.userData._e = o.material.emissiveIntensity; o.material.emissive.setHex(0xff9100); o.material.emissiveIntensity = 0.45; }
      else { o.material.emissive.setHex(o.material.userData?._c ?? 0x000000); o.material.emissiveIntensity = o.userData._e ?? 0; }
    }
  });
  document.querySelectorAll('.leg[data-part="' + g.userData.partKey + '"]').forEach(el => el.classList.toggle('active', on));
}
// store original emissive hex once
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

renderer.domElement.addEventListener('pointermove', e => {
  const g = castAt(e.clientX, e.clientY);
  if (g !== hovered) {
    if (hovered) setHighlight(hovered, false);
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
  if (hovered) setHighlight(hovered, false);
  hovered = null; tip.style.display = 'none';
});

let downX = 0, downY = 0;
renderer.domElement.addEventListener('pointerdown', e => { downX = e.clientX; downY = e.clientY; });
renderer.domElement.addEventListener('pointerup', e => {
  if (Math.hypot(e.clientX - downX, e.clientY - downY) > 6) return; // was a drag
  const g = castAt(e.clientX, e.clientY);
  if (g) location.href = PARTS[g.userData.partKey].url;
});

// legend sync
document.querySelectorAll('.leg[data-part]').forEach(el => {
  const k = el.getAttribute('data-part');
  el.addEventListener('mouseenter', () => setHighlight(groups[k], true));
  el.addEventListener('mouseleave', () => setHighlight(groups[k], false));
});

// resize
function resize() {
  const w = container.clientWidth, h = container.clientHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(container);
resize();

document.getElementById('rig-loading').style.display = 'none';
renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
