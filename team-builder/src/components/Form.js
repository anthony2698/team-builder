import React from 'react';

const Form = props => {
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age"/>
            <label htmlFor="role">Role:</label>
            <input type="text" id="role" name="role"/>
            <label htmlFor="roleDescription">Role Description:</label>
            <input type="text" id="roleDescription" name="roleDescription"/>
        </form>
    )
}

export default Form;