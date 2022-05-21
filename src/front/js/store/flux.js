const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
      token: null,
      url:
        "https://3001-4geeksacade-reactflaskh-g28jy9vbgjl.ws-eu45.gitpod.io/" +
        "api",
      services: [{
        "id": 1,
        "name": "Sesión acompañamiento",
        "type": "session",
        "description": "1 hora de resolución de dudas",
        "price": 30,
        "image": "../img/woman-doubts.jpg",
        "qty": 1,
        "error": ""
      },
      {
        "id": 2,
        "name": "Bono Sesiones",
        "type": "session",
        "description": "Pack de horas para resolución de dudas",
        "price": 70,
        "image": "../img/woman-doubts.jpg",
        "qty": 1,
        "error": ""
      },
      {
        "id": 3,
        "name": "Plan de parto interactivo",
        "type": "access",
        "description": "Genera tu propio plan de parto interactivo",
        "price": 20,
        "image": "../img/woman-doubts.jpg",
        "qty": 1,
        "error": ""
      }
    ]
    },
    actions: {
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
      getServices: async () => {
        
      },
      serviceSelectedUp: (id) => {
        const newService = getStore().services.map((x)=>{
          if (x.id==id && x.qty<9){
            var newqty = parseInt(x.qty)+1;
            return {...x, qty:newqty}
          }
          else return x
        })
      setStore({services: newService})
      },
      serviceSelectedDown: (id) => {
        const newService = getStore().services.map((x)=>{
          if (x.id==id && x.qty>1){
            var newqty = parseInt(x.qty)-1;
            return {...x, qty:newqty}
          }
          else return x
        })
      setStore({services: newService})
      },
      serviceSelectedChange: (id,newQty) => {
        const newService = getStore().services.map((x)=>{
          if (x.id==id){
            return {...x, qty:newQty}
          }
          else return x
        })
      setStore({services: newService})  

      },
      serviceSelectedError: (id) => {
        const newService = getStore().services.map((x)=>{
          if (x.id==id){
            return {...x, error:"La cantidad debe estar entre 0 y 9"}
          }
          else return x
        })
      setStore({services: newService})
      },
      serviceSelectedErrorKO: (id) => {
        const newService = getStore().services.map((x)=>{
          if (x.id==id){
            return {...x, error:""}
          }
          else return x
        })
      setStore({services: newService})
      }
    },
  };
};

export default getState;
