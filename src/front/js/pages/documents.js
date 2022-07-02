import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/documents.css";
import { UploadDocs } from "../component/uploadDocs";

export const Documents = () => {
  const { store, actions } = useContext(Context);
  const [documentIdEdit, setDocumentIdEdit] = useState(null);

  useEffect(() => {
    actions.getDocuments();
  }, []);

  return (
    <div className="frame01 container ">
      <div className="d-flex justify-content-between">
        <h1>Documentos</h1>
      </div>
      <div className="frame02 d-flex overflow-auto justify-content-center flex-wrap mb-5">
        {store.documents.map((document) => {
          return (
            <div className="">
            <div
              key={document.id}
              className="frame03 card m-3"
              style={{ width: "220px", height: "500px" }}
            >
              <img
                src={document.document_cover_url}
                className="imgCard card-img-top my-2"
                alt=""
                width="auto"
                height="150px"
              />
              <div className="frame04 card-body d-flex flex-column justify-content-between">
                <div>
                  <h6 className="card-title">{document.document_name}</h6>
                  <p className="card-text">{document.document_description}</p>
                </div>
                <div className="py-2">
                  
                    <button
                      id="doc-button"
                      className="fill w-100"
                      target="_blank"
                      onClick={() => {
                        window.open(document.document_url);
                      }}
                    >
                      Ver
                    </button>
                    {localStorage.getItem("rol")==3 ? 
                    <div>
                      <button
                        className="btn-fill btn-fill-green w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropUpdate"
                        onClick={() => {
                          setDocumentIdEdit(document.id);
                        }}
                      >
                        Editar
                      </button>
                      <button
                      className="btn-fill btn-fill-green w-100"
                      data-bs-toggle="modal"
                      data-bs-target={"#staticBackdrop"+document.id}
                    >
                      Eliminar
                    </button>
                  </div>:null}  
                </div>
              </div>
            </div>
                  {/* <!-- Modal Eliminar Doc --> */}
              <div className="modal fade" id={"staticBackdrop"+document.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Eliminar documento</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    {document.document_name}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{actions.deleteDocument(document.id)}}>Si</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        {localStorage.getItem("rol")==3 ? <div className="d-flex justify-content-center my-5">
          <button
            type="button"
            className="btn-fill"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={()=>{actions.cleanUploadData(true)}}
          >
            Nuevo documento
          </button>
        </div>:null}
      {/* <!-- Modal Nuevo Documento --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Nuevo Documento
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="">
                <UploadDocs
                  method="POST"
                  title="Subir un nuevo documento"
                  btnText="Subir"
                  activateUse="True"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-fill"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              {/* <button type="button" className="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal Actualizar Documento --> */}
      <div
        className="modal fade"
        id="staticBackdropUpdate"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel2">
                Cambiar Documento
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="">
                <UploadDocs
                  documentId={documentIdEdit}
                  method="PUT"
                  title="Cambiar un documento"
                  btnText="Cambiar"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-fill"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              {/* <button type="button" className="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
