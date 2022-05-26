import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Upload = () => {
    const { store, actions } = useContext(Context);
    const [files, setFiles] = useState([]);
    const [documentName, setDocumentName] = useState("");

    const upload = (evt) => {
        evt.prevent.default;
        
        let body = new FormData();
        body.append("document",files[0])
        body.append("documentName",documentName)
        const options = {
            body,
            method: "POST"
        }
        fetch(store.url+"/upload",options)
            .then(resp => resp.json())
            .then(data => console.log("Success",data))
            .catch(error => console.log("Error!",error))

    }

    return (
        <div>
            <form onSubmit={upload}>
                <input type="file" onChange={(e)=>setFiles(e.target.files)}/>
                <input type="text" onChange={(e)=>setDocumentName(e.target.value)}/>
                <button>Upload</button>
            </form>
        </div>
    )
}