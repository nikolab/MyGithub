import React, { Component } from 'react';
import './RepItem.css';

class RepItem extends Component {
    render() {
        return (
            <li className="RepItem">
                <h4><span className="Detail-name">Name:</span> <strong>{this.props.repo.name}</strong></h4>
                <p><span className="Detail-name">Desc:</span> {this.props.repo.description}</p>
                <p><span className="Detail-name">Language:</span> {this.props.repo.language}</p>
                <p><span className="Detail-name">Clone url:</span> {this.props.repo.clone_url}</p>
                <a target="_blank" className="Link-to-repo" href={this.props.repo.html_url}>Go to repo
                </a>
            </li>
        );
    }
}

export default RepItem;
