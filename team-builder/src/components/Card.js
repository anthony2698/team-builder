import React, { useState } from "react";

import EditUser from "./EditUser";

const Card = ({ member, members, setMembers }) => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div>
        { !isEditing && (
            <div>
                <h1>{member.name}</h1>
                <p>{member.age}</p>
                <p>{member.role}</p>
                <p>{member.roleDescription}</p>
                <button onClick={() => setIsEditing(!isEditing)}>Edit User</button>
            </div>
        )}
        { isEditing && (
            <div>
                <EditUser member={member} setMembers={setMembers} members={members} isEditing={isEditing} setIsEditing={setIsEditing}/>
            </div>
        )}
        </div>
    )
}

export default Card;
