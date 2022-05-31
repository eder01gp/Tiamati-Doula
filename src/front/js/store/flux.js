const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
      token: null,
      faq: [
        {
          id: 1,
          question_id: "a11",
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer_id: "a12",
          answer:
            "Nam est neque, semper vitae velit nec, accumsan scelerisque mi. Integer egestas vestibulum posuere. Curabitur laoreet, lacus ut iaculis consectetur, odio dui posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },

        {
          id: 2,
          question_id: "a13",
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer_id: "a14",
          answer:
            "Nam est neque, semper vitae velit nec, accumsan scelerisque mi. Integer egestas vestibulum posuere. Curabitur laoreet, lacus ut iaculis consectetur, odio dui posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],

      bfaq: [
        {
          id: 3,
          question_id: "a15",
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer_id: "a16",
          answer:
            "Nam est neque, semper vitae velit nec, accumsan scelerisque mi. Integer egestas vestibulum posuere. Curabitur laoreet, lacus ut iaculis consectetur, odio dui posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },

        {
          id: 4,
          question_id: "a17",
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer_id: "a18",
          answer:
            "Nam est neque, semper vitae velit nec, accumsan scelerisque mi. Integer egestas vestibulum posuere. Curabitur laoreet, lacus ut iaculis consectetur, odio dui posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    actions: {},
  };
};

export default getState;
