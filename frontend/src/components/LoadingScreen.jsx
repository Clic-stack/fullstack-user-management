import { useEffect, useRef } from "react";
import "../styles/LoadingScreen.css"

function LoadingScreen() {
    const avatarLinks = [
      "/avatar_1.png",
      "/avatar_2.png",
      "/avatar_3.png",
      "/avatar_4.png",
      "/avatar_5.png"
    ];

    const carouselRef = useRef(null)

    useEffect(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const cardWidth = carousel.querySelector('.blur-card')?.offsetWidth || 240;
      const spacing = 20;
      const step = cardWidth + spacing;

      let scrollAmount = 0;

      const interval = setInterval(() => {
        scrollAmount += step;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount = 0;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="loading-container">
        <div className="loading-box">
          <div className="carousel" ref={carouselRef}>
            {avatarLinks.map((link, index) => (
              <div className="blur-card" key={index} style={{ '--i': index }}>
                <img src={link} alt="Avatar" className="avatar-img" />
                <div className="blurred-info" />
              </div>
            ))}
          </div>
          <p className="loading-message">Loading users...</p>
        </div>
      </div>

    );
}

export default LoadingScreen
