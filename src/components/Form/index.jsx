import { useForm } from "react-hook-form";
import Loading from "../Loading";
import styles from "./Form.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../validation/FormValidation";
import emailjs from "@emailjs/browser";

//import logo
import send from "../../assets/sendLogo.svg";
import eraser from "../../assets/eraserLogo.svg";
import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const sendmail = async (data) => {
    try {
      setLoading(true);
      const { fullname, email, message } = data;
      const templateParans = {
        from_name: fullname,
        email: email,
        mensagem: message,
      };
      const response = await emailjs.send(
        "service_r3dxkwa",
        "template_xpohs4k",
        templateParans,
        "pwtQ022timwlmCiNd"
      );
      console.log("email enviado", response.status, response.text);
      reset();
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(sendmail)}>
      <div className={styles.input}>
        <label htmlFor="fullname">Name:</label>
        <input
          id="fullname"
          type="text"
          placeholder="Nome"
          name="name"
          {...register("fullname")}
        />
        <div className={styles.messageError}>{errors.fullname?.message}</div>
      </div>
      <div className={styles.input}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          {...register("email")}
        />
        <div className={styles.messageError}>{errors.email?.message}</div>
      </div>
      <div className={styles.input}>
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          id="message"
          rows={10}
          name="message"
          placeholder="message..."
          {...register("message")}
        />
        <div className={styles.messageError}>{errors.message?.message}</div>
      </div>
      <div className={styles.buttonGroup}>
        <button
          type="reset"
          className={styles.resetButton}
          onClick={() => reset()}
        >
          <span>
            <img src={eraser} alt="reset" />
            <p>Reset</p>
          </span>
        </button>
        <button type="submit" className={styles.submitButton}>
          <span>
            {loading ? (
              <Loading text="sending" textBool={true} />
            ) : (
              <>
                <img src={send} alt="send" />
                <p>Send</p>
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
