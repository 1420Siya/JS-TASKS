import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-card">
          <h3>scholarships</h3>
          <p>We give young athletes athletic scholarships.</p>
        </div>
        <div className="service-card">
          <h3> Development</h3>
          <p>exposure to big competition .</p>
        </div>
        <div className="service-card">
          <h3>Welfare</h3>
          <p>player perfomance and welfare management</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
