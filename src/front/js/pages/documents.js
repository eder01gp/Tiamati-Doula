import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import doc01 from "../../../img/doc01.jpg";
/* import docUrl01 from "../../../img/dum.pdf"; */
import "../../styles/documents.css";
import { Upload } from "../component/upload";

export const Documents = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDocuments();
  }, []);

  return (
    <div className="frame01 container ">
      <h1> Documentos </h1>
      <div className="frame02 row d-flex overflow-auto justify-content-center flex-wrap">
        {store.documents.map((document) => {
          return (
            <div key={document.id} className=" frame03 card m-2" style={{ width: "220px" }}>
              <img
                src={doc01}
                className="imgCard card-img-top"
                alt=""
                width="auto"
                height="100px"
              />
              <div className="frame04 card-body">
                <h6 className="card-title">{document.name}</h6>
                <p className="card-text">
                  {document.description}
                </p>
                <div className="frame05 container d-flex flex-row p-0">
                  <div className="frame06A w-75">
                    <Link to={"/"}>
                      <button className="btn btn-light w-100" href="" target="_blank" onClick={() => {window.open(document.documentUrl)}}>
                        Ver
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                    <p>{}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <Upload/>
      </div>
      
    </div>
  );
};