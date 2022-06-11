import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Payment = () => {
  const { store, actions } = useContext(Context);
  const [message, setMessage] = useState("");

  const ProductDisplay = () => (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
        </div>
      </div>
        <button onClick={()=>{actions.createCheckoutSession()}}>
          Checkout
        </button>
    </section>
  );

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  
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
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}


