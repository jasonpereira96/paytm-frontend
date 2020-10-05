import React from 'react';
import { connect } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';
import { errorOccured, imagesAdded, imageTitleClick, snackbarClose } from './../../actions/actions';
import { CircularProgress } from '@material-ui/core';
import { SNACKBAR_CLOSE_TIME, BASE_URL } from './../../constants/constants';

class ListPanel extends React.Component {
    constructor(props) {
        super(props);

        this.onImageTitleClick = this.onImageTitleClick.bind(this);
    }
    render() {
        let { onImageTitleClick } = this;
        let { images } = this.props;

        if (images.length === 0) {
            return <div id='cp-div'><CircularProgress /></div>;
        }

        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    {images.map(image => {
                        return (<ListItem button key={image.id} onClick={() => onImageTitleClick(image.id)}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${image.name ? image.name : 'Image-' + image.id}`} />
                        </ListItem>);
                    })}
                </List>
            </div>
        );
    }
    componentDidMount() {
        let { images, errorOccured, snackbarClose } = this.props;
        if (images.length === 0) {
            fetch(`${BASE_URL}/images`)
                .then(response => response.json())
                .then(json => {
                    this.props.imagesAdded(json.images);
                })
                .catch(e => {
                    console.log(e);
                    errorOccured('Connection timed out. Please refresh the page.');
                    setTimeout(() => snackbarClose(), SNACKBAR_CLOSE_TIME);
                });
        }
    }
    onImageTitleClick(id) {
        this.props.imageTitleClick(id);
    }
}
const mapStateToProps = state => {
    return {
        images: state.uploadScreen.listPanel.images,
        loading: state.uploadScreen.listPanel.loading,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        imagesAdded: images => dispatch(imagesAdded(images)),
        imageTitleClick: id => dispatch(imageTitleClick(id)),
        errorOccured: error => dispatch(errorOccured(error)),
        snackbarClose: () => dispatch(snackbarClose())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPanel);