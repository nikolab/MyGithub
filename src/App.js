import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './Components/Header';
import Repos from './Components/Repos';
import RepBio from './Components/RepBio';
import logo from './jetpack.png';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
            gitapi: []
        }
    }

    //get bio
    getGitApi() {
        $.ajax({
            url: 'https://api.github.com/users/nikolab',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({gitapi: data}, function () {
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        })
    }

    //get repositories
    getRepos() {
        $.ajax({
            url: 'https://api.github.com/users/nikolab/repos',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({repos: data}, function () {
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        })
    };

    //show api's
    componentDidMount() {
        this.getGitApi();
        this.getRepos();

    }

    //change bio
    handleAddBio(bio) {
        // console.log(bio);
        let bios = this.state.gitapi;
        bios.push(bio);
        this.setState({bios: bios});
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">My Github</h1>
                    </header>
                    <Header />
                    <main>
                        <div className="Wrapper">

                            {/*<RepBio addBio={this.handleAddBio.bind(this)} />*/}
                            <Route path="/" exact strict render={
                                () => {
                                    return (
                                        <RepBio   gitapi={this.state.gitapi} />
                                    );
                                }
                            }/>

                            <Route path="/repos" exact strict render={
                                () => {
                                    return (
                                        <Repos repos={this.state.repos} />
                                    );
                                }
                            }/>

                        </div>
                    </main>
                    <footer className="Footer">
                        <p>All rights reserved &copy; GC</p>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
