import { createSlice } from "@reduxjs/toolkit"
import { User } from "../../app/types"
import { userApi } from "../../app/services/userApi"
import { RootState } from "../../app/store"

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
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        ;(state.token = action.payload.token), (state.isAuthenticated = true)
      })
      .addMatcher(userApi.endpoints.current.matchFulfilled, (state, action) => {
        ;(state.current = action.payload), (state.isAuthenticated = true)
      })
      .addMatcher(
        userApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
          state.user = action.payload
        },
      )
  },
})
export const { logout, resetUser } = slice.actions
export default slice.reducer
