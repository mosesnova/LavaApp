import React, { Component } from 'react';
import $ from 'jquery';

export class ContactDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 10,
            homeaddress1: '',
            homecity: '',
            homezipcode: '',
            mobilephone: '',
            homeaddress2: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logChange = this.logChange.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        var data = {
            Id: this.state.id,
            HomeAddress1: this.state.homeaddress1,
            HomeCity: this.state.homecity,
            HomeZipCode: this.state.homezipcode,
            MobilePhone: this.state.mobilephone,
            HomeAddress2: this.state.homeaddress2,
        };
        console.log(data);
        $.ajax({
            url: 'ContactDetails/Create',
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
            <h1>Contact Details</h1>
            <label>HomeAddress1</label>

            <input onChange={this.logChange} value={this.state.homeaddress1} name='homeaddress1' />

            <label>HomeCity</label>

            <input onChange={this.logChange} value={this.state.homecity} name='homecity' />
            <br />
            <label> HomeZipCode</label>

            <input onChange={this.logChange} value={this.state.homezipcode} name='homezipcode' />

            <label>MobilePhone</label>

            <input onChange={this.logChange} value={this.state.mobilephone} name='mobilephone' />
            <br />

            <label>HomeAddress2</label>

            <input onChange={this.logChange} value={this.state.homeaddress2} name='homeaddress2' />

            

            <div><button>Submit</button></div>
        </form>);
    }
}
export default ContactDetails