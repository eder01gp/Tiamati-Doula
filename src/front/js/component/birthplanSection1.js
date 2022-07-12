import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { BirthplanSubsection } from "./birthplanSubsection";

export const BirthplanSection1 = (props) => {
  const { store, actions } = useContext(Context);
  const [formInfo, setFormInfo] = useState({});
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    actions.verify();
    setFormInfo({ ...formInfo, user_id: localStorage.getItem("ID") });
  }, []);

  const saveBirthplanForm = async () => {
    const response = await fetch(store.url + "/birthplan_form", {
      body: JSON.stringify(formInfo),
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = response.json();
    if (response.status==200){
      setSaved(true)
    }
    else setSaved(false)

  };

  return (
    <div className="mt-3">
      <div id="form" className="text-center">
            <div className="input-group mb-3">
              <span className="input-group-text" id="name">
                Nombre y apellidos
              </span>
              <input
                type="text"
                className="form-control "
                onChange={(e) =>
                  setFormInfo({ ...formInfo, full_name: e.target.value })
                }
              />
            </div>

            <div className="row mb-3">
              <div className="col input-group">
                <span className="input-group-text" id="age">
                  Edad
                </span>
                <input
                  type="number"
                  className="form-control "
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, age: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="phone">
                  Teléfono de contacto
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col input-group">
                <span className="input-group-text" id="pregnancies">
                  Nº de embarazos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, pregnancy_num: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="births">
                  Nº de partos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, birth_num: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="interruptions">
                  Nº de abortos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({
                      ...formInfo,
                      interruption_num: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="birthdate">
                Fecha probable de parto
              </span>
              <input
                type="date"
                className="form-control"
                onChange={(e) =>
                  setFormInfo({ ...formInfo, birth_date: e.target.value })
                }
              />
            </div>

            <button
              id="save-form-button"
              className="btn btn-lg mb-3"
              onClick={() => {
                saveBirthplanForm();
              }}
            >
              Guardar
            </button>
            {saved != null ? saved ?
            <div>
              <i className="fa fa-check-circle text-success"></i>
              <div className="d-inline mx-1 text-success">"Datos guardados correctamente"</div>
            </div>:
            <div>
            <i className="fa fa-times-circle text-wrong mb-3"></i>
            <div className="d-inline mx-1 text-wrong">"No se han podido guardar los datos"</div>
          </div>:
            null}
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

BirthplanSection1.propTypes = {
    subsection: PropTypes.any,
  };
  