'use client';

export default function HeartPage() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      direction: 'rtl',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #fff5f8 0%, #ffe4e9 100%)', // خلفية متدرجة جميلة
      margin: 0,
      overflow: 'hidden'
    }}>
      {/* ستايل الأنيميشن للقلب */}
      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* القلب المتحرك */}
      <div style={{ 
        fontSize: '5rem', 
        animation: 'heartbeat 1.5s infinite ease-in-out',
        marginBottom: '20px',
        display: 'inline-block'
      }}>
        ❤️
      </div>

      {/* النص الأساسي */}
      <h1 style={{ 
        fontSize: '3.5rem', 
        color: '#d63384', 
        margin: '0', 
        fontFamily: 'serif' 
      }}>
        أحبج ديما
      </h1>

      {/* الرسالة الرقيقة */}
      <p style={{ 
        fontSize: '1.4rem', 
        color: '#ff85a1', 
        marginTop: '15px',
        fontWeight: '300'
      }}>
        أنتِ الجمال الذي يزهو به هذا العالم.
      </p>
    </div>
  );
}
