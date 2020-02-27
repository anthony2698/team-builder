import React, {useState} from 'react';

const Form = props => {
const [member, setMember] = useState({
    name: "",
    age: "",
    role: "",
    roleDescription: ""
});

const handleChanges = event => {
setMember({
    ...member, 
    [event.target.name]: event.target.value
    });
};

const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({
        name: "",
        age: "",
        role: "",
        roleDescription: ""
    });
};

return (
    <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input onChange={handleChanges} type="text" id="name" name="name" value={member.name}/>
        <label htmlFor="age">Age:</label>
        <input onChange={handleChanges} type="text" id="age" name="age" value={member.age}/>
        <label htmlFor="role">Role:</label>
        <input onChange={handleChanges} type="text" id="role" name="role" value={member.role}/>
        <label htmlFor="roleDescription">Role Description:</label>
        <input onChange={handleChanges} type="text" id="roleDescription" name="roleDescription" value={member.roleDescription}/>
        <button type="submit">Add Member</button>
    </form>
)
}

export default Form;