import React from 'react';
import Header from './../components/Header';
import { Button } from '@material-ui/core';
import { back } from './../actions/actions';
import { connect } from 'react-redux';
import { requestLinks } from '../actions/async_actions';
import { BASE_URL } from './../constants/constants';

class DisplayScreen extends React.Component {
    constructor(props) {
        super(props);

        this.onBack = this.onBack.bind(this);
    }
    render() {
        let { links, record } = this.props;
        let { onBack } = this;
        let src = `${BASE_URL}/static/loading.gif`;
        let sources;
        if (record) {
            sources = [
                record.horizontal,
                record.vertical,
                record.horizontal_small,
                record.gallery,
            ];
        } else {
            sources = [src, src, src, src];
        }
        return (<>
            <Header></Header>
            <div id='back-div'>
                <Button variant="contained" color="primary" onClick={onBack}>
                    Back
                </Button>
            </div>
            <div id='display-screen'>
                <div className='image-row'>
                    <div className='image-holder'>
                        <img src={sources[0]} className='image' />
                    </div>
                    <div className='image-holder'>
                        <img src={sources[1]} className='image' />
                    </div>
                </div>
                <div className='image-row'>
                    <div className='image-holder'>
                        <img src={sources[2]} className='image' />
                    </div>
                    <div className='image-holder'>
                        <img src={sources[3]} className='image' />
                    </div>
                </div>
            </div>
        </>);
    }
    onBack() {
        console.log('back clicked');
        this.props.back();
    }
    componentDidMount() {
        let { id, requestLinks } = this.props;
        requestLinks(id);
    }
}
const mapStateToProps = state => {
    let { record, id } = state.displayScreen;
    return {
        record, id
    };
}
const mapDispatchToProps = dispatch => {
    return {
        back: () => dispatch(back()),
        requestLinks: id => dispatch(requestLinks(id))
    };
};
/*
const mapDispatchToProps = dispatch => {
    return {
        fileChanged: file => dispatch(fileChanged(file)),
        errorOccured: error => dispatch(errorOccured(error)),
        snackbarClose: () => dispatch(snackbarClose()),
        uploadFile: file => dispatch(uploadFile(file))
    };
};
const mapStateToProps = state => {
    let { file, error, uploading } = state.uploadScreen.uploadPanel;
    let fileName = file ? file.name : null;
    return {
        fileName,
        error,
        uploading
    };
};*/


export default connect(mapStateToProps, mapDispatchToProps)(DisplayScreen);