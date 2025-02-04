import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

// Customer data moved outside to prevent unnecessary re-renders
const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Amazing food and great service! Will definitely come back.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Best experience ever! The flavors were incredible.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lovely ambiance and delicious food! Highly recommend.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Great value for money! The dishes are well-prepared and tasty.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What People Say About Us</h2>
        <div className="grid">
          {customers.map((customer, index) => (
            <TestimonialCard key={index} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
