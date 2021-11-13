import NumberContainer from "../../components/NumberBoard";
import { useState, useEffect, useRef } from "react";
import './MainPage.css';
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
    <div id="app">
      <NumberContainer str={str}></NumberContainer>
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
      <div id="foot">
        <p>GitHub:<a href="https://github.com/GrayRabbit-FE"> 求🌟🌟🌟 </a></p> 
        <p>By GrayRabbit@HIT</p> 
      </div>
    </div>
  );
}
export default MainPage;