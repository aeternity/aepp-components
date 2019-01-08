import copy from 'clipboard-copy';

/**
 * The following directive attaches an event listener
 * to the element, and copies the value provided to the directive
 * @param {String|Boolean} when falsy value copyToClipboard is disabled
 * @class v-copied-to-clipboard
 * @return {Object}
 */
export default {
  inserted: (el, binding) => el.addEventListener('click', async () => {
    /**
     * In case the value is falsy, do not proceed with
     * the copyToClipboard functionality
     */
    if (!binding.value) return;

    /**
     * Await for copy to be executed and proceed
     * with normal flow
     */
    await copy(binding.value);
    el.classList.add('v-copied-to-clipboard');
    setTimeout(
      () => el.classList.remove('v-copied-to-clipboard'),
      500,
    );
  }),
};
