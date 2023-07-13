import React from 'react';

function Employee({ data }) {
  return (
    <div>
      {data.map((employee) => {
        return (
          <div className="profile_card" key={employee.id}>
            <h1>{employee.name}</h1>
            <p>Email: {employee.mail}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Employee;
