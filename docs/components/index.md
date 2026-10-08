# Rig Anatomy

<!-- Interactive 3D diagram of everything a rig can have. Drag to orbit, scroll to zoom, hover a part to highlight it, click to open its page. -->

<div id="rig3d-wrap">
<div id="rig-loading">Loading 3D…</div>
<div id="rig3d"></div>
<div id="rig-tip"></div>
<div id="rig-card"></div>
</div>

<div class="riglegend">
<a class="leg" data-part="chassis" href="chassis-mounts/"><span class="n">1</span><span><b>Chassis</b><i>aluminum profile / tubular / folding / wheel stand</i></span></a>
<a class="leg" data-part="seat" href="seating/"><span class="n">2</span><span><b>Seat</b><i>bucket / recliner / office chair</i></span></a>
<a class="leg" data-part="wheelbase" href="wheelbases/"><span class="n">3</span><span><b>Wheelbase</b><i>direct drive / belt / gear</i></span></a>
<a class="leg" data-part="wheel" href="wheel-rims/"><span class="n">4</span><span><b>Wheel</b><i>round / formula / rally, size + QR</i></span></a>
<a class="leg" data-part="pedals" href="pedals/"><span class="n">5</span><span><b>Pedals</b><i>load cell / hall / hydraulic / active</i></span></a>
<a class="leg" data-part="shifter" href="shifters-handbrakes/"><span class="n">6</span><span><b>Shifter</b><i>H-pattern / sequential</i></span></a>
<a class="leg" data-part="handbrake" href="shifters-handbrakes/"><span class="n">7</span><span><b>Handbrake</b><i>rally / drift</i></span></a>
<a class="leg" data-part="buttonbox" href="button-boxes-accessories/"><span class="n">8</span><span><b>Button box</b><i>+ dash, stream deck</i></span></a>
<a class="leg" data-part="displays" href="displays-vr/"><span class="n">9</span><span><b>Displays</b><i>single / ultrawide / triples / triple TV / VR</i></span></a>
<a class="leg" data-part="machine" href="pc-console/"><span class="n">10</span><span><b>Machine</b><i>PC / PlayStation / Xbox</i></span></a>
<a class="leg" data-part="sound" href="audio/"><span class="n">11</span><span><b>Sound</b><i>speakers / headphones / tactile</i></span></a>
<a class="leg" data-part="mounts" href="chassis-mounts/"><span class="n">12</span><span><b>Mounts</b><i>brackets for everything</i></span></a>
</div>

<p class="rigalso">Also on a full rig:
<a href="chassis-mounts/">motion platform</a> ·
<a href="audio/">tactile transducers</a> ·
<a href="button-boxes-accessories/">wind sim</a> ·
<a href="button-boxes-accessories/">head tracking</a> ·
<a href="button-boxes-accessories/">gloves</a> ·
<a href="button-boxes-accessories/">keyboard tray</a> ·
<a href="displays-vr/">monitor stand</a> ·
<a href="chassis-mounts/">casters</a>
</p>

<script type="importmap">
{"imports":{"three":"../assets/js/three.module.min.js","three/addons/":"../assets/js/addons/"}}
</script>
<script type="module" src="../assets/js/rig-anatomy.js?v=6"></script>
<style>
#rig3d-wrap{position:relative}
#rig3d{height:520px;border-radius:.5rem;overflow:hidden;background:#0d1117}
#rig3d canvas{display:block}
#rig-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#8b949e;z-index:2;pointer-events:none}
#rig-tip{position:absolute;display:none;background:#161b22;border:1px solid #ff9100;color:#e6edf3;font-size:.8rem;padding:.25rem .5rem;border-radius:.35rem;pointer-events:none;z-index:3;white-space:nowrap}
#rig-card{position:absolute;display:none;background:#161b22;border:1px solid #ff9100;border-radius:.45rem;padding:.45rem .65rem;z-index:4;font-size:.85rem;box-shadow:0 4px 14px rgba(0,0,0,.5);max-width:160px}
#rig-card b{display:block;margin-bottom:.2rem}
#rig-card a{color:#ff9100;text-decoration:none;font-weight:600}
.riglegend{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.35rem;margin-top:.8rem}
.leg{display:flex;gap:.6rem;align-items:center;padding:.35rem .5rem;border-radius:.4rem;text-decoration:none;color:inherit;border:1px solid transparent}
.leg:hover,.leg.active{background:rgba(255,145,0,.12);border-color:#ff9100}
.leg .n{display:inline-flex;align-items:center;justify-content:center;width:1.6rem;height:1.6rem;border-radius:50%;background:#ff9100;color:#fff;font-weight:700;font-size:.85rem;flex:none}
.leg b{display:block;font-size:.95rem}
.leg i{display:block;font-style:normal;font-size:.78rem;opacity:.65}
.rigalso{font-size:.85rem;opacity:.8;margin-top:.6rem}
.rigalso a{margin:0 .15rem}
@media (max-width:600px){#rig3d{height:380px}}
</style>
