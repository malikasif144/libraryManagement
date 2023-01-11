import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../redux/registrationSlice';
import { Link } from 'react-router-dom';


const Books = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  let add = useSelector((state)=>state.register.add)
  console.log("data",add)
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log("Search",searchInput)
  };
  
  if (searchInput.length > 0) {
     add =  add?.filter((item) => {
      return item.name.includes(searchInput);
  });
  }
  return (
    <div className="form container">
      <div className="form-body">
        <h1 className='text-center'>books</h1>
        <div className="name">
        <input  type='search' value={searchInput} onChange={(e)=>handleChange(e)} placeholder="Seacrh" className="form__input"/>
        </div>
        <table  className="align-items-center w-100" >
        <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </thead>
            <tbody>
            {add?.map((item,index) =>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td><i className="fa-solid fa-trash" role='button' onClick={()=>dispatch(deleteBook(item.id))}></i>/<Link className="fa-solid fa-pen-to-square" to={`/editbooks/${item.id}`}  role='button'></Link></td>
            </tr>
        ))}
            </tbody>
       
        </table>
      </div>

    </div>
  )
}

export default Books
