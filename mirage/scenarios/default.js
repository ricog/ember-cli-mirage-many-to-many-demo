import faker from 'faker';

export default function(server) {
  let numberOfClasses = 2;
  let numberOfStudents = 5;

  server.createList('class', numberOfClasses);
  server.createList('student', numberOfStudents);

  for(let c=1;c<=numberOfClasses;c++) {
    let numberOfStudentsForClass = random(2, numberOfStudents);
    for(let s=1;s<=numberOfStudentsForClass;s++) {
      server.create('class-student', { classId: c, studentId: s });
    }
  }

  function random(min, max) {
    return faker.random.number(min, max);
  }
}
