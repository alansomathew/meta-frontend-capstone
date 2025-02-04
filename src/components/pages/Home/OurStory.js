import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Founded in the heart of Chicago, Little Lemon is a family-owned 
          Mediterranean restaurant that brings authentic flavors to your table. 
          Our head chefs, Mario and Adrian, blend traditional recipes with a 
          modern twist, ensuring every dish is a perfect balance of taste and 
          innovation.
        </p>
        <p>
          From our freshly sourced ingredients to our handcrafted desserts, 
          every bite tells a story of passion, culture, and dedication. Whether 
          you're here for a casual lunch or a special occasion, we promise an 
          unforgettable dining experience.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" loading='lazy' />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" loading='lazy' />
      </div>
    </section>
  );
};

export default OurStory;
