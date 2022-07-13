import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const UploadDocs = (props) => {
    const { store, actions } = useContext(Context);
    const [fileDocument, setFileDocument] = useState({"document_url":"","document_cover_url":""});
    const [document, setDocument] = useState({"document_name":"","document_description":""});
    const [alertText, setAlertText] = useState({"document_url":"","document_cover_url":"","uploadDocument":""});
    const [alertTextOK, setAlertTextOK] = useState({"document_url":"","document_cover_url":""});
    

    useEffect(() => {
        if (props.method == "PUT"){
            let documentEdit = store.documents.find((document) => {
            return document.id == props.documentId;
             });
            setDocument(documentEdit);
        }
    }, [props.documentId]);

    useEffect(() => {
        setAlertText({"document_url":null,"document_cover_url":null,"uploadDocument":null});
        setAlertTextOK({"document_url":null,"document_cover_url":null,"uploadDocument":null});
        setDocument({"document_name":"","document_description":""});
        setFileDocument({"document_url":"","document_cover_url":""});
        actions.cleanUploadData(false);
    }, [store.cleanUploadDataBool]);

    const uploadDocumentCloud = async (file,name) =>{
        if (file[name]){
            let body = new FormData();
            body.append("document",file[name]);
            setAlertTextOK({...alertTextOK, [name]:null})     
            setAlertText({...alertText, [name]:"Subiendo archivo..."})     
            const document_url = await actions.uploadCloud(body)
            if (document_url["400"]){
                setAlertTextOK({...alertTextOK, [name]:false});
                setAlertText({...alertText, [name]:`Fallo subiendo el archivo: ${document_url["400"]}`})
            }
            else{
                setDocument({...document, [name]:document_url});
                setAlertTextOK({...alertTextOK, [name]:true});
                setAlertText({...alertText, [name]:"Archivo subido correctamente"})
            }
        }
        else{
            setAlertTextOK({...alertTextOK, [name]:null})  
            setAlertText({...alertText, [name]:"Elige un archivo primero"})
        }
    }

    const upload = (evt) => {
        evt.preventDefault();
        if (document.document_url && document.document_name && document.document_description && document.document_cover_url){
            const options = {
                body: JSON.stringify(document),
                method: props.method,
                headers:{
                    'Content-Type': 'application/json'
                  }
            }
            fetch(store.url+"/document",options)
                .then(resp => resp.json())
                .then(() => {
                    actions.getDocuments()
                    setAlertText({...alertText, "uploadDocument":"Documento añadido correctamente"})
                }
                )
                .catch(error => setAlertText({...alertText, "uploadDocument":"Error: "+error}))
            actions.cleanUploadData(true)
        }
        else {
            setAlertText({...alertText, "uploadDocument":"Por favor rellena todos los campos"})
        }
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
                    }}
                    >Subir documento</button>
                </div>
                <div className="">
                            {alertText.document_url ? 
                            alertTextOK.document_url == null ? 
                               <div className="d-inline mx-1 fw-bold">
                                    {alertText.document_url}
                                </div>
                             : 
                             alertTextOK.document_url == true ? 
                           (
                            <div>
                            <i className="fa fa-check-circle text-success"></i>
                            <div className="d-inline mx-1 text-success">{alertText.document_url}</div>
                            </div>
                            ) :
                            alertTextOK.document_url == false ?
                            (
                            <div>
                            <i className="fa fa-times-circle text-wrong"></i>
                            <div className="d-inline mx-1 text-wrong">{alertText.document_url}</div>
                            </div>
                            ) : null : null}
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
                    }}
                    >Subir portada</button>
                </div>
                <div className="">
                    {alertText.document_cover_url ?
                            alertTextOK.document_cover_url == null ? 
                               <div className="d-inline mx-1 fw-bold">
                                    {alertText.document_cover_url}
                                </div>
                             : 
                             alertTextOK.document_cover_url == true ? 
                           (
                            <div>
                            <i className="fa fa-check-circle text-success"></i>
                            <div className="d-inline mx-1 text-success">{alertText.document_cover_url}</div>
                            </div>
                            ) :
                            alertTextOK.document_cover_url == false ? 
                            (
                            <div>
                            <i className="fa fa-times-circle text-wrong"></i>
                            <div className="d-inline mx-1 text-wrong">{alertText.document_cover_url}</div>
                            </div>
                            ) : null : null}
                </div>
            </div>
            <div className="mt-3">
                <p className="">Nombre del documento</p>
                <input type="text" className="ms-4" placeholder={"Nombre del documento"} value={document.document_name} onChange={(e)=>{
                setDocument({...document, document_name:e.target.value});
                 }
                }/>
            </div>
            <div className="mt-3">
                <p className="">Descripción del documento</p>
                 <input type="text" className="ms-4" placeholder="Descripción del documento" 
                    value={document.document_description}
                    onChange={(e)=>{
                setDocument({...document, document_description:e.target.value});
                 }
                 } />
            <div className="my-2 text-center">
            <button className="btn-fill btn-fill-green my-2" onClick={upload}>{props.btnText}</button>
            </div>
            <div className="">
                {alertText.uploadDocument ? 
                alertText.uploadDocument == "Documento añadido correctamente" ? 
                <div>
                    <i className="fa fa-check-circle text-success"></i>
                    <div className="d-inline mx-1 text-success">{alertText.uploadDocument}</div>
                </div>
                    :
                <div>
                <i className="fa fa-times-circle text-wrong"></i>
                <div className="d-inline mx-1 text-wrong">{alertText.uploadDocument}</div>
                </div>
                    : null }
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