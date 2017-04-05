import React, {PropTypes, Component} from 'react'
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);

const styles = {
    width: 500,
    height: 450,
    overflowY: 'auto'
};

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            id: PropTypes.string.isRequired,
            friends: PropTypes.array.isRequired,
            getPhotos: PropTypes.func.isRequired
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.friends[0].user_id
            });
            this.props.getPhotos(this.props.friends[0].user_id)
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
            this.props.getPhotos(index)
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

const Contacts = (props) => (
    <div style={styles} className="flex-item">
        <SelectableList id={props.id} friends={props.friends} getPhotos={props.getPhotos}>
            <Subheader>Selectable Contacts</Subheader>
            {props.friends.map((friend) => (
                <ListItem
                    value={friend.user_id}
                    primaryText={friend.first_name}
                    leftAvatar={<Avatar src={friend.photo_100}/>}
                />
            ))}
        </SelectableList>
    </div>
)

Contacts.propTypes = {
    id: PropTypes.string.isRequired,
    friends: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
}

export default Contacts;