// import Carousel from './TestimonialCarousel'
import User_1 from "../../assets/user_1.png";
import User_2 from "../../assets/user_2.png";
import User_3 from "../../assets/user_3.png";
import User_4 from "../../assets/user_4.png";
import TestimonialCard from "../../components/home/TestionialCard";
export default function Testimonials() {
  return (
    <section className="testimonials primary-color-2">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards container">
        <TestimonialCard
          img={User_1}
          name="George"
          description="I recently visited Little Lemon Restaurant and it was an amazing experience. The food was cooked to perfection and the staff were incredibly friendly and attentive. I would highly recommend this restaurant to anyone looking for a delicious meal and great customer service."
        />
        <TestimonialCard
          img={User_2}
          name="Diana"
          description="Little Lemon Restaurant is a must-visit for all food lovers. The atmosphere is relaxed and inviting, and the food is delicious. We had a great time and the staff were very helpful. Highly recommended!"
        />
        <TestimonialCard
          img={User_3}
          name="Alex"
          description="I had the pleasure of dining at Little Lemon Restaurant recently and I couldn't have been more pleased. The food was delicious, the service was excellent, and the prices were more than reasonable. I definitely recommend it!"
        />
        <TestimonialCard
          img={User_4}
          name="John"
          description="I had the opportunity to eat at Little Lemon Restaurant and I'm so glad I did. The food was flavorful and the staff was friendly and helpful. I would highly recommend it to anyone looking for a great experience"
        />
      </section>

      {/* <section className="testimonials-carousel">
                <Carousel />
            </section> */}
    </section>
  );
}
