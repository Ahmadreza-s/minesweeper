import React from 'react';
import './App.scss';
import Board from './containers/Board/Board';

class App extends React.Component {
    state = {
        height: 6,
        width : 6,
        mines : 10,
        key   : Math.random()
    };

    refreshGame = () => {
        this.setState({
            key: Math.random()
        });
    };

    render() {
        const {height, width, mines} = this.state;
        return (
            < div;
        className = 'game';
        key = {this.state.key} >
            < Board;
        height = {height};
        width = {width};
        mines = {mines};
        />
        < button;
        className = 'refreshBtn';
        onClick = {this.refreshGame} >;↻<
        /button>
        < /div>;;
    )
    }
}

export default App;
