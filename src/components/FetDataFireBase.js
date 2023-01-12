
import React from 'react'
import { useState, useEffect } from 'react';

const FetDataFireBase = () => {
    const [data, setData] = useState([])

    // const fetchData = async () => {
    //     let result = await fetch('https://librarymanagement-react-default-rtdb.firebaseio.com/userDataRecords.json')
    //         .then(response => response.json())
    //         .catch(error => console.log(error))
        // console.log("result >>",result)
    //     setData(result);
    // }
    const fetchData = async () => {
        fetch("https://librarymanagement-react-default-rtdb.firebaseio.com/userDataRecords.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setData(Object.values(data))
            console.log("data >>",data)
        })
    }
    useEffect(() => {
        fetchData()
        
    }, [])

    return (
        <div className='container'>
            <table  className="align-items-center w-100 text-white" >
        <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </thead>
            <tbody>
            {data?.map((item,index) =>(
            <tr key={index+1}>
              <td>{index}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
            </tr>
        ))}
            </tbody>
       
        </table>
        </div>
    )
}

export default FetDataFireBase
