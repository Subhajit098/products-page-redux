import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarPanel from './Navbar'

export default function RootLayout() {
  return (
    <>
   <NavbarPanel/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}
