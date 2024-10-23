import profilePic from "../public/CV_Pic.jpg";
import githubLogo from "../public/GitHub.png";
import linkedinLogo from "../public/linkedin.png";
import emailLogo from "../public/gmail.png";

export default function Header() {
  return (
    <div className="headerContainer">
      <img src={profilePic} alt="Profile picture" className="profileImg" />
      <div>
        <h1>Rūta Rakauskė</h1>
        <h3>Front-end developer (React)</h3>
        <p>
          I'm responsible and detailed-oriented person, I like challenges in my
          life, as they push me to <strong>grow</strong> every day. I believe
          that person can learn everything, if he/she have{" "}
          <strong>persistance</strong>(can-do attidute) and{" "}
          <strong>motivation</strong>. I love working together with team in
          office, it gives me additional motivation. While my personal
          satisfaction in work - <strong>create real value</strong> ensuring
          high-quality.
        </p>
        <div className="logoButtons">
          <a
            href="https://github.com/RutaRakauske"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="Github logo" className="logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/r%C5%ABta-rakausk%C4%97-919b93111/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="Linkedin logo" className="logo" />
          </a>
          <a href="mailto: mikutyte.ruta@gmail.com">
            <img src={emailLogo} alt="Email address" className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
