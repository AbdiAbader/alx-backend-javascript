const myReport = createReportObject('My Company', 'John Doe', '2023');
const myIterator = createIteratorObject(myReport);

let employee = myIterator.next();
while (!employee.done) {
  console.log(employee.value);
  employee = myIterator.next();
}
