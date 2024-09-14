import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Before from "./routes/Home/Before";
import After from "./routes/Home/After";


export default function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/before" element={<Before />} />
          <Route path="/after/:username" element={<After />} />
      </Routes>
    </BrowserRouter>
  )
}