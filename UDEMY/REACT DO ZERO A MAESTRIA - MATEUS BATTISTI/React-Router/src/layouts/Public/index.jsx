import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"
import SearchForm from "../../components/SearchForm"

const DefaultLayout = () => {
  return (
    <>

        <NavBar />
        <SearchForm />
        <Outlet />

    </>
  )
}

export default DefaultLayout