import React from 'react';
import { connect } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';
import { imagesAdded } from './../../actions/actions';
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class ListPanel extends React.Component {
    render() {
        return (
            <div /*className={classes.root}*/>
                <List component="nav" aria-label="main mailbox folders">
                    {this.props.images.map(image => {
                        return (<ListItem button key={image.id}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Image-${image.id}`} />
                        </ListItem>);
                    })}
                    <ListItem button key={99999}>
                        <ListItemIcon>
                            <ImageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Image-1" />
                    </ListItem>
                </List>
            </div>
        );
    }
    componentDidMount() {
        fetch('http://localhost:5000/images')
            .then(response => response.json())
            .then(json => {
                this.props.imagesAdded(json.images);
            });
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
        imagesAdded: images => dispatch(imagesAdded(images))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPanel);
// export default ListPanel;