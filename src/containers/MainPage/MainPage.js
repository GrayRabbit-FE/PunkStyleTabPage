import NumberBoard from "../../components/NumberBoard/NumberBoard";
import Favorites from '../../components/Favorites/Favorites';
import { useState, useEffect, useRef } from "react";
import './MainPage.scss';
function MainPage() {
  let [str, setStr] = useState(new Date().toLocaleTimeString());
  let [sc, setSc] = useState("");
  const ref = useRef();
  function handleInput(event) {
    setSc(event.target.value);
  }
  function handleButton() {
    window.open("https://cn.bing.com/search?form=ANNTH1&q=" + sc);
  }
  function enter() {
    return setInterval(() => {
      let date = new Date();
      setStr(date.toLocaleTimeString());
    }, 997);
  }
  useEffect(() => {
    ref.current = enter();
    return () => {
      clearInterval(ref.current);
    };
  });

  return (
    <div id="mainpage">
      <NumberBoard str={str}></NumberBoard>
      <div id="input-container">
        <input
          id="content-input"
          placeholder="请输入搜索内容"
          onInput={handleInput}
          type="text"
        />
        <div onClick={handleButton} id="sbtn">
          搜索
        </div>
      </div>
     <Favorites></Favorites>
      <div id="foot">
        GrayRabbit@HIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/GrayRabbit-FE/PunkStyleTabPage" target="_blank"> 👉求 Star ❤️👈</a>
      </div>
    </div>
  );
}
export default MainPage;