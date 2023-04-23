import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Edit from '../edit/Edit'
import './home.css'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate()


  const editHandler = (id) => {
    navigate('/emp/edit/' + id)
  }

  const deleteHandler = (id) => {
    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'DELETE',
    });
    console.log("Resouce deleted")
  }

  const addHandler =() =>{
    navigate('/emp/create/')
  }
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))

    console.log(data)
  }, [])
  return (
    <div className='home'>
      <span className='title'>User Details</span>

      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>email</td>
            <td>contact</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data && data.map((d) => {
            return (
              <tr key={d.id}>

                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>


                  <button className='edit' onClick={() => editHandler(d.id)}>Edit</button>
                  <button className='delete' onClick={() => deleteHandler(d.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
          <button className='add' onClick={addHandler}>Add New (+)</button>
    </div>
  )
}

export default Home