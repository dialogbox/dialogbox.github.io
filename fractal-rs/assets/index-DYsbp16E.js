var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const _ of r) if (_.type === "childList") for (const o of _.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: true, subtree: true });
  function t(r) {
    const _ = {};
    return r.integrity && (_.integrity = r.integrity), r.referrerPolicy && (_.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? _.credentials = "include" : r.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin", _;
  }
  function n(r) {
    if (r.ep) return;
    r.ep = true;
    const _ = t(r);
    fetch(r.href, _);
  }
})();
class _e {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(_e.prototype);
    return t.__wbg_ptr = e, Ke.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ke.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_gpurenderer_free(e, 0);
  }
  static new(e) {
    return i.gpurenderer_new(e);
  }
  read_pixels() {
    return i.gpurenderer_read_pixels(this.__wbg_ptr);
  }
  render(e) {
    Pt(e, Ae);
    var t = e.__destroy_into_raw();
    i.gpurenderer_render(this.__wbg_ptr, t);
  }
  resize(e, t) {
    i.gpurenderer_resize(this.__wbg_ptr, e, t);
  }
}
Symbol.dispose && (_e.prototype[Symbol.dispose] = _e.prototype.free);
class Ae {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Je.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_renderparams_free(e, 0);
  }
  get bright_max() {
    return i.__wbg_get_renderparams_bright_max(this.__wbg_ptr);
  }
  get bright_min() {
    return i.__wbg_get_renderparams_bright_min(this.__wbg_ptr);
  }
  get color1_b() {
    return i.__wbg_get_renderparams_color1_b(this.__wbg_ptr);
  }
  get color1_g() {
    return i.__wbg_get_renderparams_color1_g(this.__wbg_ptr);
  }
  get color1_r() {
    return i.__wbg_get_renderparams_color1_r(this.__wbg_ptr);
  }
  get color2_b() {
    return i.__wbg_get_renderparams_color2_b(this.__wbg_ptr);
  }
  get color2_g() {
    return i.__wbg_get_renderparams_color2_g(this.__wbg_ptr);
  }
  get color2_r() {
    return i.__wbg_get_renderparams_color2_r(this.__wbg_ptr);
  }
  get max_iter() {
    return i.__wbg_get_renderparams_max_iter(this.__wbg_ptr) >>> 0;
  }
  get reuse() {
    return i.__wbg_get_renderparams_reuse(this.__wbg_ptr) !== 0;
  }
  get step() {
    return i.__wbg_get_renderparams_step(this.__wbg_ptr) >>> 0;
  }
  get x_max_hi() {
    return i.__wbg_get_renderparams_x_max_hi(this.__wbg_ptr);
  }
  get x_max_lo() {
    return i.__wbg_get_renderparams_x_max_lo(this.__wbg_ptr);
  }
  get x_min_hi() {
    return i.__wbg_get_renderparams_x_min_hi(this.__wbg_ptr);
  }
  get x_min_lo() {
    return i.__wbg_get_renderparams_x_min_lo(this.__wbg_ptr);
  }
  get y_max_hi() {
    return i.__wbg_get_renderparams_y_max_hi(this.__wbg_ptr);
  }
  get y_max_lo() {
    return i.__wbg_get_renderparams_y_max_lo(this.__wbg_ptr);
  }
  get y_min_hi() {
    return i.__wbg_get_renderparams_y_min_hi(this.__wbg_ptr);
  }
  get y_min_lo() {
    return i.__wbg_get_renderparams_y_min_lo(this.__wbg_ptr);
  }
  constructor(e, t, n, r, _, o, a, f, s, b, w, y, D, C, I, A, x, oe, ce) {
    const ae = i.renderparams_new(e, t, n, r, _, o, a, f, s, b, w, y, D, C, I, A, x, oe, ce);
    return this.__wbg_ptr = ae >>> 0, Je.register(this, this.__wbg_ptr, this), this;
  }
  set bright_max(e) {
    i.__wbg_set_renderparams_bright_max(this.__wbg_ptr, e);
  }
  set bright_min(e) {
    i.__wbg_set_renderparams_bright_min(this.__wbg_ptr, e);
  }
  set color1_b(e) {
    i.__wbg_set_renderparams_color1_b(this.__wbg_ptr, e);
  }
  set color1_g(e) {
    i.__wbg_set_renderparams_color1_g(this.__wbg_ptr, e);
  }
  set color1_r(e) {
    i.__wbg_set_renderparams_color1_r(this.__wbg_ptr, e);
  }
  set color2_b(e) {
    i.__wbg_set_renderparams_color2_b(this.__wbg_ptr, e);
  }
  set color2_g(e) {
    i.__wbg_set_renderparams_color2_g(this.__wbg_ptr, e);
  }
  set color2_r(e) {
    i.__wbg_set_renderparams_color2_r(this.__wbg_ptr, e);
  }
  set max_iter(e) {
    i.__wbg_set_renderparams_max_iter(this.__wbg_ptr, e);
  }
  set reuse(e) {
    i.__wbg_set_renderparams_reuse(this.__wbg_ptr, e);
  }
  set step(e) {
    i.__wbg_set_renderparams_step(this.__wbg_ptr, e);
  }
  set x_max_hi(e) {
    i.__wbg_set_renderparams_x_max_hi(this.__wbg_ptr, e);
  }
  set x_max_lo(e) {
    i.__wbg_set_renderparams_x_max_lo(this.__wbg_ptr, e);
  }
  set x_min_hi(e) {
    i.__wbg_set_renderparams_x_min_hi(this.__wbg_ptr, e);
  }
  set x_min_lo(e) {
    i.__wbg_set_renderparams_x_min_lo(this.__wbg_ptr, e);
  }
  set y_max_hi(e) {
    i.__wbg_set_renderparams_y_max_hi(this.__wbg_ptr, e);
  }
  set y_max_lo(e) {
    i.__wbg_set_renderparams_y_max_lo(this.__wbg_ptr, e);
  }
  set y_min_hi(e) {
    i.__wbg_set_renderparams_y_min_hi(this.__wbg_ptr, e);
  }
  set y_min_lo(e) {
    i.__wbg_set_renderparams_y_min_lo(this.__wbg_ptr, e);
  }
}
Symbol.dispose && (Ae.prototype[Symbol.dispose] = Ae.prototype.free);
function pt() {
  i.setup();
}
function xt() {
  return { __proto__: null, "./fractal_rs_bg.js": { __proto__: null, __wbg_Window_cf5b693340a7c469: function(e) {
    return e.Window;
  }, __wbg_WorkerGlobalScope_354364d1b0bd06e5: function(e) {
    return e.WorkerGlobalScope;
  }, __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function(e) {
    const t = e, n = typeof t == "boolean" ? t : void 0;
    return d(n) ? 16777215 : n ? 1 : 0;
  }, __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function(e, t) {
    const n = Ge(t), r = O(n, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = L;
    h().setInt32(e + 4, _, true), h().setInt32(e + 0, r, true);
  }, __wbg___wbindgen_is_function_0095a73b8b156f76: function(e) {
    return typeof e == "function";
  }, __wbg___wbindgen_is_null_ac34f5003991759a: function(e) {
    return e === null;
  }, __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(e) {
    const t = e;
    return typeof t == "object" && t !== null;
  }, __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(e) {
    return e === void 0;
  }, __wbg___wbindgen_number_get_8ff4255516ccad3e: function(e, t) {
    const n = t, r = typeof n == "number" ? n : void 0;
    h().setFloat64(e + 8, d(r) ? 0 : r, true), h().setInt32(e + 0, !d(r), true);
  }, __wbg___wbindgen_string_get_72fb696202c56729: function(e, t) {
    const n = t, r = typeof n == "string" ? n : void 0;
    var _ = d(r) ? 0 : O(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = L;
    h().setInt32(e + 4, o, true), h().setInt32(e + 0, _, true);
  }, __wbg___wbindgen_throw_be289d5034ed271b: function(e, t) {
    throw new Error(B(e, t));
  }, __wbg__wbg_cb_unref_d9b87ff7982e3b21: function(e) {
    e._wbg_cb_unref();
  }, __wbg_activeTexture_6f9a710514686c24: function(e, t) {
    e.activeTexture(t >>> 0);
  }, __wbg_activeTexture_7e39cb8fdf4b6d5a: function(e, t) {
    e.activeTexture(t >>> 0);
  }, __wbg_attachShader_32114efcf2744eb6: function(e, t, n) {
    e.attachShader(t, n);
  }, __wbg_attachShader_b36058e5c9eeaf54: function(e, t, n) {
    e.attachShader(t, n);
  }, __wbg_beginComputePass_90d5303e604970cb: function(e, t) {
    return e.beginComputePass(t);
  }, __wbg_beginQuery_0fdf154e1da0e73d: function(e, t, n) {
    e.beginQuery(t >>> 0, n);
  }, __wbg_beginRenderPass_9739520c601001c3: function(e, t) {
    return e.beginRenderPass(t);
  }, __wbg_bindAttribLocation_5cfc7fa688df5051: function(e, t, n, r, _) {
    e.bindAttribLocation(t, n >>> 0, B(r, _));
  }, __wbg_bindAttribLocation_ce78bfb13019dbe6: function(e, t, n, r, _) {
    e.bindAttribLocation(t, n >>> 0, B(r, _));
  }, __wbg_bindBufferRange_009d206fe9e4151e: function(e, t, n, r, _, o) {
    e.bindBufferRange(t >>> 0, n >>> 0, r, _, o);
  }, __wbg_bindBuffer_69a7a0b8f3f9b9cf: function(e, t, n) {
    e.bindBuffer(t >>> 0, n);
  }, __wbg_bindBuffer_c9068e8712a034f5: function(e, t, n) {
    e.bindBuffer(t >>> 0, n);
  }, __wbg_bindFramebuffer_031c73ba501cb8f6: function(e, t, n) {
    e.bindFramebuffer(t >>> 0, n);
  }, __wbg_bindFramebuffer_7815ca611abb057f: function(e, t, n) {
    e.bindFramebuffer(t >>> 0, n);
  }, __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: function(e, t, n) {
    e.bindRenderbuffer(t >>> 0, n);
  }, __wbg_bindRenderbuffer_db37c1bac9ed4da0: function(e, t, n) {
    e.bindRenderbuffer(t >>> 0, n);
  }, __wbg_bindSampler_96f0e90e7bc31da9: function(e, t, n) {
    e.bindSampler(t >>> 0, n);
  }, __wbg_bindTexture_b2b7b1726a83f93e: function(e, t, n) {
    e.bindTexture(t >>> 0, n);
  }, __wbg_bindTexture_ec13ddcb9dc8e032: function(e, t, n) {
    e.bindTexture(t >>> 0, n);
  }, __wbg_bindVertexArrayOES_c2610602f7485b3f: function(e, t) {
    e.bindVertexArrayOES(t);
  }, __wbg_bindVertexArray_78220d1edb1d2382: function(e, t) {
    e.bindVertexArray(t);
  }, __wbg_blendColor_1d50ac87d9a2794b: function(e, t, n, r, _) {
    e.blendColor(t, n, r, _);
  }, __wbg_blendColor_e799d452ab2a5788: function(e, t, n, r, _) {
    e.blendColor(t, n, r, _);
  }, __wbg_blendEquationSeparate_1b12c43928cc7bc1: function(e, t, n) {
    e.blendEquationSeparate(t >>> 0, n >>> 0);
  }, __wbg_blendEquationSeparate_a8094fbec94cf80e: function(e, t, n) {
    e.blendEquationSeparate(t >>> 0, n >>> 0);
  }, __wbg_blendEquation_82202f34c4c00e50: function(e, t) {
    e.blendEquation(t >>> 0);
  }, __wbg_blendEquation_e9b99928ed1494ad: function(e, t) {
    e.blendEquation(t >>> 0);
  }, __wbg_blendFuncSeparate_95465944f788a092: function(e, t, n, r, _) {
    e.blendFuncSeparate(t >>> 0, n >>> 0, r >>> 0, _ >>> 0);
  }, __wbg_blendFuncSeparate_f366c170c5097fbe: function(e, t, n, r, _) {
    e.blendFuncSeparate(t >>> 0, n >>> 0, r >>> 0, _ >>> 0);
  }, __wbg_blendFunc_2ef59299d10c662d: function(e, t, n) {
    e.blendFunc(t >>> 0, n >>> 0);
  }, __wbg_blendFunc_446658e7231ab9c8: function(e, t, n) {
    e.blendFunc(t >>> 0, n >>> 0);
  }, __wbg_blitFramebuffer_d730a23ab4db248e: function(e, t, n, r, _, o, a, f, s, b, w) {
    e.blitFramebuffer(t, n, r, _, o, a, f, s, b >>> 0, w >>> 0);
  }, __wbg_bufferData_1be8450fab534758: function(e, t, n, r) {
    e.bufferData(t >>> 0, n, r >>> 0);
  }, __wbg_bufferData_32d26eba0c74a53c: function(e, t, n, r) {
    e.bufferData(t >>> 0, n, r >>> 0);
  }, __wbg_bufferData_52235e85894af988: function(e, t, n, r) {
    e.bufferData(t >>> 0, n, r >>> 0);
  }, __wbg_bufferData_98f6c413a8f0f139: function(e, t, n, r) {
    e.bufferData(t >>> 0, n, r >>> 0);
  }, __wbg_bufferSubData_33eebcc173094f6a: function(e, t, n, r) {
    e.bufferSubData(t >>> 0, n, r);
  }, __wbg_bufferSubData_3e902f031adf13fd: function(e, t, n, r) {
    e.bufferSubData(t >>> 0, n, r);
  }, __wbg_buffer_26d0910f3a5bc899: function(e) {
    return e.buffer;
  }, __wbg_call_389efe28435a9388: function() {
    return l(function(e, t) {
      return e.call(t);
    }, arguments);
  }, __wbg_call_4708e0c13bdc8e95: function() {
    return l(function(e, t, n) {
      return e.call(t, n);
    }, arguments);
  }, __wbg_clearBuffer_6164fc25d22b25cc: function(e, t, n, r) {
    e.clearBuffer(t, n, r);
  }, __wbg_clearBuffer_cfcaaf1fb2baa885: function(e, t, n) {
    e.clearBuffer(t, n);
  }, __wbg_clearBufferfv_ac87d92e2f45d80c: function(e, t, n, r, _) {
    e.clearBufferfv(t >>> 0, n, v(r, _));
  }, __wbg_clearBufferiv_69ff24bb52ec4c88: function(e, t, n, r, _) {
    e.clearBufferiv(t >>> 0, n, $(r, _));
  }, __wbg_clearBufferuiv_8ad59a8219aafaca: function(e, t, n, r, _) {
    e.clearBufferuiv(t >>> 0, n, j(r, _));
  }, __wbg_clearDepth_2b109f644a783a53: function(e, t) {
    e.clearDepth(t);
  }, __wbg_clearDepth_670099db422a4f91: function(e, t) {
    e.clearDepth(t);
  }, __wbg_clearStencil_5d243d0dff03c315: function(e, t) {
    e.clearStencil(t);
  }, __wbg_clearStencil_aa65955bb39d8c18: function(e, t) {
    e.clearStencil(t);
  }, __wbg_clear_4d801d0d054c3579: function(e, t) {
    e.clear(t >>> 0);
  }, __wbg_clear_7187030f892c5ca0: function(e, t) {
    e.clear(t >>> 0);
  }, __wbg_clientWaitSync_21865feaeb76a9a5: function(e, t, n, r) {
    return e.clientWaitSync(t, n >>> 0, r >>> 0);
  }, __wbg_colorMask_177d9762658e5e28: function(e, t, n, r, _) {
    e.colorMask(t !== 0, n !== 0, r !== 0, _ !== 0);
  }, __wbg_colorMask_7a8dbc86e7376a9b: function(e, t, n, r, _) {
    e.colorMask(t !== 0, n !== 0, r !== 0, _ !== 0);
  }, __wbg_compileShader_63b824e86bb00b8f: function(e, t) {
    e.compileShader(t);
  }, __wbg_compileShader_94718a93495d565d: function(e, t) {
    e.compileShader(t);
  }, __wbg_compressedTexSubImage2D_215bb115facd5e48: function(e, t, n, r, _, o, a, f, s) {
    e.compressedTexSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s);
  }, __wbg_compressedTexSubImage2D_684350eb62830032: function(e, t, n, r, _, o, a, f, s) {
    e.compressedTexSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s);
  }, __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: function(e, t, n, r, _, o, a, f, s, b) {
    e.compressedTexSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s, b);
  }, __wbg_compressedTexSubImage3D_16afa3a47bf1d979: function(e, t, n, r, _, o, a, f, s, b, w) {
    e.compressedTexSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w);
  }, __wbg_compressedTexSubImage3D_778008a6293f15ab: function(e, t, n, r, _, o, a, f, s, b, w, y) {
    e.compressedTexSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w, y);
  }, __wbg_configure_2414aed971d368cd: function(e, t) {
    e.configure(t);
  }, __wbg_copyBufferSubData_a4f9815861ff0ae9: function(e, t, n, r, _, o) {
    e.copyBufferSubData(t >>> 0, n >>> 0, r, _, o);
  }, __wbg_copyBufferToBuffer_1ba67191114656a1: function(e, t, n, r, _, o) {
    e.copyBufferToBuffer(t, n, r, _, o);
  }, __wbg_copyBufferToTexture_878d31d479e48f28: function(e, t, n, r) {
    e.copyBufferToTexture(t, n, r);
  }, __wbg_copyExternalImageToTexture_7878d196c0b60d39: function(e, t, n, r) {
    e.copyExternalImageToTexture(t, n, r);
  }, __wbg_copyTexSubImage2D_417a65926e3d2490: function(e, t, n, r, _, o, a, f, s) {
    e.copyTexSubImage2D(t >>> 0, n, r, _, o, a, f, s);
  }, __wbg_copyTexSubImage2D_91ebcd9cd1908265: function(e, t, n, r, _, o, a, f, s) {
    e.copyTexSubImage2D(t >>> 0, n, r, _, o, a, f, s);
  }, __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: function(e, t, n, r, _, o, a, f, s, b) {
    e.copyTexSubImage3D(t >>> 0, n, r, _, o, a, f, s, b);
  }, __wbg_copyTextureToBuffer_6a8fe0e90f0a663d: function(e, t, n, r) {
    e.copyTextureToBuffer(t, n, r);
  }, __wbg_copyTextureToTexture_0a06a393d6726b4a: function(e, t, n, r) {
    e.copyTextureToTexture(t, n, r);
  }, __wbg_createBindGroupLayout_1d93b6d41c87ba9d: function(e, t) {
    return e.createBindGroupLayout(t);
  }, __wbg_createBindGroup_61cd07ec9d423432: function(e, t) {
    return e.createBindGroup(t);
  }, __wbg_createBuffer_26534c05e01b8559: function(e) {
    const t = e.createBuffer();
    return d(t) ? 0 : m(t);
  }, __wbg_createBuffer_963aa00d5fe859e4: function(e, t) {
    return e.createBuffer(t);
  }, __wbg_createBuffer_c4ec897aacc1b91c: function(e) {
    const t = e.createBuffer();
    return d(t) ? 0 : m(t);
  }, __wbg_createCommandEncoder_f0e1613e9a2dc1eb: function(e, t) {
    return e.createCommandEncoder(t);
  }, __wbg_createComputePipeline_b9616b9fe2f4eb2f: function(e, t) {
    return e.createComputePipeline(t);
  }, __wbg_createFramebuffer_41512c38358a41c4: function(e) {
    const t = e.createFramebuffer();
    return d(t) ? 0 : m(t);
  }, __wbg_createFramebuffer_b88ffa8e0fd262c4: function(e) {
    const t = e.createFramebuffer();
    return d(t) ? 0 : m(t);
  }, __wbg_createPipelineLayout_56c6cf983f892d2b: function(e, t) {
    return e.createPipelineLayout(t);
  }, __wbg_createProgram_98aaa91f7c81c5e2: function(e) {
    const t = e.createProgram();
    return d(t) ? 0 : m(t);
  }, __wbg_createProgram_9b7710a1f2701c2c: function(e) {
    const t = e.createProgram();
    return d(t) ? 0 : m(t);
  }, __wbg_createQuerySet_c14be802adf7c207: function(e, t) {
    return e.createQuerySet(t);
  }, __wbg_createQuery_7988050efd7e4c48: function(e) {
    const t = e.createQuery();
    return d(t) ? 0 : m(t);
  }, __wbg_createRenderBundleEncoder_8e4bdffea72f8c1f: function(e, t) {
    return e.createRenderBundleEncoder(t);
  }, __wbg_createRenderPipeline_079a88a0601fcce1: function(e, t) {
    return e.createRenderPipeline(t);
  }, __wbg_createRenderbuffer_1e567f2f4d461710: function(e) {
    const t = e.createRenderbuffer();
    return d(t) ? 0 : m(t);
  }, __wbg_createRenderbuffer_a601226a6a680dbe: function(e) {
    const t = e.createRenderbuffer();
    return d(t) ? 0 : m(t);
  }, __wbg_createSampler_da6bb96c9ffaaa27: function(e) {
    const t = e.createSampler();
    return d(t) ? 0 : m(t);
  }, __wbg_createSampler_ef5578990df3baf7: function(e, t) {
    return e.createSampler(t);
  }, __wbg_createShaderModule_17f451ea25cae47c: function(e, t) {
    return e.createShaderModule(t);
  }, __wbg_createShader_e3ac08ed8c5b14b2: function(e, t) {
    const n = e.createShader(t >>> 0);
    return d(n) ? 0 : m(n);
  }, __wbg_createShader_f2b928ca9a426b14: function(e, t) {
    const n = e.createShader(t >>> 0);
    return d(n) ? 0 : m(n);
  }, __wbg_createTexture_01cc1cd2fea732d9: function(e, t) {
    return e.createTexture(t);
  }, __wbg_createTexture_16d2c8a3d7d4a75a: function(e) {
    const t = e.createTexture();
    return d(t) ? 0 : m(t);
  }, __wbg_createTexture_f9451a82c7527ce2: function(e) {
    const t = e.createTexture();
    return d(t) ? 0 : m(t);
  }, __wbg_createVertexArrayOES_bd76ceee6ab9b95e: function(e) {
    const t = e.createVertexArrayOES();
    return d(t) ? 0 : m(t);
  }, __wbg_createVertexArray_ad5294951ae57497: function(e) {
    const t = e.createVertexArray();
    return d(t) ? 0 : m(t);
  }, __wbg_createView_04701884291e1ccc: function(e, t) {
    return e.createView(t);
  }, __wbg_cullFace_39500f654c67a205: function(e, t) {
    e.cullFace(t >>> 0);
  }, __wbg_cullFace_e7e711a14d2c3f48: function(e, t) {
    e.cullFace(t >>> 0);
  }, __wbg_deleteBuffer_22fcc93912cbf659: function(e, t) {
    e.deleteBuffer(t);
  }, __wbg_deleteBuffer_ab099883c168644d: function(e, t) {
    e.deleteBuffer(t);
  }, __wbg_deleteFramebuffer_8de1ca41ac87cfd9: function(e, t) {
    e.deleteFramebuffer(t);
  }, __wbg_deleteFramebuffer_9738f3bb85c1ab35: function(e, t) {
    e.deleteFramebuffer(t);
  }, __wbg_deleteProgram_9298fb3e3c1d3a78: function(e, t) {
    e.deleteProgram(t);
  }, __wbg_deleteProgram_f354e79b8cae8076: function(e, t) {
    e.deleteProgram(t);
  }, __wbg_deleteQuery_ea8bf1954febd774: function(e, t) {
    e.deleteQuery(t);
  }, __wbg_deleteRenderbuffer_096edada57729468: function(e, t) {
    e.deleteRenderbuffer(t);
  }, __wbg_deleteRenderbuffer_0f565f0727b341fc: function(e, t) {
    e.deleteRenderbuffer(t);
  }, __wbg_deleteSampler_c6b68c4071841afa: function(e, t) {
    e.deleteSampler(t);
  }, __wbg_deleteShader_aaf3b520a64d5d9d: function(e, t) {
    e.deleteShader(t);
  }, __wbg_deleteShader_ff70ca962883e241: function(e, t) {
    e.deleteShader(t);
  }, __wbg_deleteSync_c8e4a9c735f71d18: function(e, t) {
    e.deleteSync(t);
  }, __wbg_deleteTexture_2be78224e5584a8b: function(e, t) {
    e.deleteTexture(t);
  }, __wbg_deleteTexture_9d411c0e60ffa324: function(e, t) {
    e.deleteTexture(t);
  }, __wbg_deleteVertexArrayOES_197df47ef9684195: function(e, t) {
    e.deleteVertexArrayOES(t);
  }, __wbg_deleteVertexArray_7bc7f92769862f93: function(e, t) {
    e.deleteVertexArray(t);
  }, __wbg_depthFunc_eb3aa05361dd2eaa: function(e, t) {
    e.depthFunc(t >>> 0);
  }, __wbg_depthFunc_f670d4cbb9cd0913: function(e, t) {
    e.depthFunc(t >>> 0);
  }, __wbg_depthMask_103091329ca1a750: function(e, t) {
    e.depthMask(t !== 0);
  }, __wbg_depthMask_75a36d0065471a4b: function(e, t) {
    e.depthMask(t !== 0);
  }, __wbg_depthRange_337bf254e67639bb: function(e, t, n) {
    e.depthRange(t, n);
  }, __wbg_depthRange_5579d448b9d7de57: function(e, t, n) {
    e.depthRange(t, n);
  }, __wbg_destroy_35f94012e5bb9c17: function(e) {
    e.destroy();
  }, __wbg_destroy_767d9dde1008e293: function(e) {
    e.destroy();
  }, __wbg_destroy_c6af4226dda95dbd: function(e) {
    e.destroy();
  }, __wbg_disableVertexAttribArray_24a020060006b10f: function(e, t) {
    e.disableVertexAttribArray(t >>> 0);
  }, __wbg_disableVertexAttribArray_4bac633c27bae599: function(e, t) {
    e.disableVertexAttribArray(t >>> 0);
  }, __wbg_disable_7fe6fb3e97717f88: function(e, t) {
    e.disable(t >>> 0);
  }, __wbg_disable_bd37bdcca1764aea: function(e, t) {
    e.disable(t >>> 0);
  }, __wbg_dispatchWorkgroupsIndirect_8b25efab93a7a433: function(e, t, n) {
    e.dispatchWorkgroupsIndirect(t, n);
  }, __wbg_dispatchWorkgroups_c102fa81b955935d: function(e, t, n, r) {
    e.dispatchWorkgroups(t >>> 0, n >>> 0, r >>> 0);
  }, __wbg_document_ee35a3d3ae34ef6c: function(e) {
    const t = e.document;
    return d(t) ? 0 : m(t);
  }, __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: function(e, t, n, r, _) {
    e.drawArraysInstancedANGLE(t >>> 0, n, r, _);
  }, __wbg_drawArraysInstanced_ec30adc616ec58d5: function(e, t, n, r, _) {
    e.drawArraysInstanced(t >>> 0, n, r, _);
  }, __wbg_drawArrays_075228181299b824: function(e, t, n, r) {
    e.drawArrays(t >>> 0, n, r);
  }, __wbg_drawArrays_2be89c369a29f30b: function(e, t, n, r) {
    e.drawArrays(t >>> 0, n, r);
  }, __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: function(e, t) {
    e.drawBuffersWEBGL(t);
  }, __wbg_drawBuffers_5eccfaacc6560299: function(e, t) {
    e.drawBuffers(t);
  }, __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: function(e, t, n, r, _, o) {
    e.drawElementsInstancedANGLE(t >>> 0, n, r >>> 0, _, o);
  }, __wbg_drawElementsInstanced_d41fc920ae24717c: function(e, t, n, r, _, o) {
    e.drawElementsInstanced(t >>> 0, n, r >>> 0, _, o);
  }, __wbg_drawIndexedIndirect_34484fc6227c7bc8: function(e, t, n) {
    e.drawIndexedIndirect(t, n);
  }, __wbg_drawIndexedIndirect_5a7c30bb5f1d5b67: function(e, t, n) {
    e.drawIndexedIndirect(t, n);
  }, __wbg_drawIndexed_115af1449b52a948: function(e, t, n, r, _, o) {
    e.drawIndexed(t >>> 0, n >>> 0, r >>> 0, _, o >>> 0);
  }, __wbg_drawIndexed_a587cce4c317791f: function(e, t, n, r, _, o) {
    e.drawIndexed(t >>> 0, n >>> 0, r >>> 0, _, o >>> 0);
  }, __wbg_drawIndirect_036d71498a21f1a3: function(e, t, n) {
    e.drawIndirect(t, n);
  }, __wbg_drawIndirect_a1d7c5e893aa5756: function(e, t, n) {
    e.drawIndirect(t, n);
  }, __wbg_draw_5351b12033166aca: function(e, t, n, r, _) {
    e.draw(t >>> 0, n >>> 0, r >>> 0, _ >>> 0);
  }, __wbg_draw_e2a7c5d66fb2d244: function(e, t, n, r, _) {
    e.draw(t >>> 0, n >>> 0, r >>> 0, _ >>> 0);
  }, __wbg_enableVertexAttribArray_475e06c31777296d: function(e, t) {
    e.enableVertexAttribArray(t >>> 0);
  }, __wbg_enableVertexAttribArray_aa6e40408261eeb9: function(e, t) {
    e.enableVertexAttribArray(t >>> 0);
  }, __wbg_enable_d1ac04dfdd2fb3ae: function(e, t) {
    e.enable(t >>> 0);
  }, __wbg_enable_fee40f19b7053ea3: function(e, t) {
    e.enable(t >>> 0);
  }, __wbg_endQuery_54f0627d4c931318: function(e, t) {
    e.endQuery(t >>> 0);
  }, __wbg_end_0ac71677a5c1717a: function(e) {
    e.end();
  }, __wbg_end_6f776519f1faa582: function(e) {
    e.end();
  }, __wbg_error_7534b8e9a36f1ab4: function(e, t) {
    let n, r;
    try {
      n = e, r = t, console.error(B(e, t));
    } finally {
      i.__wbindgen_free(n, r, 1);
    }
  }, __wbg_error_e98e6aadd08e0b94: function(e) {
    return e.error;
  }, __wbg_executeBundles_8e6c0614da2805d4: function(e, t) {
    e.executeBundles(t);
  }, __wbg_features_1b464383ea8a7691: function(e) {
    return e.features;
  }, __wbg_features_e5fbbc2760867852: function(e) {
    return e.features;
  }, __wbg_fenceSync_c52a4e24eabfa0d3: function(e, t, n) {
    const r = e.fenceSync(t >>> 0, n >>> 0);
    return d(r) ? 0 : m(r);
  }, __wbg_finish_20711371c58df61c: function(e) {
    return e.finish();
  }, __wbg_finish_34b2c54329c8719f: function(e, t) {
    return e.finish(t);
  }, __wbg_finish_a9ab917e756ea00c: function(e, t) {
    return e.finish(t);
  }, __wbg_finish_e0a6c97c0622f843: function(e) {
    return e.finish();
  }, __wbg_framebufferRenderbuffer_850811ed6e26475e: function(e, t, n, r, _) {
    e.framebufferRenderbuffer(t >>> 0, n >>> 0, r >>> 0, _);
  }, __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: function(e, t, n, r, _) {
    e.framebufferRenderbuffer(t >>> 0, n >>> 0, r >>> 0, _);
  }, __wbg_framebufferTexture2D_8adf6bdfc3c56dee: function(e, t, n, r, _, o) {
    e.framebufferTexture2D(t >>> 0, n >>> 0, r >>> 0, _, o);
  }, __wbg_framebufferTexture2D_c283e928186aa542: function(e, t, n, r, _, o) {
    e.framebufferTexture2D(t >>> 0, n >>> 0, r >>> 0, _, o);
  }, __wbg_framebufferTextureLayer_c8328828c8d5eb60: function(e, t, n, r, _, o) {
    e.framebufferTextureLayer(t >>> 0, n >>> 0, r, _, o);
  }, __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: function(e, t, n, r, _, o, a) {
    e.framebufferTextureMultiviewOVR(t >>> 0, n >>> 0, r, _, o, a);
  }, __wbg_frontFace_027e2ec7a7bc347c: function(e, t) {
    e.frontFace(t >>> 0);
  }, __wbg_frontFace_d4a6507ad2939b5c: function(e, t) {
    e.frontFace(t >>> 0);
  }, __wbg_getBindGroupLayout_4a94df6108ac6667: function(e, t) {
    return e.getBindGroupLayout(t >>> 0);
  }, __wbg_getBindGroupLayout_80e803d942962f6a: function(e, t) {
    return e.getBindGroupLayout(t >>> 0);
  }, __wbg_getBufferSubData_4fc54b4fbb1462d7: function(e, t, n, r) {
    e.getBufferSubData(t >>> 0, n, r);
  }, __wbg_getCompilationInfo_2af3ecdfeda551a3: function(e) {
    return e.getCompilationInfo();
  }, __wbg_getContext_2966500392030d63: function() {
    return l(function(e, t, n) {
      const r = e.getContext(B(t, n));
      return d(r) ? 0 : m(r);
    }, arguments);
  }, __wbg_getContext_2a5764d48600bc43: function() {
    return l(function(e, t, n) {
      const r = e.getContext(B(t, n));
      return d(r) ? 0 : m(r);
    }, arguments);
  }, __wbg_getContext_b28d2db7bd648242: function() {
    return l(function(e, t, n, r) {
      const _ = e.getContext(B(t, n), r);
      return d(_) ? 0 : m(_);
    }, arguments);
  }, __wbg_getContext_de810d9f187f29ca: function() {
    return l(function(e, t, n, r) {
      const _ = e.getContext(B(t, n), r);
      return d(_) ? 0 : m(_);
    }, arguments);
  }, __wbg_getCurrentTexture_5a79cda2ff36e1ee: function(e) {
    return e.getCurrentTexture();
  }, __wbg_getExtension_3c0cb5ae01bb4b17: function() {
    return l(function(e, t, n) {
      const r = e.getExtension(B(t, n));
      return d(r) ? 0 : m(r);
    }, arguments);
  }, __wbg_getIndexedParameter_ca1693c768bc4934: function() {
    return l(function(e, t, n) {
      return e.getIndexedParameter(t >>> 0, n >>> 0);
    }, arguments);
  }, __wbg_getMappedRange_932dd043ae22ee0a: function(e, t, n) {
    return e.getMappedRange(t, n);
  }, __wbg_getParameter_1ecb910cfdd21f88: function() {
    return l(function(e, t) {
      return e.getParameter(t >>> 0);
    }, arguments);
  }, __wbg_getParameter_2e1f97ecaab76274: function() {
    return l(function(e, t) {
      return e.getParameter(t >>> 0);
    }, arguments);
  }, __wbg_getPreferredCanvasFormat_de73c02773a5209e: function(e) {
    const t = e.getPreferredCanvasFormat();
    return (Bt.indexOf(t) + 1 || 96) - 1;
  }, __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: function(e, t, n) {
    const r = t.getProgramInfoLog(n);
    var _ = d(r) ? 0 : O(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = L;
    h().setInt32(e + 4, o, true), h().setInt32(e + 0, _, true);
  }, __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: function(e, t, n) {
    const r = t.getProgramInfoLog(n);
    var _ = d(r) ? 0 : O(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = L;
    h().setInt32(e + 4, o, true), h().setInt32(e + 0, _, true);
  }, __wbg_getProgramParameter_43fbc6d2613c08b3: function(e, t, n) {
    return e.getProgramParameter(t, n >>> 0);
  }, __wbg_getProgramParameter_92e4540ca9da06b2: function(e, t, n) {
    return e.getProgramParameter(t, n >>> 0);
  }, __wbg_getQueryParameter_5d6af051438ae479: function(e, t, n) {
    return e.getQueryParameter(t, n >>> 0);
  }, __wbg_getShaderInfoLog_9991e9e77b0c6805: function(e, t, n) {
    const r = t.getShaderInfoLog(n);
    var _ = d(r) ? 0 : O(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = L;
    h().setInt32(e + 4, o, true), h().setInt32(e + 0, _, true);
  }, __wbg_getShaderInfoLog_9e0b96da4b13ae49: function(e, t, n) {
    const r = t.getShaderInfoLog(n);
    var _ = d(r) ? 0 : O(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = L;
    h().setInt32(e + 4, o, true), h().setInt32(e + 0, _, true);
  }, __wbg_getShaderParameter_786fd84f85720ca8: function(e, t, n) {
    return e.getShaderParameter(t, n >>> 0);
  }, __wbg_getShaderParameter_afa4a3dd9dd397c1: function(e, t, n) {
    return e.getShaderParameter(t, n >>> 0);
  }, __wbg_getSupportedExtensions_57142a6b598d7787: function(e) {
    const t = e.getSupportedExtensions();
    return d(t) ? 0 : m(t);
  }, __wbg_getSupportedProfiles_1f728bc32003c4d0: function(e) {
    const t = e.getSupportedProfiles();
    return d(t) ? 0 : m(t);
  }, __wbg_getSyncParameter_7d11ab875b41617e: function(e, t, n) {
    return e.getSyncParameter(t, n >>> 0);
  }, __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: function(e, t, n, r) {
    return e.getUniformBlockIndex(t, B(n, r));
  }, __wbg_getUniformLocation_71c070e6644669ad: function(e, t, n, r) {
    const _ = e.getUniformLocation(t, B(n, r));
    return d(_) ? 0 : m(_);
  }, __wbg_getUniformLocation_d06b3a5b3c60e95c: function(e, t, n, r) {
    const _ = e.getUniformLocation(t, B(n, r));
    return d(_) ? 0 : m(_);
  }, __wbg_get_9b94d73e6221f75c: function(e, t) {
    return e[t >>> 0];
  }, __wbg_get_d8db2ad31d529ff8: function(e, t) {
    const n = e[t >>> 0];
    return d(n) ? 0 : m(n);
  }, __wbg_gpu_87871e8f7ace8fee: function(e) {
    return e.gpu;
  }, __wbg_gpurenderer_new: function(e) {
    return _e.__wrap(e);
  }, __wbg_has_624cbf0451d880e8: function(e, t, n) {
    return e.has(B(t, n));
  }, __wbg_height_38750dc6de41ee75: function(e) {
    return e.height;
  }, __wbg_height_408f385de046f7e5: function(e) {
    return e.height;
  }, __wbg_height_87250db2be5164b9: function(e) {
    return e.height;
  }, __wbg_height_9a49d61734f6cf36: function(e) {
    return e.height;
  }, __wbg_height_aceb0c14551ea27d: function(e) {
    return e.height;
  }, __wbg_includes_32215c836f1cd3fb: function(e, t, n) {
    return e.includes(t, n);
  }, __wbg_instanceof_GpuAdapter_0731153d2b08720b: function(e) {
    let t;
    try {
      t = e instanceof GPUAdapter;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuCanvasContext_d14121c7bd72fcef: function(e) {
    let t;
    try {
      t = e instanceof GPUCanvasContext;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuDeviceLostInfo_a3677ebb8241d800: function(e) {
    let t;
    try {
      t = e instanceof GPUDeviceLostInfo;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuOutOfMemoryError_391d9a08edbfa04b: function(e) {
    let t;
    try {
      t = e instanceof GPUOutOfMemoryError;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuValidationError_f4d803c383da3c92: function(e) {
    let t;
    try {
      t = e instanceof GPUValidationError;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: function(e) {
    let t;
    try {
      t = e instanceof HTMLCanvasElement;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Object_1c6af87502b733ed: function(e) {
    let t;
    try {
      t = e instanceof Object;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: function(e) {
    let t;
    try {
      t = e instanceof WebGL2RenderingContext;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Window_ed49b2db8df90359: function(e) {
    let t;
    try {
      t = e instanceof Window;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_invalidateFramebuffer_b17b7e1da3051745: function() {
    return l(function(e, t, n) {
      e.invalidateFramebuffer(t >>> 0, n);
    }, arguments);
  }, __wbg_is_f29129f676e5410c: function(e, t) {
    return Object.is(e, t);
  }, __wbg_label_2082ab37d2ad170d: function(e, t) {
    const n = t.label, r = O(n, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = L;
    h().setInt32(e + 4, _, true), h().setInt32(e + 0, r, true);
  }, __wbg_length_32ed9a279acd054c: function(e) {
    return e.length;
  }, __wbg_length_35a7bace40f36eac: function(e) {
    return e.length;
  }, __wbg_length_9df32f7add647235: function(e) {
    return e.length;
  }, __wbg_limits_2dd632c891786ddf: function(e) {
    return e.limits;
  }, __wbg_limits_f6411f884b0b2d62: function(e) {
    return e.limits;
  }, __wbg_lineNum_0246de1e072ffe19: function(e) {
    return e.lineNum;
  }, __wbg_linkProgram_6600dd2c0863bbfd: function(e, t) {
    e.linkProgram(t);
  }, __wbg_linkProgram_be6b825cf66d177b: function(e, t) {
    e.linkProgram(t);
  }, __wbg_log_6b5ca2e6124b2808: function(e) {
    console.log(e);
  }, __wbg_lost_6e4d29847ce2a34a: function(e) {
    return e.lost;
  }, __wbg_mapAsync_37f5e03edf2e1352: function(e, t, n, r) {
    return e.mapAsync(t >>> 0, n, r);
  }, __wbg_maxBindGroups_768ca5e8623bf450: function(e) {
    return e.maxBindGroups;
  }, __wbg_maxBindingsPerBindGroup_057972d600d69719: function(e) {
    return e.maxBindingsPerBindGroup;
  }, __wbg_maxBufferSize_e237b44f19a5a62b: function(e) {
    return e.maxBufferSize;
  }, __wbg_maxColorAttachmentBytesPerSample_d6c7b4051d22c6d6: function(e) {
    return e.maxColorAttachmentBytesPerSample;
  }, __wbg_maxColorAttachments_7a18ba24c05edcfd: function(e) {
    return e.maxColorAttachments;
  }, __wbg_maxComputeInvocationsPerWorkgroup_b99c2f3611633992: function(e) {
    return e.maxComputeInvocationsPerWorkgroup;
  }, __wbg_maxComputeWorkgroupSizeX_adb26da9ed7f77f7: function(e) {
    return e.maxComputeWorkgroupSizeX;
  }, __wbg_maxComputeWorkgroupSizeY_cc217559c98be33b: function(e) {
    return e.maxComputeWorkgroupSizeY;
  }, __wbg_maxComputeWorkgroupSizeZ_66606a80e2cf2309: function(e) {
    return e.maxComputeWorkgroupSizeZ;
  }, __wbg_maxComputeWorkgroupStorageSize_cb6235497b8c4997: function(e) {
    return e.maxComputeWorkgroupStorageSize;
  }, __wbg_maxComputeWorkgroupsPerDimension_6bf550b5f21d57cf: function(e) {
    return e.maxComputeWorkgroupsPerDimension;
  }, __wbg_maxDynamicStorageBuffersPerPipelineLayout_c6ac20334e328b47: function(e) {
    return e.maxDynamicStorageBuffersPerPipelineLayout;
  }, __wbg_maxDynamicUniformBuffersPerPipelineLayout_aa8f14a74b440f01: function(e) {
    return e.maxDynamicUniformBuffersPerPipelineLayout;
  }, __wbg_maxSampledTexturesPerShaderStage_db7c4922cc60144a: function(e) {
    return e.maxSampledTexturesPerShaderStage;
  }, __wbg_maxSamplersPerShaderStage_538705fe2263e710: function(e) {
    return e.maxSamplersPerShaderStage;
  }, __wbg_maxStorageBufferBindingSize_32178c0f5f7f85cb: function(e) {
    return e.maxStorageBufferBindingSize;
  }, __wbg_maxStorageBuffersPerShaderStage_9f67e9eae0089f77: function(e) {
    return e.maxStorageBuffersPerShaderStage;
  }, __wbg_maxStorageTexturesPerShaderStage_57239664936031cf: function(e) {
    return e.maxStorageTexturesPerShaderStage;
  }, __wbg_maxTextureArrayLayers_db5d4e486c78ae04: function(e) {
    return e.maxTextureArrayLayers;
  }, __wbg_maxTextureDimension1D_3475085ffacabbdc: function(e) {
    return e.maxTextureDimension1D;
  }, __wbg_maxTextureDimension2D_7c8d5ecf09eb8519: function(e) {
    return e.maxTextureDimension2D;
  }, __wbg_maxTextureDimension3D_8bd976677a0f91d4: function(e) {
    return e.maxTextureDimension3D;
  }, __wbg_maxUniformBufferBindingSize_95b1a54e7e4a0f0f: function(e) {
    return e.maxUniformBufferBindingSize;
  }, __wbg_maxUniformBuffersPerShaderStage_5f475d9a453af14d: function(e) {
    return e.maxUniformBuffersPerShaderStage;
  }, __wbg_maxVertexAttributes_4c48ca2f5d32f860: function(e) {
    return e.maxVertexAttributes;
  }, __wbg_maxVertexBufferArrayStride_2233f6933ecc5a16: function(e) {
    return e.maxVertexBufferArrayStride;
  }, __wbg_maxVertexBuffers_c47e508cd7348554: function(e) {
    return e.maxVertexBuffers;
  }, __wbg_message_0762358e59db7ed6: function(e, t) {
    const n = t.message, r = O(n, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = L;
    h().setInt32(e + 4, _, true), h().setInt32(e + 0, r, true);
  }, __wbg_message_7957ab09f64c6822: function(e, t) {
    const n = t.message, r = O(n, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = L;
    h().setInt32(e + 4, _, true), h().setInt32(e + 0, r, true);
  }, __wbg_message_b163994503433c9e: function(e, t) {
    const n = t.message, r = O(n, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = L;
    h().setInt32(e + 4, _, true), h().setInt32(e + 0, r, true);
  }, __wbg_messages_da071582f72bc978: function(e) {
    return e.messages;
  }, __wbg_minStorageBufferOffsetAlignment_51b4801fac3a58de: function(e) {
    return e.minStorageBufferOffsetAlignment;
  }, __wbg_minUniformBufferOffsetAlignment_5d62a77924b2335f: function(e) {
    return e.minUniformBufferOffsetAlignment;
  }, __wbg_navigator_43be698ba96fc088: function(e) {
    return e.navigator;
  }, __wbg_navigator_4478931f32ebca57: function(e) {
    return e.navigator;
  }, __wbg_new_361308b2356cecd0: function() {
    return new Object();
  }, __wbg_new_3eb36ae241fe6f44: function() {
    return new Array();
  }, __wbg_new_8a6f238a6ece86ea: function() {
    return new Error();
  }, __wbg_new_b5d9e2fb389fef91: function(e, t) {
    try {
      var n = { a: e, b: t }, r = (o, a) => {
        const f = n.a;
        n.a = 0;
        try {
          return St(f, n.b, o, a);
        } finally {
          n.a = f;
        }
      };
      return new Promise(r);
    } finally {
      n.a = n.b = 0;
    }
  }, __wbg_new_from_slice_a3d2629dc1826784: function(e, t) {
    return new Uint8Array(ve(e, t));
  }, __wbg_new_no_args_1c7c842f08d00ebb: function(e, t) {
    return new Function(B(e, t));
  }, __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: function(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
  }, __wbg_of_f915f7cd925b21a5: function(e) {
    return Array.of(e);
  }, __wbg_offset_336f14c993863b76: function(e) {
    return e.offset;
  }, __wbg_pixelStorei_2a65936c11b710fe: function(e, t, n) {
    e.pixelStorei(t >>> 0, n);
  }, __wbg_pixelStorei_f7cc498f52d523f1: function(e, t, n) {
    e.pixelStorei(t >>> 0, n);
  }, __wbg_polygonOffset_24a8059deb03be92: function(e, t, n) {
    e.polygonOffset(t, n);
  }, __wbg_polygonOffset_4b3158d8ed028862: function(e, t, n) {
    e.polygonOffset(t, n);
  }, __wbg_popErrorScope_af0b22f136a861d6: function(e) {
    return e.popErrorScope();
  }, __wbg_prototypesetcall_bdcdcc5842e4d77d: function(e, t, n) {
    Uint8Array.prototype.set.call(ve(e, t), n);
  }, __wbg_pushErrorScope_b52914ff10ba6ce3: function(e, t) {
    e.pushErrorScope(At[t]);
  }, __wbg_push_8ffdcb2063340ba5: function(e, t) {
    return e.push(t);
  }, __wbg_queryCounterEXT_b578f07c30420446: function(e, t, n) {
    e.queryCounterEXT(t, n >>> 0);
  }, __wbg_querySelectorAll_1283aae52043a951: function() {
    return l(function(e, t, n) {
      return e.querySelectorAll(B(t, n));
    }, arguments);
  }, __wbg_querySelector_c3b0df2d58eec220: function() {
    return l(function(e, t, n) {
      const r = e.querySelector(B(t, n));
      return d(r) ? 0 : m(r);
    }, arguments);
  }, __wbg_queueMicrotask_0aa0a927f78f5d98: function(e) {
    return e.queueMicrotask;
  }, __wbg_queueMicrotask_5bb536982f78a56f: function(e) {
    queueMicrotask(e);
  }, __wbg_queue_bea4017efaaf9904: function(e) {
    return e.queue;
  }, __wbg_readBuffer_9eb461d6857295f0: function(e, t) {
    e.readBuffer(t >>> 0);
  }, __wbg_readPixels_55b18304384e073d: function() {
    return l(function(e, t, n, r, _, o, a, f) {
      e.readPixels(t, n, r, _, o >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_readPixels_6ea8e288a8673282: function() {
    return l(function(e, t, n, r, _, o, a, f) {
      e.readPixels(t, n, r, _, o >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_readPixels_95b2464a7bb863a2: function() {
    return l(function(e, t, n, r, _, o, a, f) {
      e.readPixels(t, n, r, _, o >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_reason_43acd39cce242b50: function(e) {
    const t = e.reason;
    return (It.indexOf(t) + 1 || 3) - 1;
  }, __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: function(e, t, n, r, _, o) {
    e.renderbufferStorageMultisample(t >>> 0, n, r >>> 0, _, o);
  }, __wbg_renderbufferStorage_1bc02383614b76b2: function(e, t, n, r, _) {
    e.renderbufferStorage(t >>> 0, n >>> 0, r, _);
  }, __wbg_renderbufferStorage_6348154d30979c44: function(e, t, n, r, _) {
    e.renderbufferStorage(t >>> 0, n >>> 0, r, _);
  }, __wbg_requestAdapter_e6dcfac497cafa7a: function(e, t) {
    return e.requestAdapter(t);
  }, __wbg_requestDevice_03b802707d5a382c: function(e, t) {
    return e.requestDevice(t);
  }, __wbg_resolveQuerySet_811661fb23f3b699: function(e, t, n, r, _, o) {
    e.resolveQuerySet(t, n >>> 0, r >>> 0, _, o >>> 0);
  }, __wbg_resolve_002c4b7d9d8f6b64: function(e) {
    return Promise.resolve(e);
  }, __wbg_samplerParameterf_f070d2b69b1e2d46: function(e, t, n, r) {
    e.samplerParameterf(t, n >>> 0, r);
  }, __wbg_samplerParameteri_8e4c4bcead0ee669: function(e, t, n, r) {
    e.samplerParameteri(t, n >>> 0, r);
  }, __wbg_scissor_2ff8f18f05a6d408: function(e, t, n, r, _) {
    e.scissor(t, n, r, _);
  }, __wbg_scissor_b870b1434a9c25b4: function(e, t, n, r, _) {
    e.scissor(t, n, r, _);
  }, __wbg_setBindGroup_62a3045b0921e429: function(e, t, n, r, _, o, a) {
    e.setBindGroup(t >>> 0, n, j(r, _), o, a >>> 0);
  }, __wbg_setBindGroup_6c0fd18e9a53a945: function(e, t, n) {
    e.setBindGroup(t >>> 0, n);
  }, __wbg_setBindGroup_7f3b61f1f482133b: function(e, t, n) {
    e.setBindGroup(t >>> 0, n);
  }, __wbg_setBindGroup_bf767a5aa46a33ce: function(e, t, n, r, _, o, a) {
    e.setBindGroup(t >>> 0, n, j(r, _), o, a >>> 0);
  }, __wbg_setBindGroup_c4aaff14063226b4: function(e, t, n, r, _, o, a) {
    e.setBindGroup(t >>> 0, n, j(r, _), o, a >>> 0);
  }, __wbg_setBindGroup_f82e771dc1b69093: function(e, t, n) {
    e.setBindGroup(t >>> 0, n);
  }, __wbg_setBlendConstant_016723821cfb3aa4: function(e, t) {
    e.setBlendConstant(t);
  }, __wbg_setIndexBuffer_286a40afdff411b7: function(e, t, n, r) {
    e.setIndexBuffer(t, Se[n], r);
  }, __wbg_setIndexBuffer_7efd0b7a40c65fb9: function(e, t, n, r, _) {
    e.setIndexBuffer(t, Se[n], r, _);
  }, __wbg_setIndexBuffer_e091a9673bb575e2: function(e, t, n, r) {
    e.setIndexBuffer(t, Se[n], r);
  }, __wbg_setIndexBuffer_f0759f00036f615f: function(e, t, n, r, _) {
    e.setIndexBuffer(t, Se[n], r, _);
  }, __wbg_setPipeline_ba92070b8ee81cf9: function(e, t) {
    e.setPipeline(t);
  }, __wbg_setPipeline_c344f76bae58c4d6: function(e, t) {
    e.setPipeline(t);
  }, __wbg_setPipeline_d76451c50a121598: function(e, t) {
    e.setPipeline(t);
  }, __wbg_setScissorRect_0b6ee0852ef0b6b9: function(e, t, n, r, _) {
    e.setScissorRect(t >>> 0, n >>> 0, r >>> 0, _ >>> 0);
  }, __wbg_setStencilReference_34fd3d59673a5a9d: function(e, t) {
    e.setStencilReference(t >>> 0);
  }, __wbg_setVertexBuffer_06a90dc78e1ad9c4: function(e, t, n, r, _) {
    e.setVertexBuffer(t >>> 0, n, r, _);
  }, __wbg_setVertexBuffer_1540e9118b6c451d: function(e, t, n, r) {
    e.setVertexBuffer(t >>> 0, n, r);
  }, __wbg_setVertexBuffer_5166eedc06450701: function(e, t, n, r, _) {
    e.setVertexBuffer(t >>> 0, n, r, _);
  }, __wbg_setVertexBuffer_8621784e5014065b: function(e, t, n, r) {
    e.setVertexBuffer(t >>> 0, n, r);
  }, __wbg_setViewport_731ad30abb13f744: function(e, t, n, r, _, o, a) {
    e.setViewport(t, n, r, _, o, a);
  }, __wbg_set_25cf9deff6bf0ea8: function(e, t, n) {
    e.set(t, n >>> 0);
  }, __wbg_set_6cb8631f80447a67: function() {
    return l(function(e, t, n) {
      return Reflect.set(e, t, n);
    }, arguments);
  }, __wbg_set_height_b386c0f603610637: function(e, t) {
    e.height = t >>> 0;
  }, __wbg_set_height_f21f985387070100: function(e, t) {
    e.height = t >>> 0;
  }, __wbg_set_onuncapturederror_19541466822d790b: function(e, t) {
    e.onuncapturederror = t;
  }, __wbg_set_width_7f07715a20503914: function(e, t) {
    e.width = t >>> 0;
  }, __wbg_set_width_d60bc4f2f20c56a4: function(e, t) {
    e.width = t >>> 0;
  }, __wbg_shaderSource_32425cfe6e5a1e52: function(e, t, n, r) {
    e.shaderSource(t, B(n, r));
  }, __wbg_shaderSource_8f4bda03f70359df: function(e, t, n, r) {
    e.shaderSource(t, B(n, r));
  }, __wbg_size_661bddb3f9898121: function(e) {
    return e.size;
  }, __wbg_stack_0ed75d68575b0f3c: function(e, t) {
    const n = t.stack, r = O(n, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = L;
    h().setInt32(e + 4, _, true), h().setInt32(e + 0, r, true);
  }, __wbg_static_accessor_GLOBAL_12837167ad935116: function() {
    const e = typeof global > "u" ? null : global;
    return d(e) ? 0 : m(e);
  }, __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return d(e) ? 0 : m(e);
  }, __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function() {
    const e = typeof self > "u" ? null : self;
    return d(e) ? 0 : m(e);
  }, __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function() {
    const e = typeof window > "u" ? null : window;
    return d(e) ? 0 : m(e);
  }, __wbg_stencilFuncSeparate_10d043d0af14366f: function(e, t, n, r, _) {
    e.stencilFuncSeparate(t >>> 0, n >>> 0, r, _ >>> 0);
  }, __wbg_stencilFuncSeparate_1798f5cca257f313: function(e, t, n, r, _) {
    e.stencilFuncSeparate(t >>> 0, n >>> 0, r, _ >>> 0);
  }, __wbg_stencilMaskSeparate_28d53625c02d9c7f: function(e, t, n) {
    e.stencilMaskSeparate(t >>> 0, n >>> 0);
  }, __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: function(e, t, n) {
    e.stencilMaskSeparate(t >>> 0, n >>> 0);
  }, __wbg_stencilMask_0eca090c4c47f8f7: function(e, t) {
    e.stencilMask(t >>> 0);
  }, __wbg_stencilMask_732dcc5aada10e4c: function(e, t) {
    e.stencilMask(t >>> 0);
  }, __wbg_stencilOpSeparate_4657523b1d3b184f: function(e, t, n, r, _) {
    e.stencilOpSeparate(t >>> 0, n >>> 0, r >>> 0, _ >>> 0);
  }, __wbg_stencilOpSeparate_de257f3c29e604cd: function(e, t, n, r, _) {
    e.stencilOpSeparate(t >>> 0, n >>> 0, r >>> 0, _ >>> 0);
  }, __wbg_submit_f635072bb3d05faa: function(e, t) {
    e.submit(t);
  }, __wbg_texImage2D_087ef94df78081f0: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texImage2D_e71049312f3172d9: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texImage3D_bd2b0bd2cfcdb278: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b, w) {
      e.texImage3D(t >>> 0, n, r, _, o, a, f, s >>> 0, b >>> 0, w);
    }, arguments);
  }, __wbg_texParameteri_0d45be2c88d6bad8: function(e, t, n, r) {
    e.texParameteri(t >>> 0, n >>> 0, r);
  }, __wbg_texParameteri_ec937d2161018946: function(e, t, n, r) {
    e.texParameteri(t >>> 0, n >>> 0, r);
  }, __wbg_texStorage2D_9504743abf5a986a: function(e, t, n, r, _, o) {
    e.texStorage2D(t >>> 0, n, r >>> 0, _, o);
  }, __wbg_texStorage3D_e9e1b58fee218abe: function(e, t, n, r, _, o, a) {
    e.texStorage3D(t >>> 0, n, r >>> 0, _, o, a);
  }, __wbg_texSubImage2D_117d29278542feb0: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texSubImage2D_19ae4cadb809f264: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texSubImage2D_5d270af600a7fc4a: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texSubImage2D_bd034db2e58c352c: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texSubImage2D_bf72e56edeeed376: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texSubImage2D_d17a39cdec4a3495: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texSubImage2D_e193f1d28439217c: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texSubImage2D_edf5bd70fda3feaf: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b) {
      e.texSubImage2D(t >>> 0, n, r, _, o, a, f >>> 0, s >>> 0, b);
    }, arguments);
  }, __wbg_texSubImage3D_1102c12a20bf56d5: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b, w, y) {
      e.texSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w >>> 0, y);
    }, arguments);
  }, __wbg_texSubImage3D_18d7f3c65567c885: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b, w, y) {
      e.texSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w >>> 0, y);
    }, arguments);
  }, __wbg_texSubImage3D_3b653017c4c5d721: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b, w, y) {
      e.texSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w >>> 0, y);
    }, arguments);
  }, __wbg_texSubImage3D_45591e5655d1ed5c: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b, w, y) {
      e.texSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w >>> 0, y);
    }, arguments);
  }, __wbg_texSubImage3D_47643556a8a4bf86: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b, w, y) {
      e.texSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w >>> 0, y);
    }, arguments);
  }, __wbg_texSubImage3D_59b8e24fb05787aa: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b, w, y) {
      e.texSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w >>> 0, y);
    }, arguments);
  }, __wbg_texSubImage3D_eff5cd6ab84f44ee: function() {
    return l(function(e, t, n, r, _, o, a, f, s, b, w, y) {
      e.texSubImage3D(t >>> 0, n, r, _, o, a, f, s, b >>> 0, w >>> 0, y);
    }, arguments);
  }, __wbg_then_0d9fe2c7b1857d32: function(e, t, n) {
    return e.then(t, n);
  }, __wbg_then_b9e7b3b5f1a9e1b5: function(e, t) {
    return e.then(t);
  }, __wbg_type_c0d5d83032e9858a: function(e) {
    const t = e.type;
    return (vt.indexOf(t) + 1 || 4) - 1;
  }, __wbg_uniform1f_b500ede5b612bea2: function(e, t, n) {
    e.uniform1f(t, n);
  }, __wbg_uniform1f_c148eeaf4b531059: function(e, t, n) {
    e.uniform1f(t, n);
  }, __wbg_uniform1i_9f3f72dbcb98ada9: function(e, t, n) {
    e.uniform1i(t, n);
  }, __wbg_uniform1i_e9aee4b9e7fe8c4b: function(e, t, n) {
    e.uniform1i(t, n);
  }, __wbg_uniform1ui_a0f911ff174715d0: function(e, t, n) {
    e.uniform1ui(t, n >>> 0);
  }, __wbg_uniform2fv_04c304b93cbf7f55: function(e, t, n, r) {
    e.uniform2fv(t, v(n, r));
  }, __wbg_uniform2fv_2fb47cfe06330cc7: function(e, t, n, r) {
    e.uniform2fv(t, v(n, r));
  }, __wbg_uniform2iv_095baf208f172131: function(e, t, n, r) {
    e.uniform2iv(t, $(n, r));
  }, __wbg_uniform2iv_ccf2ed44ac8e602e: function(e, t, n, r) {
    e.uniform2iv(t, $(n, r));
  }, __wbg_uniform2uiv_3030d7e769f5e82a: function(e, t, n, r) {
    e.uniform2uiv(t, j(n, r));
  }, __wbg_uniform3fv_aa35ef21e14d5469: function(e, t, n, r) {
    e.uniform3fv(t, v(n, r));
  }, __wbg_uniform3fv_c0872003729939a5: function(e, t, n, r) {
    e.uniform3fv(t, v(n, r));
  }, __wbg_uniform3iv_6aa2b0791e659d14: function(e, t, n, r) {
    e.uniform3iv(t, $(n, r));
  }, __wbg_uniform3iv_e912f444d4ff8269: function(e, t, n, r) {
    e.uniform3iv(t, $(n, r));
  }, __wbg_uniform3uiv_86941e7eeb8ee0a3: function(e, t, n, r) {
    e.uniform3uiv(t, j(n, r));
  }, __wbg_uniform4f_71ec75443e58cecc: function(e, t, n, r, _, o) {
    e.uniform4f(t, n, r, _, o);
  }, __wbg_uniform4f_f6b5e2024636033a: function(e, t, n, r, _, o) {
    e.uniform4f(t, n, r, _, o);
  }, __wbg_uniform4fv_498bd80dc5aa16ff: function(e, t, n, r) {
    e.uniform4fv(t, v(n, r));
  }, __wbg_uniform4fv_e6c73702e9a3be5c: function(e, t, n, r) {
    e.uniform4fv(t, v(n, r));
  }, __wbg_uniform4iv_375332584c65e61b: function(e, t, n, r) {
    e.uniform4iv(t, $(n, r));
  }, __wbg_uniform4iv_8a8219fda39dffd5: function(e, t, n, r) {
    e.uniform4iv(t, $(n, r));
  }, __wbg_uniform4uiv_046ee400bb80547d: function(e, t, n, r) {
    e.uniform4uiv(t, j(n, r));
  }, __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: function(e, t, n, r) {
    e.uniformBlockBinding(t, n >>> 0, r >>> 0);
  }, __wbg_uniformMatrix2fv_24430076c7afb5e3: function(e, t, n, r, _) {
    e.uniformMatrix2fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix2fv_e2806601f5b95102: function(e, t, n, r, _) {
    e.uniformMatrix2fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix2x3fv_a377326104a8faf4: function(e, t, n, r, _) {
    e.uniformMatrix2x3fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: function(e, t, n, r, _) {
    e.uniformMatrix2x4fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix3fv_6f822361173d8046: function(e, t, n, r, _) {
    e.uniformMatrix3fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix3fv_b94a764c63aa6468: function(e, t, n, r, _) {
    e.uniformMatrix3fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: function(e, t, n, r, _) {
    e.uniformMatrix3x2fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: function(e, t, n, r, _) {
    e.uniformMatrix3x4fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix4fv_0e724dbebd372526: function(e, t, n, r, _) {
    e.uniformMatrix4fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix4fv_923b55ad503fdc56: function(e, t, n, r, _) {
    e.uniformMatrix4fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: function(e, t, n, r, _) {
    e.uniformMatrix4x2fv(t, n !== 0, v(r, _));
  }, __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: function(e, t, n, r, _) {
    e.uniformMatrix4x3fv(t, n !== 0, v(r, _));
  }, __wbg_unmap_8c2e8131b2aaa844: function(e) {
    e.unmap();
  }, __wbg_usage_13caa02888040e9f: function(e) {
    return e.usage;
  }, __wbg_useProgram_e82c1a5f87d81579: function(e, t) {
    e.useProgram(t);
  }, __wbg_useProgram_fe720ade4d3b6edb: function(e, t) {
    e.useProgram(t);
  }, __wbg_valueOf_3c28600026e653c4: function(e) {
    return e.valueOf();
  }, __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: function(e, t, n) {
    e.vertexAttribDivisorANGLE(t >>> 0, n >>> 0);
  }, __wbg_vertexAttribDivisor_744c0ca468594894: function(e, t, n) {
    e.vertexAttribDivisor(t >>> 0, n >>> 0);
  }, __wbg_vertexAttribIPointer_b9020d0c2e759912: function(e, t, n, r, _, o) {
    e.vertexAttribIPointer(t >>> 0, n, r >>> 0, _, o);
  }, __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: function(e, t, n, r, _, o, a) {
    e.vertexAttribPointer(t >>> 0, n, r >>> 0, _ !== 0, o, a);
  }, __wbg_vertexAttribPointer_adbd1853cce679ad: function(e, t, n, r, _, o, a) {
    e.vertexAttribPointer(t >>> 0, n, r >>> 0, _ !== 0, o, a);
  }, __wbg_videoHeight_a90b6b6ebd4132de: function(e) {
    return e.videoHeight;
  }, __wbg_videoWidth_4b450aa64c85eaa4: function(e) {
    return e.videoWidth;
  }, __wbg_viewport_174ae1c2209344ae: function(e, t, n, r, _) {
    e.viewport(t, n, r, _);
  }, __wbg_viewport_df236eac68bc7467: function(e, t, n, r, _) {
    e.viewport(t, n, r, _);
  }, __wbg_width_5901d980713eb80b: function(e) {
    return e.width;
  }, __wbg_width_5f66bde2e810fbde: function(e) {
    return e.width;
  }, __wbg_width_75158459c067906d: function(e) {
    return e.width;
  }, __wbg_width_be8f36d66d37751f: function(e) {
    return e.width;
  }, __wbg_width_f12394c19964e4bb: function(e) {
    return e.width;
  }, __wbg_writeBuffer_5ca4981365eb5ac0: function(e, t, n, r, _, o) {
    e.writeBuffer(t, n, r, _, o);
  }, __wbg_writeTexture_246118eb2f5a1592: function(e, t, n, r, _) {
    e.writeTexture(t, n, r, _);
  }, __wbindgen_cast_0000000000000001: function(e, t) {
    return tt(e, t, i.wasm_bindgen__closure__destroy__h479b17dcfa949578, yt);
  }, __wbindgen_cast_0000000000000002: function(e, t) {
    return tt(e, t, i.wasm_bindgen__closure__destroy__hbfa262b2e372abca, ht);
  }, __wbindgen_cast_0000000000000003: function(e) {
    return e;
  }, __wbindgen_cast_0000000000000004: function(e, t) {
    return v(e, t);
  }, __wbindgen_cast_0000000000000005: function(e, t) {
    return Mt(e, t);
  }, __wbindgen_cast_0000000000000006: function(e, t) {
    return $(e, t);
  }, __wbindgen_cast_0000000000000007: function(e, t) {
    return Dt(e, t);
  }, __wbindgen_cast_0000000000000008: function(e, t) {
    return Ct(e, t);
  }, __wbindgen_cast_0000000000000009: function(e, t) {
    return j(e, t);
  }, __wbindgen_cast_000000000000000a: function(e, t) {
    return ve(e, t);
  }, __wbindgen_cast_000000000000000b: function(e, t) {
    return B(e, t);
  }, __wbindgen_cast_000000000000000c: function(e, t) {
    var n = ve(e, t).slice();
    return i.__wbindgen_free(e, t * 1, 1), n;
  }, __wbindgen_init_externref_table: function() {
    const e = i.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  } } };
}
function yt(c, e, t) {
  i.wasm_bindgen__convert__closures_____invoke__hee0bc410d1bf8c3d(c, e, t);
}
function ht(c, e, t) {
  i.wasm_bindgen__convert__closures_____invoke__h7704605e0845f3d9(c, e, t);
}
function St(c, e, t, n) {
  i.wasm_bindgen__convert__closures_____invoke__h4d618390782b16f7(c, e, t, n);
}
const vt = ["error", "warning", "info"], It = ["unknown", "destroyed"], At = ["validation", "out-of-memory", "internal"], Se = ["uint16", "uint32"], Bt = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"], Ke = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => i.__wbg_gpurenderer_free(c >>> 0, 1)), Je = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => i.__wbg_renderparams_free(c >>> 0, 1));
function m(c) {
  const e = i.__externref_table_alloc();
  return i.__wbindgen_externrefs.set(e, c), e;
}
function Pt(c, e) {
  if (!(c instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
const et = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => c.dtor(c.a, c.b));
function Ge(c) {
  const e = typeof c;
  if (e == "number" || e == "boolean" || c == null) return `${c}`;
  if (e == "string") return `"${c}"`;
  if (e == "symbol") {
    const r = c.description;
    return r == null ? "Symbol" : `Symbol(${r})`;
  }
  if (e == "function") {
    const r = c.name;
    return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
  }
  if (Array.isArray(c)) {
    const r = c.length;
    let _ = "[";
    r > 0 && (_ += Ge(c[0]));
    for (let o = 1; o < r; o++) _ += ", " + Ge(c[o]);
    return _ += "]", _;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(c));
  let n;
  if (t && t.length > 1) n = t[1];
  else return toString.call(c);
  if (n == "Object") try {
    return "Object(" + JSON.stringify(c) + ")";
  } catch {
    return "Object";
  }
  return c instanceof Error ? `${c.name}: ${c.message}
${c.stack}` : n;
}
function v(c, e) {
  return c = c >>> 0, Tt().subarray(c / 4, c / 4 + e);
}
function Mt(c, e) {
  return c = c >>> 0, Et().subarray(c / 2, c / 2 + e);
}
function $(c, e) {
  return c = c >>> 0, Ft().subarray(c / 4, c / 4 + e);
}
function Dt(c, e) {
  return c = c >>> 0, Lt().subarray(c / 1, c / 1 + e);
}
function Ct(c, e) {
  return c = c >>> 0, Rt().subarray(c / 2, c / 2 + e);
}
function j(c, e) {
  return c = c >>> 0, Ot().subarray(c / 4, c / 4 + e);
}
function ve(c, e) {
  return c = c >>> 0, xe().subarray(c / 1, c / 1 + e);
}
let ee = null;
function h() {
  return (ee === null || ee.buffer.detached === true || ee.buffer.detached === void 0 && ee.buffer !== i.memory.buffer) && (ee = new DataView(i.memory.buffer)), ee;
}
let be = null;
function Tt() {
  return (be === null || be.byteLength === 0) && (be = new Float32Array(i.memory.buffer)), be;
}
let de = null;
function Et() {
  return (de === null || de.byteLength === 0) && (de = new Int16Array(i.memory.buffer)), de;
}
let ge = null;
function Ft() {
  return (ge === null || ge.byteLength === 0) && (ge = new Int32Array(i.memory.buffer)), ge;
}
let le = null;
function Lt() {
  return (le === null || le.byteLength === 0) && (le = new Int8Array(i.memory.buffer)), le;
}
function B(c, e) {
  return c = c >>> 0, Wt(c, e);
}
let me = null;
function Rt() {
  return (me === null || me.byteLength === 0) && (me = new Uint16Array(i.memory.buffer)), me;
}
let we = null;
function Ot() {
  return (we === null || we.byteLength === 0) && (we = new Uint32Array(i.memory.buffer)), we;
}
let pe = null;
function xe() {
  return (pe === null || pe.byteLength === 0) && (pe = new Uint8Array(i.memory.buffer)), pe;
}
function l(c, e) {
  try {
    return c.apply(this, e);
  } catch (t) {
    const n = m(t);
    i.__wbindgen_exn_store(n);
  }
}
function d(c) {
  return c == null;
}
function tt(c, e, t, n) {
  const r = { a: c, b: e, cnt: 1, dtor: t }, _ = (...o) => {
    r.cnt++;
    const a = r.a;
    r.a = 0;
    try {
      return n(a, r.b, ...o);
    } finally {
      r.a = a, _._wbg_cb_unref();
    }
  };
  return _._wbg_cb_unref = () => {
    --r.cnt === 0 && (r.dtor(r.a, r.b), r.a = 0, et.unregister(r));
  }, et.register(_, r, r), _;
}
function O(c, e, t) {
  if (t === void 0) {
    const a = ye.encode(c), f = e(a.length, 1) >>> 0;
    return xe().subarray(f, f + a.length).set(a), L = a.length, f;
  }
  let n = c.length, r = e(n, 1) >>> 0;
  const _ = xe();
  let o = 0;
  for (; o < n; o++) {
    const a = c.charCodeAt(o);
    if (a > 127) break;
    _[r + o] = a;
  }
  if (o !== n) {
    o !== 0 && (c = c.slice(o)), r = t(r, n, n = o + c.length * 3, 1) >>> 0;
    const a = xe().subarray(r + o, r + n), f = ye.encodeInto(c, a);
    o += f.written, r = t(r, n, o, 1) >>> 0;
  }
  return L = o, r;
}
let Ie = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Ie.decode();
const kt = 2146435072;
let We = 0;
function Wt(c, e) {
  return We += e, We >= kt && (Ie = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Ie.decode(), We = e), Ie.decode(xe().subarray(c, c + e));
}
const ye = new TextEncoder();
"encodeInto" in ye || (ye.encodeInto = function(c, e) {
  const t = ye.encode(c);
  return e.set(t), { read: c.length, written: t.length };
});
let L = 0, i;
function Gt(c, e) {
  return i = c.exports, ee = null, be = null, de = null, ge = null, le = null, me = null, we = null, pe = null, i.__wbindgen_start(), i;
}
async function Ut(c, e) {
  if (typeof Response == "function" && c instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(c, e);
    } catch (r) {
      if (c.ok && t(c.type) && c.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const n = await c.arrayBuffer();
    return await WebAssembly.instantiate(n, e);
  } else {
    const n = await WebAssembly.instantiate(c, e);
    return n instanceof WebAssembly.Instance ? { instance: n, module: c } : n;
  }
  function t(n) {
    switch (n) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function Vt(c) {
  if (i !== void 0) return i;
  c !== void 0 && (Object.getPrototypeOf(c) === Object.prototype ? { module_or_path: c } = c : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), c === void 0 && (c = new URL("" + new URL("fractal_rs_bg-CEvKQU23.wasm", import.meta.url).href, import.meta.url));
  const e = xt();
  (typeof c == "string" || typeof Request == "function" && c instanceof Request || typeof URL == "function" && c instanceof URL) && (c = fetch(c));
  const { instance: t, module: n } = await Ut(await c, e);
  return Gt(t);
}
const _p = class _p {
  constructor(e) {
    __publicField(this, "value");
    this.value = e;
  }
  static fromNumber(e) {
    return new _p(BigInt(Math.round(e * _p.SCALE_F)));
  }
  static fromString(e) {
    const t = e.startsWith("-");
    t && (e = e.substring(1));
    const n = _p.SCALE, r = e.indexOf(".");
    let _;
    if (r === -1) _ = BigInt(e) * n;
    else {
      const o = e.substring(0, r), a = e.substring(r + 1).padEnd(18, "0").slice(0, 18);
      _ = BigInt(o) * n + BigInt(a);
    }
    return new _p(t ? -_ : _);
  }
  toString() {
    const e = this.value < 0n, n = (e ? -this.value : this.value).toString().padStart(19, "0"), r = n.length - 18, _ = n.slice(0, r), o = n.slice(r);
    let a = `${_}.${o}`;
    return a = a.replace(/\.?0+$/, ""), a === "" && (a = "0"), e && (a = "-" + a), a;
  }
  toExponential(e) {
    return Number(this.toString()).toExponential(e);
  }
  toNumber() {
    return Number(this.value) / _p.SCALE_F;
  }
  add(e) {
    return new _p(this.value + e.value);
  }
  sub(e) {
    return new _p(this.value - e.value);
  }
  mul(e) {
    const t = BigInt(Math.round(e * 1e9)), n = this.value * t / 1000000000n;
    return new _p(n);
  }
  scale(e) {
    const t = BigInt(Math.round(e * 1e6));
    return new _p(this.value * t / 1000000n);
  }
  div(e) {
    const t = 1000000000n, n = BigInt(Math.round(e * 1e9));
    if (n === 0n) throw new Error("Division by zero");
    return new _p(this.value * t / n);
  }
  lt(e) {
    return this.value < e.value;
  }
  gt(e) {
    return this.value > e.value;
  }
  split() {
    const e = Number(this.value) / 1e18, t = Math.fround(e), n = BigInt(Math.round(t * 1e9)) * 1000000000n, r = this.value - n, _ = Number(r) / 1e18;
    return [t, _];
  }
};
__publicField(_p, "SCALE", 1000000000000000000n);
__publicField(_p, "SCALE_F", 1e18);
let p = _p;
async function zt() {
  console.log("Starting App..."), await Vt(), pt(), console.log("Wasm initialized");
  const c = document.getElementById("mandelbrot-canvas"), e = document.createElement("div");
  e.style.position = "absolute", e.style.top = "10px", e.style.left = "10px", e.style.background = "rgba(0, 0, 0, 0.7)", e.style.color = "white", e.style.padding = "10px", e.style.borderRadius = "5px", e.style.zIndex = "100", document.body.appendChild(e);
  const t = document.createElement("div");
  t.style.marginTop = "5px", e.appendChild(t);
  const n = -2, r = 1, _ = -1.2, o = 1.2, a = r - n, f = o - _, s = a / f, b = window.devicePixelRatio || 1;
  let w = 800, y = 600, D = 800, C = 600, I = p.fromNumber(-0.5), A = p.fromNumber(0), x = p.fromNumber(3), oe = "#9cacba", ce = "#1049ac", ae = 0, Be = 0.8;
  const z = /* @__PURE__ */ new Set();
  let H = 0, Q = 0, Z = 0;
  const te = 0.05, Pe = 0.85, nt = 0.02, rt = 0.02, Ue = (u) => {
    const g = parseInt(u.slice(1, 3), 16) / 255, S = parseInt(u.slice(3, 5), 16) / 255, P = parseInt(u.slice(5, 7), 16) / 255;
    return [g, S, P];
  }, Me = new URLSearchParams(window.location.search), Ve = Me.get("x"), ze = Me.get("y"), Ne = Me.get("w");
  if (Ve) try {
    I = p.fromString(Ve);
  } catch (u) {
    console.error("Invalid x param", u);
  }
  if (ze) try {
    A = p.fromString(ze);
  } catch (u) {
    console.error("Invalid y param", u);
  }
  if (Ne) try {
    x = p.fromString(Ne);
  } catch (u) {
    console.error("Invalid w param", u);
  }
  let ne = null;
  const G = document.createElement("canvas");
  G.id = "gpu-canvas", G.style.display = "none";
  const K = document.createElement("div");
  K.id = "btn-container", K.style.marginTop = "8px", K.style.display = "none", K.style.gap = "8px", t.appendChild(K);
  const ie = document.createElement("button");
  ie.innerText = "Copy Coords", ie.style.cursor = "pointer", ie.style.padding = "4px 8px";
  const fe = document.createElement("button");
  fe.innerText = "Copy URL", fe.style.cursor = "pointer", fe.style.padding = "4px 8px", K.appendChild(ie), K.appendChild(fe);
  const N = document.createElement("div");
  N.style.marginTop = "15px", N.style.display = "flex", N.style.flexDirection = "column", N.style.gap = "10px", N.style.borderTop = "1px solid rgba(255,255,255,0.2)", N.style.paddingTop = "10px", e.appendChild(N);
  const he = (u, g) => {
    const S = document.createElement("div");
    S.style.display = "flex", S.style.justifyContent = "space-between", S.style.alignItems = "center", S.style.fontSize = "0.9em";
    const P = document.createElement("label");
    P.innerText = u, S.appendChild(P), S.appendChild(g), N.appendChild(S);
  }, ue = document.createElement("input");
  ue.type = "color", ue.value = oe, ue.oninput = () => {
    oe = ue.value, U();
  }, he("Color 1", ue);
  const se = document.createElement("input");
  se.type = "color", se.value = ce, se.oninput = () => {
    ce = se.value, U();
  }, he("Color 2", se);
  const q = document.createElement("input");
  q.type = "range", q.min = "0", q.max = "1", q.step = "0.01", q.value = ae.toString(), q.oninput = () => {
    ae = parseFloat(q.value), U();
  }, he("Min Bright", q);
  const X = document.createElement("input");
  X.type = "range", X.min = "0", X.max = "1", X.step = "0.01", X.value = Be.toString(), X.oninput = () => {
    Be = parseFloat(X.value), U();
  }, he("Max Bright", X);
  const qe = async (u) => {
    try {
      await navigator.clipboard.writeText(u);
      const g = t.style.backgroundColor;
      t.style.backgroundColor = "rgba(0, 100, 0, 0.8)", setTimeout(() => t.style.backgroundColor = g, 200);
    } catch (g) {
      console.error("Failed to copy", g), alert("Clipboard API failed (Context not secure?): " + g);
    }
  };
  ie.onclick = () => {
    const u = `x=${I.toString()}
y=${A.toString()}
w=${x.toString()}`;
    qe(u);
  }, fe.onclick = () => {
    const u = new URL(window.location.href);
    u.searchParams.set("x", I.toString()), u.searchParams.set("y", A.toString()), u.searchParams.set("w", x.toString()), qe(u.toString());
  };
  const M = document.createElement("div");
  M.style.position = "relative", M.style.display = "flex", M.style.justifyContent = "center", M.style.alignItems = "center", M.style.boxShadow = "0 0 50px black", document.body.appendChild(M), M.style.display = "grid";
  const De = (u) => {
    u.style.gridArea = "1 / 1", u.style.width = "100%", u.style.height = "100%", u.style.display = "block";
  };
  c.parentNode && c.parentNode.removeChild(c), M.appendChild(c), De(c), M.appendChild(G), De(G);
  const re = document.createElement("canvas");
  re.style.pointerEvents = "none", re.style.zIndex = "50", M.appendChild(re), De(re);
  const Ce = re.getContext("2d"), Xe = () => {
    const u = window.innerWidth, g = window.innerHeight;
    u / g > s ? (y = g, w = g * s) : (w = u, y = u / s), w = Math.floor(w), y = Math.floor(y), M.style.width = w + "px", M.style.height = y + "px", D = Math.floor(w * b), C = Math.floor(y * b), [c, G, re].forEach((P) => {
      P.width = D, P.height = C;
    }), Ce && (Ce.setTransform(1, 0, 0, 1, 0, 0), Ce.scale(b, b)), ne && ne.resize(D, C), U();
  };
  try {
    _e.new(G).then((u) => {
      ne = u, ne.resize(D, C), console.log("GPU Ready"), U();
    }).catch((u) => {
      console.error("GPU Fail", u), t.innerText = "GPU Failed to initialize";
    });
  } catch {
  }
  let Te = 0;
  const Ye = (u, g) => {
    if (g !== Te) return;
    const S = Math.log10(3 / x.toNumber()), P = Math.floor(100 + S * 100), Y = (100 / u).toFixed(1);
    let T = t.querySelector("#info-text"), E = t.querySelector("#btn-container");
    T || (T = document.createElement("div"), T.id = "info-text", E ? t.insertBefore(T, E) : t.appendChild(T)), T.innerHTML = `
      <div>Zoom: ${x.toExponential(2)}</div>
      <div>Iters: ${P}</div>
      <div>Res: ${Y}% (Step ${u})</div>
      <div id="coords-detail" style="display: none; font-size: 0.8em; margin-top: 5px; color: #aaa;">
        x=${I.toString()}<br>
        y=${A.toString()}<br>
        w=${x.toString()}
      </div>
    `;
    const R = T.querySelector("#coords-detail");
    t.onmouseenter = () => {
      E && (E.style.display = "flex"), R && (R.style.display = "block");
    }, t.onmouseleave = () => {
      E && (E.style.display = "none"), R && (R.style.display = "none");
    };
    const k = D > 0 && C > 0 ? D / C : s, W = x.div(k), V = I.sub(x.div(2)), J = I.add(x.div(2)), Le = A.sub(W.div(2)), Re = A.add(W.div(2));
    if (ne) {
      G.width !== D && (G.width = D, G.height = C);
      let F = Math.floor(Math.min(D, C) / 2);
      F = Math.min(F, 64), F = Math.pow(2, Math.floor(Math.log2(F))), F < 1 && (F = 1);
      const Oe = u < F, [ke, _t, ot] = Ue(oe), [ct, at, it] = Ue(ce), [ft, ut] = V.split(), [st, bt] = J.split(), [dt, gt] = Le.split(), [lt, mt] = Re.split(), wt = new Ae(ft, ut, st, bt, dt, gt, lt, mt, P, u, Oe, ke, _t, ot, ct, at, it, ae, Be);
      ne.render(wt);
    }
    if (u > 1) {
      let F = Math.floor(u / 2);
      F < 1 && (F = 1), requestAnimationFrame(() => Ye(F, g));
    }
  }, U = () => {
    Te++;
    const u = Te;
    let g = Math.floor(Math.min(D, C) / 2);
    g = Math.min(g, 64), g = Math.pow(2, Math.floor(Math.log2(g))), g < 1 && (g = 1), requestAnimationFrame(() => Ye(g, u));
  }, Ee = () => {
    const u = p.fromNumber(w * 1e-15), g = p.fromNumber(a);
    x.lt(u) && (x = u), x.gt(g) && (x = g);
    const S = D / C, P = x.div(S), Y = p.fromNumber(n), T = p.fromNumber(r), E = p.fromNumber(_), R = p.fromNumber(o), k = Y.add(x.div(2)), W = T.sub(x.div(2)), V = E.add(P.div(2)), J = R.sub(P.div(2));
    k.gt(W) ? I = Y.add(T).div(2) : (I.lt(k) && (I = k), I.gt(W) && (I = W)), V.gt(J) ? A = E.add(R).div(2) : (A.lt(V) && (A = V), A.gt(J) && (A = J));
  };
  let Fe = false, $e = 0, je = 0, He = p.fromNumber(0), Qe = p.fromNumber(0);
  M.addEventListener("mousedown", (u) => {
    Fe = true;
    const g = M.getBoundingClientRect();
    $e = u.clientX - g.left, je = u.clientY - g.top, He = I, Qe = A;
  }), window.addEventListener("mousemove", (u) => {
    if (!Fe) return;
    const g = M.getBoundingClientRect(), S = u.clientX - g.left, P = u.clientY - g.top, Y = S - $e, T = P - je, E = D / C, R = x.toNumber() / w, k = x.toNumber() / E / y, W = p.fromNumber(Y * R), V = p.fromNumber(T * k);
    I = He.sub(W), A = Qe.sub(V), Ee(), U();
  }), window.addEventListener("mouseup", () => {
    Fe = false;
  }), M.addEventListener("wheel", (u) => {
    u.preventDefault();
    const g = u.deltaY < 0 ? 0.9 : 1.1, S = x.scale(g), P = M.getBoundingClientRect(), Y = u.clientX - P.left, T = u.clientY - P.top, E = Y / w, R = T / y, k = D / C, W = x.div(k), V = S.div(k), J = x.sub(S), Le = W.sub(V), Re = J.mul(E - 0.5), F = Le.mul(R - 0.5), Oe = I.add(Re), ke = A.add(F);
    I = Oe, A = ke, x = S, Ee(), U();
  }, { passive: false }), window.addEventListener("resize", () => {
    Xe();
  }), window.addEventListener("keydown", (u) => {
    z.add(u.code);
  }), window.addEventListener("keyup", (u) => {
    z.delete(u.code);
  });
  const Ze = () => {
    let u = false;
    if (z.has("ArrowUp") && (Q -= te), z.has("ArrowDown") && (Q += te), z.has("ArrowLeft") && (H -= te), z.has("ArrowRight") && (H += te), z.has("PageUp") && (Z -= te), z.has("PageDown") && (Z += te), H *= Pe, Q *= Pe, Z *= Pe, Math.abs(H) < 1e-3 && (H = 0), Math.abs(Q) < 1e-3 && (Q = 0), Math.abs(Z) < 1e-3 && (Z = 0), H !== 0 || Q !== 0) {
      const g = D / C, S = x.toNumber() * nt;
      I = I.add(p.fromNumber(H * S)), A = A.add(p.fromNumber(Q * S / g)), u = true;
    }
    if (Z !== 0) {
      const g = 1 + Z * rt;
      x = x.scale(g), u = true;
    }
    u && (Ee(), U()), requestAnimationFrame(Ze);
  };
  Ze(), Xe();
}
zt();
