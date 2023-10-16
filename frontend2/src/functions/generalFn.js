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