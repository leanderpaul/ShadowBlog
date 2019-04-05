import React, { Component } from 'react'
import M from 'materialize-css'
import Axios from 'axios'
import BlogList from './../blog/BlogList'

class Dashboard extends Component {

    state = {
        blogs: null,
        toastMsg: null
    }

    constructor(props) {
        super(props)
        Axios.get('http://localhost:8080/all-blogs')
            .then(res => {
                if (res.data.err) {
                    console.log(res.data)
                } else {
                    this.setState({
                        ...this.state,
                        blogs: res.data.blogs
                    })
                }
            }).catch(err => {
                console.log(err);
            });
            if (this.props.location.state) {
                this.setState({
                    ...this.state,
                    toastMsg: this.props.location.state.msg
                })
            }
    }

    render() {
        if (this.state.toastMsg) {
            M.toast({ html: this.state.toastMsg, classes: 'rounded center-align' })
            this.setState({
                ...this.state,
                toastMsg: null
            })
        }

        return (
            <div className="container">
                <h1 className="center-align">Recent Blogs</h1><br /><br />
                <div className="col 8">
                    <BlogList blogs={this.state.blogs} />
                </div>
                <div className="col 4">

                </div>
                <br/><br/>
            </div>
        )
    }

}

export default Dashboard;