export const getPk = (element) => {
  const pkInstance = Object.keys(element)
    .map((e) => (e.includes("pk_id_") ? e : false))
    .filter((e) => e)[0];

  const result = element[pkInstance];

  return result;
};

export const getPkInstance = (element) => {
  const pkInstance = Object.keys(element).map((e) => e.includes("pk_id-"));
  return pkInstance;
};

export const filterObject = (template, element) => {
  const keys = Object.keys(template);

  const filteredElement = {};

  keys.forEach((k) => {
    filteredElement[k] = element[k];
  });

  return filteredElement;
};

export const getFields = (element) => {

  const filterInstances = element.instances.filter((e) => e.type !== 'condBool' && e.type !== 'array')

  const fields = filterInstances.map((e) => e.field_name);
  return fields;
};

export const getDisplayNames = (element) => {

  console.log(element)

  const filterInstances = element.instances.filter((e) => e.type !== 'condBool' && e.type !== 'array')

  const display_names = filterInstances.map((e) => e.display_name);

  return display_names;
};
