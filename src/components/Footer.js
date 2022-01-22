import FavoriteIcon from "@mui/icons-material/Favorite";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        inshorts Clone made with <FavoriteIcon /> by IAmSVikas
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://github.com/iamsvikas" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://twitter.com/iamsvikas2"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/iamsvikas/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};
export default Footer;
