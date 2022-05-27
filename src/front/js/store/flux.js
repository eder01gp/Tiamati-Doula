const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
      token: null,
      url:
        "https://3001-ederdon-tiamatidoula-f6gaira5d9k.ws-eu46.gitpod.io/" +
        "api",
      users: [],
      user_info: [],
      user_data: [],
    },
    actions: {
      showORcloseFormData: async (value) => {
        setStore({ showForm: value });
      },
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
      // getToken: () => {
      //   localStorage.getItem("token")
      //     ? setStore({ token: true })
      //     : setStore({ token: false });
      // },
    },
  };
};

export default getState;
