const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
      token: null,
      url:
        "https://3001-ederdon-tiamatidoula-f6gaira5d9k.ws-eu45.gitpod.io/" +
        "api",
    },
    actions: {},
  };
};

export default getState;
