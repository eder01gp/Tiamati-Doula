import React, { useState, useContext } from "react";
import "../../styles/bio.css";

export const Bio = () => {
  const [uncolored1, setUncolored1] = useState({ display: "block" });
  const [color1, setColor1] = useState({ display: "none" });
  const [uncolored2, setUncolored2] = useState({ display: "block" });
  const [color2, setColor2] = useState({ display: "none" });
  const [uncolored3, setUncolored3] = useState({ display: "block" });
  const [color3, setColor3] = useState({ display: "none" });
  const [uncolored4, setUncolored4] = useState({ display: "block" });
  const [color4, setColor4] = useState({ display: "none" });
  const [uncolored5, setUncolored5] = useState({ display: "block" });
  const [color5, setColor5] = useState({ display: "none" });
  const [uncolored6, setUncolored6] = useState({ display: "block" });
  const [color6, setColor6] = useState({ display: "none" });
  const [uncolored7, setUncolored7] = useState({ display: "block" });
  const [color7, setColor7] = useState({ display: "none" });
  const [uncolored8, setUncolored8] = useState({ display: "block" });
  const [color8, setColor8] = useState({ display: "none" });
  const [uncolored9, setUncolored9] = useState({ display: "block" });
  const [color9, setColor9] = useState({ display: "none" });
  const [uncolored10, setUncolored10] = useState({ display: "block" });
  const [color10, setColor10] = useState({ display: "none" });
  const [uncolored11, setUncolored11] = useState({ display: "block" });
  const [color11, setColor11] = useState({ display: "none" });
  const [uncolored12, setUncolored12] = useState({ display: "block" });
  const [color12, setColor12] = useState({ display: "none" });

  return (
    <div className="div-bio container">
      <h1 className="text-center mb-5">BIO</h1>
      <div className="lines-images-boxes container m-auto mb-3">
        <div className="image-box">
          <img
            style={color1}
            src="https://www.tasadeparo.com/wp-content/uploads/2010/03/mujertrabajo.jpg"
            alt=""
          />
          <img
            style={uncolored1}
            onMouseOver={() =>
              setUncolored1({ display: "none" }) &
              setColor1({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored1({ display: "block" }) &
              setColor1({ display: "none" })
            }
            src="https://www.tasadeparo.com/wp-content/uploads/2010/03/mujertrabajo.jpg"
            className=" image-b-and-w"
            alt=""
          />
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_01.png?v=1627862575"
            className="img-top2"
            style={{ top: "50%", left: "55%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color2}
            src="https://halitus.com/wp-content/uploads/2019/09/doula_halitus.jpg"
            alt=""
          />
          <img
            style={uncolored2}
            onMouseOver={() =>
              setUncolored2({ display: "none" }) &
              setColor2({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored2({ display: "block" }) &
              setColor2({ display: "none" })
            }
            src="https://halitus.com/wp-content/uploads/2019/09/doula_halitus.jpg"
            className="image-b-and-w"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_02.png?v=1627862575"
            className="img-top2"
            style={{ top: "70%", left: "30%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color3}
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <img
            style={uncolored3}
            onMouseOver={() =>
              setUncolored3({ display: "none" }) &
              setColor3({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored3({ display: "block" }) &
              setColor3({ display: "none" })
            }
            src="data:image/jpeg;base64,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"
            className="image-b-and-w"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_03.png?v=1627862575"
            className="img-top2"
            style={{ top: "30%", left: "90%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color4}
            src="https://www.suavinex.com/livingsuavinex/wp-content/uploads/2019/09/que-es-una-doula.jpg"
            alt=""
          />
          <img
            style={uncolored4}
            onMouseOver={() =>
              setUncolored4({ display: "none" }) &
              setColor4({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored4({ display: "block" }) &
              setColor4({ display: "none" })
            }
            src="https://www.suavinex.com/livingsuavinex/wp-content/uploads/2019/09/que-es-una-doula.jpg"
            className="image-b-and-w mr-0"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_04.png?v=1627862575"
            className="img-top2"
            style={{ top: "80%", left: "10%" }}
            alt=""
          /> */}
        </div>
      </div>
      <div className="lines-images-boxes container m-auto mb-3">
        <div className="image-box">
          <img
            style={color5}
            src="https://supermamaspanama.com/wp-content/uploads/2021/05/Un-Apoyo-Diferente-En-El-Embarazo-758x505.jpg"
            alt=""
          />
          <img
            style={uncolored5}
            onMouseOver={() =>
              setUncolored5({ display: "none" }) &
              setColor5({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored5({ display: "block" }) &
              setColor5({ display: "none" })
            }
            src="https://supermamaspanama.com/wp-content/uploads/2021/05/Un-Apoyo-Diferente-En-El-Embarazo-758x505.jpg"
            className="image-b-and-w"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_05.png?v=1627862575"
            className="img-top2"
            style={{ top: "-30%", left: "70%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color6}
            src="https://www.clubfamilias.com/sites/default/files/styles/wysiwyg/public/wysiwyg/doula-con-embarazada.jpg?itok=qVdGEwfE"
            alt=""
          />
          <img
            style={uncolored6}
            onMouseOver={() =>
              setUncolored6({ display: "none" }) &
              setColor6({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored6({ display: "block" }) &
              setColor6({ display: "none" })
            }
            src="https://www.clubfamilias.com/sites/default/files/styles/wysiwyg/public/wysiwyg/doula-con-embarazada.jpg?itok=qVdGEwfE"
            className="image-b-and-w"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias_06.png?v=1627862575"
            className="img-top2"
            style={{ top: "70%", left: "70%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color7}
            src="https://media.istockphoto.com/photos/midwife-preparing-an-expectant-mother-for-labor-and-childbirth-picture-id1304285543?k=20&m=1304285543&s=612x612&w=0&h=IyWuHTMb0Ag9_mxw8f6E6AfQkzQk8sq1WkZvVdQdKjE="
            alt=""
          />
          <img
            style={uncolored7}
            onMouseOver={() =>
              setUncolored7({ display: "none" }) &
              setColor7({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored7({ display: "block" }) &
              setColor7({ display: "none" })
            }
            src="https://media.istockphoto.com/photos/midwife-preparing-an-expectant-mother-for-labor-and-childbirth-picture-id1304285543?k=20&m=1304285543&s=612x612&w=0&h=IyWuHTMb0Ag9_mxw8f6E6AfQkzQk8sq1WkZvVdQdKjE="
            className="image-b-and-w"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-07.png?v=1627862575"
            className="img-top2"
            style={{ top: "-40%", left: "-40%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color8}
            src="https://laclinicadelalactancia.es/wp-content/uploads/2020/04/acompanamiento-doula-parto.jpg"
            alt=""
          />
          <img
            style={uncolored8}
            onMouseOver={() =>
              setUncolored8({ display: "none" }) &
              setColor8({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored8({ display: "block" }) &
              setColor8({ display: "none" })
            }
            src="https://laclinicadelalactancia.es/wp-content/uploads/2020/04/acompanamiento-doula-parto.jpg"
            className="image-b-and-w mr-0"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-08.png?v=1627862575"
            className="img-top2"
            style={{ top: "70%", left: "-20%" }}
            alt="" 
          />*/}
        </div>
      </div>
      <div className="lines-images-boxes container m-auto mb-3">
        <div className="image-box">
          <img
            style={color9}
            src="https://humanosonrisas.com/site/assets/files/1925/istock-923032034.520x0.jpg"
            alt=""
          />
          <img
            style={uncolored9}
            onMouseOver={() =>
              setUncolored9({ display: "none" }) &
              setColor9({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored9({ display: "block" }) &
              setColor9({ display: "none" })
            }
            src="https://humanosonrisas.com/site/assets/files/1925/istock-923032034.520x0.jpg"
            className="image-b-and-w"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-09.png?v=1627862575"
            className="img-top2"
            style={{ top: "60%", left: "60%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color10}
            src="https://static.wixstatic.com/media/a27d24_e147bafaa1f449f78db71f9c9338c557~mv2.jpg/v1/fit/w_994%2Ch_663%2Cal_c%2Cq_80/file.jpg"
            alt=""
          />
          <img
            style={uncolored10}
            onMouseOver={() =>
              setUncolored10({ display: "none" }) &
              setColor10({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored10({ display: "block" }) &
              setColor10({ display: "none" })
            }
            src="https://static.wixstatic.com/media/a27d24_e147bafaa1f449f78db71f9c9338c557~mv2.jpg/v1/fit/w_994%2Ch_663%2Cal_c%2Cq_80/file.jpg"
            className="image-b-and-w"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-10.png?v=1627862575"
            className="img-top2"
            style={{ top: "-20%", left: "60%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color11}
            src="https://doulachile.cl/wp-content/uploads/2019/04/pilates-embarazo-doulachile-1024x683.jpeg"
            alt=""
          />
          <img
            style={uncolored11}
            onMouseOver={() =>
              setUncolored11({ display: "none" }) &
              setColor11({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored11({ display: "block" }) &
              setColor11({ display: "none" })
            }
            src="https://doulachile.cl/wp-content/uploads/2019/04/pilates-embarazo-doulachile-1024x683.jpeg"
            className="image-b-and-w"
            alt=""
          />
          {/*<img
            src="https://cdn.shopify.com/s/files/1/0570/9443/9120/files/bocadillo-gracias-11.png?v=1627862575"
            className="img-top2"
            style={{ top: "-50%", left: "20%" }}
            alt=""
          /> */}
        </div>
        <div className="image-box">
          <img
            style={color12}
            src="https://i0.wp.com/www.elblogalternativo.com/wp-content/uploads/2009/11/doula-corazon.jpg?resize=450%2C300&ssl=1"
            alt=""
          />
          <img
            style={uncolored12}
            onMouseOver={() =>
              setUncolored12({ display: "none" }) &
              setColor12({ display: "block" })
            }
            onMouseOut={() =>
              setUncolored12({ display: "block" }) &
              setColor12({ display: "none" })
            }
            src="https://i0.wp.com/www.elblogalternativo.com/wp-content/uploads/2009/11/doula-corazon.jpg?resize=450%2C300&ssl=1"
            className="image-b-and-w mr-0"
            alt=""
          />
          {/*<img
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
