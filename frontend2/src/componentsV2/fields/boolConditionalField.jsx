import { InstancesRouter } from "./InstanceRouter";

export const BoolConditionalField = ({
  state,
  stateFn,
  field_depends,
  instance,
}) => {
  return (
    <div>
      {state[field_depends] && (
        <InstancesRouter state={state} stateFn={stateFn} instance={instance} />
      )}
    </div>
  );
};
