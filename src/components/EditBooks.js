import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {editBooks} from '../redux/registrationSlice'

const EditBooks = () => {

  const {id} = useParams()

    const dispatch = useDispatch()
    const edit = useSelector((state)=>state.register.add)

    const currentBook = edit.find((book)=>book.id ===Number(id) )
    console.log("id",typeof(id))
    console.log("edit",edit)
    console.log("currentBook",currentBook)
    const [name ,setName] = useState('')
    const [price ,setPrice] = useState('')
    const [quantity ,setQuantity] = useState('')

    useEffect(()=>{
      if(currentBook){
        setName(currentBook.name)
        setPrice(currentBook.price)
        setQuantity(currentBook.quantity)
      }

    },[currentBook])

    const handleInputChange = (e) => {
        const {id,value} = e.target;
        if(id === "name"){
          setName(value)
        }
        if(id === 'price'){
          setPrice(value)
        }
        if(id === 'quantity'){
          setQuantity(value)
        }
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
          editBooks({
            id:Number(id),
            name,
            price,
            quantity
      })
        )
        // console.log("addBook >>",add)
      
      }
        return (
    <div className="form container">
      {
       currentBook?<><div className="form-body">
        <h5 className='text-center'>Edit Books {id}</h5>
        <div className="name">
            <label className="form__label" htmlFor="name">Book Name </label>
            <input type="name" id="name" value={name} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="Book Name" />
        </div>
        <div className="price">
            <label className="form__label" htmlFor="price">Book Price </label>
            <input className="form__input" value={price} onChange={(e) => handleInputChange(e)} type="price" id="price" placeholder="Book Price" />
        </div>
        <div className="quantity">
            <label className="form__label" htmlFor="quantity">Book Quantity </label>
            <input className="form__input" value={quantity} onChange={(e) => handleInputChange(e)} type="quantity" id="quantity" placeholder="Book Quantity" />
        </div>
    </div>
    <div className="footer">
        <button type="submit" className="btn text-center btn-info me-3" onClick={handleSubmit}>Update</button>
        <Link className="btn text-center btn-danger" to='/books'>Cancel</Link>
    </div>
    </> 
    : <h1>No Book</h1>}
</div>
  )
}

export default EditBooks
