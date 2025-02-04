import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Head Chef', img: './assets/chefs-mario-and-adrian_a.jpg' },
    { name: 'Jane Smith', role: 'Restaurant Manager', img: './assets/chefs-mario-and-adrian_b.jpg' },
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
