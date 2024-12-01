import { Route, Routes } from "react-router-dom"
import MainLayout from "./views/layouts/MainLayout"
import Start from "./views/pages/Start"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Start />} />
      </Route>
    </Routes>
  )
}

export default App
