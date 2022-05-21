const getState = ({ getStore, getActions, setStore }) => {
  return {

    store: {
      logged: null,
      token: null,
      url: "https://3001-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/"+"api"
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
      }
    },
  };
};

export default getState;
