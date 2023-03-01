import About_A from "../../assets/Mario-and-Adrian-A.jpg";
import About_B from "../../assets/Mario-and-Adrian-B.jpg";

export default function About() {
  return (
    <article className="about-us container">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-subtext">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </section>

      <section className="double-image">
        <img className="about-1" src={About_A} alt="Mario and Adrian A"></img>
        <img className="about-2" src={About_B} alt="Mario and Adrian B"></img>
      </section>
    </article>
  );
}
