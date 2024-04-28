import { Link } from "react-router-dom";


const Items = ({item}) => {
    const {photoURL,item_name,subcategory_name,price,rating,short_discription,_id}=item

    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img src={photoURL} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item_name}</span>
           
            <h2 className="text-xl font-semibold tracking-wide">{subcategory_name}</h2>
        </div>
        <p className="dark:text-gray-800">{short_discription}</p>
        
        <div className="flex justify-end">
        <button className="btn bg-[#F5F4ED] "><Link to={`/add/${_id}`}>Details</Link></button>
        </div>
    </div>
    );
};

export default Items;