import React from 'react';

const Header = () => {
    return (
        <header style={{
            background: '#2c1810', 
            color: '#fff', 
            padding: '1rem', 
            position: 'fixed', 
            top: 0, 
            width: '100%', 
            zIndex: 1000,
            textAlign: 'center'
        }}>
            <h2>Cozy Cafe</h2>
        </header>
    )
}

export default Header;