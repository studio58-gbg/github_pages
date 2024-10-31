import { Route, Routes } from "react-router-dom"
import MainLayout from "./views/layouts/MainLayout"
import Start from "./views/pages/Start"
import Contacts from "./views/pages/Contacts"
import Docs from "./views/pages/Docs"

function App() {

  return (
    <Routes>
      <Route path="/github_pages/" element={<MainLayout />}>
        <Route index element={<Start />} />
        <Route path="/github_pages/dokumentation" element={<Docs />} />
        <Route path="/github_pages/kontakter" element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App
