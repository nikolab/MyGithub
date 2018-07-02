import React, { Component } from 'react';
import './RepBio.css'

class RepBio extends Component {

    constructor(){
        super();
        this.state = {
            newBio: {}
        }
    }

    // handleSubmit(e) {
    //     if(this.refs.name.value === ''){
    //         alert('Name is required');
    //     } else {
    //         this.setState({newBio:{
    //             name: this.refs.name.value,
    //             blog: this.refs.blog.value
    //         }}, function () {
    //            // console.log(this.state);
    //             this.props.addBio(this.state.newBio);
    //         });
    //     }
    //     e.preventDefault();
    // }

    render() {
        return (
            <div className="RepBio">
                <h1 className="RepBio-title">My Bio</h1>

                <div className="Bio-info">
                    <div className="Img-holder">
                        <img src={this.props.gitapi.avatar_url} alt="avatar"/>
                    </div>
                    <div className="Bio-details">
                        <p>Name: {this.props.gitapi.name}</p>
                        <p>Profile url: {this.props.gitapi.url}</p>
                        <p>Blog: {this.props.gitapi.blog}</p>
                        <p>Public Repos: {this.props.gitapi.public_repos}</p>
                        <p>Public Gists: {this.props.gitapi.public_gists}</p>
                    </div>
                </div>
                {/*<form action="" onSubmit={this.handleSubmit.bind(this)}>*/}
                    {/*<div>*/}
                        {/*<label htmlFor="title">Title</label> <br/>*/}
                        {/*<input name="name" type="text" ref="name"/>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                        {/*<label htmlFor="blog">Blog</label> <br/>*/}
                        {/*<input name="blog" type="text" ref="blog"/>*/}
                    {/*</div>*/}

                    {/*<input type="submit" value="Submit" />*/}
                {/*</form>*/}
            </div>
        );
    }
}

export default RepBio;
