import React from 'react';
import './App.css';
import UploadScreen from './components/UploadScreen';
import DisplayScreen from './components/DisplayScreen';
import { connect } from 'react-redux';


function App(props) {
    let { screen } = props;
    if (screen === 'upload') {
        return <>
            <UploadScreen></UploadScreen>
        </>;
    } else {
        return <>
            <DisplayScreen></DisplayScreen>
        </>;
    }
}

const mapStateToProps = state => {
    let { screen } = state;
    return {
        screen
    };
}
export default connect(mapStateToProps)(App);