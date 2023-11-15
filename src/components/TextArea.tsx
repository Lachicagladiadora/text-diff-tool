import { TextAreaStyle } from "./styles/TextArea";

type TextAreaProps = {
  value: string;
  id: string;
  label: string;
  setValue: (value: string) => void;
};

export const TextArea = ({ value, id, label, setValue }: TextAreaProps) => {
  return (
    <div style={{ width: "100%" }}>
      <label
        htmlFor={id}
        style={{ marginBottom: "10px", display: "block", width: "100%" }}
      >
        {label}
      </label>
      <TextAreaStyle
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
