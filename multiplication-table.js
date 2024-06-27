
//print a table containing multiplication tables

function multiplyTable() {
  const size = 12;
  for(let i = 0; i <= size; i++) {
    let row = '';
    for(let j = 0; j <= size; j++) {
      row += (i * j).toString().padStart(3, ' ') + ' ';
    }
    console.log(row);
  }
}

multiplyTable();