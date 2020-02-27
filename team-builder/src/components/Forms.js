import React from "react";

const Forms = props => {
  return (
    <div>
      {props.members.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.age}</p>
          <p>{member.role}</p>
          <p>{member.roleDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default Forms;
