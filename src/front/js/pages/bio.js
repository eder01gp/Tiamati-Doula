import React, { useState } from "react";
import "../../styles/bio.css";
import speechBubble1 from "../../../img/logo/speechBubble1.png";
import speechBubble2 from "../../../img/logo/speechBubble2.png";

import speechBubble3 from "../../../img/logo/speechBubble3.png";

import speechBubble4 from "../../../img/logo/speechBubble4.png";

export const Bio = () => {
  const blackANDwhite = {
    WebkitFilter: "grayscale(100%)",
    filter: "grayscale(100%)",
  };
  const [image1, setImage1] = useState(blackANDwhite);
  const [text1, setText1] = useState(false);
  const [image2, setImage2] = useState(blackANDwhite);
  const [text2, setText2] = useState(false);
  const [image3, setImage3] = useState(blackANDwhite);
  const [text3, setText3] = useState(false);
  const [image4, setImage4] = useState(blackANDwhite);
  const [text4, setText4] = useState(false);
  const [image5, setImage5] = useState(blackANDwhite);
  const [text5, setText5] = useState(false);
  const [image6, setImage6] = useState(blackANDwhite);
  const [text6, setText6] = useState(false);
  const [image7, setImage7] = useState(blackANDwhite);
  const [text7, setText7] = useState(false);
  const [image8, setImage8] = useState(blackANDwhite);
  const [text8, setText8] = useState(false);
  const [image9, setImage9] = useState(blackANDwhite);
  const [text9, setText9] = useState(false);
  const [image10, setImage10] = useState(blackANDwhite);
  const [text10, setText10] = useState(false);
  const [image11, setImage11] = useState(blackANDwhite);
  const [text11, setText11] = useState(false);
  const [image12, setImage12] = useState(blackANDwhite);
  const [text12, setText12] = useState(false);

  return (
    <div className="div-bio container">
      <h1 className="text-center mb-3 mt-3">BIO</h1>
      <div className="justify-content-center d-flex">
        {/* LINE 1 */}
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
                  setText1(true);
                }}
                onMouseLeave={() => {
                  setImage1(blackANDwhite);
                  setText1(false);
                }}
              />
            </div>
            {text1 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble2}
                  alt=""
                  className="bubble1 position-relative"
                />
              </div>
            ) : null}
          </div>

          <div className="img+text p-0">
            <div className="div-img">
              <img
                src="https://uploads-ssl.webflow.com/5b516280e4645f724f4db51e/5da51c792977a7f803e2f2cd_HERO%20image-%20Blog%20(4).png"
                alt=""
                className="photo"
                style={image2}
                onMouseOver={() => setImage2(null) & setText2(true)}
                onMouseLeave={() => setImage2(blackANDwhite) & setText2(false)}
              />
            </div>
            {text2 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble1}
                  alt=""
                  className="bubble2 position-relative"
                />
              </div>
            ) : null}
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image3}
                onMouseOver={() => setImage3(null) & setText3(true)}
                onMouseLeave={() => setImage3(blackANDwhite) & setText3(false)}
                src="https://www.hola.com/imagenes/estar-bien/20190205136904/que-es-una-doula-y-cual-es-su-papel/0-644-478/doula-t.jpg"
                alt=""
                className="photo"
              />
            </div>
            {text3 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble1}
                  alt=""
                  className="bubble3 position-relative"
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* LINE 2 */}
        <div className="lines-images-boxes mx-1">
          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image4}
                onMouseOver={() => setImage4(null) & setText4(true)}
                onMouseLeave={() => setImage4(blackANDwhite) & setText4(false)}
                src="https://supermamaspanama.com/wp-content/uploads/2021/05/Un-Apoyo-Diferente-En-El-Embarazo-758x505.jpg"
                alt=""
                className="photo"
              />
            </div>
            {text4 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble2}
                  alt=""
                  className="bubble4 position-relative"
                />
              </div>
            ) : null}
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image5}
                onMouseOver={() => setImage5(null) & setText5(true)}
                onMouseLeave={() => setImage5(blackANDwhite) & setText5(false)}
                src="https://www.clubfamilias.com/sites/default/files/styles/wysiwyg/public/wysiwyg/doula-con-embarazada.jpg?itok=qVdGEwfE"
                alt=""
                className="photo"
              />
            </div>
            {text5 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble1}
                  alt=""
                  className="bubble5 position-relative"
                />
              </div>
            ) : null}
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image6}
                onMouseOver={() => setImage6(null) & setText6(true)}
                onMouseLeave={() => setImage6(blackANDwhite) & setText6(false)}
                src="https://media.istockphoto.com/photos/midwife-preparing-an-expectant-mother-for-labor-and-childbirth-picture-id1304285543?k=20&m=1304285543&s=612x612&w=0&h=IyWuHTMb0Ag9_mxw8f6E6AfQkzQk8sq1WkZvVdQdKjE="
                alt=""
                className="photo"
              />
            </div>
            {text6 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble1}
                  alt=""
                  className="bubble6 position-relative"
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* LINE 3 */}
        <div className="lines-images-boxes  mx-1">
          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image7}
                onMouseOver={() => setImage7(null) & setText7(true)}
                onMouseLeave={() => setImage7(blackANDwhite) & setText7(false)}
                src="https://humanosonrisas.com/site/assets/files/1925/istock-923032034.520x0.jpg"
                alt=""
                className="photo"
              />
            </div>
            {text7 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble2}
                  alt=""
                  className="bubble7 position-relative"
                />
              </div>
            ) : null}
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image8}
                onMouseOver={() => setImage8(null) & setText8(true)}
                onMouseLeave={() => setImage8(blackANDwhite) & setText8(false)}
                src="https://static.wixstatic.com/media/a27d24_e147bafaa1f449f78db71f9c9338c557~mv2.jpg/v1/fit/w_994%2Ch_663%2Cal_c%2Cq_80/file.jpg"
                alt=""
                className="photo"
              />
            </div>
            {text8 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble1}
                  alt=""
                  className="bubble8 position-relative"
                />
              </div>
            ) : null}
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image9}
                onMouseOver={() => setImage9(null) & setText9(true)}
                onMouseLeave={() => setImage9(blackANDwhite) & setText9(false)}
                src="https://doulachile.cl/wp-content/uploads/2019/04/pilates-embarazo-doulachile-1024x683.jpeg"
                alt=""
                className="photo"
              />
            </div>
            {text9 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble1}
                  alt=""
                  className="bubble9 position-relative"
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* LINE 4 */}
        <div className="lines-images-boxes  mx-1">
          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image10}
                onMouseOver={() => setImage10(null) & setText10(true)}
                onMouseLeave={() =>
                  setImage10(blackANDwhite) & setText10(false)
                }
                src="https://nabtahealth.com/wp-content/uploads/2020/06/shutterstock_1330903367-1-scaled.jpg"
                alt=""
                className="photo"
              />
            </div>
            {text10 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble3}
                  alt=""
                  className="bubble10 position-relative"
                />
              </div>
            ) : null}
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image11}
                onMouseOver={() => setImage11(null) & setText11(true)}
                onMouseLeave={() =>
                  setImage11(blackANDwhite) & setText11(false)
                }
                src="https://i0.wp.com/www.elblogalternativo.com/wp-content/uploads/2009/11/doula-corazon.jpg?resize=450%2C300&ssl=1"
                alt=""
                className="photo"
              />
            </div>
            {text11 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble4}
                  alt=""
                  className="bubble11 position-relative"
                />
              </div>
            ) : null}
          </div>

          <div className="img+text  p-0">
            <div className="div-img">
              <img
                style={image12}
                onMouseOver={() => setImage12(null) & setText12(true)}
                onMouseLeave={() =>
                  setImage12(blackANDwhite) & setText12(false)
                }
                src="https://laclinicadelalactancia.es/wp-content/uploads/2020/04/acompanamiento-doula-parto.jpg"
                alt=""
                className="photo"
              />
            </div>
            {text12 ? (
              <div className="speech-bubble position-absolute">
                <img
                  src={speechBubble4}
                  alt=""
                  className="bubble12 position-relative"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
