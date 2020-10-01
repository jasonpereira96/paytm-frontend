import React from 'react';
import './App.css';
import UploadScreen from './components/UploadScreen';
import DisplayScreen from './components/DisplayScreen';
import { connect } from 'react-redux';

// let uploadScreen = <UploadScreen></UploadScreen>;
// let displayScreen = <DisplayScreen></DisplayScreen>;

function App(props) {
    let { screen } = props;
    if (screen === 'upload') {
        return <>
            <UploadScreen></UploadScreen>
            {/* {uploadScreen} */}
        </>;
    } else {
        return <>
            <DisplayScreen></DisplayScreen>
            {/* {displayScreen} */}
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
