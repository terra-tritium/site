import React from 'react';

function Star({ x, y, size}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: 'white',
        
        
      }}
    />
  );
}

function StarBackground() {
  const stars = [];

  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.floor(Math.random() * 5) + 1;
    const opacity = Math.random();

    stars.push(<Star key={i} x={x} y={y} size={size} opacity={opacity} />);
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0c2340',
        zIndex: -1,
      }}
    >
      {stars}
    </div>
  );
}

export default StarBackground;
