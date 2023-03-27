export default function createInt8TypedArray(lengths, pos, num) {
  const buffArr = new Int8Array(lengths);
  buffArr[pos] = num;

  return new DataView(buffArr.buffer);
}
