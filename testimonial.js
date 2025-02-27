import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This service is amazing! It has helped me get athletic scholarship.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Jane Smith",
      feedback: "Highly professional and reliable. I would recommend it to everyone!",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },c
    {
      name: "Michael Lee",
      feedback: "Exceptional quality and support. The team is fantastic!",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
