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
          For more than 6 years I'm working as Software Engineer in RPA(Robotic
          Process Automation), I like to create something that makes other
          people life easier, for example automating boring and repeptitive
          tasks for colleagues.
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
