import React, { Component } from 'react';

export default class HomeView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { home } = this.props;
        const { text } = home;
        return (
            <div>
                <button onClick={() => this.onClick()}></button>
                <span>{text}</span>
            </div>
        )
    }
    onClick() {
        const { actions } = this.props;
        actions.changeState({text: 'yes'});
    }
}