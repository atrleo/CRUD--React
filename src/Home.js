import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './Context'
import axios from 'axios'
import { Link } from 'react-router-dom';



export default function Home() {
  const { state, dispatch  } = useContext(AppContext);
  const [data,setData]= useState();


useEffect(() => {
    axios.get('http://localhost:3002/users')
    .then(res=>dispatch({type:'set-item', payload : res.data}))
}, []);


const handleDelete = (id) => {
  const shouldDelete = window.confirm('Would you like to delete?');
  if (shouldDelete) {
    axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
      .then(response => {
        
        console.log('User deleted successfully:', response);
      })
      .catch(error => {
    
        console.error('Error deleting user:', error);
      });
  }
};




  return (

    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of USERS</h1>
 
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
            <Link to={"/create"}><button className='btn btn-sm btn-success'>Add+</button></Link>
        </div>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  {
                    state.items.map((item,i)=>(
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.website}</td>
                        <td>
                          <button className='btn btn-sm btn-primary me-2'>Edit</button>
                         <Link to={`/read/${item.id}`}><button className='btn btn-sm btn-secondary me-2'>Read</button></Link> 
                          <button onClick={e=>handleDelete(item.id)} className='btn btn-sm btn-danger'>Delete</button>
                        </td>
                      </tr>
                    ))
                  }
              </tbody>
            </table>
            </div>
    </div>
  )
}
