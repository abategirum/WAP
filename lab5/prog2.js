  function getNewArray(strArray){
    const filteredData = strArray.filter((strArray) => strArray.length >= 5 && strArray.includes('a'));

    filteredData.forEach(data => {
        console.log(data);
    });
  }

  const students = ['Anna', 'Margret','Stephan','joyce','Tom'];
  getNewArray(students); 