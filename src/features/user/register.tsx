import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../../components/input"
import { Button, Link } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { useRegisterMutation } from "../../app/services/userApi"
import { hasErrorField } from "../../utils/has-error-field"
import ErrorMessage from "../../components/error-message"

type Register = {
  email: string
  name: string
  password: string
}
type Props = { setSelected: (value: string) => void }

const Register: React.FC<Props> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Register>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: { email: "", password: "", name: "" },
  })
  const [register, { isLoading }] = useRegisterMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const onSubmit = async (data: Register) => {
    try {
      await register(data).unwrap()
      setSelected("login")
    } catch (error) {
      if (hasErrorField(error)) {
        setError(error.data.error)
      }
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        label="Name"
        type="text"
        required="Required field!"
      />
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
      <ErrorMessage error={error} />
      <p className="text-center text-small">
        Already have an account?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("login")}
        >
          Login
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Register
        </Button>
      </div>
    </form>
  )
}

export default Register
