import { useEffect, useState } from "react";
import { useTypewriter, cursor } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import ShopCard from "./ShopCard";

const OurShop = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("/ourshop.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  
  const [typewriter] = useTypewriter({
    words: [" To Our Shop"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 40,
    cursor,
  });

  return (
    <div className="mt-12 md:mt-48">
      <h2 className="text-center text-xl font-semibold text-yellow-600">
        welcome <span>{typewriter}</span>
      </h2>

     <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-12">
     <Fade
        cascade={true}
        damping={0.5}
        
        
      >
       
       {
            products.map(product=><ShopCard key={product.id} product={product} ></ShopCard>)
        }
       
      </Fade>
     </div>
    </div>
  );
};

export default OurShop;
