import { Link } from "react-router-dom";
export default function SpecialCard(props) {
  return (
    <article className="menu-card">
      <img src={props.image} alt="Special Menu"></img>
      <section className="menu-card-content">
        <div className="menu-card-title">
          <h1>{props.name}</h1>
          <h3>{props.price}</h3>
        </div>
        <p>{props.description}</p>
        <Link className="action-button" to="/order">
          Order for Delivery
        </Link>
      </section>
    </article>
  );
}
