import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthCard } from "../../../templates/AuthCard";
import { AuthFormWrapper } from "../../../templates/AuthForm";
import { Input } from "../../../atoms/form/Input";
import { Button } from "../../../atoms/form/Button";
import { Sublink } from "../../../atoms/Sublink";
import AuthService from "../../../../services/auth.service";
import { Error } from "../../../atoms/form/Input/styles";

type FormProps = {
  title: string;
  buttonText: string;
};

type Inputs = {
  username: string;
  email: string;
  password: string;
};

export const AuthForm = ({ title, buttonText }: FormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [authError, setAuthError] = useState<string>("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (title === "Login") {
        await AuthService.login(data.email, data.password);
        setAuthError("");
      } else {
        await AuthService.register(data.username, data.email, data.password);
      }
    } catch (err: any) {
      if (err.response.data.message) {
        setAuthError(err.response.data.message);
      }
    }
  };

  return (
    <AuthCard title={title}>
      <AuthFormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {title === "Signup" && (
            <Input
              labelText="Username"
              type="text"
              register={register}
              name="username"
            />
          )}
          <Input
            labelText="Email"
            type="email"
            register={register}
            name="email"
          />
          <Input
            labelText="Password"
            type="password"
            register={register}
            name="password"
          />

          {authError && <Error>{authError}</Error>}

          <Button type="submit" theme="primary" text={buttonText} />

          <Sublink
            text={
              title === "Login"
                ? "Don’t have an account?"
                : "Already have an account?"
            }
            urlText={title === "Login" ? "Sign up" : "Login"}
            url={title === "Login" ? "/signup" : "/login"}
          />
        </form>
      </AuthFormWrapper>
    </AuthCard>
  );
};
