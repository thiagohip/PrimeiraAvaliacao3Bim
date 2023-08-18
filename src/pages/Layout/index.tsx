import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentFooter } from "../../components"

export function Layout() {
  return (
    <>
      <ComponentHeader />
        <Outlet />
      <ComponentFooter />
    </>
  )
}