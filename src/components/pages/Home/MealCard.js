import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './MealCard.css';
import pages from '../../../utils/pages';

const MealCard = ({ meal }) => {
  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} loading="lazy" />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{meal.description}</p>
        <Link to={pages.orderOnline.path} aria-label={`Order ${meal.name} online`}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default MealCard;
