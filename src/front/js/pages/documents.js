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
      <div className="d-flex justify-content-between"> 
        <h1>Documentos</h1>                    
      </div> 
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
                      <button className="btn btn-light w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" onClick={() => {setDocumentIdEdit(document.id)}}>
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
        <div className="d-flex justify-content-center my-3">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Nuevo documento
        </button>
        </div>
      </div>
      

      {/* <!-- Modal Nuevo Documento --> */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Nuevo Documento</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className="">
              <UploadDocs
              method="POST"
              title= "Subir un nuevo documento"
              btnText= "Subir"
              />
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              {/* <button type="button" class="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal Actualizar Documento --> */}
      <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel2">Cambiar Documento</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className=""> 
            <UploadDocs
            documentId={documentIdEdit}
            method="PUT"
            title= "Cambiar un documento"
            btnText= "Cambiar"
            />
          </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              {/* <button type="button" class="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};