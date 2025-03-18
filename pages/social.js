import styles from "../styles/Social.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function Social() {
  return (
    <div>
      <div className={styles.Icons}>
        <a
          href="https://github.com/jamesb97/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Github"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://linkedin.com/in/zdravkobozhkov/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Linkedin"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/zdravko6t5/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Twitter"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
      <span>Zdravko Bozhkov © {getCurrentYear()}</span>
    </div>
  );
}
