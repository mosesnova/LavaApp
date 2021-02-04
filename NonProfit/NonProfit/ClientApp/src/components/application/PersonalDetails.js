import React, { Component } from 'react';
import $ from 'jquery';

export class PersonalDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:1,
            firstname: '',
            middlename: '',
            lastname: '',
            email: '',
            dateofbirth:new Date(),
            photo:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logChange = this.logChange.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        var data = {
            Id:this.state.id,
            FirstName: this.state.firstname,
            MiddleName: this.state.middlename,
            LastName: this.state.lastname,
            Email: this.state.email,
            DateofBirth: this.state.dateofbirth,
            Photo: this.state.photo
        };
        console.log(data);
        $.ajax({
            url: 'PersonalDetails/Create',
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
            console.log("hello",data);
            if (data.responseText === "success") {
                window.location.href = '/';
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
            <h1>Personal Details</h1>
            <table>
            <tr>
            <td><label>First Name</label></td>
            <td><input onChange={this.logChange} value={this.state.firstname} name='firstname' /></td>
            </tr>
            <tr>
                    <td> <label>Middle Name</label></td>
                    <td> <input onChange={this.logChange} value={this.state.middlename} name='middlename' /></td>
            </tr>
               
            <tr>
                    <td> <label>Last Name</label></td>
                    <td> <input onChange={this.logChange} value={this.state.lastname} name='lastname' /></td>
            </tr>
             
            <tr>
                    <td> <label>Email</label></td>
                    <td> <input onChange={this.logChange} value={this.state.email} name='email' /></td>
            </tr>
            
            <tr>
                    <td> <label>DateofBirth</label></td>
                    <td> <input onChange={this.logChange} value={this.state.dateofbirth} name='dateofbirth' /></td>
            </tr>
                 
            <tr>
                    <td> <label>photo</label></td>
                    <td> <input onChange={this.logChange} value={this.state.photo} name='photo' /></td>
            </tr>

            </table>
            <div><button>Submit</button></div>
        </form>);
    }
}
export default PersonalDetails
