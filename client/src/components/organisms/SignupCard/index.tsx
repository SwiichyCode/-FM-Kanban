import { useForm, SubmitHandler } from "react-hook-form";
import { AuthCard } from "../../templates/AuthCard";
import { AuthFormWrapper } from "../../templates/AuthForm";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { Sublink } from "../../atoms/Sublink";

type Inputs = {
  pseudo: string;
  email: string;
  password: string;
};

export const SignupCard = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <AuthCard title="Signup">
      <AuthFormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Pseudo"
            type="text"
            register={register}
            name="pseudo"
          />
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

          <Button type="submit" theme="primary" text="Signup" />

          <Sublink
            text="Already have an account?"
            url="/login"
            urlText="Login"
          />
        </form>
      </AuthFormWrapper>
    </AuthCard>
  );
};
