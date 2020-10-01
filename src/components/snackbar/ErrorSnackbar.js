import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function ErrorSnackbar(props) {
    const classes = useStyles();
    const { open, message } = props;
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
