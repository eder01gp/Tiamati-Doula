const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
      token: null,
      url:
        "https://3001-ederdon-tiamatidoula-f6gaira5d9k.ws-eu45.gitpod.io/" +
        "api",
      users: [],
    },
    actions: {
      getUsers: async () => {
        const response = await fetch(getStore().url + "/users");
        const info = await response.json();
        setStore({ users: info.response });
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
      modifyUsers: (value) => {
        setStore({ users: value });
      },
      checkToken: () => {
        if (
          localStorage.getItem("token") != null ||
          localStorage.getItem("token") != ""
        ) {
          setStore({ token: true });
        }
      },
    },
  };
};

export default getState;
