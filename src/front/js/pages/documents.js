import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/documents.css";
import { UploadDocs } from "../component/uploadDocs";

export const Documents = () => {
  const { store, actions } = useContext(Context);
  const [ documentIdEdit, setDocumentIdEdit ] = useState(null);

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
                src={document.document_cover_url}
                className="imgCard card-img-top"
                alt=""
                width="auto"
                height="100px"
              />
              <div className="frame04 card-body">
                <h6 className="card-title">{document.document_name}</h6>
                <p className="card-text">
                  {document.document_description}
                </p>
                <div className="frame05 container d-flex flex-row p-0">
                  <div className="frame06A w-75">
                      <button className="btn btn-light w-100" href="" target="_blank" onClick={() => {window.open(document.document_url)}}>
                        Ver
                      </button>
                      <button className="btn btn-light w-100" href="" target="_blank" onClick={() => {setDocumentIdEdit(document.id)}}>
                        Editar
                      </button>
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
        <UploadDocs
        method="POST"
        title= "Subir un nuevo documento"
        btnText= "Subir"
        />
      </div>
      <div className="mt-5"> 
        <UploadDocs
        documentId={documentIdEdit}
        method="PUT"
        title= "Actualizar un documento"
        btnText= "Actualizar"
        />
      </div>
      
      
    </div>
  );
};