export default function cleanSet(set, startString) {
  const filteredSet = new Set([...set].filter((value) => value.startsWith(startString)));
  return Array.from(filteredSet).map((value) => value.slice(startString.length)).join('-');
}
