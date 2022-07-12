import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { BirthplanSubsection } from "./birthplanSubsection";

export const BirthplanSection = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row mt-3">
      {store.birthplan_section[props.sectionIndex] ? store.birthplan_section[props.sectionIndex].video ? (
      <div className="col-sm-6">
            <div class="ratio ratio-16x9">
              <iframe
                  className="embed-responsive-item"
                  frameBorder="0"
                  allow=" fullscreen"
                  src={store.birthplan_section[props.sectionIndex].video}
                  controls
                  key={props.sectionIndex}
                />
              </div>
            <div className="video mb-5 .img-fluid">
            </div>
            </div>
        ) : null : null}


      <div id="subsections" className="col-sm-6">
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

BirthplanSection.propTypes = {
  sectionIndex: PropTypes.any,
};