import React, { useState } from 'react';

const EditUser = ({ member, members, setMembers, setIsEditing, isEditing }) => {
    const [inputValues, setInputValues] = useState({
        name: member.name,
        age: member.age,
        role: member.role,
        roleDescription: member.roleDescription
    });

    const handleChanges = event => {
        setInputValues({
            ...inputValues, 
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        setMembers(members.map((el) => (
            el.id === member.id ? inputValues : el
        )));
        setIsEditing(!isEditing);
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">
                    Name:
                </label>
                <input 
                    onChange={handleChanges} 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={inputValues.name}
                    />
                <label htmlFor="age">
                    Age:
                </label>
                <input 
                    onChange={handleChanges} 
                    type="text" 
                    id="age" 
                    name="age" 
                    value={inputValues.age}/>
                <label htmlFor="role">
                    Role:
                </label>
                <input 
                    onChange={handleChanges} 
                    type="text" 
                    id="role" 
                    name="role" 
                    value={inputValues.role}
                    />
                <label htmlFor="roleDescription">
                    Role Description:
                </label>
                <input 
                    onChange={handleChanges} 
                    type="text" 
                    id="roleDescription" 
                    name="roleDescription" 
                    value={inputValues.roleDescription}
                    />
                <button type="submit">
                    Confirm Edit's
                </button>
            </form>
        </div>
    )
}

export default EditUser;