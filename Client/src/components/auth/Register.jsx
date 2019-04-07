import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Register extends Component {

    state = {
        submitClass: ['btn', 'waves-effect', 'waves-light'],
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    }

    validatePassword = (e) => {
        console.log(`Password confirm: ${e.target.value === this.state.password}`);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        };

        axios.post('/register', userData)
            .then((res) => {
                if (res.data)
                    alert(res.data.msg);
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.props.user)
            return <Redirect to='/' />
        return (
            <div className="container">
                <h1 className="center-align">Register Account</h1>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" name="firstName" onChange={this.handleChange} />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" name="lastName" onChange={this.handleChange} />
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" name="username" onChange={this.handleChange} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" name="password" onChange={this.handleChange} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" onChange={this.validatePassword} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row center-align">
                            <button className={this.state.submitClass.join(' ')} type="submit">
                                Submit
                                {/* <i className="material-icons right">Send</i> */}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;