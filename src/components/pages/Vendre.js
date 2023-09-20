import React from "react";

function Vendre() {

  const students = [
    { name: 'Mota', firstname: 'Fiorella', notes: [18, 19, 16, 20] },
    { name: 'Mota', firstname: 'Marina', notes: [18, 19, 16, 20] },
    { name: 'Mota', firstname: 'Matthieu', notes: [18, 19, 16, 20] },
  ];

  return (
    <table>
      <thead>
    <tr>
      <th>Name</th>
      <th scope="col">firstName</th>
      <th>Moyenne</th>
    </tr>
  </thead>
  <tbody>
  {
        students.map((item, index) => 
          (<><tr>
            <th index={index}>
              {item.name}
            </th>
            <th >
              {item.firstname}
            </th>
            <th >
              {item.notes.reduce((a,b)=>a+b,0)/item.notes.length}
            </th>
          </tr></>)
        )
      }
  </tbody>
      
    </table>

  );
}
export default Vendre