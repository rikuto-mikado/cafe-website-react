import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to Cozy Cafe</p>
      <div style={{ 
        height: '200px', 
        background: '#d4a574', 
        margin: '2rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#2c1810'
      }}>
        <p>ここに cafe-background.jpg が表示される予定</p>
      </div>
    </div>
  );
};

export default Home;