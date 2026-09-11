export default function EventDetails() {
  return (
    <div>
      <p className="sub-heading">♡ Please join us to celebrate ♡</p>
      <h2 className="main-title">Rithvik Pranaav’s 1st Birthday</h2>

      <div className="divider">
        <span className="divider-line"></span>
        <span className="heart-icon">♥</span>
        <span className="divider-line"></span>
      </div>

      <p className="venue-title">The Taylors Residence</p>

      <div className="time-box-wrapper">
        <div className="time-col">SATURDAY</div>
        <div className="time-col time-col-center">3PM</div>
        <div className="time-col">
          <span className="date-text">AUGUST 08</span>
        </div>
      </div>

      <div className="footer-info">
        <div className="info-item">
          <span>📍</span>
          <div>
            <p>888 Boulevard St</p>
            <p>Daniel Residence 1008</p>
          </div>
        </div>
        <div className="info-item">
          <span>✉️</span>
          <p>RSVP to Mary 0908-8888-88</p>
        </div>
      </div>
    </div>
  );
}