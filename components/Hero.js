// React code for the hero section component
import React from 'react';
import { useSpring, animated } from 'react-spring';

function Hero() {
  // Use react-spring to create a sliding and zooming in animation for the heading
  const headingStyle = useSpring({
    from: { transform: 'translateY(-100px) scale(0.8)' },
    to: { transform: 'translateY(0px) scale(1)' },
    config: { duration: 1000 }
  });

  return (
    <div className="hero h-[100%] w-[98%] relative bottom-4 scale-h-95 mx-auto  bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/4066838/pexels-photo-4066838.jpeg?auto=compress&cs=tinysrgb&w=3898&h=2784&dpr=1")' }}>
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="text-white">
          {/* Use an animated element to apply the animation style */}
          <animated.h1 className="hero-title text-6xl font-bold mb-4" style={headingStyle}>
            Discover and buy art from local artists and creators
          </animated.h1>
          <p className="hero-subtitle text-2xl mb-8">
            Browse through thousands of paintings, sculptures and collectibles from talented and emerging artists in your area
          </p>
          <a href="#" className="hero-button bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-lg text-xl font-semibold">
            Start exploring
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
