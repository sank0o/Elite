'use client';
import React, { useEffect, useState } from 'react';

export default function LuxuryLovePage() {
  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      direction: 'rtl',
      textAlign: 'center',
      background: 'radial-gradient(circle, #fff5f8 0%, #ffdee9 100%)', // خلفية فخمة
      margin: 0,
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* ستايلات الأنيميشن */}
      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); filter: drop-shadow(0 0 5px #ff4d6d); }
          50% { transform: scale(1.15); filter: drop-shadow(0 0 20px #ff4d6d); }
          100% { transform: scale(1); filter: drop-shadow(0 0 5px #ff4d6d); }
        }
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .emoji {
          position: absolute;
          bottom: -50px;
          font-size: 2rem;
          user-select: none;
          pointer-events: none;
          animation: floating 6s linear infinite;
        }
      `}</style>

      {/* ملصقات حب متطايرة في الخلفية */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i} 
          className="emoji" 
          style={{ 
            left: `${Math.random() * 100}%`, 
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${1 + Math.random() * 2}rem`
          }}
        >
          {['❤️', '💖', '✨', '🌸', '💍', '👑'][i % 6]}
        </div>
      ))}

      {/* القلب النابض الرئيسي */}
      <div style={{ 
        fontSize: '6rem', 
        animation: 'heartbeat 1.2s infinite ease-in-out',
        marginBottom: '10px',
        zIndex: 2
      }}>
        ❤️
      </div>

      {/* النص الأساسي ببهرجة */}
      <h1 style={{ 
        fontSize: '4rem', 
        color: '#d63384', 
        margin: '0', 
        fontFamily: 'serif',
        textShadow: '2px 2px 10px rgba(214, 51, 132, 0.3)',
        zIndex: 2
      }}>
        أحبج ديما
      </h1>

      {/* رسالة الجمال */}
      <p style={{ 
        fontSize: '1.6rem', 
        color: '#ff4d6d', 
        marginTop: '20px',
        fontWeight: 'bold',
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '10px 20px',
        borderRadius: '50px'
      }}>
        جمالكِ قصة لا تنتهي حروفها. ✨
      </p>

    </div>
  );
}
