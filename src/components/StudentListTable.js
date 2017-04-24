import React, { Component } from 'react';

class Headings extends React.Component {
    render() {
        var headings = this.props.headings.map(function (value) {
            return (<th>{value}</th>)
        })
        return (
            <tr>
                { headings }
            </tr>
        )
    }
}

class Row extends React.Component {
    render() {
        var rowData =  this.props.data.map(function (value, key) {
            return <td>{value}</td>
        })
        return (
            <tr>
                {rowData}
            </tr>
        )
    }
}

class StudentListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        var rows = this.props.data.map(function (row) {
            return <Row data={row}/>
        })
        return (
            <table>
                <thead>
                <Headings headings={this.props.headings}/>
                </thead>
                <tbody>
                <Row data={[1,2]}/>
                <Row data={[34,55]}/>
                </tbody>
            </table>
        )
    }
}

export default StudentListTable;