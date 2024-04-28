import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthProvider, { AuthContext } from "../provider/AuthProvider";
import MyCardSection from "./MyCardSection";

const MyCard = () => {
    const { user } = useContext(AuthContext); // Assuming AuthContext provides user information
    const loaderCards = useLoaderData(); // Assuming useLoaderData fetches card data
    const [data, setData] = useState([]);
const [ customization,setCostumization]=useState('yes')
    useEffect(() => {
        if (loaderCards) {
            const filteredCard = loaderCards.filter(card => card.email === user.email);
            setData(filteredCard);
        }
    }, [loaderCards, user.email]);
        
    const handleChange = e => {
        // Handle changes if needed
        
        const value=e.target.value
        setCostumization(value)
        console.log(value)
        const valueCard=loaderCards.filter(da=>da.customization == value)
        setData(valueCard)
        // location.reload();
    };

    return (
       <div className="mt-4">
         <select className="select w-full max-w-xs"  onChange={handleChange}>
                <option disabled >
                    customization
                </option>
                <option value='yes' >yes</option>
                <option value='No'>No</option>
            </select>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
           
            {
                data.map(card => <MyCardSection key={card._id} card={card}></MyCardSection>)
            }
        </div>
       </div>
    );
};

export default MyCard;
