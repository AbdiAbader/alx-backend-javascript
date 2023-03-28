export default function cleanSet(set, startString) {
  const myarray = Array.from(set);
  if (startString === '' || startString === undefined || typeof startString !== 'string' || set.size === 0) {
    return '';
  }
  const filteredSet = myarray.filter((item) => item.startsWith(startString));
  const modifiedSet = filteredSet.map((item) => item.slice(startString.length));
  return modifiedSet.join('-');
}
