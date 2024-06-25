import { useEffect, useState } from "react";
import axios from "../utils/axiosClient";
import { Link, useSearchParams } from "react-router-dom";

export default function(){

const [posts, setPosts] = useState(null);

const [searchParams, setSearchParams] = useSearchParams({page: 1});

const currPage = parseInt(searchParams.get('page'));

useEffect(() => {
    setPosts(null);
        const url = `/posts?page=${currPage}&limit=9`;
        axios.get(url).then(({data}) => setPosts(data.posts)
        
    );
}, [searchParams]);

    return (<>
           
        <div className="posts">
            <h1>Posts</h1>
            <div className="paginator">
                <span>Current Page: {currPage}</span>
                <button 
                    style={{visibility: currPage - 1 > 0 ? 'visible' : 'hidden'}} 
                    onClick={()=>setSearchParams({page: currPage - 1})
                }>-</button>
                <button 
                    onClick={()=>setSearchParams({page: currPage + 1})
                }>+</button>
            </div>
            {posts === null && <span className="loader"></span>}
            {posts?.length === 0 && 'Post not found.'}
            {posts?.length > 0 && 
                <div className="card-container">
                {posts.map(p => (
                    <div className="card" key={`posts${p.id}`}>
                        <Link to={`/posts/${p.slug}`} state={{ posts: p }}>
                            <h2>{p.title}</h2>
                        </Link>
                            <p>{p.content}</p>
                    </div>
                ))}
            </div>
            }
        </div>
    </>)
}
