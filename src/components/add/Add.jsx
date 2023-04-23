import React, { useState } from 'react'

const Add = () => {
    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [contact, contactChange] = useState("");


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(`id:${id}, name:${name} , email:${email}, contact:${contact}`)
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                id: { id },
                name: { name },
                email: { email },
                contact: { contact }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (

        <div>

            <span className='details'>CREATE</span>

            <form onSubmit={submitHandler} >
                <label >Id</label>
                <input

                    value={id}
                    type='text'
                    id='id'
                    onChange={(e) => idChange(e.target.value)}
                />

                <label >Name</label>
                <input

                    value={name}
                    type='text'
                    id='name'
                    onChange={(e) => nameChange(e.target.value)}
                />
                <label >Email</label>
                <input

                    value={email}
                    type='text'
                    id='email'
                    onChange={(e) => emailChange(e.target.value)}
                />


                <label >Contact</label>
                <input

                    value={contact}
                    type='string'
                    id='num'
                    onChange={(e) => contactChange(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default Add