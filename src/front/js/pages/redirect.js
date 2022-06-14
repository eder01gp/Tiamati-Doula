import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Redirect = () => {
  const { store, actions } = useContext(Context);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query,"query")

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <section>
      <p>{message}</p>
    </section>
  ) : <p>"There will be a message"</p>;
}


