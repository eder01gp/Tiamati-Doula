const getState = ({ getStore, getActions, setStore }) => {
  return {

    store: {
      logged: null,
      token: null,
      url: "https://3001-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/"+"api",
      documents: 
      [{
        "id": 1,
        "name": "Consejos del primer trimestre",
        "description": "Las mejoros tips para los primeros meses ",
        "documentUrl": "https://3000-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/doc01.jpg",
      },
      {
        "id": 3,
        "name": "Consejos del segundo trimestre",
        "description": "Las mejoros tips para los segundos meses ",
        "documentUrl": "https://3001-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/doc01.jpg",
      },
      {
        "id": 7,
        "name": "Consejos del tercer trimestre",
        "description": "Las mejoros tips para los terceros meses",
        "documentUrl": "https://3001-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/doc01.jpg",
      },
      ]
    },
    actions: {
      verify: async () => {
        try {
          const resp = await fetch(getStore().url + "/protected", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization:
                "Bearer " + localStorage.getItem("token"),
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
    },
  };
};

export default getState;
