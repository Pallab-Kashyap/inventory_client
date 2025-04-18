import { Outlet } from "react-router"
import Loader from "../components/common/Loader"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"


const Layout = () => {

    const isLoading = useSelector((state: RootState) => state.loader.isLoading )

  return (
    <div>
        {isLoading && <Loader />}
        <Outlet />
    </div>
  )
}

export default Layout