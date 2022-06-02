const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url:
        "https://3001-ederdon-tiamatidoula-f6gaira5d9k.ws-eu46.gitpod.io/" +
        "api",
      logged: null,
      token: null,
      users: [],
      user_info: {},
      user_data: {},
      faq: [
        {
          id: 1,
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer:
            "Nam est neque, semper vitae velit nec, accumsan scelerisque mi. Integer egestas vestibulum posuere. Curabitur laoreet, lacus ut iaculis consectetur, odio dui posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 2,
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer:
            "Nam est neque, semper vitae velit nec, accumsan scelerisque mi. Integer egestas vestibulum posuere. Curabitur laoreet, lacus ut iaculis consectetur, odio dui posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
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
      services: [
        {
          id: 1,
          name: "Sesión acompañamiento",
          type: "session",
          description: "1 hora de resolución de dudas",
          includes: "incluye esto, esto y lo otro",
          price: 30,
          image: "../img/woman-doubts.jpg",
          qty: 1,
          qtyError: "",
          discount: 25,
          selected: false,
          modalSelectedKO: "modal",
          sold_by_unit: true,
        },
        {
          id: 2,
          name: "Bono Sesiones",
          type: "session",
          description: "Pack de horas para resolución de dudas",
          price: 70,
          image: "../img/woman-doubts.jpg",
          qty: 2,
          qtyError: "",
          discount: 0,
          selected: false,
          modalSelectedKO: "modal",
          includes: "incluye esto, esto y lo otro",
          sold_by_unit: true,
        },
        {
          id: 3,
          name: "Plan de parto interactivo",
          type: "access",
          description: "Genera tu propio plan de parto interactivo",
          price: 20,
          image: "../img/woman-doubts.jpg",
          qty: 1,
          qtyError: "",
          discount: 75,
          selected: false,
          modalSelectedKO: "",
          includes: "incluye esto, esto y lo otro",
          sold_by_unit: true,
        },
      ],
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
        }
      },
      logout: () => {
        localStorage.clear();
        setStore({ logged: false });
      },
      getDocuments: () => {},

      getServices: async () => {},
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
    },
  };
};

export default getState;
