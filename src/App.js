import './App.css';
import Month from "./Components/Month";
import WeeklyBlock from "./Components/Weekly";
import Time from "./Components/Time";
import {useDispatch, useSelector} from "react-redux";
import {loadCron, saveCron} from "./Redux/Slice/cronSlice";

function App() {
    let Cron = useSelector(state => state.cron.Cron)
    let dispatch = useDispatch()
    return (
        <div className="app">
            <div className="schedule">
                <div className="block">
                    <Month/>
                    <WeeklyBlock/>
                </div>
                <Time/>
            </div>
            <div className="buttons">

                <button onClick={() => {
                    dispatch(loadCron())
                }}>Load
                </button>

                <button onClick={() => {
                    dispatch(saveCron())
                }}>Save
                </button>

            </div>
            <div className="result">
                {Cron}
            </div>
        </div>
    );
}

export default App;
