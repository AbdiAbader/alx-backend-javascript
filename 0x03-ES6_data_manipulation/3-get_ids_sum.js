export default function getStudentIdsSum(array) {
  const sum = array.reduce((accumulator, current) => accumulator + current.id, 0);
  return sum;
}
