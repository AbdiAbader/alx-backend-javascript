const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const { protocol, name } = endpoint;
  const key = `${protocol}_${name}`;

  const count = weakMap.get(key) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high.');
  }
  weakMap.set(key, count + 1);

    return weakMap.get(key);
}