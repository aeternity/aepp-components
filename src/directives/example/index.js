/**
 * Exporting Directive
 * @return {Object}
 */
export default {
  /**
   * Called only once, when the directive is first bound to the element.
   * This is where you can do one-time setup work.
   * @param {{}} el
   * @param {{}} binding
   * @param {{}} vnode
   */
  bind: function (el, binding, vnode) {},

  /**
   * Called when the bound element has been inserted into its
   * parent node (this only guarantees parent node presence,
   * not necessarily in-document).
   * @param {{}} el
   * @param {{}} binding
   * @param {{}} vnode
   */
  inserted: function (el, binding, vnode) {},

  /**
   * Called after the containing component’s VNode has updated,
   * but possibly before its children have updated. The directive’s value
   * may or may not have changed, but you can skip unnecessary updates
   * by comparing the binding’s current and old values (see below on hook arguments).
   * @param {{}} el
   * @param {{}} binding
   * @param {{}} vnode
   */
  update: function (el, binding, vnode) {},

  /**
   * Called after the containing component’s VNode
   * and the VNodes of its children have updated.
   * @param {{}} el
   * @param {{}} binding
   * @param {{}} vnode
   */
  componentUpdated: function (el, binding, vnode) {},

  /**
   * Called only once, when the directive is unbound from the element.
   * @param {{}} el
   * @param {{}} binding
   * @param {{}} vnode
   */
  unbind: function (el, binding, vnode) {}
};
