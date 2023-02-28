import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import OrderOnline from "../pages/OrderOnline/OrderOnline";
import Reservation from "../pages/Reservation/Reservations";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />

      {/* <Route path="/confirmation" element={<Confirmation />} /> */}
    </Routes>
  );
}
