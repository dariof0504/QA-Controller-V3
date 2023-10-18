import { TextField } from './textField'
import { BoolField } from './booleanField'
import { BoolConditionalField } from './boolConditionalField'
import { ArrayField } from './arrayField'

export const InstancesRouter = ({ state, stateFn, instance }) => {
  const { field_name, type, display_name } = instance;

  if (type === "text" || type === "number") {
    return (
      <TextField
        state={state}
        stateFn={stateFn}
        field={field_name}
        type={instance.type}
        display_name={display_name}
      />
    );
  } else if (type === "bool") {
    return (
      <BoolField
        state={state}
        stateFn={stateFn}
        field={field_name}
        display_name={display_name}
      />
    );
  } else if (type === "condBool") {
    return (
      <BoolConditionalField
        state={state}
        stateFn={stateFn}
        field={field_name}
        display_name={instance.display_name}
        field_depends={instance.field_depends}
        condition={instance.condition}
        instances={instance.instances_depends}
      />
    );
  } else if (type === "array") {
    return (
      <ArrayField
        state={state}
        stateFn={stateFn}
        field={field_name}
        display_name={display_name}
        instances={instance.instances}
      />
    );
  }
};
