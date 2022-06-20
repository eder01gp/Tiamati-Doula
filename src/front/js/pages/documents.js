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
      <div className="frame02 row d-flex overflow-auto justify-content-center flex-wrap">
        {store.documents.map((document) => {
          return (
            <div
              key={document.id}
              className=" frame03 card m-2"
              style={{ width: "220px" }}
            >
              <img
                src={document.document_cover_url}
                className="imgCard card-img-top"
                alt=""
                width="auto"
                height="100px"
              />
              <div className="frame04 card-body">
                <h6 className="card-title">{document.document_name}</h6>
                <p className="card-text">{document.document_description}</p>
                <div className="frame05 container d-flex flex-row p-0">
                  <div className="frame06A w-75">
                    <button
                      className="btn btn-light w-100"
                      href=""
                      target="_blank"
                      onClick={() => {
                        window.open(document.document_url);
                      }}
                    >
                      Ver
                    </button>
                    <button
                      className="btn btn-light w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                      onClick={() => {
                        setDocumentIdEdit(document.id);
                      }}
                    >
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
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Nuevo documento
          </button>
        </div>
      </div>

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
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              {/* <button type="button" className="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal Actualizar Documento --> */}
      <div
        className="modal fade"
        id="staticBackdrop2"
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
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              {/* <button type="button" className="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
