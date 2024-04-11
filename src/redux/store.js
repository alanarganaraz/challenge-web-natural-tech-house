const { configureStore } = require("@reduxjs/toolkit");
const { pokemonApi } = require("./services/pokeApi");
import apiSlice from "@/redux/services/pokeSlice";

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemon: apiSlice
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([pokemonApi.middleware]),
});


module.exports = {
  store,
};
