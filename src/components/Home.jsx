import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Items from "./Items";
import OurShop from "./OurShop";
import Extra from "./Extra";





const Home = () => {
    const items=useLoaderData()
    const sixItems=items.slice(0,6)
    return (
        <div className="mt-20">
            <Banner></Banner>

            
           <div className="mt-48">
           <h2 className="text-center text-xl text-yellow-800 font-bold mb-12 hover:text-yellow-600 ">Craft Items Section</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                
                {
                   sixItems.map(item=><Items key={item._id} item={item}></Items>)
                }
            </div>
           </div>

                <OurShop></OurShop>

                <div className="mt-12 md:mt-48">
                <Extra></Extra>
                </div>
                
            
        </div>
    );
};

export default Home;