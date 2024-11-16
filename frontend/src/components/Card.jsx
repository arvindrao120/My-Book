import React from "react";

function Card({ item }) {
  return (
    <>
      <div >
        <div className="card bg-base-100  w-92 px-4  shadow-2xl hover:scale-105 duration-200">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary space-x-3">{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between items-center">
            <button className="btn btn-active btn-accent "> ₹ : {item.price}</button>
              <button className="btn btn-outline btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
