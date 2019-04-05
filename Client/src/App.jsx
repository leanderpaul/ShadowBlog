import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'
import M from 'materialize-css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

// Importing Componenets 
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import NewPost from './components/blog/NewPost'
import BlogDetails from './components/blog/BlogDetails'

library.add(faAlignJustify)

class App extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        M.AutoInit();
    }

    setUser = () => {
        this.setState({
            user: Cookies.get('ShadowBlogUser')
        })
    }

    logout = () => {
        Cookies.remove('ShadowBlogUser')
        this.setUser()
    }

    constructor(props) {
        super(props)
        this.state = {
            user: Cookies.get('ShadowBlogUser')
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar user={this.state.user} logout={this.logout} />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/blog/:id' component={BlogDetails} />
                        <Route path='/register' render={() => <Register user={this.state.user} />} />
                        <Route path='/new-post' render={() => <NewPost user={this.state.user} />} />
                        <Route path='/login' render={() => <Login user={this.state.user} setUser={this.setUser} />} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
