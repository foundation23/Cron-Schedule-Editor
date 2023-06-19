import React from 'react';
import "./weekly.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteWeeklyDay, addWeeklyDay} from "../Redux/Slice/cronSlice";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', ' Friday', ' Saturday', 'Sunday']

const WeeklyBlock = () => {
    const activeDay = useSelector(state => state.cron.Weekly)
    const activeMonth = useSelector(state => state.cron.activeMonth)
    const dispatch = useDispatch()

    let selectedDays = (day) => {
        dispatch(addWeeklyDay(day))
        if (activeDay.find((e) => e === day)) {
            dispatch(deleteWeeklyDay(day))
        }
    }

    return (
        <div className="weekly">
            <p>Weekly:</p>
            <ul>
                {days.map(day => (
                    <li key={day}><a href="#" onClick={() => selectedDays(day)}
                                     className={
                                         activeDay.find((e) => e === day) ? 'selected' : ''
                                             + (activeMonth ? 'disable' : '')}>{day}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeeklyBlock;