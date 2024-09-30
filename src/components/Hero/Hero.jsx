/* eslint-disable react/no-unescaped-entities */
import './hero.css';
import moiImage from '/images/moi.jpg';

const Hero = () => {
  const scrollToProject = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p>Bienvenue sur mon portfolio ! 🎉</p>
          <h2>Je suis Guerriche Yasmine , Diplomée en développement web 🌐</h2>
          <p>
            Jeune diplomée d'une formation de développement web Bac+2 chez OpenClassrooms. 🎓
            Je suis Passionnée par la création  de sites web modernes qui
            allient design, fonctionalité et sécurité . 💻✨ Chaque projet est pour moi une opportunité de
            perfectionner mes compétences et d'explorer de nouvelles technologies. 🚀
          </p>
          <button className='cta-button' onClick={scrollToProject}>Découvrez mes projets </button>
        </div>
        <div className="hero-image">
          <img src={moiImage} alt="Guerriche-yasmine" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
