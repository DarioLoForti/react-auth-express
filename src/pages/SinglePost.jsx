import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

export default function(){

    const { slug } = useParams();

    const [post, setPost] = useState(null);

    const fetchPost = async () => {
        const url = `${apiUrl}/posts/${slug}`;
        const { data: post } = await axios.get(url);
            setPost(post);
    }

    useEffect(() => {
        fetchPost();
    },[]); 

    

    return(<>
    <div className="back">
        <Link to="../" relative="path">Back</Link>
    </div>
        {post === null ? <span>loading</span> :
            <div className="post">
                <h1>{ post.title }</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.content}</p>
                {post.category && <h4>Category: {post.category.name}</h4>}
                {post.tags && <h4>Tags:</h4>}
                <ul>
                    {post.tags.map(t => (
                        <li key={`tag${t.id}`}>
                            {t.name}
                        </li>
                    ))}
                </ul>
                {post.user && <h4>User: {post.user}</h4>}
            </div>
        }
    </>)
}
