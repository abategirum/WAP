
function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  
    this.inputNewGrade = function(newGrade) {
      this.grades.push(newGrade);
    };
  
    this.computeAverageGrade = function() {
      const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
      return sum / this.grades.length;
    };
  }
  

  const student1 = new Student("John", "Doe", [85, 90, 78, 92]);
  const student2 = new Student("Jane", "Smith", [92, 88, 95, 83]);
  

  const students = [student1, student2];

  let totalGrades = 0;
  students.forEach(student => {
    totalGrades += student.computeAverageGrade();
  });
  const averageGrade = totalGrades / students.length;
  
  console.log("Average Grade: ", averageGrade);

  /*question 3*/

Array.prototype.sort = function() {
    return this.sort((a, b) => a - b);
  };
  

  const numbers = [3, 1, 5, 2, 4];
  numbers.sort();
  console.log(numbers); 
  