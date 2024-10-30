import { Route, Routes } from "react-router-dom"
import MainLayout from "./views/layouts/MainLayout"
import Start from "./views/pages/Start"
import Contacts from "./views/pages/Contacts"
import Documentation from "./views/pages/Docs"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Start />} />
        <Route path="/dokumentation" element={<Documentation />} />
        <Route path="/kontakter" element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App
