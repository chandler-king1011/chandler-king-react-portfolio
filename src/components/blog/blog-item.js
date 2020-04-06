import React from 'react';
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import Truncate from 'react-truncate';

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    } = props.blogItem;

return (
    <div className="blog-item">
            <Link 
                className="blog-title-link"
                to={`/b/${id}`}>
                {title}
            </Link>
            <div>
                <Truncate 
                className="blog-text"
                lines={5} 
                ellipsis={<span>...<Link className="read-more-link" to={`/b/${id}`}>Read more</Link></span>}>
                    {striptags(content)}
                </Truncate>
            </div>
    </div>
    );
};
export default BlogItem;