import React, { useState } from 'react';
import './App.css';
import Card from './card';

const cardsData = [
  { id: 1, name: 'Jacob Jones', role: 'CEO AND FOUNDER', image: '/Images/1.jpg' },
  { id: 2, name: 'Jane Smith', role: 'Backend Developer', image: '/Images/2.jpg' },
  { id: 3, name: 'Alice Johnson', role: 'UI/UX Designer', image: '/Images/3.jpg' },
  { id: 4, name: 'John Doe', role: 'Frontend Developer', image: '/Images/4.jpg' },
  { id: 5, name: 'Jane Smith', role: 'Backend Developer', image: '/Images/5.jpg' },
  { id: 6, name: 'Alice Johnson', role: 'UI/UX Designer', image: '/Images/6.jpg' },
  // Add more cards as needed
];

function App() {
  const [activeCard, setActiveCard] = useState(cardsData[0].id); // Default to the first card

  return (
    <div className="App">
      <div className="intro">
        <h1>Meet Our Team</h1>
        <p>At the heart of our company lies a dedicated and diverse group of professionals committed to excellence and innovation. Our team is composed of seasoned experts and fresh talent, all working together to push the boundaries of technology and creativity. Each member brings a unique set of skills and experiences, allowing us to tackle challenges from various perspectives and deliver exceptional results. We believe in fostering a collaborative and inclusive environment, where everyone's voice is heard and valued. Our shared passion for our work drives us to constantly learn and grow, staying ahead of industry trends and advancements. Together, we strive to create solutions that not only meet but exceed our clients' expectations. Join us as we continue to embark on exciting projects and make meaningful contributions to the tech industry.</p>
      </div>
      <div className="cards-container">
        {cardsData.map((card) => (
          <Card 
            key={card.id}
            {...card}
            isActive={activeCard === card.id}
            onClick={() => setActiveCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;