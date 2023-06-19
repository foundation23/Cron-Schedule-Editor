import {createSlice} from '@reduxjs/toolkit'

export const cronSlice = createSlice({
    name: 'cron',
    initialState: {
        Weekly: [],
        activeMonth: null,
        activeDays: [],
        time: null,
        Cron: ""
    },
    reducers: {
        selectedMonth: (state, action) => {
            state.activeMonth = action.payload
        },
        deleteSelectedMonth: (state) => {
            state.activeMonth = null;
        },
        addWeeklyDay: (state, action) => {
            state.Weekly.push(action.payload)
        },
        deleteWeeklyDay: (state, action) => {
            state.Weekly = state.Weekly.filter(function (day) {
                return day !== action.payload
            })
        },
        addTime: (state, action) => {
            state.time = action.payload
        },
        addDay: (state, action) => {
            state.activeDays.push(action.payload)
        },
        deleteDay: (state, action) => {
            state.activeDays = state.activeDays.filter(function (day) {
                return day !== action.payload
            })
        },
        deleteAllDays: (state) => {
            state.activeDays = []
        },
        saveCron: (state) => {
            let minute = '*'
            let hour = '*'
            let daysMonth = '*'
            let month = '*'
            let daysWeek = '*'

            if (state.time) {
                minute = `${state.time[3] + state.time[4]}`
                hour = `${state.time[0] + state.time[1]}`
            }
            if (state.Weekly[0]) {
                daysWeek = state.Weekly
            }
            if (state.activeMonth) {
                month = state.activeMonth.id
            }
            if (state.activeDays[0]) {
                daysMonth = state.activeDays
            }
            state.Cron = minute + " " + hour + " " + daysMonth + " " + month + " " + daysWeek
        },
        loadCron: (state) => {
            state.Cron = "* * * * *"
        }
    },
})

export const {
    selectedMonth,
    addWeeklyDay,
    deleteWeeklyDay,
    addTime,
    addDay,
    deleteDay,
    deleteSelectedMonth,
    deleteAllDays,
    loadCron,
    saveCron
} = cronSlice.actions

export default cronSlice.reducer