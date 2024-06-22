import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query"
import { BASE_URL } from "../../constants"
import { RootState } from "../store"

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  //мы будем хранить token пользователя в localstorage и в header чтобы его использовать
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).auth.token || localStorage.getItem("token")
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  //refetch нужен чтобы заппросы хэшированные ответы на запросы не использовались при изменении страницы.
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
