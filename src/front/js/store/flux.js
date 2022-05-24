const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
      token: null,
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
    },
    actions: {},
  };
};

export default getState;
