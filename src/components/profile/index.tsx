import React from "react"
import { useSelector } from "react-redux"
import { selectCurrent } from "../../features/user/userSlice"

export const Profile = () => {
  const current = useSelector(selectCurrent)
  if (!current) {
    return null
  }
  return <div>Profile</div>
}
