const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
      token: null,
      url:
        "https://3001-ederdon-tiamatidoula-082mbsl1bki.ws-eu46.gitpod.io/" +
        "api",
      user_faq: [],
      business_faq: [],
    },

    actions: {
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
