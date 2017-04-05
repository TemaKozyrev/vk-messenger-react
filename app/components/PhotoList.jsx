import React, {PropTypes, Component} from 'react'
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

export default class PhotoList extends Component {

    render() {
        const {photos} = this.props
        return <div className='flex-item'>

            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {photos.map((photo) => (
                        <GridTile
                            key={photo.src_big}
                        >
                            <img src={photo.src_big} />
                        </GridTile>
                    ))}
                </GridList>
            </div>

        </div>
    }
}

PhotoList.propTypes = {
    error: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired
}