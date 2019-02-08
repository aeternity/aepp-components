import copy from 'clipboard-copy';

/**
 * The following directive attaches an event listener
 * to the element, and copies the value provided to the directive
 * @param {String|Boolean} when falsy value copyToClipboard is disabled
 * @class v-copied-to-clipboard
 */
export default (el, binding) => {
  if (!('copyToClipboard' in el.dataset)) {
    el.addEventListener('click', async () => {
      const value = el.dataset.copyToClipboard;

      /**
       * In case the value is falsy, do not proceed with
       * the copyToClipboard functionality
       */
      if (!value) return;

      /**
       * Await for copy to be executed and proceed
       * with normal flow
       */
      await copy(value);
      el.classList.add('v-copied-to-clipboard');
      setTimeout(
        () => el.classList.remove('v-copied-to-clipboard'),
        500,
      );
    });
  }

  el.dataset.copyToClipboard = binding.value; // eslint-disable-line no-param-reassign
};
