import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TestimonialCard.css';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar };

const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} loading="lazy" />
      <h4>{customer.fullName}</h4>
      <div className="rating" aria-label={`Rating: ${customer.rating.length} stars`}>
        {customer.rating.map((ratingPoint, index) => (
          <FontAwesomeIcon key={index} icon={ratingLevels[ratingPoint]} />
        ))}
      </div>
      <blockquote>
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
