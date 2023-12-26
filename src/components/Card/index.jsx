import styles from "./Card.module.css";
import { IoArrowForward } from "react-icons/io5";
import { FaJs, FaNodeJs, } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Card = ({title, decription, htmlUrl}) => {
  return (
    <section className={styles.CardContainer}>
      <h3>{title}</h3>
      <p>{decription}</p>
      <div className={styles.cardFooter}>
        <div className={styles.cardIcons}>
          <FaJs />
          <FaNodeJs />
          <BsFiletypeSql />
        </div>

        <a
          href={htmlUrl}
          target="_blank"
          rel="nopenner norefferer noreferrer"
          className={styles.cardButton}
        >
          <IoArrowForward />
        </a>
      </div>
    </section>
  );
};

export default Card;
