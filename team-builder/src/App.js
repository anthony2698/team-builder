import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';
import Forms from './components/Forms';

function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: 'Anthony Carrillo',
      age: 21,
      role: 'Front-End Engineer',
      roleDescription: 'Works on UI dynamically.'
    }
  ]);

  const addNewMember = 

  return (
    <div>
      <Form />
      <Forms member={member}/>
    </div>
    
  );
}

export default App;
