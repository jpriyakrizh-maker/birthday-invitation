export default function Decorations() {
  return (
    <>
      <svg className="garland-left" viewBox="0 0 100 40">
        <path d="M0,0 Q50,20 100,5" fill="none" stroke="#a4c2db" strokeWidth="1" />
        <polygon points="10,4 22,25 32,7" fill="#5b8db8" />
        <polygon points="38,8 48,28 58,10" fill="#e5b352" />
        <polygon points="64,11 74,30 84,11" fill="#a4c2db" />
      </svg>

      <svg className="garland-right" viewBox="0 0 100 40">
        <path d="M0,5 Q50,20 100,0" fill="none" stroke="#a4c2db" strokeWidth="1" />
        <polygon points="16,11 26,30 36,11" fill="#a4c2db" />
        <polygon points="42,10 52,28 62,8" fill="#e5b352" />
        <polygon points="68,7 78,25 90,4" fill="#5b8db8" />
      </svg>

      <span className="floating-star star-1">★</span>
      <span className="floating-star star-2">★</span>
      <span className="floating-star star-3">★</span>
      <span className="floating-heart heart-1">♡</span>
      <span className="floating-heart heart-2">♡</span>

      <img src="/images/teddy.jpg" alt="Teddy" className="teddy-img" />
      <img src="/images/balloon.jpg" alt="Balloons" className="balloon-img" />
    </>
  );
}