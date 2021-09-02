import React from 'react'

const DisplayUser = (props) => {

    // const { allUsers } = props;

    return (
        <fieldset>
            <legend>DisplayUser.jsx</legend>
            {/* {JSON.stringify(props.allUsers)} */}
            <div>
                {
                    props.allUsers.map( (user, idx) => {
                    return (
                    <li key={idx}>username: {user.username} - email= {user.email}</li>
                    )
                    })
                }
            </div>
        </fieldset>
    )
}

export default DisplayUser;
