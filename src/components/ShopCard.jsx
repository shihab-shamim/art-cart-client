

const ShopCard = ({product}) => {
    return (
        <div className="card bg-shadow-xl">
  <figure className="px-10 pt-10">
    <img src={product.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">{product.price} $</h2>
    <p className="card-title text-[#D0BB5E]">{product.name}</p>
    
  </div>
</div>
    );
};

export default ShopCard;