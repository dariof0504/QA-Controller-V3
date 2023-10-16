export const moduleForm = {
    display_name: 'Modulo',
    path: 'module',
    questions: [
        {
            display_name: 'Titulo del modulo',
            field_name: 'module_title',
            type: 'text'
        },
        {
            display_name: 'Descripcion del modulo',
            field_name: 'module_description',
            type: 'text'
        },
        {
            display_name: 'Lista',
            field_name: 'lista',
            type: 'array',
            items: [{
                display_name: 'Titulo',
                key: 'titulo',
                type: 'text'
            },{
                display_name: 'Apellido',
                key: 'nambre',
                type: 'number'
            }
            ]
        },
        {
            display_name: 'Opciones',
            field_name: 'optiones',
            type: 'options',
            options: ['opcion1', 'opcion2']
        }
    ],
    initialState: {
        module_title: '',
        module_description: '',
        lista: [],
        optiones: 'opcion1'
    }
}

export const windowForm = {
    display_name: 'Crea una ventana',
    path: 'window',
    questions: [
        {
            display_name: 'Titutlo de la ventana',
            field_name: 'window_title',
            type: 'text'
        }
    ],
    initialState: {
        window_title: '',
    }
}

export const componentForm = {
    display_name: 'Crea un componente',
    path: 'component',
    questions: [
        {
            display_name: 'Titulo de componente',
            field_name: 'component_title',
            type: 'text'
        },
        {
            display_name: 'Tipo de localizacion del componente',
            field_name: 'component_type_location',
            type: 'options',
            options: ['CSS', 'XPATH', 'CLASSNAME', 'ID']
        },
        {
            display_name: 'Localizacion del comoponente',
            field_name: 'component_location',
            type: 'text'
        }
        //Falta properties
    ],
    initialState: {
        component_title: '',
        component_type_location: 'CSS',
        component_location: '',
    }
}