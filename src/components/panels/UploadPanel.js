import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import { checkFile } from './../../utils/utils';

class UploadPanel extends React.Component {
    constructor(props) {
        super(props);
        this.onUploadButtonClick = this.onUploadButtonClick.bind(this);
    }
    render() {
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Fab variant="extended" color="primary" aria-label="add" component='label'>
                    <AddIcon /*className={classes.extendedIcon}*/ />
                    Choose File
                    <input type="file" style={{ display: "none" }} id='file-input' />
                </Fab>
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
                <CircularProgress hidden={true} />
            </>
        );
    }
    async onUploadButtonClick() {
        console.log('sds');
        let fileInput = document.getElementById('file-input');
        let { ok, reason } = await checkFile(fileInput);
        console.log(ok);
        console.log(reason);
        if (ok) {
            //dispatch action
        } else {
            console.log(reason);
        }
    }
}


export default UploadPanel;
