import NumberBoard from "../../components/NumberBoard/NumberBoard";
import Favorites from '../../components/Favorites/Favorites';
import { useState, useEffect, useRef } from "react";
import './MainPage.scss';
function MainPage() {
  let [str, setStr] = useState(new Date().toLocaleTimeString());
  let [sc, setSc] = useState("");
  let [color, setColor] = useState([
    localStorage.getItem("bg-color1") || "#d7d2cc",
    localStorage.getItem("bg-color2") || "#304352"
  ]);
  let [seeColor, setSeeColor] = useState(true);
  const ref = useRef();
  function handleInput(event) {
    setSc(event.target.value);
    if(event.nativeEvent.keyCode === 13){
      window.open("https://cn.bing.com/search?form=ANNTH1&q=" + sc);
    }
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
    <div id="mainpage"
      style={{
        'backgroundImage': `linear-gradient(to right, ${color[0]} 0%, ${color[1]} 100%)`
      }}
    >
      <div id="top-bar">
        <a href="https://github.com/GrayRabbit-FE/PunkStyleTabPage" target="_blank">
          <svg id="github" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
      <div>
        <div id="foot-bar"
          onMouseEnter={() => { setSeeColor(false); }}
          onMouseLeave={() => { setSeeColor(true); }}>
          <div>
            <input hidden={seeColor}
              value={color[0]}
              onChange={(e) => {
                color[0] = e.target.value;
                localStorage.setItem("bg-color1", e.target.value);
                setColor(color);
              }}
              type="color" />
            <input hidden={seeColor}
              value={color[1]}
              onChange={(e) => {
                color[1] = e.target.value;
                localStorage.setItem("bg-color2", e.target.value);
                setColor(color);
              }}
              type="color" />
          </div>
          <button hidden={seeColor}
            onClick={() => {
              color[0] = "#d7d2cc";
              localStorage.removeItem("bg-color1");
              color[1] = "#304352";
              localStorage.removeItem("bg-color2");
              setColor(color);
            }}>恢复默认</button>
          <b>改变主题色</b>
        </div>
      </div>
      <NumberBoard str={str}></NumberBoard>
      <div id="input-container">
        <input
          id="content-input"
          placeholder="请输入搜索内容"
          onKeyUp={handleInput}
          type="text"
        />
        <div onClick={handleButton} id="sbtn">
          搜索
        </div>
      </div>
      <Favorites></Favorites>
      <div id="foot">
        GrayRabbit@HIT&nbsp;&nbsp;&nbsp;<a href="http://beian.miit.gov.cn/" target="_blank">鲁ICP备2021043239号</a>
      </div>
    </div>
  );
}
export default MainPage;