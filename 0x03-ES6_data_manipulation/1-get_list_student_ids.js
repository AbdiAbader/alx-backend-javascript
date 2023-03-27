export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const studentid = array.map((students) => students.id);
    return studentid;
  }

  return [];
}
