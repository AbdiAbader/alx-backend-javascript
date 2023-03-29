interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

const studentsLists: Student[] = [
    {
        firstName: 'Abdi',
        lastName: 'A',
        age: 20,
        location: 'Helsinki'
    },
    {
        firstName: 'Ado',
        lastName: 'B',
        age: 21,
        location: 'Turku'
    },
];

const table = document.createElement('table');

studentsLists.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  
  document.body.appendChild(table);
  