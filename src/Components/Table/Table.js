import styles from './Table.module.css';
import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
// import moment from 'moment';
import {allDaysOfWeek, daysOfMonth, quartalOfYear} from './date.service'

const Table = () => {
    const [value, setValue] = useState([20, 37]);
    // console.log('value', value);

    useEffect(() => {
        getter();
        
    },[] )

    const getter = (type) => {
        let res = [];
        const date = new Date();
        switch (type) {
            case 'week':
                res = allDaysOfWeek(date);
                console.log("week");
                break;
            case 'month':
                res = daysOfMonth(date);
                console.log("month");
                break;
            case 'quartal':
                res = quartalOfYear(date)
                console.log("quartal");
                break;

            default:
                // res = daysOfMonth(date);
                res = [
                    {
                        title: "January"
                    },
                    {
                        title: "February"
                    },
                    {
                        title: "March"
                    },
                    {
                        title: "April"
                    },
                    {
                        title: "May"
                    },
                    {
                        title: "June"
                    },
                    {
                        title: "July"
                    },
                    {
                        title: "August"
                    },
                    {
                        title: "September"
                    },
                    {
                        title: "October"
                    },
                    {
                        title: "November"
                    },
                    {
                        title: "December"
                    }
                ]
                break;
        }
        setValue(res)
        getCountElementsTimelineStyles(res);
    }

    const root = document.documentElement;
    const getCountElementsTimelineStyles = (res) => {
        root.style.setProperty('--timelineElements', `${res.length}`);
    }

    
    return (
        <div className={styles.container}>
          
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick = {() => getter("week")}>Week</Button>
                <Button onClick = {() => getter("month")}>Month</Button>
                <Button onClick = {() => getter("quartal")}>Quartal</Button>
            </ButtonGroup>
            
            <div className={styles.chart}>
            
                <div className={`${styles.chart_row} ${styles.chart_period} `}>
                    <div className={styles.chart_row_item}></div>
                    { value.map((item, index) => (
                            <span  key={index}>{item.title} {item.dayOfWeek} <br/>{item.dayCount}</span>
                     ))}
                </div>
                
                <div className={`${styles.chart_row} ${styles.chart_lines}`}>
                    <span></span>
                { value.map((item, index) => (
                            <span key={index}></span>
                     ))}
                </div>
                <div className={styles.chart_row}>
                    <div className={styles.chart_row_item}>Milestones</div>
                    <ul className={styles.chart_row_bars}>
                        <li className={styles.chart_li_one_a} style={{gridColumn: `${3}/${20}`}}>Phase 1</li>
                        <li className={styles.chart_li_one_b}>Phase 2</li>
                    </ul>
                </div>
                <div className={styles.chart_row}>
                    <div className={styles.chart_row_item}>Module A</div>
                    <ul className={styles.chart_row_bars}>
                        <li className={styles.chart_li_two_a}>Future 1</li>
                        <li className={styles.chart_li_two_b}>Future 2</li>          
                    </ul>
                </div>
                <div className={styles.chart_row}>
                    <div className={styles.chart_row_item}>Module B</div>
                    <ul className={styles.chart_row_bars}>
                        <li className={styles.chart_li_three}>Future 3</li>
                    </ul>
                </div>
                <div className={styles.chart_row}>
                    <div className={styles.chart_row_item}>Module C</div>
                    <ul className={styles.chart_row_bars}>
                        <li className={styles.chart_li_four_a}>Future 4</li>
                        <li className={styles.chart_li_four_b}>Future 5</li>
                    </ul>
                </div>
                <div className={styles.chart_row}>
                    <div className={styles.chart_row_item}>Module D</div>
                    <ul className={styles.chart_row_bars}>
                        <li className={styles.chart_li_five_a}>Future 6</li>
                        <li className={styles.chart_li_five_b}>Future 7</li>
                        <li className={styles.chart_li_five_c}>Future 8</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Table;