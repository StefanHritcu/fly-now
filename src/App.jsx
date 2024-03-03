import { Route, Routes } from "react-router-dom"

import Shop from "./components/Shop"

import Header from "./components/Header"
function App() {


  return (
    <>
<Header/>

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </>
  )
}

export default App
