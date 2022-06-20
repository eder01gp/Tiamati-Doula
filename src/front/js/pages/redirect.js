import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const Redirect = () => {
  const { store, actions } = useContext(Context);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query,"query")

    if (query.get("success")) {
      setMessage("¡Servicio contratado! Muchas gracias");
    }

    if (query.get("canceled")) {
      setMessage(
        "Pedido cancelado - puedes volver al carro de compra y continuar."
      );
    }
  }, []);

  return message ? (
    <section>
      <p>{message}</p>
    </section>
  ) : <p className="text-center"> Has sido redireccionad@ aquí por que tu sesión ha caducado, puedes loguearte de nuevo :)</p>;
}


