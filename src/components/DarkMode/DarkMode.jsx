import React from "react";
// import "./darkMode.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function DarkMode() {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
      style={theme ? {background: 'transparent url("../../images/dark-mode/dark.png") no-repeat center', border: '1px solid red'} : {background: 'transparent url("../../images/dark-mode/light.png") no-repeat center', border: '1px solid blue'}}
    >
    </button>
    // <div>{theme ? <FontAwesomeIcon icon={faLightbulb} onClick={(e) => switchTheme(e)}/> : <FontAwesomeIcon icon={faBell} onClick={(e) => switchTheme(e)}/>}</div>
  );
}

export default DarkMode;