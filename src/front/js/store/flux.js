const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
      token: null,
      services: [
        {
          id: 1,
          name: "nombre",
          sold_by_unit: true,
          description:
            "this will be the description of the service. Aenean in tellus consectetur turpis varius posuere a molestie leo.",
          includes: "incluye esto, esto y lo otro",
          price: 20,
        },

        {
          id: 2,
          name: "nombre",
          sold_by_unit: false,
          description:
            "this will be the description of the service. Aenean in tellus consectetur turpis varius posuere a molestie leo.",
          includes: "incluye esto, esto y lo otro",
          price: 20,
        },

        {
          id: 3,
          name: "nombre",
          sold_by_unit: false,
          description:
            "this will be the description of the service. Aenean in tellus consectetur turpis varius posuere a molestie leo.",
          includes: "incluye esto, esto y lo otro",
          price: 20,
        },

        {
          id: 4,
          name: "nombre",
          sold_by_unit: false,
          description:
            "this will be the description of the service. Aenean in tellus consectetur turpis varius posuere a molestie leo.",
          includes: "incluye esto, esto y lo otro",
          price: 20,
        },

        {
          id: 5,
          name: "nombre",
          sold_by_unit: false,
          description:
            "this will be the description of the service. Aenean in tellus consectetur turpis varius posuere a molestie leo.",
          includes: "incluye esto, esto y lo otro",
          price: 20,
        },

        {
          id: 6,
          name: "nombre",
          sold_by_unit: false,
          description:
            "this will be the description of the service. Aenean in tellus consectetur turpis varius posuere a molestie leo.",
          includes: "incluye esto, esto y lo otro",
          price: 20,
        },

        {
          id: 7,
          name: "nombre",
          sold_by_unit: false,
          description:
            "this will be the description of the service. Aenean in tellus consectetur turpis varius posuere a molestie leo.",
          includes: "incluye esto, esto y lo otro",
          price: 20,
        },

        {
          id: 8,
          name: "nombre",
          sold_by_unit: false,
          description:
            "this will be the description of the service. Aenean in tellus consectetur turpis varius posuere a molestie leo.",
          includes: "incluye esto, esto y lo otro",
          price: 20,
        },
      ],
    },
    actions: {},
  };
};

export default getState;
