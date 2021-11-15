import { useState, usingIn } from 'react'
import ico from "../../assects/favicon.ico"
import del from "../../assects/del.png"
import './Favorites.scss'

/**
 * 
 */
function InfoGeter(props) {
    let [url, setUrl] = useState("");
    let [name, setName] = useState("");
    return (
        props.showModel &&
        <div className="mask">
            <div className="geter-container">
                <input type="text"
                    placeholder="请输入网站名"
                    onInput={(e) => { setName(e.target.value) }}
                    className="web-input"
                />
                <input type="text"
                    placeholder="请输入网址"
                    onInput={(e) => { setUrl(e.target.value) }}
                    className="web-input"
                />
                <div className="button-container">
                    <button onClick={() => {
                        let Data = (JSON.parse(window.localStorage.getItem("gr-favorite")) || []);
                        Data.push({
                            name,
                            weburl: url.startsWith("https://") && url.startsWith("http://") ? url : "https://" + url
                        });
                        window.localStorage.setItem("gr-favorite", JSON.stringify(Data));
                        props.callback();
                        props.setShowModel(false);

                    }}
                        className="web-btn"
                    >添加</button>
                    <button onClick={() => (props.setShowModel(false))} className="web-btn" >取消</button>
                </div>

            </div>
        </div>
    )
}
function FavoriteItemHead(props) {
    let [showModel, setShowModel] = useState(false);
    function handAddFavorite(event) {
        setShowModel(true);
    }
    return (
        <div className='head'>
            {
                props.weburl === 'plus-icon' ? <div className='plus-icon' onClick={handAddFavorite}></div> :
                    props.weburl !== null ?
                        <a href={props.weburl}
                            target="_blank">
                            <img className="headimg"
                                src={`https://${props.weburl.split(/\//g)[2]}/favicon.ico`}
                                alt="."
                            />
                        </a> :
                        <img className="headimg"
                            src={ico}
                            alt=""
                        />

            }
            {
                <InfoGeter
                    showModel={showModel}
                    setShowModel={setShowModel}
                    callback={() => {
                        console.log(props);
                        props.setFavorites(JSON.parse(window.localStorage.getItem("gr-favorite")));
                    }}
                >
                </InfoGeter>
            }
        </div>
    )
}

function FavoriteItemFoot(props) {
    return (
        props.weburl === 'plus-icon' ? <div className="foot">{props.name}</div> :
            <a><div className="foot">{props.name}</div></a>
    )
}

function FavoriteItem(props) {
    let [canSeeDel, setCanSeeDel] = useState(false);
    return (
        <div className="favorite-item"
            onMouseEnter={() => { setCanSeeDel(true) }}
            onMouseLeave={() => { setCanSeeDel(false) }}
        >
            <FavoriteItemHead weburl={props.weburl} setFavorites={props.setFavorites}></FavoriteItemHead>
            <FavoriteItemFoot name={props.name}></FavoriteItemFoot>
            <img src={del} hidden={!canSeeDel || props.weburl === "plus-icon"} className="delete"
                onClick={() => {
                    let Data = (JSON.parse(window.localStorage.getItem("gr-favorite")) || []);
                    for (let i = 0; i < Data.length; i++) {
                        if (Data[i].weburl === props.weburl) {
                            Data.splice(i--, 1);
                        }
                    }
                    props.setFavorites(Data);
                    localStorage.setItem("gr-favorite", JSON.stringify(Data));
                }}
            ></img>
        </div>
    )
}


function Favorites() {
    const [favorites, setFavorites] = useState(JSON.parse(window.localStorage.getItem("gr-favorite")) || []);
    return (
        <div id="Favorites">
            {
                favorites.slice(0, 9).map((e) =>
                    <FavoriteItem
                        name={e.name.length > 7 ? e.name.slice(0, 7) + "..." : e.name}
                        key={e.weburl}
                        weburl={e.weburl}
                        setFavorites={setFavorites}
                    >
                    </FavoriteItem>)
            }{
                favorites.length < 9 &&
                <FavoriteItem
                    setFavorites={setFavorites}
                    weburl="plus-icon"
                    name="添加"
                    key="plus-icon"
                >
                </FavoriteItem>
            }
        </div>
    );
}
export default Favorites;