import copy from 'clipboard-copy';

/**
 * The following directive attaches an event listener
 * to the element, and copies the value provided to the directive
 * @class v-copied-to-clipboard
 * @return {Object}
 */
export default {
  inserted: (el, binding) => el.addEventListener('click', async () => copy(binding.value).then(() => {
    el.classList.add('v-copied-to-clipboard');
    setTimeout(
      () => el.classList.remove('v-copied-to-clipboard'),
      500,
    );
  })),
};
