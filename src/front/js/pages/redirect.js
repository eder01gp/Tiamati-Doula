import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const Redirect = () => {
  const { store, actions } = useContext(Context);
  const [message, setMessage] = useState("");
  let history = useHistory();

  const redirect = (goTo) => {
    const timer = setTimeout(() => {
      history.push(goTo);
    }, 5000);
    return (() => {
      clearTimeout(timer);
    })
  }

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query.get(""),"query")

    if (query.get("success")) {
      setMessage("¡Servicio contratado! ¡Muchas gracias! vas a ser redireccionad@ a tu perfil");
      if (localStorage.getItem("rol")==1) redirect("profile_user")
      else if (localStorage.getItem("rol")==2) redirect("profile_company")
      else redirect("profile_user")
    }

    if (query.get("canceled")) {
      setMessage(
        "Pedido cancelado - vas a ser redireccionad@ al carro de compra en 5 segundos."
      );
      redirect("checkout")
    }

    else redirect("loginPage")
  }, []);

  return message ? (
    <section>
      <p className="text-center">{message}</p>
    </section>
  ) : <p className="text-center"> Has sido redireccionad@ aquí por que tu sesión ha caducado o has cerrado sesión, vas a ser redireccionad@ a la página de login en 5 segundos.</p>;
}


