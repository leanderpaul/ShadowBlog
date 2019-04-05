import React, { Component } from 'react'
import moment from 'moment'
import Axios from 'axios'

class BlogDetails extends Component {

    state = {
        title: null,
        content: null,
        author: null,
        date: null
    }

    constructor(props) {
        super(props)
        Axios.get('http://localhost:8080/blog/' + props.match.params.id)
            .then(res => {
                if (res.data.err) {
                    console.log(res.data)
                } else {
                    this.setState({
                        ...this.state,
                        ...res.data.blog
                    })
                }
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        if (!this.state.title) {
            return (
                <div className="container center">
                    <p>Loading Blog...</p>
                </div>
            )
        }
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="blog-title center-align">
                            {this.state.title}
                        </div>
                        <div className="lighten-4 grey-text right">
                            <div>Posted by {this.state.author.firstName} {this.state.author.lastName}</div>
                            <div>{moment(this.state.date).calendar()}</div>
                        </div> <br/> <br/><br/>
                        <div dangerouslySetInnerHTML={{ __html: this.state.content }} className="blog-content">

                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
        )
    }
}

export default BlogDetails