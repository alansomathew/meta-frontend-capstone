import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    { name: 'Alex', feedback: 'Amazing food and great ambiance!' },
    { name: 'Sarah', feedback: 'Best Mediterranean cuisine in town!' },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>"{review.feedback}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
