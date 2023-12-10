import React, { useContext,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from './Context'
import axios from 'axios';



export default function Read() {

  const {data,setData} = useContext(AppContext);

  const {id}= useParams();
  useEffect(() => {
    axios.get('http://localhost:3002/users/'+id)
    // .then(res=>dispatch({type:'set-item', payload : res.data}))
      .then(res=>setData(res.data))
}, []);


  return (
    <div className="container my-5">
    <div className="card w-75 mx-auto">
      <div className="card-body">
        <h2 className="card-title">User Details</h2>

        <div className="mb-3">
        <strong>Name: {data.name}</strong>
        </div>
        <div className="mb-3">
          <strong>Email: {data.email}</strong>
        </div>
        <div className="mb-3">
          <strong>Website: {data.website}</strong>
        </div>

        <div className="d-flex">
          <Link to={`/update/${id}`} className="btn btn-sm btn-primary me-2">
            Edit
          </Link>
          <Link to="/" className="btn btn-sm btn-dark">
            Back
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
