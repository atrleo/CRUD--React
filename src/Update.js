import React, { useContext,useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from './Context'
import axios from 'axios';


export default function Update() {

  const {id}= useParams();
  useEffect(() => {
    axios.get('http://localhost:3002/users/'+id)
    .then(res=> {
      setValue(res.data)
    })
    
 
}, []);

  const{state,dispatch} =useContext(AppContext);

  const [value, setValue] = useState({
    name: '', 
    email: '',
    website: ''
  });

  const navigate = useNavigate();

  const handleUpdate =(e)=>{
    e.preventDefault();

    axios.put('http://localhost:3002/users/'+id, value)
    .then(res => {
      console.log(res);
      dispatch({ type: 'post', payload: res.data });
      navigate('/');
      console.log("sucess")
    })
    .catch(error => {
      console.error('Error creating user:', error);
    });

  }


  return (
    <div className='d-flex justify-content-center align-items-center bg-light w-100 vh-100'>
      <div className='w-50 rounded bg-white border shadow px-5 pt-3 pb-5'>
        <h1>Update USER</h1>

        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name" >Name:</label>
            <input value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })}  type="text" className="form-control" name='name'  />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })}  type="email" className="form-control" name='email' />
          </div>
          <div className="mb-3">
            <label htmlFor="website" >Website:</label>
            <input value={value.website} onChange={(e) => setValue({ ...value, website: e.target.value })}  type="text" className="form-control" name='website' />
          </div>
          <button className='btn btn-sm btn-success'>Update</button>
          <Link to={"/"}><button className='btn btn-sm btn-dark ms-3'>Back</button></Link>
        </form>
      </div>
    </div>  
  )
}
