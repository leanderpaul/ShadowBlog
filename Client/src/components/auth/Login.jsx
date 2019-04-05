import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'js-cookie'

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userData = {
            username: this.state.username,
            password: this.state.password
        };
        Axios.post('http://localhost:8080/login',userData)
            .then((res) => {
                console.log(res.data);
                if(res.data.success) {
                    Cookies.set('ShadowBlogUser',res.data.token);
                    this.props.setUser();
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        if (this.props.user) {
            return <Redirect to='/' />
        }
        return (
            <div className="container"><br/><br/>
                <h1 className="center-align">Login Account</h1><br/><br/>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit} >
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
                        <div className="row center-align">
                            <button className="btn waves-effect waves-light" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;