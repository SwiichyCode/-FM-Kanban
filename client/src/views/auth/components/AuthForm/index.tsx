import AuthService from "../../services/auth.service";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthCard } from "../AuthCard";
import { AuthFormContainer } from "../AuthFormContainer";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { Sublink } from "../Sublink";
import { Error } from "../../../../components/Input/styles";
import { useNavigate } from "react-router-dom";
import { Confirmation } from "../Confirmation";
import { InputPassword } from "../InputPassword";
import { FormProps, Inputs } from "./types";

export const AuthForm = ({ title, buttonText }: FormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [authError, setAuthError] = useState<string>("");
  const [isValidate, setIsValidate] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  let navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (title === "Login") {
        await AuthService.login(data.email, data.password).then(() => {
          navigate(`/dashboard`);
        });
        setAuthError("");
      } else {
        const ownerID = uuidV4();

        await AuthService.register(
          data.username,
          data.email,
          data.password,
          ownerID
        ).then(() => {
          setIsValidate(true);
          setIsSubmited(true);
        });
      }
    } catch (err: any) {
      if (err.response.data.message) {
        setAuthError(err.response.data.message);
      }
    }
  };

  if (isSubmited) {
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  }

  return (
    <AuthCard title={title}>
      <AuthFormContainer>
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
          <InputPassword
            labelText="Password"
            type="password"
            register={register}
            name="password"
          />

          {isValidate && (
            <Confirmation text="You have successfully registered!" />
          )}

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
      </AuthFormContainer>
    </AuthCard>
  );
};
