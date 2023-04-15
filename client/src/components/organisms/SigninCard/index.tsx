import { useForm, SubmitHandler } from "react-hook-form";
import { AuthCard } from "../../templates/AuthCard";
import { AuthFormWrapper } from "../../templates/AuthForm";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { Sublink } from "../../atoms/Sublink";

type Inputs = {
  email: string;
  password: string;
};

export const SigninCard = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <AuthCard title="Login">
      <AuthFormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Email"
            type="email"
            name="email"
            register={register}
          />
          <Input
            labelText="Password"
            type="password"
            name="password"
            register={register}
          />

          <Button type="submit" theme="primary" text="Login" />

          <Sublink
            text="Don’t have an account?"
            urlText="Sign up"
            url="/signup"
          />
        </form>
      </AuthFormWrapper>
    </AuthCard>
  );
};
