import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../redux/registrationSlice'

const AddUpdate = () => {
  const [name ,setName] = useState('')
  const [price ,setPrice] = useState('')
  const [quantity ,setQuantity] = useState('')
  const dispatch = useDispatch()
  // const add = useSelector((state)=>state.registetr.add)
  const handleSubmit = (e) => {
    e.preventDefault();
    setName('')
    setPrice('')
    setQuantity('')
    dispatch(
      addBook({
        id:Math.random(),
         "name": name,
          "price":price,
          "quantity":quantity,
      })
    )
    // console.log("addBook >>",add)
  
  }
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

  return (
    <div className="form container">
    <div className="form-body">
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
        <button type="submit" onClick={handleSubmit} className="btn text-center btn-info">Submit</button>
    </div>
</div>
  )
}

export default AddUpdate
