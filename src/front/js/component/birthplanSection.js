import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { BirthplanSubsection } from "./birthplanSubsection";
import { BirthplanComment } from "./birthplanComment";
import "../../styles/birthplan.css";
import "../../styles/index.css";
import { CheckboxTiamati } from "./checkboxTiamati";

export const BirthplanSection = ({ section, sectionIndex, subsections }) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        {store.birthplan_section[sectionIndex] ? (
          <div>
            <div className="video row mb-5">
              <iframe
                width="640"
                height="360"
                frameBorder="0"
                allow=" fullscreen"
                src={store.birthplan_section[sectionIndex].video}
                controls
              />
            </div>
          </div>
        ) : null}
      </div>

      <div id="subsections">
        {store.birthplan_section[sectionIndex]
          ? store.birthplan_subsection.map((subsection) => {
              if (
                subsection.birthplan_section_id ==
                store.birthplan_section[sectionIndex].id
              ) {
                return <BirthplanSubsection subsection={subsection.id} />;
              }
            })
          : null}
      </div>
    </div>
  );
};
