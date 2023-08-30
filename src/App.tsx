import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing"; 
import NotFound from "./pages/NotFound"; 
import About from "./pages/About"; 
import Services from "./pages/Services"; 
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<ContactUs/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

