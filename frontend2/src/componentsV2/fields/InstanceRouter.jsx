import { TextFieldV2 } from "./textField";
import { BoolField } from "./booleanField";
import { BoolConditionalField } from "./boolConditionalField";
import { ArrayFieldV2 } from "./arrayField";
impot;

export const InstancesRouter = ({ state, stateFn, instance }) => {
  const { field_name, type, display_name } = instance;

  if (type === "text" || type === "number") {
    return (
      <TextFieldV2
        state={state}
        stateFn={stateFn}
        field={field_name}
        type={instance.type}
        display_name={display_name}
      />
    );
  } else if (vtype === "bool") {
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
        field_info={instance.field_info}
      />
    );
  } else if (type === "array") {
    return (
      <ArrayFieldV2
        state={state}
        stateFn={stateFn}
        field={field_name}
        display_name={display_name}

      />
    );
  }
};
