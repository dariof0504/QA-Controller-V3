export const getPk = (element) => {
    const pkInstance = Object.keys(element)
    .map((e) => (e.includes("pk_id_") ? e : false))
    .filter((e) => e)[0];

    const result = element[pkInstance]

    return result
}

export const filterObject = (template, element) => {
    const keys = Object.keys(template)

    const filteredElement = {}

    keys.forEach(k => {
        filteredElement[k] = element[k]
    })

    return filteredElement

}

export const getFields = (element) => {
    const fields = element.questions.map(e => e.field_name)
    return fields
}

export const getDisplayNames = (element) => {
    const display_names = element.questions.map(e=>e.display_name)

    return display_names
}