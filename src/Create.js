import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from './Context';

export default function Create() {
  const { state, dispatch } = useContext(AppContext);

  const [value, setValue] = useState({
    name: '',
    email: '',
    website: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/users', value)
      .then(res => {
        console.log(res);
        dispatch({ type: 'post', payload: res.data });
        navigate('/');
        console.log("sucess")
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-light w-100 vh-100'>
      <div className='w-50 rounded bg-white border shadow px-5 pt-3 pb-5'>
        <h1>Add USER</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" >Name:</label>
            <input onChange={(e) => setValue({ ...value, name: e.target.value })} type="text" className="form-control" name='name' placeholder="Enter Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input onChange={(e) => setValue({ ...value, email: e.target.value })} type="email" className="form-control" name='email' placeholder="Enter Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="website" >Website:</label>
            <input onChange={(e) => setValue({ ...value, website: e.target.value })} type="text" className="form-control" name='website' placeholder="Enter Website" />
          </div>
          <button className='btn btn-sm btn-success'>Submit</button>
          <Link to={"/"}><button className='btn btn-sm btn-dark ms-3'>Back</button></Link>
        </form>
      </div>
    </div>
  );
}
