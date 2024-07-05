import React from "react"
import { useForm } from "react-hook-form"
import Input from "../components/input"
import { Button, Link } from "@nextui-org/react"

type Login = { email: string; password: string }
type Props = { setSelected: (value: string) => void }

const Login: React.FC<Props> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Login>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: { email: "", password: "" },
  })
  return (
    <form className="flex flex-col gap-4">
      <Input
        name="email"
        label="Email"
        control={control}
        type="email"
        required="Required field!"
      />
      <Input
        name="password"
        label="Password"
        control={control}
        type="password"
        required="Required field!"
      />
      <p className="text-center text-small">
        Is no account?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("sign-up")}
        >
          Register
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  )
}

export default Login
