import { Outlet } from "react-router-dom"
import SiteFooter from "../../components/SiteFooter"
import SiteHeader from "../../components/SiteHeader"

function MainLayout() {

  return (
    <>
        <div className="h-screen flex flex-col justify-between">
            <SiteHeader />
                <main className="grow">
                    <Outlet />
                </main>
            <SiteFooter />
        </div>
    </>
  )
}

export default MainLayout