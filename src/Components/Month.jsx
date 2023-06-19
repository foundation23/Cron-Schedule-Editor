import React from 'react';
import "./month.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteAllDays, deleteSelectedMonth, selectedMonth} from "../Redux/Slice/cronSlice";
import Days from "./Days";

const months = [
    {name: 'January', id: 1, numberDays: 31}, {name: 'February', id: 2, numberDays: 28},
    {name: 'March', id: 3, numberDays: 31}, {name: 'April', id: 4, numberDays: 30},
    {name: 'May', id: 5, numberDays: 31}, {name: 'June', id: 6, numberDays: 30},
    {name: 'July', id: 7, numberDays: 31}, {name: 'August', id: 8, numberDays: 31},
    {name: 'September', id: 9, numberDays: 30}, {name: 'October', id: 10, numberDays: 31},
    {name: 'November', id: 11, numberDays: 30}, {name: 'December', id: 12, numberDays: 31}
]

const Month = () => {
    const activeMonth = useSelector(state => state.cron.activeMonth)
    const activeDay = useSelector(state => state.cron.Weekly)
    const dispatch = useDispatch()

    let selectedMonths = (month) => {
        dispatch(selectedMonth(month))
        if (activeMonth) {
            if (activeMonth.id === month.id) {
                dispatch(deleteSelectedMonth(month.id))
                dispatch(deleteAllDays())
            }
        }
    }

    let eventDays = (activeMonth) => {
        if (activeMonth) {
            return <Days days={activeMonth.numberDays} key={activeMonth.numberDays}/>
        } else {
            return ''
        }
    }
    let checkMonth = (activeMonth) => {
        if (activeMonth) {
            return activeMonth.name
        } else {
            return ''
        }
    }

    return (
        <div className="month">
            <p>Monthly:</p>
            <ul className="month__list">
                {months.map(month => (
                    <li key={month.name}><a href="#"
                                            key={month.id}
                                            onClick={() => selectedMonths(month)}
                                            className={month.name === checkMonth(activeMonth) ? 'selected' : ''
                                                + (activeDay[0] ? 'disable' : '')}
                    >{month.name}</a>
                    </li>
                ))}
            </ul>
            {eventDays(activeMonth)}
        </div>
    );
};

export default Month;