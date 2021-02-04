import React, { Component } from 'react';
import $ from 'jquery';

export class Availability extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 10,
            beforeschool: '',
            amblock: '',
            lunch: '',
            afterschool: '',
            pmblock: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logChange = this.logChange.bind(this);

    }
    handleChecked(tops)
    {
        console.log(tops);
        var days = '';
        // assign function to onclick property of each checkbox
        for (var i = 0, len = tops.length; i < len; i++) {
            if (tops[i].type === "checkbox") {
                if (tops[i].checked === true) {
                    console.log(tops[i].value);
                    days = days.concat(tops[i].value, ', ');
                }
            }
        }
        return days;
    }
    handleSubmit(event) {
        event.preventDefault();
        var beforeschool = document.getElementById('beforeschool').getElementsByTagName('input');
        var amblock = document.getElementById('amblock').getElementsByTagName('input');
        var lunch = document.getElementById('lunch').getElementsByTagName('input');
        var afterschool = document.getElementById('afterschool').getElementsByTagName('input');
        var pmblock = document.getElementById('pmblock').getElementsByTagName('input');
        // get reference to input elements in toppings container element
        this.state.beforeschool = this.handleChecked(beforeschool);
        this.state.amblock = this.handleChecked(amblock);
        this.state.lunch = this.handleChecked(lunch);
        this.state.afterschool = this.handleChecked(afterschool);
        this.state.pmblock = this.handleChecked(pmblock);
        console.log(this.state.beforeschool);
        var data = {
            Id: this.state.id,
            BeforeSchool: this.state.beforeschool,
            Amblock: this.state.amblock,
            Lunch: this.state.lunch,
            AfterSchool: this.state.afterschool,
            Pmblock: this.state.pmblock,
        };
        console.log(data);
        $.ajax({
            url: 'Availability/Create',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(data)
        }).then(function (response) {
            console.log('2', data);
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data);
            if (data === "success") {
                this.setState({ msg: "Thanks for registering" });
            }

        }).catch(function (err) {
            window.location.href = '../';
        });

    }
    logChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (<form onSubmit={this.handleSubmit} method="POST">
            <table>
                <thead>
                    <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr></thead>
                <tbody>
                    <tr>
                        <td><input type='checkbox' value='monday' name='beforeschool' /></td>
                        <td><input type='checkbox' value='tuesday' name='beforeschool' /></td>
                        <td><input type='checkbox' value='wednesday' name='beforeschool' /></td>
                        <td><input type='checkbox' value='thursday' name='beforeschool' /></td>
                        <td><input type='checkbox' value='friday' name='beforeschool' /></td>
                        <td><input type='checkbox' value='saturday' name='beforeschool' /></td>
                        <td><input type='checkbox' value='sunday' name='beforeschool' /></td>
                </tr></tbody>
                <tfoot>
                    <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr></tfoot>
               
               
               
            </table>
        </form>);
    }
}
export default Availability