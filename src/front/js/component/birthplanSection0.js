import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { BirthplanSubsection } from "./birthplanSubsection";

export const BirthplanSection0 = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div id="welcome" className="text-center mt-4">
            <h2 id="welcome-title">
              Bienvenida a tu plan de parto interactivo
            </h2>
            <h4 id="welcome-text" className="m-auto mt-4">
              Estas son las instrucciones a seguir:
            </h4>
            <ol className="list-group-numbered">
              <li className="list-group-item mb-2 instructions">
                Lee cuidadosamente las opciones
              </li>
              <li className="list-group-item mb-2 instructions">
                Reproduce el vídeo explicatorio
              </li>
              <li className="list-group-item mb-2 instructions">
                Selecciona la opción u opciones que prefieras
              </li>
              <li className="list-group-item mb-2 instructions">
                Dale al botón "Generar plan de parto" para descargar tu PDF
              </li>
            </ol>
          </div>
      <div id="subsections">
        {store.birthplan_section[props.sectionIndex]
          ? store.birthplan_subsection.map((subsection) => {
              if (
                subsection.birthplan_section_id ==
                store.birthplan_section[props.sectionIndex].id
              ) {
                return <BirthplanSubsection subsection={subsection.id} />;
              }
            })
          : null}
      </div>
    </div>
  );
};

BirthplanSection0.propTypes = {
    subsection: PropTypes.any,
  };
  