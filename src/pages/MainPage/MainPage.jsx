import tracksList from "../../assets/tracksList";
import style from "./mainPage.module.scss"
import Tracks from './../../components/Track/Tracks';
const MainPage = () => {
    return(
        <div className={style.search}>
            <>search the music</>
            <div className={style.list}>
                {tracksList.map((track) => (
                    <Tracks key={track.id} {...track}/>
                ))}
            </div>
        </div>
    )
};

export default MainPage;