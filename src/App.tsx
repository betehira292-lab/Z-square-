import React from 'react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f3f4f6',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ 
        textAlign: 'center', 
        padding: '40px', 
        backgroundColor: 'white', 
        borderRadius: '20px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
      }}>
        <h1 style={{ color: '#2563eb', fontSize: '48px', marginBottom: '10px' }}>Z-Square Mall</h1>
        <p style={{ color: '#4b5563', fontSize: '20px', fontStyle: 'italic' }}>
          Coming Soon - Kanpur's Premier Destination!
        </p>
      </div>
    </div>
  );
}

export default App;
