import { VNodeDirective } from "vue/types/vnode";
import { VNode } from "vue";

interface ResizeVNodeDirective extends VNodeDirective {
  value?: () => void;
  options?: boolean | AddEventListenerOptions;
}

function inserted(
  el: HTMLElement,
  binding: ResizeVNodeDirective,
  vnode: VNode
) {
  const callback = binding.value!;
  const options = binding.options || { passive: true };

  window.addEventListener("resize", callback, options);

  // @ts-ignore
  el._onResize = Object(el._onResize);
  // @ts-ignore
  el._onResize![vnode.context!._uid] = {
    callback,
    options
  };

  if (!binding.modifiers || !binding.modifiers.quiet) {
    callback();
  }
}

function unbind(el: HTMLElement, _binding: ResizeVNodeDirective, vnode: VNode) {
  // @ts-ignore
  if (!el._onResize?.[vnode.context!._uid]) return;

  // @ts-ignore
  const { callback, options } = el._onResize[vnode.context!._uid]!;

  window.removeEventListener("resize", callback, options);

  // @ts-ignore
  delete el._onResize[vnode.context!._uid];
}

export const Resize = {
  inserted,
  unbind
};

export default Resize;
