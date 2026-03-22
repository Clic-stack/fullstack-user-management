import { useEffect, useRef } from "react";
import "../styles/LoadingScreen.css"

function LoadingScreen() {
    const avatarLinks = [
      "https://avatar.iran.liara.run/public/girl?username=blurred1",
      "https://avatar.iran.liara.run/public/boy?username=blurred2",
      "https://avatar.iran.liara.run/public/girl?username=blurred3",
      "https://avatar.iran.liara.run/public/boy?username=blurred4",
      "https://avatar.iran.liara.run/public/girl?username=blurred5"
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
      }, 1600);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="loading-container">
        <div className="loading-box">
          <div className="carousel" ref={carouselRef}>
            {avatarLinks.map((link, index) => (
              <div className="blur-card" key={index}>
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
