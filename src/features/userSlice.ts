import { createSlice } from "@reduxjs/toolkit"
import { User } from "../app/types"

interface InitialState {
  user: User | null
  isAuthenticated: boolean
  users: User[] | null
  current: User | null
  token?: string
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
  users: null,
  current: null,
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //в logout после выхода из аккаунта в стейт будет присваиваться пустой стейт(который выше)
    logout: () => initialState,
    resetUser: state => {
      state.user = null
    },
  },
  extraReducers(builder) {
    builder
  },
})
