import React, { useState, useContext } from "react";

export const Bio = () => {
  return (
    <div className="div-bio container">
      <h1 className="text-center mb-5">BIO</h1>
      <div className="lines-images-boxes container">
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-1-1.jpg"
            alt=""
            className="image-b-and-w"
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-1-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          /> */}
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_01.png?v=1627862575"
            className="img-top2"
            style={{ top: "50%", left: "55%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-2-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-2-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_02.png?v=1627862575"
            className="img-top2"
            style={{ top: "70%", left: "30%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-3-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-3-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_03.png?v=1627862575"
            className="img-top2"
            style={{ top: "30%", left: "90%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-4-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-4-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_04.png?v=1627862575"
            className="img-top2"
            style={{ top: "80%", left: "10%" }}
            alt=""
          /> */}
        </div>
      </div>
      <div className="lines-images-boxes container">
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-5-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-5-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_05.png?v=1627862575"
            className="img-top2"
            style={{ top: "-30%", left: "70%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-6-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-6-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_06.png?v=1627862575"
            className="img-top2"
            style={{ top: "70%", left: "70%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-7-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-7-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-07.png?v=1627862575"
            className="img-top2"
            style={{ top: "-40%", left: "-40%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-8-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-8-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-08.png?v=1627862575"
            className="img-top2"
            style={{ top: "70%", left: "-20%" }}
            alt="" 
          />*/}
        </div>
      </div>
      <div className="lines-images-boxes container">
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-9-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-9-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-09.png?v=1627862575"
            className="img-top2"
            style={{ top: "60%", left: "60%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-10-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-10-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-10.png?v=1627862575"
            className="img-top2"
            style={{ top: "-20%", left: "60%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-11-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-11-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-11.png?v=1627862575"
            className="img-top2"
            style={{ top: "-50%", left: "20%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-12-1.jpg"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/thanks-12-2.jpg"
            className="img-top image-b-and-w"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-12.png?v=1627862575"
            className="img-top2"
            style={{ top: " 80%", left: "-60%" }}
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};
