import Button from "./Button";
import { useFormStatus } from "react-dom"; 
import { SpinnerMini } from "./Spinner";

function SubmitButton({ children, className, ...rest }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-6 w-full ${className}`}
      {...rest}
    >
      {children}
      {pending && <SpinnerMini />}
    </Button>
  );
}

export default SubmitButton;
