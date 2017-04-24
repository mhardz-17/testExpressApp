import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './App.css';

import TickingClock from './components/Widgets'
import Header from './components/Header'
import StudentListTable from './components/StudentListTable'


//function TickingClock(props) {
//    return (<h2>It is {props.date.toLocaleTimeString()}.</h2>)
//}


class App extends Component {

    render() {
        var data = [
            {
                "student_id" : 1,
                "student_no" : 'jajjdfa'
            },
            {
                "student_id" : 2,
                "student_no" : 'fdsfdsa'
            },
        ];
        var headings = [
            "Student Id","Student No"
        ];


        return (
            <Grid className="App">
                <Header message="Welcome to React!!"/>
                <p className="App-content">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    Its Really Cool yeah
                    <TickingClock date={new Date()}/>
                    <TickingClock date={new Date()}/>
                </p>
                <p>
                    <StudentListTable headings={headings} data={data} />
                </p>
            </Grid>

        );
    }
}


export default App;
