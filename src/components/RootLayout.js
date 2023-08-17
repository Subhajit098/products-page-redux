import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarPanel from './Navbar'
import { Provider } from 'react-redux'
import store from "../store/store"

export default function RootLayout() {
  return (
    <>
  <Provider store={store}>
   <NavbarPanel/>
    <main>
        <Outlet/>
    </main>
    </Provider>
    </>
  )
}
