import { InstancesRouter } from "../fields/InstanceRouter";
import { v4 as uuid } from 'uuid'

export const GeneralV2 = ({ state, stateFn, instances }) => {
  return (
    <div>
      {instances.map((instance) => (
        <InstancesRouter instance={instance} state={state} stateFn={stateFn} key={uuid()} />
      ))}
    </div>
  );
};
