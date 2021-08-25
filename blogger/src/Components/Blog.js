import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selectSearchInput,setBlogData } from '../StateManager/userSlice';
import './Blog.css'

function Blog() {
    const searchInput = useSelector(selectSearchInput);
    const dispatch = useDispatch();
    const API_URI = `https://gnews.io/api/v4/search?q=${searchInput}&lang=en&country=in&token=2c66c76ee0444b8721f69d0ad072a824`;
    const [blogs,setBlogs] = useState(null);
    
    useEffect(()=>{
        fetch(API_URI)
        .then((response) => response.json())
        .then(function (data) {
             setBlogs(data);
             dispatch(setBlogData(data));
        })
        .catch((error)=>{
             console.log(error)
         })
    },[searchInput])
    
    return (
        <div className="blog__page">
            <h1 className="blog__page__header">Blogs</h1>
            <div className="blogs">
                {blogs?.articles?.map((blog) => (
                <a className="blog" target="_blank" href={blog.url}>
                    <img src={blog.image} />
                    <div>
                    <h3 className="sourceName">
                        <span>{blog.source.name}</span>
                        <p>{blog.publishedAt}</p>
                    </h3>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    </div>
                </a>
                ))}

                {blogs?.totalArticles == 0 && (
                <h1 className="no__blogs">
                    No blogs available 😞. Search something else to read blogs on the
                    greatest platform.
                </h1>
                )}
            </div>    
        </div>
    );
}

export default Blog


