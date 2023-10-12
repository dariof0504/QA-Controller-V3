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
            keys: ['titulo', 'nombre']
        }
    ],
    initialState: {
        module_title: '',
        module_description: '',
        lista: []
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
        module_title: '',
        module_description: ''
    }
}