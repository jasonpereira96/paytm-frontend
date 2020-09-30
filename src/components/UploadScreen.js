import React from 'react';
import Header from './Header';
import UploadPanel from './panels/UploadPanel';
import ListPanel from './panels/ListPanel';

class UploadScreen extends React.Component {
    render() {
        return <>
            <Header></Header>
            <div className='upload-screen-holder'>
                <div id='upload-panel'>
                    <UploadPanel></UploadPanel>
                </div>
                <div id='list-panel'>
                    <ListPanel></ListPanel>
                </div>
            </div>
        </>
    }
}

export default UploadScreen;