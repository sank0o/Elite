'use client';

export default function SimplePage() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      direction: 'rtl',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem', margin: '0' }}>أحبج ديما ❤️</h1>
      <p style={{ fontSize: '1.5rem', color: '#666', marginTop: '10px' }}>
        جمالكِ يطغى على كل تفاصيل هذا المكان.
      </p>
    </div>
  );
}
