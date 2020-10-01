import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import { checkFile } from './../../utils/utils';
import { fileChanged, errorOccured, snackbarClose } from './../../actions/actions';
import { SNACKBAR_CLOSE_TIME } from './../../constants/constants';
import { uploadFile } from './../../actions/async_actions';
import { connect } from 'react-redux';
import ErrorSnackbar from './../snackbar/ErrorSnackbar';

class UploadPanel extends React.Component {
    constructor(props) {
        super(props);
        this.onUploadButtonClick = this.onUploadButtonClick.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }
    render() {
        let { error } = this.props;
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Fab variant="extended" color="primary" aria-label="add" component='label'>
                    <AddIcon/>
                    Choose File
                    <input type="file" style={{ display: "none" }} id='file-input' onChange={this.onFileChange} accept='image/*'/>
                </Fab>
                <Typography variant="h5" component="h5">
                    {this.props.fileName}
                </Typography>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Button variant="contained" color="primary" onClick={this.onUploadButtonClick}>
                    Upload
                </Button>
                <br />
                <br />
                <br />
                <br />
                <br />
                {this.props.uploading ? <CircularProgress/> : <br/>}
                <ErrorSnackbar open={error !== null} message={error} />
            </>
        );
    }
    async onUploadButtonClick() {
        console.log('sds');
        const fileInput = document.getElementById('file-input');
        let { errorOccured, snackbarClose, uploadFile } = this.props;
        let { ok, reason } = await checkFile(fileInput);
        let file = fileInput.files[0];
        if (ok) {
            //dispatch action
            uploadFile(file);
        } else {
            //dispatch action
            console.log(reason);
            errorOccured(reason);
            setTimeout(() => snackbarClose(), SNACKBAR_CLOSE_TIME);
        }
    }
    onFileChange() {
        const fileInput = document.getElementById('file-input');
        let { fileChanged } = this.props;

        if (fileInput.files.length === 0) {
            //dispatch action
            fileChanged(null);

        } else {
            const file = fileInput.files[0];
            //dispatch action
            fileChanged(file);
        }
    }
}

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
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPanel);
