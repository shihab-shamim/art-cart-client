import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCardSection = ({card}) => {
    const {photoURL,item_name,subcategory_name,price,rating,short_discription,_id}=card
    const handleDelete=(id)=>{

        fetch(`http://localhost:5000/add/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    if(data.deletedCount>0){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Deleted",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          
                    }
                    location.reload();
                }
              });
            
            // 
        })

    }
    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img src={photoURL} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item_name}</span>
           
            <h2 className="text-xl font-semibold tracking-wide">{subcategory_name}</h2>
        </div>
        <p className="dark:text-gray-800">{short_discription}</p>
        
        <div className="flex justify-between mt-4">
        <button className="btn bg-[#F5F4ED] "><Link to={`/update/${_id}`}>Update</Link></button>
        <button onClick={()=>handleDelete(_id)} className="btn bg-[#F5F4ED] ">Delete</button>
        </div>
    </div>
    );
};

export default MyCardSection;