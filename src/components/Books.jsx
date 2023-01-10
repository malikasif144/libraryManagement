import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../redux/registrationSlice';


const Books = () => {
  const dispatch = useDispatch()
  const add = useSelector((state)=>state.register.add)
  console.log("data",add)
  return (
    <div className="form container">
      <div className="form-body">
        <h1 className='text-center'>books</h1>
        <table  className="align-items-center w-100">
        <thead  >
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
              <td><i className="fa-solid fa-trash" role='button' onClick={()=>dispatch(deleteBook(item.id))}></i>/<i className="fa-solid fa-pen-to-square" role='button'></i></td>

            </tr>
        ))}
            </tbody>
       
        </table>
      </div>

    </div>
  )
}

export default Books
