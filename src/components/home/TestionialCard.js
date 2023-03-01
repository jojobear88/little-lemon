export default function TestimonialCard(props) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card-title">
        <img src={props.img} alt="delivery Icon"></img>
        <h3>{props.name}</h3>
      </div>
      <p>{props.description}</p>
    </article>
  );
}
