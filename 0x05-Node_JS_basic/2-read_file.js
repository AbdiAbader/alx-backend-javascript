const csv = require('csv-parser');
const fs = require('fs');


function countStudents(path) {
  const count = new Map();
  let total = 0;

    const stream = fs.createReadStream(path);
    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
       
    } else {
    stream.pipe(csv())
      .on('data', (data) => {
        const { field, firstname } = data;
        if (!count.has(field)) {
          count.set(field, []);
        }
        if (field !== 'field' && firstname !== 'firstname')
        {
        count.get(field).push(firstname);
        total += 1;
        }
      }).on('end', () => {
             console.log(`Number of students: ${total}`);
            for (const [key, value] of count.entries()) {
                const i = value.length;
                console.log(`Number of students in ${key}: ${i}. List: ${value.join(', ')}`);
            }
            }
        );
   
    }

   
}
module.exports = countStudents;