import SpecialCard from "../../components/home/SpecialCard";
import GreekSalad from "../../assets/greek-salad.jpg";
import Bruschetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon-dessert.jpg";

function Menu() {
  return (
    <article className="container">
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
    </article>
  );
}

export default Menu;
