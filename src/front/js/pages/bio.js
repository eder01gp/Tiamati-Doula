import React, { useState } from "react";
import "../../styles/bio.css";
import speechBubble from "../../../img/logo/bocadillo-texto.png";
import speechBubble2 from "../../../img/logo/bocadillo-texto-invertido.png";
import speechBubble3 from "../../../img/logo/bocadillo-texto-3.png";
import speechBubble4 from "../../../img/logo/bocadillo-texto-4.png";

export const Bio = () => {
  const blackANDwhite = {
    WebkitFilter: "grayscale(100%)",
    filter: "grayscale(100%)",
  };
  const [image1, setImage1] = useState(blackANDwhite);
  const [text1, setText1] = useState({ display: "none" });
  const [image2, setImage2] = useState(blackANDwhite);
  const [text2, setText2] = useState({ display: "none" });
  const [image3, setImage3] = useState(blackANDwhite);
  const [text3, setText3] = useState({ display: "none" });
  const [image4, setImage4] = useState(blackANDwhite);
  const [text4, setText4] = useState({ display: "none" });
  const [image5, setImage5] = useState(blackANDwhite);
  const [text5, setText5] = useState({ display: "none" });
  const [image6, setImage6] = useState(blackANDwhite);
  const [text6, setText6] = useState({ display: "none" });
  const [image7, setImage7] = useState(blackANDwhite);
  const [text7, setText7] = useState({ display: "none" });
  const [image8, setImage8] = useState(blackANDwhite);
  const [text8, setText8] = useState({ display: "none" });
  const [image9, setImage9] = useState(blackANDwhite);
  const [text9, setText9] = useState({ display: "none" });
  const [image10, setImage10] = useState(blackANDwhite);
  const [text10, setText10] = useState({ display: "none" });
  const [image11, setImage11] = useState(blackANDwhite);
  const [text11, setText11] = useState({ display: "none" });
  const [image12, setImage12] = useState(blackANDwhite);
  const [text12, setText12] = useState({ display: "none" });

  return (
    <div className="div-bio container">
      <h1 className="text-center mb-5">BIO</h1>
      <div className="justify-content-center d-flex">
        <div className="lines-images-boxes  mx-1 ">
          <div className="img+text p-0">
            <div className="div-img">
              <img
                src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg"
                alt=""
                className="photo"
                style={image1}
                onMouseOver={() => {
                  setImage1(null);
                  setText1({ display: "block" });
                }}
                onMouseLeave={() => {
                  setImage1(blackANDwhite);
                  setText1({ display: "none" });
                }}
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble2}
                alt=""
                style={text1}
                className="bubble1 position-relative"
              />
            </div>
          </div>

          <div className="img+text p-0">
            <div className="div-img">
              <img
                src="https://uploads-ssl.webflow.com/5b516280e4645f724f4db51e/5da51c792977a7f803e2f2cd_HERO%20image-%20Blog%20(4).png"
                alt=""
                className="photo"
                style={image2}
                onMouseOver={() =>
                  setImage2(null) & setText2({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage2(blackANDwhite) & setText2({ display: "none" })
                }
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble}
                alt=""
                style={text2}
                className="bubble2 position-relative"
              />
            </div>
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image3}
                onMouseOver={() =>
                  setImage3(null) & setText3({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage3(blackANDwhite) & setText3({ display: "none" })
                }
                src="https://www.hola.com/imagenes/estar-bien/20190205136904/que-es-una-doula-y-cual-es-su-papel/0-644-478/doula-t.jpg"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble}
                alt=""
                style={text3}
                className="bubble3 position-relative"
              />
            </div>
          </div>
        </div>

        <div className="lines-images-boxes mx-1">
          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image4}
                onMouseOver={() =>
                  setImage4(null) & setText4({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage4(blackANDwhite) & setText4({ display: "none" })
                }
                src="https://supermamaspanama.com/wp-content/uploads/2021/05/Un-Apoyo-Diferente-En-El-Embarazo-758x505.jpg"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble2}
                alt=""
                style={text4}
                className="bubble4 position-relative"
              />
            </div>
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image5}
                onMouseOver={() =>
                  setImage5(null) & setText5({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage5(blackANDwhite) & setText5({ display: "none" })
                }
                src="https://www.clubfamilias.com/sites/default/files/styles/wysiwyg/public/wysiwyg/doula-con-embarazada.jpg?itok=qVdGEwfE"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble}
                alt=""
                style={text5}
                className="bubble5 position-relative"
              />
            </div>
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image6}
                onMouseOver={() =>
                  setImage6(null) & setText6({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage6(blackANDwhite) & setText6({ display: "none" })
                }
                src="https://media.istockphoto.com/photos/midwife-preparing-an-expectant-mother-for-labor-and-childbirth-picture-id1304285543?k=20&m=1304285543&s=612x612&w=0&h=IyWuHTMb0Ag9_mxw8f6E6AfQkzQk8sq1WkZvVdQdKjE="
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble}
                alt=""
                style={text6}
                className="bubble6 position-relative"
              />
            </div>
          </div>
        </div>

        <div className="lines-images-boxes  mx-1">
          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image7}
                onMouseOver={() =>
                  setImage7(null) & setText7({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage7(blackANDwhite) & setText7({ display: "none" })
                }
                src="https://humanosonrisas.com/site/assets/files/1925/istock-923032034.520x0.jpg"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble2}
                alt=""
                style={text7}
                className="bubble7 position-relative"
              />
            </div>
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image8}
                onMouseOver={() =>
                  setImage8(null) & setText8({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage8(blackANDwhite) & setText8({ display: "none" })
                }
                src="https://static.wixstatic.com/media/a27d24_e147bafaa1f449f78db71f9c9338c557~mv2.jpg/v1/fit/w_994%2Ch_663%2Cal_c%2Cq_80/file.jpg"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble}
                alt=""
                style={text8}
                className="bubble8 position-relative"
              />
            </div>
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image9}
                onMouseOver={() =>
                  setImage9(null) & setText9({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage9(blackANDwhite) & setText9({ display: "none" })
                }
                src="https://doulachile.cl/wp-content/uploads/2019/04/pilates-embarazo-doulachile-1024x683.jpeg"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble}
                alt=""
                style={text9}
                className="bubble9 position-relative"
              />
            </div>
          </div>
        </div>

        <div className="lines-images-boxes  mx-1">
          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image10}
                onMouseOver={() =>
                  setImage10(null) & setText10({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage10(blackANDwhite) & setText10({ display: "none" })
                }
                src="https://nabtahealth.com/wp-content/uploads/2020/06/shutterstock_1330903367-1-scaled.jpg"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble3}
                alt=""
                style={text10}
                className="bubble10 position-relative"
              />
            </div>
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image11}
                onMouseOver={() =>
                  setImage11(null) & setText11({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage11(blackANDwhite) & setText11({ display: "none" })
                }
                src="https://i0.wp.com/www.elblogalternativo.com/wp-content/uploads/2009/11/doula-corazon.jpg?resize=450%2C300&ssl=1"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble4}
                alt=""
                style={text11}
                className="bubble11 position-relative"
              />
            </div>
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image12}
                onMouseOver={() =>
                  setImage12(null) & setText12({ display: "block" })
                }
                onMouseLeave={() =>
                  setImage12(blackANDwhite) & setText12({ display: "none" })
                }
                src="https://laclinicadelalactancia.es/wp-content/uploads/2020/04/acompanamiento-doula-parto.jpg"
                alt=""
                className="photo"
              />
            </div>
            <div className="speech-bubble position-absolute">
              <img
                src={speechBubble4}
                alt=""
                style={text12}
                className="bubble12 position-relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
