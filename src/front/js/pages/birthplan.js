import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";
import { Navbar } from "../component/navbar";
import { CheckboxTiamati } from "../component/checkboxTiamati";
import { MultiSelectTiamati } from "../component/multiSelectTiamati";
import { Link } from "react-router-dom";

export const Birthplan = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Acompañamiento",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo estar acompañada permanentemente por la persona que yo decida, incluso en caso de cesárea. Mi acompañante",
          checked: false,
          input_text: "",
          multiselect: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo estar acompañada solo por la matrona y la auxiliar de enfermería.",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username1",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 2,
      title: "En dilatación",
      subtitle: "Espacio físico",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "No tengo preferencias específicas.",
          checked: false,
          multiselect: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Solicito que se favorezca la intimidad en todas las fases del parto, que se fomente un ambiente de silencio, baja luz y temperatura agradable.",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
        {
          id: 2,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 3,
      title: "En dilatación",
      subtitle: "Intimidad",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Se me facilitará, en lo posible, la privacidad en todo momento del proceso.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo que los profesionales que entren en la sala de dilatación se presenten y me informen de su función.",
          checked: false,
          multiselect: true,
        },
        {
          id: 3,
          type: "checkbox",
          text: "Deseo que en el caso de que personal en formación quiera estar presente, me pida mi consentimiento antes de entrar.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
        {
          id: 2,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
        {
          id: 3,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 4,
      title: "En dilatación",
      subtitle: "Autonomía personal",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo usar mi propia ropa.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo poner una lista de música.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 5,
      title: "Asistencia y cuidados",
      subtitle: "Via venosa",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "No me opongo a que me canalicen una vía venosa de rutina, pero deseo ser informada y consentir, antes de la introducción de algún tipo de fármaco o líquido.",
          checked: false,
          multiselect: false,
        },

        {
          id: 2,
          type: "checkbox",
          text: "Solicito que no se me canalice una vía venosa de rutina. Se me puede canalizar en el momento en que surja la necesidad.",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 6,
      title: "Asistencia y cuidados",
      subtitle: "Alimentos y bebidas",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Solicito poder ingerir bebidas y/o alimentos livianos.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 7,
      title: "Asistencia y cuidados",
      subtitle: "Intervenciones 1",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo que me pongan un enema por motivos personales.",
          checked: false,
          multiselect: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: "No deseo que me pongan un enema. ",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 8,
      title: "Asistencia y cuidados",
      subtitle: "Intervenciones 2",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "No deseo sondaje vesical de rutina.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "eseo que se respete la duración fisiológica del parto. Por rutina, no deseo intervenciones para inducir o acelerar el parto, solamente en situaciones de emergencia.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 9,
      title: "Tactos vaginales",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "De ser necesario, permito que se me haga un tacto vaginal cada 4 horas, avisándome con antelación y, si es posible, siempre por la misma persona. De ser necesarios tactos adicionales, se me explicarán los motivos.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "En el caso que algún personal sanitario desee realizar un tacto por motivos de formación, deberá pedir mi consentimiento.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 10,
      title: "Monitorización",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Solicito monitorización intermitente para el control del bienestar fetal, para mi comodidad y para tener libertad de movimiento. Si existe necesidad clínica de monitorización continua, deseo que se me informe del motivo. En este caso, si es posible deseo un sistema inalámbrico de monitoreo fetal.",
          checked: false,
          multiselect: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo monitorización continua durante el trabajo de parto y que permita movimiento.",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 11,
      title: "Alivio del dolor - Métodos farmacológicos 1",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo analgesia epidural caminando (Walking/Mobile epidural).",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 12,
      title: "Alivio del dolor - Métodos farmacológicos 2",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo analgesia epidural lo antes posible.",
          checked: false,
          multiselect: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: "No descarto solicitar analgesia epidural si la necesito. ",
          checked: false,
          multiselect: false,
        },
        {
          id: 1,
          type: "checkbox",
          text: "No deseo que se me ofrezca ningún tipo de analgesia farmacológica, salvo que yo lo solicite.",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 13,
      title: "Alivio del dolor - Métodos no farmacológicos",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Solicito que se me ofrezcan métodos no farmacológicos de alivio del dolor durante la dilatación.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo poder caminar durante la dilatación.",
          checked: false,
          multiselect: true,
        },
        {
          id: 3,
          type: "checkbox",
          text: "Deseo que los profesionales que me atiendan me orienten sobre las mejores posturas en cada momento, y poder elegir.",
          checked: false,
          multiselect: true,
        },
        {
          id: 4,
          type: "checkbox",
          text: "Deseo que se me proporcione material de apoyo (pelotas, silla de partos, bolsas de calor). Especificar:",
          checked: false,
          input_text: "",
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },

    {
      id: 14,
      title: "En el expulsivo",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo elegir la posición/lugar para el momento del expulsivo.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo hacer los pujos libremente, sin que se me dirija. En el caso que necesite orientación, la solicitaré",
          checked: false,
          multiselect: true,
        },
        {
          id: 3,
          type: "checkbox",
          text: "Deseo que se haga uso selectivo de la episiotomía, y sólo se realice si es estrictamente necesaria, previa información.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 15,
      title: "En el caso de cesárea",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Solicito información y consentimiento previo a la cesárea de urgencia.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo que mi acompañante esté presente en el quirófano.",
          checked: false,
          multiselect: true,
        },
        {
          id: 3,
          type: "checkbox",
          text: "Durante la cirugía, deseo una atmósfera respetuosa y de silencio.",
          checked: false,
          multiselect: true,
        },
        {
          id: 4,
          type: "checkbox",
          text: "Solicito que no me aten los brazos.",
          checked: false,
          multiselect: true,
        },
        {
          id: 5,
          type: "checkbox",
          text: "Deseo que el bebé se coloque encima de mi pecho desde el primer momento, permitiendo su adaptación y el inicio de la lactancia en el quirófano si es posible. Si esto no fuera posible por razones médicas y no de protocolo, deseo que mi acompañante pueda realizar el contacto piel con piel en el momento del nacimiento.",
          checked: false,
          multiselect: true,
        },
        {
          id: 6,
          type: "checkbox",
          text: "Deseo que se baje la cortinilla para ver a mi bebe salir.",
          checked: false,
          multiselect: true,
        },
        {
          id: 7,
          type: "checkbox",
          text: "Deseo que se pase una gasa estéril por mi vagina antes de nacer el bebé, y al momento del nacimiento que se pase la gasa por su boca, cara y todo el cuerpo.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 16,
      title: "En el alumbramiento",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo un alumbramiento espontáneo, a no ser que haya alguna emergencia que justifique lo contrario.",
          checked: false,
          multiselect: false,
        },

        {
          id: 2,
          type: "checkbox",
          text: " Deseo un alumbramiento dirigido",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 17,
      title: "En el alumbramiento",
      subtitle: "Placenta",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Quiero que se me entregue la placenta.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Me gustaría poder poner la placenta en una hoja en blanco, y hacer así un dibujo con ella",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 18,
      title: "Cordón umbilical",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: " Deseo que el cordón umbilical deje de latir antes de cortarlo y toda la sangre pase desde la placenta al bebé.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo preservar las células madres del cordón umbilical para criopreservación, siguiendo los procedimientos del kit que llevaré al hospital.",
          checked: false,
          multiselect: true,
        },
        {
          id: 3,
          type: "checkbox",
          text: "Deseo que mi pareja corte el cordón umbilical, si es posible.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 19,
      title: "Cuidados del recién nacido (R.N.)",
      subtitle: "Atención al R.N.",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo que se realice el piel con piel de forma inmediata al nacimiento. Deseo que hagan las primeras intervenciones necesarias sin interrumpir el piel con piel.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "En caso de que yo no estuviera en condiciones de realizar el piel con piel de inmediato, deseo que él bebe esté con mi acompañante realizando el piel con piel.",
          checked: false,
          multiselect: true,
        },
        {
          id: 3,
          type: "checkbox",
          text: "Solicito que se pospongan, después de las primeras dos horas, las exploraciones tales como el peso y medición, y que se realicen en mi presencia o del acompañante.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 20,
      title: "Cuidados del recién nacido (R.N.)",
      subtitle: "Profilaxis ocular",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo que se administre profilaxis ocular (pomada oftálmica) para la oftalmía neonatal a partir de las 2 h de vida.",
          checked: false,
          multiselect: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: " No deseo que se administre la profilaxis ocular.",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 21,
      title: "Cuidados del recién nacido (R.N.)",
      subtitle: "Profilaxis con Vitamina K",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo que se administre la profilaxis antihemorrágica habitual al recién nacido con vitamina K intramuscular a partir de las 2 h de vida. ",
          checked: false,
          multiselect: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: "No deseo que se administre la profilaxis con Vitamina k intramuscular, pero consiento en la profilaxis con vitamina K vía oral y me comprometo a administrarla conforme a la pauta que se me indica.",
          checked: false,
          multiselect: false,
        },
        {
          id: 3,
          type: "checkbox",
          text: "No deseo la administración de la profilaxis antihemorrágica con vitamina K.",
          checked: false,
          multiselect: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 22,
      title: "Cuidados del recién nacido (R.N.)",
      subtitle: "Cuidados del recién nacido",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo realizar yo misma, en la presencia de mi acompañante, los cuidados e higiene de mi bebé. Y recibir personalmente, junto con mi acompañante, cualquier enseñanza de los cuidados al bebe. ",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo poder elegir el momento del primer baño de mi bebe. ",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 23,
      title: "Cuidados del recién nacido (R.N.)",
      subtitle: "Realización de las pruebas de cribados",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920630/plan%20parto/video_baby_pjrbou.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo estar presente, o que lo esté mi acompañante, durante las pruebas de cribado neonatal.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo que la realización de las pruebas de cribado se realice coincidiendo con una toma del bebé.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 24,
      title: "Alimentación del recién nacido 1",
      subtitle: null,
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo lactancia materna exclusiva y que se me facilite su inicio lo antes posible desde el nacimiento. Y que no se administren biberones de suero, chupetes ni tetinas, sin mi consentimiento.",
          checked: false,
          multiselect: true,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Deseo lactancia materna exclusiva y que se me facilite su inicio lo antes posible desde el nacimiento. Y que no se administren biberones de suero, chupetes ni tetinas, sin mi consentimiento. Además Deseo información escrita y verbal sobre grupos de apoyo a la lactancia materna, talleres u otra documentación de apoyo.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
    {
      id: 25,
      title: "Alimentación del recién nacido 2",
      subtitle: "Apoyo",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1655920629/plan%20parto/video_pregnant_yls8dn.mp4",

      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Deseo información escrita y verbal sobre grupos de apoyo a la lactancia materna, talleres u otra documentación de apoyo.",
          checked: false,
          multiselect: true,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Pellentesque bibendum facilisis ex, in mollis arcu tempor quis. Vestibulum eget enim porttitor, egestas justo non, suscipit urna. Vestibulum sodales nibh et dolor efficitur efficitur. Aenean cursus aliquet odio consequat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus, elit vitae laoreet consequat, quam sem ullamcorper mi, non blandit mi libero vitae orci.",
        },
      ],
    },
  ]);

  if (sectionIndex == 2) {
    console.log(sections[sectionIndex - 2].answer[0]);
  }

  useEffect(() => {
    actions.verify();
    setFormInfo({ ...formInfo, user_id: localStorage.getItem("ID") });
  }, []);

  const saveBirthplanForm = async () => {
    const response = await fetch(store.url + "/birthplan_form", {
      body: JSON.stringify(formInfo),
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = response.json();
  };

  return (
    <div className="container" id="section-container">
      {/* <div className="row text-center" id="plan-title">
        <h1>Plan de parto interactivo</h1>
      </div> */}
      <div className="row" id="birthplan">
        {/* Menu */}
        <nav
          className="navbar navbar-light fixed-top position-relative"
          id="plan-menu"
        >
          <div>
            <div>
              <button id="pdf-button" className="fill">
                Generar plan de parto
              </button>
            </div>
          </div>

          <div id="menu-buttons">
            <button
              id="before-button"
              className="fill me-2"
              onClick={() => {
                if (sectionIndex !== 0) {
                  setSectionIndex((sectionIndex) => sectionIndex - 1);
                }
              }}
            >
              Anterior
            </button>
            <button
              id="after-button"
              className="fill"
              onClick={() => {
                if (sectionIndex !== sections.length + 1) {
                  setSectionIndex((sectionIndex) => sectionIndex + 1);
                }
              }}
            >
              Siguiente
            </button>
          </div>
        </nav>
        {/* Sections */}
        {sectionIndex == 0 ? (
          // Welcome
          <div id="welcome" className="text-center mt-4">
            <h2 id="welcome-title">
              Bienvenida a tu plan de parto interactivo
            </h2>
            <h4 id="welcome-text" className="m-auto mt-4">
              Estas son las instrucciones a seguir:
            </h4>
            <ol className="list-group-numbered">
              <li className="list-group-item mb-2">
                Lee cuidadosamente las opciones
              </li>
              <li className="list-group-item mb-2">
                Reproduce el vídeo explicatorio
              </li>
              <li className="list-group-item mb-2">
                Selecciona la opción u opciones que prefieras
              </li>
              <li className="list-group-item mb-2">
                Dale al botón "Generar plan de parto" para descargar tu PDF
              </li>
            </ol>
          </div>
        ) : sectionIndex == 1 ? (
          // Form
          <div id="form" className="text-center">
            <h1>FORMULARIO</h1>
            <div className="input-group mb-3">
              <span className="input-group-text" id="name">
                Nombre y apellidos
              </span>
              <input
                type="text"
                className="form-control "
                onChange={(e) =>
                  setFormInfo({ ...formInfo, full_name: e.target.value })
                }
              />
            </div>

            <div className="row mb-3">
              <div className="col input-group">
                <span className="input-group-text" id="age">
                  Edad
                </span>
                <input
                  type="number"
                  className="form-control "
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, age: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="phone">
                  Teléfono de contacto
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col input-group">
                <span className="input-group-text" id="pregnancies">
                  Nº de embarazos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, pregnancy_num: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="births">
                  Nº de partos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, birth_num: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="interruptions">
                  Nº de abortos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({
                      ...formInfo,
                      interruption_num: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="birthdate">
                Fecha probable de parto
              </span>
              <input
                type="date"
                className="form-control"
                onChange={(e) =>
                  setFormInfo({ ...formInfo, birth_date: e.target.value })
                }
              />
            </div>

            <button
              id="save-form-button"
              className="fill mb-3"
              onClick={() => {
                saveBirthplanForm();
              }}
            >
              Guardar
            </button>
          </div>
        ) : (
          //Section
          <div id={sections[sectionIndex - 2].id}>
            <div className="row">
              <div className="videos col">
                <iframe
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow=" fullscreen"
                  src={sections[sectionIndex - 2].video}
                  controls
                />
              </div>
              <div id="section-description" className="col mt-3">
                <h2 id="section-title" className="mb-4">
                  {sections[sectionIndex - 2].title}
                </h2>
                <h3 id="section-subtitle" className="mb-3">
                  {sections[sectionIndex - 2].subtitle}
                </h3>

                <div id="section-answers">
                  <div
                    id={sections[sectionIndex - 2].answer[0].id}
                    className="form-check answer"
                  >
                    {sections[sectionIndex - 2].answer.map((ans) => {
                      if (ans.type == "checkbox" && ans.multiselect == false) {
                        return (
                          <CheckboxTiamati
                            section_id={sections[sectionIndex - 2].id}
                            sections={sections}
                            setSections={setSections}
                            answer={ans}
                          />
                        );
                      } else if (
                        ans.type == "checkbox" &&
                        ans.multiselect == true
                      ) {
                        return (
                          <MultiSelectTiamati
                            section_id={sections[sectionIndex - 2].id}
                            sections={sections}
                            setSections={setSections}
                            answer={ans}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div id="comments" className="accordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="comment-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#all-comments"
                      aria-expanded="false"
                      aria-controls="all-comments"
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      Comentarios
                    </button>
                  </h2>
                  <div
                    id="all-comments"
                    className={
                      show === true
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    aria-labelledby="comment-header"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {sections[sectionIndex - 2].comments.map((com) => {
                        return (
                          <div id={com.id} className="card comment-card">
                            <div className="card-header d-flex">
                              <i className="fa-solid fa-user user-avatar me-2"></i>
                              <h6>{com.user}</h6>
                            </div>
                            <div className="card-body">
                              <p className="card-text">{com.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
