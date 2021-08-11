import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom right, #14703c, #000000 50%);
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    color: white;
  }

  nav {
    height: 97px;
    background: #191B1F;
    display: flex;
    justify-content: space-between;
  }

  .container {
    margin-top: 66px;
    margin-bottom: 88px;
    margin-right: 120px;
    margin-left: 120px;
    max-width: 1920px;
    background: #1F2128;
    border: 10px solid #191B1F;
    border-radius: 25px;
  }

  .nav-left {
    display: flex;
    align-items: center;

  }

  .nav-left > ul {
    list-style: none;
    padding: 0;
    padding-left: 95px;
  }

  .nav-left > ul > li {
    font-size: 23px;
    font-weight: 500;
    display: inline-block;
    width: 167px;
    border-radius: 20px;
    text-align: center;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .nav-left > ul > li:nth-child(1) {
    background: #2C2F36;
  }
  

  .nav-left Link {
    display: flex;
  }

  .nav-left > ul > li a:link, a:visited, a:active {
    text-decoration: none;
    color: white;
  }

  

  .nav-right {
    display: flex;
    align-items: center;
    padding-right: 3px;
  }

  .nav-right input {
    position: relative;
    width: 452px;
    height: 63px;
    border-radius: 20px;
    border: none;
    background: #2C2F36;
    padding: 0;
    margin-right: 27px;
    color: white;
    font-size: 17px;
    padding-left: 58px;
  }





  .nav-right-select-container {
    margin-right: 25px;
  }

  .nav-under-container {
    width: 100%;
    display: flex; 
    justify-content: center;
    padding-bottom: 25px;
  }

  .nav-under {
    width: 906px;
    height: 55px;
    background: #191B1F;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .nav-under ul {
    padding: 0;
    display: flex;
    list-style: none;
  }

  .nav-under ul > li {
    font-size: 17px;
    padding-right: 16px;
    padding-left: 16px;
    
  }




`;
