import React from "react"

type Props = {
  name: string
  avatarUrl: string
  description?: string
  className?: string
}

export const User: React.FC<Props> = ({
  name = "",
  avatarUrl = "",
  description = "",
  className = "",
}) => {
  return <div>User</div>
}
