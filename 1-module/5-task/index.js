/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  return (str.length <= maxlength) ? str :
          str.substring(0, maxlength-1) + '…';
}
