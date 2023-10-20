export const rutina = {
  display_name: "Rutina",
  path: "rutine",
  instances: [
    {
      display_name: "Titulo de rutina",
      field_name: "rutine_title",
      type: "text",
    },
    {
      display_name: "Descipcion",
      field_name: "rutine_description",
      type: "text",
    },
    {
      display_name: "acciones",
      field_name: "actions",
      type: "array",
      instances: [
        {
          display_name: "Titulo de la accion",
          field_name: "action_title",
          type: "text",
        },
        {
          display_name: "Es tipo texto",
          field_name: "action_type",
          type: "bool",
        },
        {
          display_name: "Propiedades texto",
          field_name: "props",
          type: "condBool",
          field_depends: "action_type",
          condition: true,
          instances_depends: [
            {
              display_name: "text",
              field_name: "hola",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

export const action = {
  display_name: "Accion",
  path: "action",
  instances: [
    {
      display_name: "Titulo de la accion",
      field_name: "action_title",
      type: "text",
    },
    {
      display_name: "Descripcion",
      field_name: "action_description",
      field_name: "action_description",
    },
    {
      display_name: "",
    },
  ],
};

export const component_info = {
  display_name: "Componente",
  path: "component",
  instances: [
    {
      display_name: "Titulo del componente",
      field_name: "component_title",
      type: "text",
    },
    {
      display_name: "Tipo de localizacion",
      field_name: "component_type_location",
      type: "options",
      options: ["XPATH", "CSS", "CLASSNAME", "ID"],
    },
    {
      display_name: "Localizacion",
      field_name: "component_location",
      type: "text",
    },
    {
      display_name: "Tipo de interaccion",
      field_name: "component_action",
      type: "options",
      options: ["CLICK", "TYPE"],
    },
    {
      display_name: "Propiedades",
      field_name: "component_click_props",
      type: "condBool",
      field_depends: "component_action",
      condition: "CLICK",
      instances_depends: [
        {
          display_name: "Es un validador",
          field_name: "validator",
          type: "bool",
        },
      ],
    },
    {
      display_name: "Propiedades",
      field_name: "component_type_props",
      type: "condBool",
      field_depends: "component_action",
      condition: "TYPE",
      instances_depends: [
        {
          display_name: "Tipo de dato",
          field_name: "data_type",
          type: "options",
          options: ["NUMBER", "STRING"],
        },
        {
          display_name: "La longitud es definida",
          field_name: "define_length",
          type: "bool",
        },
        {
          display_name: "Propiedad de longitud",
          field_name: "length",
          type: "condBool",
          field_depends: "define_length",
          condition: true,
          instances_depends: [
            {
              display_name: "Longitud",
              field_name: "length_number",
              type: "number",
            },
          ],
        },
      ],
    },
  ],
  initialState: {
    component_title: "",
    component_description: "",
    component_type_location: "XPATH",
    component_location: "",
    component_action: "CLICK",
    component_click_props: {
      validator: false,
    },
    component_type_props: {
      data_type: "NUMBER",
      define_length: false,
      length: {
        length_number: 0,
      },
    },
  },
};

export const module_info = {
  display_name: "Modulo",
  path: "module",
  instances: [
    {
      display_name: "Titulo del modulo",
      field_name: "module_title",
      type: "text",
    },
    {
      display_name: "Descripcion del modulo",
      field_name: "module_description",
      type: "text",
    },
  ],
  initialState: {
    module_title: "",
    module_description: "",
  },
};

export const window_info = {
  display_name: "Ventana",
  path: "window",
  instances: [
    {
      display_name: "Titulo de la ventana",
      field_name: "window_title",
      type: "text",
    },
  ],
  initialState: {
    window_title: "",
  },
};

export const report_info = {
  display_name: "Reporte",
  path: "report",
  instances: [
    {
      display_name: "Titulo del reporte",
      field_name: "report_title",
      type: "text",
    },
    {
      display_name: "Estado del reporte",
      field_name: "report_status",
      type: "options",
      options: ["OPEN", "IN PROGRESS", "REVIEW", "CLOSE", "TO FIX", "TESTING"],
    },
  ],
  initialState: {
    report_title: '',
    report_status: 'OPEN'
  }
};

export const incident_info = {
  display_name: "Titulo del incidente",
  path: "incident",
  instances: [
    {
      display_name: "Titulo del incidente",
      field_name: "incident_title",
      type: "text",
    },
    {
      display_name: "Descripcion del incidente",
      field_name: "incident_obs",
      type: "text",
    },
    {
      display_name: "Version del producto",
      field_name: "incident_product_version",
      type: "text",
    },
    {
      display_name: "Dispositivo en el que se ejcuto",
      field_name: "incident_device",
      type: "text",
    },
    {
      display_name: "Relevancia del incidente",
      field_name: "incident_relevante",
      type: "options",
      options: ["LOW", "MEDIUM", "HIGH", "URGENT"],
    },
    {
      display_name: 'Developer a cargo',
      field_name: 'incident_own_developer',
      type: 'text'
    },
    {
      display_name: 'Ambiente en el que se desarrolla',
      field_name: 'incident_enviroment',
      type: 'text'
    },
    {
      display_name: 'Resumen del incidente',
      field_name: 'incident_summary',
      type: 'text'
    },
    {
      display_name: 'Comentarios del incidente',
      field_name: 'incident_comments',
      type: 'array',
      instances: [
        {
          display_name: 'Propietario del comentario',
          field_name: 'comment_owner',
          type: 'text'
        },
        {
          display_name: 'Comentario',
          field_name: 'comment_body',
          type: 'text'
        }
      ]
    }
  ],
  initialState: {
    incident_title: '',
    incident_obs: '',
    incident_product_version: '',
    incident_device: '',
    incident_relevance: 'LOW',
    incident_status: 'OPEN',
    incident_own_developer: '',
    incident_enviroment: '',
    incident_summary: '',
    incident_comments: []    
  }
};
