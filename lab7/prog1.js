let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {

        this.students.forEach(
            function(student) {
                    console.log(this.title + ": " + student)//this keyword here doesn't have access to the group because its inside showlist so apply bind where the function where this is not defined
        }.bind(this)); }
};

group.showList();