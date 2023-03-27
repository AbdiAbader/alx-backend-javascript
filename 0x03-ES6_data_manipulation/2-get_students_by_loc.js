export default function getStudentsByLocation(array, str) {
  const arr = array.filter((student) => student.location === str);
  return arr;
}
