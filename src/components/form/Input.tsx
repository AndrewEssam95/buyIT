import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { Form } from "react-bootstrap";

interface IInputProps<TFieldValue extends FieldValues> {
  label: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  onBLur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
}

const Input = <TFieldValue extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  onBLur,
  formText,
  success,
  disabled,
}: IInputProps<TFieldValue>) => {
  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBLur) {
      onBLur(event);
    }
    register(name).onBlur(event);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...register(name)}
        onBlur={onBlurHandler}
        isInvalid={error ? true : false}
        isValid={success ? true : false}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {formText && <Form.Text muted>{formText}</Form.Text>}
    </Form.Group>
  );
};

export default Input;
