import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Update = () => {
    const card=useLoaderData()
    console.log(card)
    const id=card._id
    console.log(id)
    const {user}=useContext(AuthContext)
    const [stock,setStock]=useState('')
    const [costumization,setCostumization]=useState('')
    const [time,setTime]=useState('')
    const handleTime=e=>{
      setTime(e.target.value)
    }
    
    const handleChange=e=>{
        console.log(e.target.value)
        setStock(e.target.value)
    }
    const handleXchange=e=>{
      console.log(e.target.value)
      setCostumization(e.target.value)
    }
    const handleAdd= event => {
       event.preventDefault()
      const form=event.target
      const photoURL=form.photo.value
      const item_name=form.item_name.value
      const subcategory_name=form.subcategory_name.value
      const price=form.price.value
      const customization=costumization
      const processing_time=time
      const stockStatus=stock
      const rating=form.rating.value;
      const email=user.email
      const displayName=user.displayName
      const short_discription=form.description.value
      const artAdd={photoURL,item_name,subcategory_name,price,customization,rating,processing_time,stockStatus,email,displayName,short_discription}
   
      console.log(artAdd,'click')
     
      fetch(`https://assaiment-server.vercel.app/add/${id}`,{
        method:'PUT',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(artAdd)

      })
      .then(res=>res.json())
      .then(data=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })
      

    }
  return (
    <div className="bg-[#F4F3F0] p-4 md:p-24">
      <h2 className="text-3xl font-extrabold">Update A Craft Item </h2>
      <form onSubmit={handleAdd}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo" required
                placeholder="imageURL"
                defaultValue={card.photoURL}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                required
                name="item_name"
                defaultValue={card.item_name}
                placeholder="Item_Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">SubCategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory_name" required
                defaultValue={card.subcategory_name}
                placeholder="SubCategory Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price" required
                placeholder="Price"
                defaultValue={card.price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue={card.rating}
                placeholder="Rating" required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              
            <select className="select w-full max-w-xs" defaultValue={card.customization}  required onChange={handleXchange}>
                <option disabled selected>
                customization
                </option>
                <option>yes</option>
                <option>No</option>
                
              </select>
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input onChange={handleTime}
                type="time"
                name="time" required defaultValue={card.processing_time}
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
              <select className="select w-full max-w-xs" defaultValue={card.stockStatus}  required  onChange={handleChange}>
                <option disabled selected>
                stockStatus
                </option>
                <option defaultChecked>In stock</option>
                <option>Made to oder</option>
                
              </select>
            </label>
            
          </div>
          
        </div>
        <div className="mb-4">
        <input type="text" name="description"  defaultValue={card.short_discription} placeholder="Type here" className="input input-bordered w-full " />
        </div>
        <div className=" md:flex gap-4 ">
          <input type="text"  className="input input-bordered w-full" value={user.displayName} disabled />
          <input type="text"  className="input input-bordered w-full mt-4 md:mt-0" value={user.email} disabled />
        </div>

        <input type="submit" value="Add Craft" className="btn btn-block bg-[#dbc685]"  />
      </form>
    </div>
  );
};

export default Update;