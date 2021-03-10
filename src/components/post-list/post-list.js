import React from 'react';
import PostListItem from '../poost-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant}) => {

    const elemnets = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps} 
                onDelete={() => onDelete(id)} 
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)} />
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elemnets}
        </ListGroup>
    )
}

export default PostList;