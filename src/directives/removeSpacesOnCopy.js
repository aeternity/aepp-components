/**
 * A Vue Directive to clean up the empty
 * spaces (whitespace, new line, tabs) on copy event
 *
 * @example <div v-remove-spaces-on-copy></div>
 */
export default {
  inserted: el => el.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', getSelection().toString().replace(/\s/g, ''));
    event.preventDefault();
  }),
};
