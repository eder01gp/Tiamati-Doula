import React from "react";
import { FormData } from "../component/form_data";
import { useHistory } from "react-router-dom";

export const Stylesheet = () => {
  const history = useHistory();

  /* redirect={() => history.push("/")} */

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 style={{textDecoration:"underline"}}>Styles:</h2>
      <div className="d-flex flex-column text-center my-2">
        <h1>Headline 1</h1>
        <h2>Headline 2 </h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <h6>Headline 6</h6>
        <p>Body / font-family: "Anek Malayalam", sans-serif; font-size: 200;</p>
        <button className="btn-fill my-2">className=".btn-fill"</button>
        <button className="btn-fill btn-fill-green my-2"> className="btn-fill btn-fill-green"</button>
        <button className="btn-fill btn-fill-purple my-2">className="btn-fill btn-fill-purple"</button>
        <button className="btn-fill btn-fill-left my-2">className="btn-fill btn-fill-left"</button>
        <button className="btn-slide my-2">
          <div>className="btn-slide"</div>
          <i className="icon-arrow-right"></i>
        </button>
        <button className="btn-slide btn-slide-left my-2">
          <div>className="btn-slide btn-slide-left"</div>
          <i className="icon-arrow-left"></i>
        </button>
        <div style={{width:"100%", height:"50px"}} className="border-purple-green my-3">className="border-purple-green"</div>
        <div style={{width:"100%", height:"50px"}} className="border-multicolor my-3">className="border-multicolor"</div>
        <div>
          <i className="fa fa-check-circle text-success"></i>
          <div className="d-inline mx-1 text-success">Algo se ha hecho correctamente</div>
        </div>
        <div>
          <i className="fa fa-times-circle text-wrong"></i>
          <div className="d-inline mx-1 text-wrong">Algo no ha ido bien</div>
        </div>
      </div>
      <div className="py-5" >
        <h2 style={{textDecoration:"underline"}}>Colors:</h2>
        <div className="d-flex flex-column align-items-center my-2">
          <div classname="m-2" style={{height: "40px", width: "40px", backgroundColor: "#4e4e56", borderRadius: "50%"}}></div><p>#4e4e56</p>
          <div classname="m-2" style={{height: "40px", width: "40px", backgroundColor: "#5a4b9a", borderRadius: "50%"}}></div><p>#5a4b9a</p>
          <div classname="m-2" style={{height: "40px", width: "40px", backgroundColor: "#8972b2", borderRadius: "50%"}}></div><p>#8972b2</p>
          <div classname="m-2" style={{height: "40px", width: "40px", backgroundColor: "#c5b4d9", borderRadius: "50%"}}></div><p>#c5b4d9</p>
          <div classname="m-2" style={{height: "40px", width: "40px", backgroundColor: "#c9ffe2", borderRadius: "50%"}}></div><p>#c9ffe2</p>
          <div classname="m-2" style={{height: "40px", width: "40px", backgroundColor: "#f1b606", borderRadius: "50%"}}></div><p>#f1b606</p>
          <div classname="m-2" style={{height: "40px", width: "40px", backgroundColor: "#ff5968", borderRadius: "50%"}}></div><p>#ff5968</p>
        </div>
      </div>
    </div>
  )
};
