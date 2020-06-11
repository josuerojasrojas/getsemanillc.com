import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import TextInput from "components/TextInput";
import Button from "components/Button";
import Card from "components/Card";
import { UserContext } from "components/UserContext";
import { auth } from "_firebase.js";
import LogOutButton from "components/LogoutButton";
import styles from "./styles.module.css";

const SignupPage = ({ isRedirect }) => {
  const [emailInput, setEmailInput] = useState({
    value: "",
    hasError: false,
  });
  const [passwordInput, setPasswordInput] = useState({
    value: "",
    hasError: false,
  });
  const [otherPasswordInput, setOtherPasswordInput] = useState({
    value: "",
    hasError: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = () => {
    setIsLoading(true);
    if (passwordInput.value !== otherPasswordInput.value) {
      setErrorMessage("Passwords don't match.");
      setIsLoading(false);
    } else if (
      !getIsButtonDisabled() &&
      passwordInput.value === otherPasswordInput.value
    ) {
      // hmmm. might changed push to be a prop so someone can push anywhere they want to
      auth
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then((_) => isRedirect && history.push("/"))
        .catch((e) => {
          setErrorMessage(e.message);
          setIsLoading(false);
        });
    } else {
      setErrorMessage("Something went Wrong.");
      setIsLoading(false);
    }
  };

  const getIsButtonDisabled = () =>
    isLoading ||
    emailInput.hasError ||
    passwordInput.hasError ||
    otherPasswordInput.hasError ||
    !emailInput.value.length ||
    !passwordInput.value.length ||
    !otherPasswordInput.value.length;

  if (user.isAuthenticated) return <LogOutButton />;

  return (
    <div>
      <Card>
        <h3 className={styles.cardTitle}>Create a New Account</h3>
        <div className={styles.formWrapper}>
          <TextInput
            onChange={(e) =>
              setEmailInput({
                ...emailInput,
                value: e.target.value,
                // TODO: could use regex or something to validate
                hasError: !e.target.value.length,
              })
            }
            onEnter={onSubmit}
            placeholder="Email"
            type="email"
            value={emailInput.value}
            hasError={emailInput.hasError}
          />
          <TextInput
            autoComplete="off"
            hasError={passwordInput.hasError}
            onChange={(e) =>
              setPasswordInput({
                ...passwordInput,
                value: e.target.value,
                hasError: !e.target.value.length,
              })
            }
            onEnter={onSubmit}
            placeholder="Password"
            required
            type="password"
            value={passwordInput.value}
          />
          <TextInput
            autoComplete="off"
            hasError={otherPasswordInput.hasError}
            onChange={(e) =>
              setOtherPasswordInput({
                ...otherPasswordInput,
                value: e.target.value,
                hasError: !e.target.value.length,
              })
            }
            onEnter={onSubmit}
            placeholder="Re-Enter Password"
            required
            type="password"
            value={otherPasswordInput.value}
          />
          <Button
            className={styles.submitButton}
            onClick={onSubmit}
            text={"Sign Up"}
            isDisabled={getIsButtonDisabled()}
          />
          <div className={styles.errorMessage}>{errorMessage}</div>
          <div>
            Already have an account? <Link to="/login">Login Here</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

SignupPage.defaultProps = {
  isRedirect: true,
};

SignupPage.propTypes = {
  isRedirect: PropTypes.bool,
};

export default SignupPage;
