import { DefaultField } from "../fields/defaultField";
import { ArrayField } from "../fields/arrayField";
import { OptionField } from "../fields/optionField";
import "./style.css";

export const GeneralForm = ({ state, stateFn, info }) => {

  //Para cada pregunta
  const handleQuestions = (e) => {
    const { field_name, type, display_name } = e;

    if (e.type === "text" || e.type === "number") {
      return (
        <DefaultField
          display={display_name}
          field={field_name}
          state={state}
          stateFn={stateFn}
          type={type}
        />
      );
    } else if (e.type === "array") {
      return (
        <ArrayField
          display={display_name}
          field={field_name}
          state={state}
          stateFn={stateFn}
          items={e.items}
        />
      );
    } else if (e.type === 'options') {
      return (
        <OptionField display={display_name}
        field={field_name}
        state={state}
        stateFn={stateFn}
        options={e.options}
        />
      )
    }
  };

  return (
        <div>
          {info?.questions.map((e) => handleQuestions(e))}
        </div>
  );
};
