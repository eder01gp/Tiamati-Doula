const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url:
        "https://3001-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu46.gitpod.io/" +
        "api",
      logged: null,
      token: null,
      user_faq: [],
      business_faq: [],
      users: [],
      user_info: [],
      user_data: [],
      documents: [
        {
          id: 1,
          name: "Consejos del primer trimestre",
          description: "Las mejoros tips para los primeros meses ",
          documentUrl:
            "https://3000-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/doc01.jpg",
        },
        {
          id: 3,
          name: "Consejos del segundo trimestre",
          description: "Las mejoros tips para los segundos meses ",
          documentUrl:
            "https://3001-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/doc01.jpg",
        },
        {
          id: 7,
          name: "Consejos del tercer trimestre",
          description: "Las mejoros tips para los terceros meses",
          documentUrl:
            "https://3001-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/doc01.jpg",
        },
      ],
      services: [],
    },

    actions: {
      getUsers: async () => {
        const response = await fetch(getStore().url + "/users");
        const info = await response.json();
        setStore({ users: info.response });
      },
      getUserInfo: async () => {
        try {
          const resp = await fetch(getStore().url + "/user_info", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          setStore({ user_info: data.info });
          setStore({ user_data: data.data });
        } catch (e) {
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
        }
      },
      logout: () => {
        localStorage.clear();
        setStore({ logged: false });
      },
      getDocuments: () => {},
      getServices: async () => {
        try {
          const resp = await fetch(getStore().url + "/services");
          const data = await resp.json();
          console.log(data);
          setStore({ services: data.response });
        } catch (e) {
          console.log("Error getting services");
        }
      },
      serviceSelectedQtyChange: (id, newQty, action) => {
        const newService = getStore().services.map((x) => {
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
      serviceSelected: (id) => {
        const newService = getStore().services.map((x) => {
          if (x.service.id == id) {
            return { ...x, service: { ...x.service, selected: true } };
          } else return x;
        });
        setStore({ services: newService });
      },
      serviceSelectedKO: (id) => {
        const newService = getStore().services.map((x) => {
          if (x.service.id == id) {
            return { ...x, service: { ...x.service, selected: false } };
          } else return x;
        });
        setStore({ services: newService });
      },
      serviceSelectedQtyChange: (id, newQty, action) => {
        const newService = getStore().services.map((x) => {
          if (x.id == id) {
            if (action == "up" && x.qty < 9) {
              newQty = parseInt(x.qty) + 1;
              return { ...x, qty: newQty };
            } else if (action == "down" && x.qty > 1) {
              newQty = parseInt(x.qty) - 1;
              return { ...x, qty: newQty };
            } else if (newQty != 0 && newQty > 0 && newQty < 10) {
              return { ...x, qty: newQty };
            } else return x;
          } else return x;
        });
        setStore({ services: newService });
        getActions().modalSelectedKO();
      },
      modalSelectedKO: () => {
        const newServiceModals = getStore().services.map((x) => {
          if (x.qty == 1) {
            return { ...x, modalSelectedKO: "modal" };
          } else return { ...x, modalSelectedKO: "" };
        });
        setStore({ services: newServiceModals });
      },
      serviceSelectedError: (id) => {
        const newService = getStore().services.map((x) => {
          if (x.id == id && x.modalSelectedKO != "modal") {
            return { ...x, qtyError: "La cantidad debe estar entre 0 y 9" };
          } else return x;
        });
        setStore({ services: newService });
      },
      serviceSelectedErrorKO: (id) => {
        const newService = getStore().services.map((x) => {
          return { ...x, qtyError: "" };
        });
        setStore({ services: newService });
      },
      serviceSelected: (id) => {
        const newService = getStore().services.map((x) => {
          if (x.id == id) {
            return { ...x, selected: true };
          } else return x;
        });
        setStore({ services: newService });
      },
      serviceSelectedKO: (id) => {
        const newService = getStore().services.map((x) => {
          if (x.id == id) {
            return { ...x, selected: false };
          } else return x;
        });
        setStore({ services: newService });
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
    },
  };
};
export default getState;
