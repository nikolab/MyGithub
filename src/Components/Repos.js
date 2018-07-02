import React, { Component } from 'react';
import $ from 'jquery'
import RepItem from './RepItem';
import './Repos.css';

class Repos extends Component {
    render() {
        //loop through repo items
        let repItems;
        if(this.props.repos) {
            repItems = this.props.repos.map( repo => {
                return (
                    <RepItem key={repo.title} repo={repo} />
                );
            });
        }

        //filter data from input
        $('#search').keyup(function () {
            var yourtext = $(this).val();
            var li = $(".RepItem");
            if (yourtext.length > 0) {
                li.filter(function () {
                    var str = $(this).text();
                    var re = new RegExp(yourtext, "i");
                    var result = re.test(str);
                    if (!result) {
                        return $(this);
                    }
                }).hide();
            } else {
                li.show();
            }
        });

        return (
            <div className="Repos">
                <h1 className="Repos-title">My Repositories</h1>
                <div className="Search">
                <label htmlFor="search">Search</label>
                <input id="search" name="search" type="search"/>
                </div>
                <ul className="RepItems">
                {repItems}
                </ul>
            </div>
        );
    }
}

export default Repos;
