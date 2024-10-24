import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function PostComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>See Post</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => (
                        <tr key={data.id}>
                            {console.log(data)}
                            {console.log(data.title)}
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                            <td>
                                <Link to={`/Posts/PostData/${data.id}`}>see post</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}