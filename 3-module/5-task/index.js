/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(/[, ]/).filter(item => !isNaN(parseFloat(item)));
  arr = arr.map(item => +item);
  arr.sort((a, b) => a - b);
  return {'min': arr[0], 'max': arr[arr.length-1]};
}
