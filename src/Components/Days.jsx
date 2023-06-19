import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDay, deleteDay} from "../Redux/Slice/cronSlice";
import "./days.css"

const Days = (numberDays) => {
    const activeDays = useSelector(state => state.cron.activeDays)
    const dispatch = useDispatch()

    let days = [];
    const decomposeDays = (numberDays) => {
        for (let i = 0; i <= numberDays.days; i++) {
            days.push(i)
        }
        return days;
    }
    let selectedDays = (day) => {
        dispatch(addDay(day))
        if (activeDays.find((e) => e === day)) {
            dispatch(deleteDay(day))
        }
    }
    let checkDays = (activeDays, day) => {
        if (activeDays) {
            return activeDays.find((e) => e === day)
        } else {
            return ''
        }
    }

    return (
        <div className="days">
            {decomposeDays(numberDays).map(day => (
                <div className="block__day" key={day}>
                    <a href="#" key={day} onClick={() => selectedDays(day)}
                       className={checkDays(activeDays, day) ? 'selected' : ''}
                    >{day}</a>
                </div>
            ))}
        </div>
    );
};

export default Days;