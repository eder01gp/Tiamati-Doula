import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { BirthplanSection } from "../component/birthplanSection";
import { BirthplanSection0 } from "../component/birthplanSection0";
import { BirthplanSection1 } from "../component/birthplanSection1";
import { BirthplanComment } from "../component/birthplanComment";

export const Birthplan = () => {
  const { store, actions } = useContext(Context);
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    actions.getBirthplanSection();
    actions.getBirthplanAnswer();
    actions.getBirthplanComment();
    actions.getBirthplanSubsection();
  }, []);

  return (
    <div className="container">
      {/* Menu */}
      <nav
        className="navbar navbar-light fixed-top position-relative d-flex flex-column flex-lg-row"
        id="plan-menu"
      >
        <div>
            <button id="pdf-button" className="btn-fill">
              Generar plan de parto
            </button>
        </div>
        <div>
        {store.birthplan_section[sectionIndex] ? (
          <h1 id="title">{store.birthplan_section[sectionIndex].title}</h1>
        ) : null}
        </div>
        <div id="menu-buttons">
          {sectionIndex>0?
          <button
            id="before-button"
            className="btn-slide btn-slide-left my-2 me-2"
            onClick={() => {
              if (sectionIndex>0){
                setSectionIndex(sectionIndex-1)
              }
              }}
          >
            <i className="icon-arrow-left"></i>
            <div>Anterior</div>
          </button>:null}
          {sectionIndex<store.birthplan_section.length-1?
          <button id="after-button" className="btn-slide" onClick={() => {setSectionIndex(sectionIndex+1)}}>
            <div>Siguiente</div>
            <i className="icon-arrow-right"></i>
          </button>:null}
        </div>
      </nav>
      <div className="container">
      {/* Section */}
      {sectionIndex==0?<BirthplanSection0/>:sectionIndex==1?<BirthplanSection1/>:<BirthplanSection sectionIndex={sectionIndex}/>}
      </div>
      <div id="comments" className="accordion">
      <BirthplanComment sectionIndex={sectionIndex}/>
        
      </div>
    </div>
  );
};
