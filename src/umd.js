/* eslint-disable */
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define("bxs", [], factory);
  else if(typeof exports === 'object')
    exports["bxs"] = factory();
  else
    root["bxs"] = factory();
})(window, function() {
  return 'umd';
});