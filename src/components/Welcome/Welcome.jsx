import "./Welcome.css";

const WelcomeComponent = () => {
  return (
    <div className="welcome-container">
      <div style={{ widows: "50%" }}>
        <img src="/W.png" alt="Students" className="main-image" />
      </div>
      <div className="content-section">
        <h1>Welcome to</h1>
        <span className="highlight">Echooling LMS Platform</span>
        <p>
          Education is both the act of teaching knowledge to others and the act
          of receiving knowledge from someone else.
        </p>
        <p>
          Have questions?
          <a href="" className="cta-button">
            Get Free Guide
          </a>
        </p>

        <p style={{ marginTop: "130px" }}>
          Education also refers to the knowledge received through schooling
          instruction and to the institution of teaching as a whole. The main
          purpose of education is the integral development of a person.
        </p>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <a href="" className="read-more">
            Read More →
          </a>
          <div className="support-info">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="src\assets\vector2.svg" />
              <a href="">Get Support</a>
            </div>

            <p style={{ marginTop: "0px" }}>support@reach.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
