var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) d(s);
  new MutationObserver((s) => {
    for (const _ of s) if (_.type === "childList") for (const v of _.addedNodes) v.tagName === "LINK" && v.rel === "modulepreload" && d(v);
  }).observe(document, { childList: true, subtree: true });
  function n(s) {
    const _ = {};
    return s.integrity && (_.integrity = s.integrity), s.referrerPolicy && (_.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? _.credentials = "include" : s.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin", _;
  }
  function d(s) {
    if (s.ep) return;
    s.ep = true;
    const _ = n(s);
    fetch(s.href, _);
  }
})();
class Q {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(Q.prototype);
    return n.__wbg_ptr = t, It.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, It.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_gpurenderer_free(t, 0);
  }
  static new(t) {
    return r.gpurenderer_new(t);
  }
  read_pixels() {
    return r.gpurenderer_read_pixels(this.__wbg_ptr);
  }
  render(t) {
    qt(t, et);
    var n = t.__destroy_into_raw();
    r.gpurenderer_render(this.__wbg_ptr, n);
  }
  resize(t, n) {
    r.gpurenderer_resize(this.__wbg_ptr, t, n);
  }
}
Symbol.dispose && (Q.prototype[Symbol.dispose] = Q.prototype.free);
class et {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Nt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_renderparams_free(t, 0);
  }
  get bright_max() {
    return r.__wbg_get_renderparams_bright_max(this.__wbg_ptr);
  }
  get bright_min() {
    return r.__wbg_get_renderparams_bright_min(this.__wbg_ptr);
  }
  get color1_b() {
    return r.__wbg_get_renderparams_color1_b(this.__wbg_ptr);
  }
  get color1_g() {
    return r.__wbg_get_renderparams_color1_g(this.__wbg_ptr);
  }
  get color1_r() {
    return r.__wbg_get_renderparams_color1_r(this.__wbg_ptr);
  }
  get color2_b() {
    return r.__wbg_get_renderparams_color2_b(this.__wbg_ptr);
  }
  get color2_g() {
    return r.__wbg_get_renderparams_color2_g(this.__wbg_ptr);
  }
  get color2_r() {
    return r.__wbg_get_renderparams_color2_r(this.__wbg_ptr);
  }
  get max_iter() {
    return r.__wbg_get_renderparams_max_iter(this.__wbg_ptr) >>> 0;
  }
  get reuse() {
    return r.__wbg_get_renderparams_reuse(this.__wbg_ptr) !== 0;
  }
  get step() {
    return r.__wbg_get_renderparams_step(this.__wbg_ptr) >>> 0;
  }
  get x_max_hi() {
    return r.__wbg_get_renderparams_x_max_hi(this.__wbg_ptr);
  }
  get x_max_lo() {
    return r.__wbg_get_renderparams_x_max_lo(this.__wbg_ptr);
  }
  get x_min_hi() {
    return r.__wbg_get_renderparams_x_min_hi(this.__wbg_ptr);
  }
  get x_min_lo() {
    return r.__wbg_get_renderparams_x_min_lo(this.__wbg_ptr);
  }
  get y_max_hi() {
    return r.__wbg_get_renderparams_y_max_hi(this.__wbg_ptr);
  }
  get y_max_lo() {
    return r.__wbg_get_renderparams_y_max_lo(this.__wbg_ptr);
  }
  get y_min_hi() {
    return r.__wbg_get_renderparams_y_min_hi(this.__wbg_ptr);
  }
  get y_min_lo() {
    return r.__wbg_get_renderparams_y_min_lo(this.__wbg_ptr);
  }
  constructor(t, n, d, s, _, v, w, rt, $, U, C, M, h, b, p, g, a, k, q) {
    const j = r.renderparams_new(t, n, d, s, _, v, w, rt, $, U, C, M, h, b, p, g, a, k, q);
    return this.__wbg_ptr = j >>> 0, Nt.register(this, this.__wbg_ptr, this), this;
  }
  set bright_max(t) {
    r.__wbg_set_renderparams_bright_max(this.__wbg_ptr, t);
  }
  set bright_min(t) {
    r.__wbg_set_renderparams_bright_min(this.__wbg_ptr, t);
  }
  set color1_b(t) {
    r.__wbg_set_renderparams_color1_b(this.__wbg_ptr, t);
  }
  set color1_g(t) {
    r.__wbg_set_renderparams_color1_g(this.__wbg_ptr, t);
  }
  set color1_r(t) {
    r.__wbg_set_renderparams_color1_r(this.__wbg_ptr, t);
  }
  set color2_b(t) {
    r.__wbg_set_renderparams_color2_b(this.__wbg_ptr, t);
  }
  set color2_g(t) {
    r.__wbg_set_renderparams_color2_g(this.__wbg_ptr, t);
  }
  set color2_r(t) {
    r.__wbg_set_renderparams_color2_r(this.__wbg_ptr, t);
  }
  set max_iter(t) {
    r.__wbg_set_renderparams_max_iter(this.__wbg_ptr, t);
  }
  set reuse(t) {
    r.__wbg_set_renderparams_reuse(this.__wbg_ptr, t);
  }
  set step(t) {
    r.__wbg_set_renderparams_step(this.__wbg_ptr, t);
  }
  set x_max_hi(t) {
    r.__wbg_set_renderparams_x_max_hi(this.__wbg_ptr, t);
  }
  set x_max_lo(t) {
    r.__wbg_set_renderparams_x_max_lo(this.__wbg_ptr, t);
  }
  set x_min_hi(t) {
    r.__wbg_set_renderparams_x_min_hi(this.__wbg_ptr, t);
  }
  set x_min_lo(t) {
    r.__wbg_set_renderparams_x_min_lo(this.__wbg_ptr, t);
  }
  set y_max_hi(t) {
    r.__wbg_set_renderparams_y_max_hi(this.__wbg_ptr, t);
  }
  set y_max_lo(t) {
    r.__wbg_set_renderparams_y_max_lo(this.__wbg_ptr, t);
  }
  set y_min_hi(t) {
    r.__wbg_set_renderparams_y_min_hi(this.__wbg_ptr, t);
  }
  set y_min_lo(t) {
    r.__wbg_set_renderparams_y_min_lo(this.__wbg_ptr, t);
  }
}
Symbol.dispose && (et.prototype[Symbol.dispose] = et.prototype.free);
function kt() {
  r.setup();
}
const It = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((l) => r.__wbg_gpurenderer_free(l >>> 0, 1)), Nt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((l) => r.__wbg_renderparams_free(l >>> 0, 1));
function qt(l, t) {
  if (!(l instanceof t)) throw new Error(`expected instance of ${t.name}`);
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((l) => l.dtor(l.a, l.b));
let jt = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
jt.decode();
const ut = new TextEncoder();
"encodeInto" in ut || (ut.encodeInto = function(l, t) {
  const n = ut.encode(l);
  return t.set(n), { read: l.length, written: n.length };
});
let r;
const _i = class _i {
  constructor(t) {
    __publicField(this, "value");
    this.value = t;
  }
  static fromNumber(t) {
    return new _i(BigInt(Math.round(t * _i.SCALE_F)));
  }
  static fromString(t) {
    const n = t.startsWith("-");
    n && (t = t.substring(1));
    const d = _i.SCALE, s = t.indexOf(".");
    let _;
    if (s === -1) _ = BigInt(t) * d;
    else {
      const v = t.substring(0, s), w = t.substring(s + 1).padEnd(18, "0").slice(0, 18);
      _ = BigInt(v) * d + BigInt(w);
    }
    return new _i(n ? -_ : _);
  }
  toString() {
    const t = this.value < 0n, d = (t ? -this.value : this.value).toString().padStart(19, "0"), s = d.length - 18, _ = d.slice(0, s), v = d.slice(s);
    let w = `${_}.${v}`;
    return w = w.replace(/\.?0+$/, ""), w === "" && (w = "0"), t && (w = "-" + w), w;
  }
  toExponential(t) {
    return Number(this.toString()).toExponential(t);
  }
  toNumber() {
    return Number(this.value) / _i.SCALE_F;
  }
  add(t) {
    return new _i(this.value + t.value);
  }
  sub(t) {
    return new _i(this.value - t.value);
  }
  mul(t) {
    const n = BigInt(Math.round(t * 1e9)), d = this.value * n / 1000000000n;
    return new _i(d);
  }
  scale(t) {
    const n = BigInt(Math.round(t * 1e6));
    return new _i(this.value * n / 1000000n);
  }
  div(t) {
    const n = 1000000000n, d = BigInt(Math.round(t * 1e9));
    if (d === 0n) throw new Error("Division by zero");
    return new _i(this.value * n / d);
  }
  lt(t) {
    return this.value < t.value;
  }
  gt(t) {
    return this.value > t.value;
  }
  split() {
    const t = Number(this.value) / 1e18, n = Math.fround(t), d = BigInt(Math.round(n * 1e9)) * 1000000000n, s = this.value - d, _ = Number(s) / 1e18;
    return [n, _];
  }
};
__publicField(_i, "SCALE", 1000000000000000000n);
__publicField(_i, "SCALE_F", 1e18);
let i = _i;
async function Gt() {
  console.log("Starting App..."), kt(), console.log("Wasm initialized");
  const l = document.getElementById("mandelbrot-canvas"), t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "10px", t.style.left = "10px", t.style.background = "rgba(0, 0, 0, 0.7)", t.style.color = "white", t.style.padding = "10px", t.style.borderRadius = "5px", t.style.zIndex = "100", document.body.appendChild(t);
  const n = document.createElement("div");
  n.style.marginTop = "5px", t.appendChild(n);
  const d = -2, s = 1, _ = -1.2, v = 1.2, w = s - d, rt = v - _, $ = w / rt, U = window.devicePixelRatio || 1;
  let C = 800, M = 600, h = 800, b = 600, p = i.fromNumber(-0.5), g = i.fromNumber(0), a = i.fromNumber(3), k = "#9cacba", q = "#1049ac", j = 0, nt = 0.8;
  const L = /* @__PURE__ */ new Set();
  let X = 0, Y = 0, O = 0;
  const H = 0.05, ot = 0.85, Ft = 0.02, Lt = 0.02, ht = (e) => {
    const o = parseInt(e.slice(1, 3), 16) / 255, c = parseInt(e.slice(3, 5), 16) / 255, m = parseInt(e.slice(5, 7), 16) / 255;
    return [o, c, m];
  }, st = new URLSearchParams(window.location.search), bt = st.get("x"), wt = st.get("y"), ft = st.get("w");
  if (bt) try {
    p = i.fromString(bt);
  } catch (e) {
    console.error("Invalid x param", e);
  }
  if (wt) try {
    g = i.fromString(wt);
  } catch (e) {
    console.error("Invalid y param", e);
  }
  if (ft) try {
    a = i.fromString(ft);
  } catch (e) {
    console.error("Invalid w param", e);
  }
  let W = null;
  const I = document.createElement("canvas");
  I.id = "gpu-canvas", I.style.display = "none";
  const P = document.createElement("div");
  P.id = "btn-container", P.style.marginTop = "8px", P.style.display = "none", P.style.gap = "8px", n.appendChild(P);
  const G = document.createElement("button");
  G.innerText = "Copy Coords", G.style.cursor = "pointer", G.style.padding = "4px 8px";
  const K = document.createElement("button");
  K.innerText = "Copy URL", K.style.cursor = "pointer", K.style.padding = "4px 8px", P.appendChild(G), P.appendChild(K);
  const R = document.createElement("div");
  R.style.marginTop = "15px", R.style.display = "flex", R.style.flexDirection = "column", R.style.gap = "10px", R.style.borderTop = "1px solid rgba(255,255,255,0.2)", R.style.paddingTop = "10px", t.appendChild(R);
  const tt = (e, o) => {
    const c = document.createElement("div");
    c.style.display = "flex", c.style.justifyContent = "space-between", c.style.alignItems = "center", c.style.fontSize = "0.9em";
    const m = document.createElement("label");
    m.innerText = e, c.appendChild(m), c.appendChild(o), R.appendChild(c);
  }, V = document.createElement("input");
  V.type = "color", V.value = k, V.oninput = () => {
    k = V.value, N();
  }, tt("Color 1", V);
  const J = document.createElement("input");
  J.type = "color", J.value = q, J.oninput = () => {
    q = J.value, N();
  }, tt("Color 2", J);
  const z = document.createElement("input");
  z.type = "range", z.min = "0", z.max = "1", z.step = "0.01", z.value = j.toString(), z.oninput = () => {
    j = parseFloat(z.value), N();
  }, tt("Min Bright", z);
  const B = document.createElement("input");
  B.type = "range", B.min = "0", B.max = "1", B.step = "0.01", B.value = nt.toString(), B.oninput = () => {
    nt = parseFloat(B.value), N();
  }, tt("Max Bright", B);
  const yt = async (e) => {
    try {
      await navigator.clipboard.writeText(e);
      const o = n.style.backgroundColor;
      n.style.backgroundColor = "rgba(0, 100, 0, 0.8)", setTimeout(() => n.style.backgroundColor = o, 200);
    } catch (o) {
      console.error("Failed to copy", o), alert("Clipboard API failed (Context not secure?): " + o);
    }
  };
  G.onclick = () => {
    const e = `x=${p.toString()}
y=${g.toString()}
w=${a.toString()}`;
    yt(e);
  }, K.onclick = () => {
    const e = new URL(window.location.href);
    e.searchParams.set("x", p.toString()), e.searchParams.set("y", g.toString()), e.searchParams.set("w", a.toString()), yt(e.toString());
  };
  const u = document.createElement("div");
  u.style.position = "relative", u.style.display = "flex", u.style.justifyContent = "center", u.style.alignItems = "center", u.style.boxShadow = "0 0 50px black", document.body.appendChild(u), u.style.display = "grid";
  const it = (e) => {
    e.style.gridArea = "1 / 1", e.style.width = "100%", e.style.height = "100%", e.style.display = "block";
  };
  l.parentNode && l.parentNode.removeChild(l), u.appendChild(l), it(l), u.appendChild(I), it(I);
  const Z = document.createElement("canvas");
  Z.style.pointerEvents = "none", Z.style.zIndex = "50", u.appendChild(Z), it(Z);
  const at = Z.getContext("2d"), xt = () => {
    const e = window.innerWidth, o = window.innerHeight;
    e / o > $ ? (M = o, C = o * $) : (C = e, M = e / $), C = Math.floor(C), M = Math.floor(M), u.style.width = C + "px", u.style.height = M + "px", h = Math.floor(C * U), b = Math.floor(M * U), [l, I, Z].forEach((m) => {
      m.width = h, m.height = b;
    }), at && (at.setTransform(1, 0, 0, 1, 0, 0), at.scale(U, U)), W && W.resize(h, b), N();
  };
  try {
    Q.new(I).then((e) => {
      W = e, W.resize(h, b), console.log("GPU Ready"), N();
    }).catch((e) => {
      console.error("GPU Fail", e), n.innerText = "GPU Failed to initialize";
    });
  } catch {
  }
  let _t = 0;
  const vt = (e, o) => {
    if (o !== _t) return;
    const c = Math.log10(3 / a.toNumber()), m = Math.floor(100 + c * 100), T = (100 / e).toFixed(1);
    let f = n.querySelector("#info-text"), y = n.querySelector("#btn-container");
    f || (f = document.createElement("div"), f.id = "info-text", y ? n.insertBefore(f, y) : n.appendChild(f)), f.innerHTML = `
      <div>Zoom: ${a.toExponential(2)}</div>
      <div>Iters: ${m}</div>
      <div>Res: ${T}% (Step ${e})</div>
      <div id="coords-detail" style="display: none; font-size: 0.8em; margin-top: 5px; color: #aaa;">
        x=${p.toString()}<br>
        y=${g.toString()}<br>
        w=${a.toString()}
      </div>
    `;
    const S = f.querySelector("#coords-detail");
    n.onmouseenter = () => {
      y && (y.style.display = "flex"), S && (S.style.display = "block");
    }, n.onmouseleave = () => {
      y && (y.style.display = "none"), S && (S.style.display = "none");
    };
    const E = h > 0 && b > 0 ? h / b : $, A = a.div(E), F = p.sub(a.div(2)), D = p.add(a.div(2)), dt = g.sub(A.div(2)), pt = g.add(A.div(2));
    if (W) {
      I.width !== h && (I.width = h, I.height = b);
      let x = Math.floor(Math.min(h, b) / 2);
      x = Math.min(x, 64), x = Math.pow(2, Math.floor(Math.log2(x))), x < 1 && (x = 1);
      const gt = e < x, [mt, Rt, zt] = ht(k), [Bt, Tt, Xt] = ht(q), [Yt, Ot] = F.split(), [Pt, Dt] = D.split(), [$t, Ut] = dt.split(), [Ht, Wt] = pt.split(), Zt = new et(Yt, Ot, Pt, Dt, $t, Ut, Ht, Wt, m, e, gt, mt, Rt, zt, Bt, Tt, Xt, j, nt);
      W.render(Zt);
    }
    if (e > 1) {
      let x = Math.floor(e / 2);
      x < 1 && (x = 1), requestAnimationFrame(() => vt(x, o));
    }
  }, N = () => {
    _t++;
    const e = _t;
    let o = Math.floor(Math.min(h, b) / 2);
    o = Math.min(o, 64), o = Math.pow(2, Math.floor(Math.log2(o))), o < 1 && (o = 1), requestAnimationFrame(() => vt(o, e));
  }, ct = () => {
    const e = i.fromNumber(C * 1e-15), o = i.fromNumber(w);
    a.lt(e) && (a = e), a.gt(o) && (a = o);
    const c = h / b, m = a.div(c), T = i.fromNumber(d), f = i.fromNumber(s), y = i.fromNumber(_), S = i.fromNumber(v), E = T.add(a.div(2)), A = f.sub(a.div(2)), F = y.add(m.div(2)), D = S.sub(m.div(2));
    E.gt(A) ? p = T.add(f).div(2) : (p.lt(E) && (p = E), p.gt(A) && (p = A)), F.gt(D) ? g = y.add(S).div(2) : (g.lt(F) && (g = F), g.gt(D) && (g = D));
  };
  let lt = false, Ct = 0, St = 0, Mt = i.fromNumber(0), Et = i.fromNumber(0);
  u.addEventListener("mousedown", (e) => {
    lt = true;
    const o = u.getBoundingClientRect();
    Ct = e.clientX - o.left, St = e.clientY - o.top, Mt = p, Et = g;
  }), window.addEventListener("mousemove", (e) => {
    if (!lt) return;
    const o = u.getBoundingClientRect(), c = e.clientX - o.left, m = e.clientY - o.top, T = c - Ct, f = m - St, y = h / b, S = a.toNumber() / C, E = a.toNumber() / y / M, A = i.fromNumber(T * S), F = i.fromNumber(f * E);
    p = Mt.sub(A), g = Et.sub(F), ct(), N();
  }), window.addEventListener("mouseup", () => {
    lt = false;
  }), u.addEventListener("wheel", (e) => {
    e.preventDefault();
    const o = e.deltaY < 0 ? 0.9 : 1.1, c = a.scale(o), m = u.getBoundingClientRect(), T = e.clientX - m.left, f = e.clientY - m.top, y = T / C, S = f / M, E = h / b, A = a.div(E), F = c.div(E), D = a.sub(c), dt = A.sub(F), pt = D.mul(y - 0.5), x = dt.mul(S - 0.5), gt = p.add(pt), mt = g.add(x);
    p = gt, g = mt, a = c, ct(), N();
  }, { passive: false }), window.addEventListener("resize", () => {
    xt();
  }), window.addEventListener("keydown", (e) => {
    L.add(e.code);
  }), window.addEventListener("keyup", (e) => {
    L.delete(e.code);
  });
  const At = () => {
    let e = false;
    if (L.has("ArrowUp") && (Y -= H), L.has("ArrowDown") && (Y += H), L.has("ArrowLeft") && (X -= H), L.has("ArrowRight") && (X += H), L.has("PageUp") && (O -= H), L.has("PageDown") && (O += H), X *= ot, Y *= ot, O *= ot, Math.abs(X) < 1e-3 && (X = 0), Math.abs(Y) < 1e-3 && (Y = 0), Math.abs(O) < 1e-3 && (O = 0), X !== 0 || Y !== 0) {
      const o = h / b, c = a.toNumber() * Ft;
      p = p.add(i.fromNumber(X * c)), g = g.add(i.fromNumber(Y * c / o)), e = true;
    }
    if (O !== 0) {
      const o = 1 + O * Lt;
      a = a.scale(o), e = true;
    }
    e && (ct(), N()), requestAnimationFrame(At);
  };
  At(), xt();
}
Gt();
