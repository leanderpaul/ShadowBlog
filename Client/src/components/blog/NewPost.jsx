import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toastify'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';

class NewPost extends Component {

    state = {
        title: '',
        content: '<p>Blog Content goes Here !</p>',
        msg: null
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    handleContentChange = (editor) => {
        this.setState({
            ...this.state,
            content: editor.getData()
        })
    }

    handleSubmitPost = () => {
        const postData = this.state
        postData.user = this.props.user
        Axios.post('http://localhost:8080/new-post', postData)
            .then(res => {
                if (res.data.success === true) {
                    // toast.success(res.data.msg, {
                    //     position: toast.POSITION.TOP_CENTER
                    // })
                    this.setState({
                        ...this.state,
                        msg: res.data.msg
                    })
                }
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.msg) {
            return <Redirect to={{
                pathname: '/',
                state: {
                    msg: this.state.msg,
                    success: true
                }
            }} />
        }
        return (
            <div className="blog-component container">
                <br /><br />
                {/* <ToastContainer /> */}
                <div className="input-field">
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" name="title" id="title" className="validate" onChange={this.handleChange} />
                </div>
                <br />
                <CKEditor
                    editor={ClassicEditor}
                    data={this.state.content}
                    onChange={(event, editor) => {
                        this.handleContentChange(editor)
                    }}
                />
                <br />
                <button className="btn right post-btn waves-effect waves-light" onClick={this.handleSubmitPost}>
                    P o s t
                </button>
                <br /><br /><br /><br />
            </div>
        )
    }

}

export default NewPost