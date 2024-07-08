import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../components/input"
import { Button, Link } from "@nextui-org/react"
import { useLazyCurrentQuery, useLoginMutation } from "../app/services/userApi"
import { useNavigate } from "react-router-dom"

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
  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [triggerCurrentCuery] = useLazyCurrentQuery()

  const onSubmit = async (data: Login) => {
    try {
      await login(data).unwrap()
    } catch (error) {}
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="email"
        label="Email"
        type="email"
        required="Required field!"
      />
      <Input
        control={control}
        name="password"
        label="Password"
        type="password"
        required="Required field!"
      />
      <p className="text-center text-small">
        Don't have an account?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("sign-up")}
        >
          Register
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Login
        </Button>
      </div>
    </form>
  )
}

export default Login
