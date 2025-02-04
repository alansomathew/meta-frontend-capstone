import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './HeroSection.css';
import pages from '../../../utils/pages';

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
          Founded in 1995, Little Lemon has been serving authentic Mediterranean
        dishes crafted with the freshest ingredients. Our chefs bring decades
        of experience to your plate, ensuring a delightful dining experience.
          </p>
          <Link 
            className="button-primary" 
            to={pages.bookings.path} 
            aria-label="Reserve a table at Little Lemon"
          >
            Reserve a Table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="A delicious Mediterranean dish served at Little Lemon Restaurant" 
        />
      </div>
    </header>
  );
};

export default HeroSection;
