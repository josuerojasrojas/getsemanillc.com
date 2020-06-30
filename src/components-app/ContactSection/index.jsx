import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Button from "components-shared/Button";
import Input from "components-shared/Input";

const title = "Getsemani Lanscaping";
const infoText =
  "some text that will appear hear, maybe a description describing something. or a quick message, idk..";
const buttonText = "Submit";

const formInputs = [
  {
    label: "Name:",
    placeholder: "Your Name",
    type: "name",
  },
  {
    label: "Email:",
    placeholder: "Your Email",
    type: "email",
  },
  {
    label: "Address:",
    placeholder: "Your Address",
    type: "text",
  },
  {
    label: "Phon Number:",
    placeholder: "Your Phone Number",
    type: "text",
  },
];

const ContactSection = React.forwardRef(({ className }, ref) => {
  //   const TriggeHash = (path) => {
  //     // (josue): might be a bad idea to have a timer;
  //     window.location.hash = Date.now();
  //     setTimeout(() => {
  //       window.location = path;
  //     }, 0);
  //   };

  const onSubmit = (e) => {
    console.log("submitting");
    e.preventDefault();
  };

  return (
    <div className={classNames(styles.ContactSection, className)} ref={ref}>
      <div className={styles.column}>
        <h1 className={styles.title}>{title}</h1>
        <p>{infoText}</p>
        <form className={styles.form} onSubmit={onSubmit}>
          {formInputs.map(({ label, ...inputProps }, i) => {
            return (
              <label key={`input-${i}`}>
                {label}
                <Input className={styles.input} {...inputProps} />
              </label>
            );
          })}
          <Button value={buttonText} type="submit" isInput />
        </form>
      </div>
    </div>
  );
});

export default ContactSection;
