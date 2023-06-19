import React, {useState} from 'react';
import "./time.css"
import {useDispatch} from "react-redux";
import {addTime} from "../Redux/Slice/cronSlice";

const Time = () => {
    const [time, setTime] = useState()
    const dispatch = useDispatch()

const onTimeChange = (e) => {
    setTime(e.target.value)
}
const onSaveTime = () => {
    dispatch(addTime(time))
}
    return (
        <div className="time">
            <p>at:</p>
            <div className="time__input">
                <input type="time"
                value={time}
                       onBlur = {onSaveTime}
                onChange={onTimeChange}/>
            </div>
        </div>
    );
};

export default Time;