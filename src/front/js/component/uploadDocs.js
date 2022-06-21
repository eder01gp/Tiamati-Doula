import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const UploadDocs = (props) => {
    const { store, actions } = useContext(Context);
    const [fileDocument, setFileDocument] = useState({"document_url":null,"document_cover_url":null});
    const [document, setDocument] = useState({});
    const [alertText, setAlertText] = useState({"document_url":null,"document_cover_url":null});

    useEffect(() => {
        if (props.method == "PUT"){
            let documentEdit = store.documents.find((document) => {
            return document.id == props.documentId;
             });
            setDocument(documentEdit);
        }
    }, [props.documentId]);

    const uploadDocumentCloud = async (file,name) =>{
        let body = new FormData();
        body.append("document",file[name]);      
        const document_url = await actions.uploadCloud(body)
        setDocument({...document, [name]:document_url});
        setAlertText({...alertText, [name]:"Documento subido correctamente"})
    }

    const upload = (evt) => {
        evt.preventDefault();
        //fetch everything

        const options = {
            body: JSON.stringify(document),
            method: props.method,
            headers:{
                'Content-Type': 'application/json'
              }
        }
        fetch(store.url+"/document",options)
            .then(resp => resp.json())
            .then(() => actions.getDocuments())
            .catch(error => console.log("Error!",error))
    }

    return (
        <div className="container">
            <div className="d-flex flex-column">
                <div className="">
                    <p className="">{props.title}</p>
                </div>
                <div>
                    <input type="file" onChange={(e)=>{
                        setFileDocument({...fileDocument, document_url: e.target.files[0]});
                    }
                    }/>
                    <button className="" onClick={()=>{
                        uploadDocumentCloud(fileDocument,"document_url");
                        setAlertText({...alertText, "document_url":"Subiendo archivo..."})
                    }}
                    >Subir</button>
                </div>
                <div className="">
                            {alertText.document_url ? 
                            alertText.document_url == "Subiendo archivo..." ?
                            (<div id="" className="d-inline mx-1">
                                {alertText.document_url}
                            </div>) :
                            (
                            <i className="fa-solid fa-circle-check fa-lg text-success float-start mt-4">
                            <div id="check-data-saved-form" className="d-inline mx-1">
                                {alertText.document_url}
                            </div>
                            </i>
                            ) : null}
                </div>
            </div>
            <div className="d-flex flex-column mt-3">
                <div className="">
                    <p className="">Foto de la portada</p>
                </div>
                <div className="">
                    <input type="file" onChange={(e)=>{
                    setFileDocument({...fileDocument, document_cover_url: e.target.files[0]});
                    }
                    }/>
                    <button className="" onClick={()=>{
                    uploadDocumentCloud(fileDocument,"document_cover_url");
                    setAlertText({...alertText, "document_cover_url":"Subiendo archivo..."});
                    }}
                    >Subir</button>
                </div>
                <div className="">
                    {alertText.document_cover_url ? 
                    alertText.document_cover_url == "Subiendo archivo..." ?
                    (<div id="" className="d-inline mx-1">
                        {alertText.document_cover_url}
                    </div>) :
                    (
                     <i className="fa-solid fa-circle-check fa-lg text-success float-start mt-4">
                    <div id="check-data-saved-form" className="d-inline mx-1">
                        {alertText.document_cover_url}
                    </div>
                    </i>
                    ) : null}
                </div>
            </div>
            <div className="mt-3">
                <p className="">Nombre del documento</p>
                <input type="text" className="ms-4" placeholder={"Nombre del documento"} defaultValue={document? document.document_name : ""  } onChange={(e)=>{
                setDocument({...document, document_name:e.target.value});
                 }
                }/>
            </div>
            <div className="mt-3">
                <p className="">Descripción del documento</p>
                 <input type="text" className="ms-4" placeholder="Descripción del documento" defaultValue={document? document.document_description : ""  } onChange={(e)=>{
                setDocument({...document, document_description:e.target.value});
                 }
                 }/>
            <div>
            <button className="mt-2" onClick={upload}>{props.btnText}</button>
            </div>
            </div>
        </div>
    )
}

UploadDocs.propTypes = {
    documentId: propTypes.any,
    method: propTypes.any,
    title: propTypes.any,
    btnText: propTypes.any,
}