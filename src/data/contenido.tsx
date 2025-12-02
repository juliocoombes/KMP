import imagen1 from "../assets/IMG_4287.jpg";
import imagen2 from "../assets/IMG_4268.jpg";
import imagen3 from "../assets/IMG_4319.jpg";
const contenido = {
  hero: {
    titulo: "Sumá un socio estratégico para la gestión de tu patrimonio",
    descripcion:
      "En Key Market Partners potenciamos el rendimiento de tu capital con estrategias personalizadas, transparencia y profesionalismo, con enfoque en decisiones informadas.",
    cta: {
      texto: "Elevá tu patrimonio con una estrategia a medida",
      link: "https://wa.me/message/47ETLYKP6WK4D1",
    },
  },

  footer: {
    texto: "Key Market Partners S.R.L. Todos los derechos reservados",
  },

  contacto: {
    titulo: "Contáctanos",
    email: "contacto@keymarketpartners.com",
    telefono: "+54 9 11 6792-1386",
    horario: "Lunes a Viernes de 10:00 a 18:00 hs",
    redes: {
      facebook: "https://facebook.com",
      instagram: "https://www.instagram.com/keymarketpartners/",
      youtube: "https://youtube.com/keymarketpartners",
      linkedin: "https://www.linkedin.com/company/keymarketpartners/",
    },
  },

  unidadesNegocio: {
  titulo: "", // si no querés título, dejalo vacío
  asesoramiento: {
    titulo: "Gestión de inversiones a tu medida",
    descripcion: "En Key Market Partners diseñamos carteras 100% alineadas a tu horizonte temporal y tolerancia al riesgo (conservador, moderado o dinámico). Partimos de un diagnóstico patrimonial y avanzamos con un plan medible, rebalanceos programados y reportes claros.",
    items: [
      "Renta variable: acciones locales e internacionales",
      "Renta fija: bonos soberanos y corporativos (obligaciones negociables)",
      "Vehículos diversificados: FCI y ETF",
      "Soluciones a medida: notas estructuradas según retorno/riesgo",
    ],
  },
  transaccional: {
    titulo: "Ejecución y Tesorería",
    descripcion: "Operamos con eficiencia y cumplimiento para optimizar tus flujos y costos.",
    items: [
        "Cauciones bursátiles: colocación y toma según tu necesidad de tasa/plazo",
        "Operaciones cambiarias vía mercado: MEP y Contado con Liquidación (CCL)",
        "Canjes de títulos: ingreso/egreso de fondos del exterior a través de bonos",
        "Gestión de liquidez corporativa: tasas fijas en pesos y coberturas (CER / dólar linked)",
        "Financiamiento ágil: descuento de E-Cheqs en el mercado de capitales",

    ],
  },
},


  alianzas: {
    titulo: "Partners estratégicos",
  },

  nosotros: {
    titulo: "Nosotros",
    descripcionCorta:
      "Key Market Partners S.R.L. es una sociedad registrada en la CNV como agente productor jurídico N° 2667",
    descripcionLarga: [
      "Con un equipo experto e interdisciplinario, diseñamos estrategias a medida, informes detallados y un acompañamiento constante que empodera a nuestros clientes para tomar decisiones y maximizar el potencial de susinversiones.",
      "Nuestra filosofía se basa en transparencia, comunicando cada decisión y resultado de forma clara, manteniendo siempre informados a nuestros clientes con informes detallados y honestos; lealtad, operando exclusivamente en beneficio del cliente, priorizando su éxito por encima de cualquier interés propio, educándolo en el camino de administrar sus finanzas; y profesionalismo, destacándonos por nuestra experiencia en el mercado, formación académica, precisión y compromiso, respaldaos por reportes detallados y carteras de inversión diseñadas para fomentar el crecimiento sostenible.",
    ],
  },
  /*  servicios: {
    titulo: "Servicios",
    descripcion: "Brindamos soluciones financieras a medida para empresas e individuos, combinando experiencia con innovación."
  }, */

  regulacion: {
    titulo: "Estamos registrados como Agente Productor jurídico N° 2667 en la Comisión Nacional de Valores (CNV) de Argentina",
    

  },

  equipo: [
    
    {
      nombre: "Ivo Kumiec Cassini",
      titulo:
        "Licenciado en Comercialización por la Universidad Argentina de la Empresa y Magíster en Finanzas por la Universidad del CEMA.",
      descripcion:
        "Director comercial y socio fundador de Key Market Partners.",
      imagen: imagen3,
    },
    {
      nombre: "Tomás Emilio Monzo Spotorno",
      titulo: "Licenciado en Economía por la Universidad del Salvador.",
      descripcion:
        "Director de inversiones y socio fundador de Key Market Partners.",
      imagen: imagen2,
    },
    {
      nombre: "Juan Ignacio Ponce Martínez",
      titulo:
        "Licenciado en Marketing por la Universidad Católica Argentina y Magíster en Finanzas por la Universidad del CEMA. Tiene aprobado el Level I de la certificación CFA.",
      descripcion:
        "Director de operaciones y socio fundador de Key Market Partners.",
      imagen: imagen1,
    },
    
  ],
};




export default contenido;
