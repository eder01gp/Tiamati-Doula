import React, { useState } from "react";
import { Calendar } from "../component/calendar";
import "../../styles/appointment.css";

export const Appointment = () => {
  return (
    <div className="appointment">
      <h4 className="text-center">
        <strong>CALENDARIO DE CITAS</strong>
      </h4>
      <div className="float-start">
        <Calendar />
      </div>
    </div>
  );
};
