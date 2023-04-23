import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './edit.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Edit = (props) => {

    const { uid } = useParams()

    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [contact, contactChange] = useState("");
    const [users, setUsers] = useState([])



    const submitHandler = (e) => {
        e.preventDefault()

        // console.log(`id:${id}, name:${name} , email:${email}, contact:${contact}`)
        fetch('https://jsonplaceholder.typicode.com/users/'+uid, {
            method: 'PUT',
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


    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + uid)
        const data = await response.json()
        setUsers(data)
        idChange(users.id)
        nameChange(users.name)
        emailChange(users.email)
        contactChange(users.phone)
     
    }
    useEffect(() => {
        fetchData()

    }, [users])



    return (

        <div>

            <span className='details'>EDIT</span>

            <form onSubmit={submitHandler} >
                <label >Id</label>
                <input
                    disabled='disabled'
                    value={id || ''}
                    type='text'

                    onChange={(e) => idChange(e.target.value)}
                />

                <label >Name</label>
                <input

                    value={name || ''}
                    type='text'

                    onChange={(e) => nameChange(e.target.value)}
                />
                <label >Email</label>
                <input

                    value={email || ''}
                    type='text'

                    onChange={(e) => emailChange(e.target.value)}
                />


                <label >Contact</label>
                <input

                    value={contact || ''}
                    type='string'

                    onChange={(e) => contactChange(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default Edit