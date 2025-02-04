import './TeamSection.css';
import chefImageA from './assets/chefs-mario-and-adrian_a.jpg';
import chefImageB from './assets/chefs-mario-and-adrian_b.jpg';

const TeamSection = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Head Chef', img: chefImageA },
    { name: 'Jane Smith', role: 'Restaurant Manager', img: chefImageB },
  ];

  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
