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
