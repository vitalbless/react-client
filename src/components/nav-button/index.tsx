import { Button } from "@nextui-org/react"
import React from "react"

type Props = {
  children: React.ReactNode
  icon: JSX.Element
  href: string
}

const NavButton = ({ children, icon, href }: Props) => {
  return <Button className="flex justify-start text-x1"></Button>
}

export default NavButton
