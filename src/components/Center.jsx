import React from "react";
import img from "../image/amazon--img3.jpg";
import img2 from "../image/amazon--img4.jpeg";
import Products from "./Products";
import prodData from "./ProdData";

export default function Center() {
  return (
    <div className="center--main">
      <div className="center--home">
        <img src={img} alt="image" className="center--amazon--img" />
        <div className="pro1">
          {/* {
          prodData.map((product) => (
            <Products
              key = {product.id}
              id = {product.id}
              img = {product.img}
              detail = {product.detail}
              price = {product.price}
              off = {product.off}
              rating = {product.rating}
            />
          ))
        } */}
          <Products
            key={prodData[0].id}
            id={prodData[0].id}
            img={prodData[0].img}
            detail={prodData[0].detail}
            price={prodData[0].price}
            off={prodData[0].off}
            rating={prodData[0].rating}
          />

          <Products
            key={prodData[1].id}
            id={prodData[1].id}
            img={prodData[1].img}
            detail={prodData[1].detail}
            price={prodData[1].price}
            off={prodData[1].off}
            rating={prodData[1].rating}
          />
          <Products
            key={prodData[2].id}
            id={prodData[2].id}
            img={prodData[2].img}
            detail={prodData[2].detail}
            price={prodData[2].price}
            off={prodData[2].off}
            rating={prodData[2].rating}
          />
          <Products
            key={prodData[3].id}
            id={prodData[3].id}
            img={prodData[3].img}
            detail={prodData[3].detail}
            price={prodData[3].price}
            off={prodData[3].off}
            rating={prodData[3].rating}
          />
        </div>
        <img src={img2} alt="" className="center--img2" />
        <div className="pro1">
          <Products
            key={prodData[4].id}
            id={prodData[4].id}
            img={prodData[4].img}
            detail={prodData[4].detail}
            price={prodData[4].price}
            off={prodData[4].off}
            rating={prodData[4].rating}
          />
          <Products
            key={prodData[5].id}
            id={prodData[5].id}
            img={prodData[5].img}
            detail={prodData[5].detail}
            price={prodData[5].price}
            off={prodData[5].off}
            rating={prodData[5].rating}
          />
          <Products
            key={prodData[6].id}
            id={prodData[6].id}
            img={prodData[6].img}
            detail={prodData[6].detail}
            price={prodData[6].price}
            off={prodData[6].off}
            rating={prodData[6].rating}
          />
          <Products
            key={prodData[7].id}
            id={prodData[7].id}
            img={prodData[7].img}
            detail={prodData[7].detail}
            price={prodData[7].price}
            off={prodData[7].off}
            rating={prodData[7].rating}
          />
        </div>
        <div className="pro1">
          <Products
            key={prodData[8].id}
            id={prodData[8].id}
            img={prodData[8].img}
            detail={prodData[8].detail}
            price={prodData[8].price}
            off={prodData[8].off}
            rating={prodData[8].rating}
          />
          <Products
            key={prodData[9].id}
            id={prodData[9].id}
            img={prodData[9].img}
            detail={prodData[9].detail}
            price={prodData[9].price}
            off={prodData[9].off}
            rating={prodData[9].rating}
          />
          <Products
            key={prodData[10].id}
            id={prodData[10].id}
            img={prodData[10].img}
            detail={prodData[10].detail}
            price={prodData[10].price}
            off={prodData[10].off}
            rating={prodData[10].rating}
          />
        </div>
        <div className="pro1">
          <Products
            key={prodData[11].id}
            id={prodData[11].id}
            img={prodData[11].img}
            detail={prodData[11].detail}
            price={prodData[11].price}
            off={prodData[11].off}
            rating={prodData[11].rating}
          />
          <Products
            key={prodData[12].id}
            id={prodData[12].id}
            img={prodData[12].img}
            detail={prodData[12].detail}
            price={prodData[12].price}
            off={prodData[12].off}
            rating={prodData[12].rating}
          />
          <Products
            key={prodData[13].id}
            id={prodData[13].id}
            img={prodData[13].img}
            detail={prodData[13].detail}
            price={prodData[13].price}
            off={prodData[13].off}
            rating={prodData[13].rating}
          />
          <Products
            key={prodData[14].id}
            id={prodData[14].id}
            img={prodData[14].img}
            detail={prodData[14].detail}
            price={prodData[14].price}
            off={prodData[14].off}
            rating={prodData[14].rating}
          />
        </div>
      </div>
    </div>
  );
}
