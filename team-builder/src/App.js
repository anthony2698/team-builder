import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';
import Cards from './components/Cards';

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
            <Cards members={members} setMembers={setMembers}/>
        </div>
    );
}

export default App;
