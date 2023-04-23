import { AuthForm } from "./components/AuthForm";
import { useLocalStorageRedirect } from "./hooks/useLocalStorageRedirect";

export const Signin = () => {
  useLocalStorageRedirect();

  return <AuthForm title="Login" buttonText="Login" />;
};
