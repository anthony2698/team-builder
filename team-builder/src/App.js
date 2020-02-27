import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';
import Forms from './components/Forms';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Anthony Carrillo',
      age: 21,
      role: 'Front-End Engineer',
      roleDescription: 'Works on UI dynamically.'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      age: member.age,
      role: member.role,
      roleDescription: member.roleDescription
    }
    setMembers([...members, newMember]);
  }

  return (
    <div>
      <Form addNewMember={addNewMember}/>
      <Forms members={members}/>
    </div>
    
  );
}

export default App;
