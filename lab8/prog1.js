
const student1 = {
    firstName: "John",
    lastName: "Doe",
    grades: [85, 90, 78, 92],
    inputNewGrade: function(newGrade) {
      this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
      const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
      return sum / this.grades.length;
    }
  };
  
  const student2 = {
    firstName: "Jane",
    lastName: "Smith",
    grades: [92, 88, 95, 83],
    inputNewGrade: function(newGrade) {
      this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
      const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
      return sum / this.grades.length;
    }
  };

  const students = [student1, student2];
  

  let totalGrades = 0;
  students.forEach(student => {
    totalGrades += student.computeAverageGrade();
  });
  const averageGrade = totalGrades / students.length;
  
  console.log("Average Grade: ", averageGrade);
  