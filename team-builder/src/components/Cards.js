import React from "react";

import Card from "../components/Card";

const Cards = ({ members, setMembers }) => {
  return (
    <div>
      {members.map(member => (
          <Card member={member} setMembers={setMembers} members={members} key={member.id}/>
      ))}
    </div>
  );
};

export default Cards;
