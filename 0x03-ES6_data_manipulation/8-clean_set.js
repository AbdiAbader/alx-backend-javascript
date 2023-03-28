export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((newset) => newset.startsWith(startString))
    .map((newset) => newset.slice(startString.length))
    .join('-');
}