import {useState,usingIn} from 'react';
import './Favorites.scss'
function FavoriteItemHead(){
    return(
        <div class='favorites-head-container'>
            <div class='plus-icon'></div>
        </div>
    )
}
function FavoriteItemFoot(){

}
function FavoriteItem(){

}
function Favorites(){
    const [favorites, setFavorites] = useState(JSON.parse(window.localStorage.getItem("tabFavorite"))||[]);
    return (
        <div id="Favorites">
                  <FavoriteItemHead></FavoriteItemHead>  
        </div>
    );
}
export default Favorites;