import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

// Moved meal data outside to avoid unnecessary re-renders
const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous Greek salad with crispy lettuce, peppers, olives, and 
      our Chicago-style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `Straight from grandma's recipe book, every last ingredient 
      has been sourced to be as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <header className="week-specials-header">
        <h2>This Week's Specials</h2>
        <Link className="button-primary" to={pages.orderOnline.path}>
          View Menu
        </Link>
      </header>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
