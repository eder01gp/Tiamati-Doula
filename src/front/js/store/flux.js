const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url: process.env.DOMAIN+"api",
      logged: null,
      token: null,
      user_faq: [],
      business_faq: [],
      users: [],
      user_info: {},
      user_data: {},
      services: [],
      available_dateTime: [],
      dateSelectedTime: [],
      dateSelected: [],
      showDate: false,
      showTime: false,
      appointment: [],
      service_hired_name: [],
      service_hired: [],
      appointmentToModify: [],
      documents: [],
      services_selected: [],
    },

    actions: {
      getUsers: async () => {
        const response = await fetch(getStore().url + "/users");
        const info = await response.json();
        setStore({ users: info.response });
      },

      getUserInfo: async () => {
        try {
          await getActions().verify();
          const resp = await fetch(getStore().url + "/user_info", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          setStore({ user_info: data.info });
          setStore({ user_data: data.data || {} });
        } catch (e) {
          console.log(e);
          setStore({ user_info: null });
          setStore({ user_data: null });
        }
      },

      verify: async () => {
        try {
          const resp = await fetch(getStore().url + "/protected", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          setStore({ logged: data.logged || false });         
        } catch (e) {
          setStore({ logged: false });
          getActions().logout();
        }
      },

      logout: () => {
        localStorage.clear();
        setStore({ logged: false });
      },

      deleteUser: async () => {
        const response = await fetch(getStore().url + "/deleteUser", {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (response.status == 200) {
          getActions().logout();
        }
      },

      getDocuments: async () => {
        try {
          const resp = await fetch(getStore().url + "/documents");
          const data = await resp.json();

          setStore({ documents: data.response });
        } catch (e) {
          console.log("Error getting documents");
        }
      },

      getServices: async () => {
        try {
          const resp = await fetch(getStore().url + "/services");
          const data = await resp.json();

          setStore({ services: data.response });
        } catch (e) {
          console.log("Error getting services");
        }
      },

      servicesQtyChange: (id, newQty, action) => {
        const newService = getStore().services.map((x) => {
          console.log("qty change service", x);
          if (x.service.id == id) {
            if (action == "up" && x.service.qty < 9) {
              newQty = parseInt(x.service.qty) + 1;
              return { ...x, service: { ...x.service, qty: newQty } };
            } else if (action == "down" && x.service.qty > 1) {
              newQty = parseInt(x.service.qty) - 1;
              return { ...x, service: { ...x.service, qty: newQty } };
            } else if (newQty != 0 && newQty > 0 && newQty < 10) {
              return { ...x, service: { ...x.service, qty: newQty } };
            } else return x;
          } else return x;
        });
        setStore({ services: newService });
        getActions().modalSelectedKO();
        getActions().serviceSelectedUpdate();
      },

      modalSelectedKO: () => {
        const newServiceModals = getStore().services.map((x) => {
          if (x.service.qty == 1) {
            return {
              ...x,
              service: { ...x.service, modal_selected_KO: "modal" },
            };
          } else
            return { ...x, service: { ...x.service, modal_selected_KO: "" } };
        });
        setStore({ services: newServiceModals });
      },

      serviceSelectedError: (id) => {
        const newService = getStore().services.map((x) => {
          if (x.service.id == id && x.service.modal_selected_KO != "modal") {
            return {
              ...x,
              service: {
                ...x.service,
                qty_error: "La cantidad debe estar entre 1 y 9",
              },
            };
          } else return x;
        });
        setStore({ services: newService });
      },

      serviceSelectedErrorKO: (id) => {
        const newService = getStore().services.map((x) => {
          return { ...x, service: { ...x.service, qty_error: "" } };
        });
        setStore({ services: newService });
      },

      serviceSelectedUpdate: () => {
        let newServiceSelected = {
          "client_reference_id":localStorage.getItem("ID"),
          "customer_email":localStorage.getItem("email"),
          };  

        let new_line_items = []
        getStore().services.map((x) => {          
          if (x.service.selected) {
            const newLineItem = {
              "price":x["service"]["stripe_price_id"], 
              "quantity":x["service"]["qty"],
            }
            new_line_items.push(newLineItem);
          }
        });
        newServiceSelected["line_items"] = new_line_items;

        setStore({services_selected: newServiceSelected});        
        getActions().modalSelectedKO();
      },

      serviceSelected: (id) => {
        const newService = getStore().services.map((x) => {
          if (x.service.id == id) {
            return { ...x, service: { ...x.service, selected: true } };
          } else return x;
        });
        setStore({ services: newService });
        getActions().serviceSelectedUpdate();
      },

      serviceSelectedKO: (id) => {
        const newService = getStore().services.map((x) => {
          if (x.service.id == id) {
            return { ...x, service: { ...x.service, selected: false } };
          } else return x;
        });
        setStore({ services: newService });
        getActions().serviceSelectedUpdate();
      },
      uploadCloud: async (body) => {
        const options = {
          body,
          method: "POST",
        };
        const resp = await fetch(getStore().url + "/upload", options);
        const data = await resp.json();
        return data.document_created_url;
      },

      getUserFaq: async () => {
        const response = await fetch(getStore().url + "/user_faq");
        const data = await response.json();
        setStore({ user_faq: data.response });
      },

      getBusinessFaq: async () => {
        const response = await fetch(getStore().url + "/business_faq");
        const data = await response.json();
        setStore({ business_faq: data.response });
      },

      getAvailableDateTime: async () => {
        const response = await fetch(getStore().url + "/available_datetime", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setStore({ available_dateTime: data.resp });
      },

      getAvailableTimeofDaySelected: async (date) => {
        const response = await fetch(
          getStore().url + "/available_datetime/" + date,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        setStore({ dateSelectedTime: data.resp });
      },

      setDateSelected: (date) => {
        setStore({ dateSelected: date });
      },

      setShowDate: (bool) => {
        setStore({ showDate: bool });
      },

      setShowTime: (bool) => {
        setStore({ showTime: bool });
      },

      getUserAppointments: async () => {
        const response = await fetch(getStore().url + "/appointment", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setStore({ appointment: data.resp });
      },

      setAppointment: (value) => {
        setStore({ appointment: value });
      },

      deleteAppointment: async (items) => {
        const response = await fetch(getStore().url + "/appointment", {
          method: "DELETE",
          body: JSON.stringify(items),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      },

      getUserServiceHiredName: async () => {
        const response = await fetch(getStore().url + "/services_hired", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setStore({ service_hired: data.services_id_name });
        const service_name = [];
        data.services_id_name.map((x) => {
          for (let i of data.service_hired_id) {
            if (i == x.id) {
              service_name.push(x.service_name);
            }
          }
          setStore({ service_hired_name: service_name });
        });
      },

      setAppointmentToModify: (value) => {
        setStore({ appointmentToModify: value });
      },
        
      createCheckoutSession: async (body) => {
        const options = {
          body: body,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        };
        const resp = await fetch(getStore().url + "/create_checkout_session", options);
        const data = await resp.json();
        console.log(data);
        window.location.replace(data.response);
      },
    },
  };
};

export default getState;
