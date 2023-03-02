import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Confirmation from "../pages/Confirmed";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import OrderOnline from "../pages/OrderOnline";
import Reservation from "../pages/Reservation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/order" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirm" element={<Confirmation />} />
    </Routes>
  );
}
