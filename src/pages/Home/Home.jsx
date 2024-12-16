import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/shared/Card/Card";
import { Button } from "../../components/shared/Button/Button";
export const Home = () => {
  const navigate = useNavigate();
  function startRegister() {
    navigate("/Authenticate");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="welcome to AudioChat" icon="Emoji">
        <p className={styles.text}>
        welcome to AudioChat application, where you can connect seamlessly through  audio chat. Stay tuned—exciting features are on the way!
        </p>
        <div>
          <Button onClick={startRegister} text="Let's Go"></Button>
        </div>
      </Card>
    </div>
  );
};
