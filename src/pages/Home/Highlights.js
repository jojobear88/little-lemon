// import Carousel from './SpecialsCarousel';
import GreekSalad from "../../assets/greek-salad.jpg";
import Bruschetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon-dessert.jpg";
import SpecialCard from "../../components/home/SpecialCard";
import { Link } from "react-router-dom";

export default function Highlights() {
  return (
    <section className="specials container">
      <article className="specials-topbar">
        <h1>Specials</h1>
        <Link className="action-button" to="/menu">
          Online Menu
        </Link>
      </article>

      <section className="specials-cards">
        <SpecialCard
          image={GreekSalad}
          name="Greek Salad"
          price="$12.99"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
        />
        <SpecialCard
          image={Bruschetta}
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
        />
        <SpecialCard
          image={LemonDessert}
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."
        />
      </section>

      {/* <section className="specials-carousel">
                <Carousel />
            </section> */}
    </section>
  );
}
