import React from 'react';
import Header from './../components/Header';
import { Button, Typography } from '@material-ui/core';
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
        let { record } = this.props;
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
                <Typography variant='h5'>Horizontal</Typography>
                <div className='image-row'>
                    <img src={sources[0]} className='image' />
                </div>
                <Typography variant='h5'>Vertical</Typography>
                <div className='image-row'>
                    <img src={sources[1]} className='image' />
                </div>
                <Typography variant='h5'>Horizontal Small</Typography>
                <div className='image-row'>
                    <img src={sources[2]} className='image' />
                </div>
                <Typography variant='h5'>Gallery</Typography>
                <div className='image-row'>
                    <img src={sources[3]} className='image' />
                </div>
                
            </div>
        </>);
    }
    onBack() {
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayScreen);