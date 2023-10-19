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
      display_name: 'acciones',
      field_name: "actions",
      type: 'array',
      instances: [
        {
          display_name: 'Titulo de la accion',
          field_name: 'action_title',
          type: 'text'
        },
        {
          display_name: 'Es tipo texto',
          field_name: 'action_type',
          type: 'bool'
        },
        {
          display_name: 'Propiedades texto',
          field_name: 'props',
          type: 'condBool',
          field_depends: 'action_type',
          condition: true,
          instances_depends: [
            {
              display_name: "text",
              field_name: 'hola',
              type: 'text'
            }
          ]
        }
      ]
    }
  ],
};


export const action = {
  display_name: "Accion",
  path: 'action',
  instances: [
    {
      display_name: 'Titulo de la accion',
      field_name: 'action_title',
      type: 'text'
    },
    {
      display_name: 'Descripcion',
      field_name: 'action_description',
      field_name: 'action_description'
    },
    {
      display_name: ''
    }
  ]
}

export const component = {
  display_name: 'Componente',
  path: 'component',
  instances: [
    {
      display_name: 'Titulo del componente',
      field_name: 'component_title',
      type: 'text'
    },
    {
      display_name: 'Descripcion del componente',
      field_name: 'component_description',
      type: 'text'
    },
    {
      display_name: 'Tipo de localizacion',
      field_name: 'component_type_location',
      type: 'options',
      options: [
        'XPATH',
        'CSS',
        'CLASSNAME',
        'ID'
      ]
    },
    {
      display_name: 'Localizacion',
      field_name: 'component_location',
      type: 'text'
    },
    {
      display_name: 'Tipo de interaccion',
      field_name: 'component_action',
      type: 'options',
      options: [
        'CLICK',
        'TYPE'
      ]
    },
    {
      display_name: 'Propiedades',
      field_name: 'component_click_props',
      type: 'condBool',
      field_depends: 'component_action',
      condition: 'CLICK',
      instances_depends: [
        {
          display_name: 'Es un validador',
          field_name: 'validator',
          type: 'bool'
        }
      ]
    },
    {
      display_name: 'Propiedades',
      field_name: 'component_type_props',
      type: 'condBool',
      field_depends: 'component_action',
      condition: 'TYPE',
      instances_depends: [
        {
          display_name: 'Tipo de dato',
          field_name: 'dataType',
          type: 'options',
          options: [
            'NUMBER',
            'STRING'
          ]
        },
        {
          display_name: 'La longitud es definida',
          field_name: 'define_length',
          type: 'bool'
        },
        {
          display_name: 'Propiedad de longitud',
          field_name: 'length',
          type: 'condBool',
          field_depends: 'define_length',
          condition: true,
          instances_depends: [
            {
              display_name: 'Longitud',
              field_name: 'length_number',
              type: 'number'
            }
          ]
        }
      ]
    }
  ],
  initialState: {
    component_title: '',
    component_description: '',
    component_type_location: 'XPATH',
    component_location: '',
    component_action: 'CLICK',
    component_click_props: {
      validator: false
    },
    component_type_props: {
      dataType: 'NUMBER',
      define_length: false,
      length: {
        length_number: 0
      }
    }
  }
}