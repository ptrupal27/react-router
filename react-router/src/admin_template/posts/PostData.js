import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PostData() {
    const {id} = useParams();
    const [post, postdata] = useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>res.json())
        .then((data)=>postdata(data));
    }, [id]);

    if (!post) {
       return <div>Loading...</div> 
    }
  return (
    <>
    <h1>post no: {post.id}</h1>
    <h4><strong>Post Title:</strong></h4>
    <p>{post.title}</p>
    <h4><strong>post Body:</strong></h4>
    <p>{post.body}</p>
    <Link to='/posts' className='btn btn-primary'>back to table</Link>
    </>
  )
}