import styles from "./Loading.module.css";

// eslint-disable-next-line react/prop-types
const Loading = ({ text, textBool }) => {

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}></div>
      {textBool ? (
        <>
          <p>{text}</p>
        </>
      ) : null}
    </div>
  );
};

export default Loading;
