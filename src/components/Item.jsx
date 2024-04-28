import { useLoaderData } from "react-router-dom";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FcRating } from "react-icons/fc";


const Item = () => {
    const item=useLoaderData()
    const {photoURL,item_name,subcategory_name,price,short_discription,_id,customization,rating,processing_time,stockStatus,email,displayName}=item
    console.log(rating)
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={photoURL} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{short_discription}</a>
				<p className="text-xs dark:text-gray-600">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{displayName}</a>
				</p>
			</div>
			<div className="dark:text-gray-800">
				<p>{subcategory_name}</p>
			</div>
            <div className="flex gap-8"> 
                <p className="font-semibold flex items-center"><MdOutlinePriceCheck size={25} /> Price: <span className="text-[#756908]">{price}</span>$</p>
                <p className="font-semibold flex items-center"> 
                <FcRating size={25} />Rating: { rating}</p>
            </div>
            <div>
                <p className="text-gray-600 text-xl font-bold"> Customization:-{customization}</p>
                <p className="text-purple-400 text-xl font-bold">Stock: {stockStatus}</p>
                <p className="text-pink-800 text-[20px]">Post Time   :      {processing_time}PM</p>
            </div>
		</div>
	</div>
</div>
    );
};

export default Item;