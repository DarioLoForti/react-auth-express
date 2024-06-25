import { Routes, Route } from "react-router-dom";
import ProtectPage from "./middlewares/ProtectPage";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";

export default function() { 

    return (
            <Routes>
                        {/* Public */}
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="*" element={<NotFound/>}/>
                        <Route index element={<Home/>} />
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="posts" element={<Posts/>}/>
                </Route>
                        {/* Private */}
                <Route path="/" element={
                    <ProtectPage>
                    <DefaultLayout />
                    </ProtectPage>
                    }>
                        <Route path="posts">
                            <Route path=":slug" element={<SinglePost/>}/>
                        </Route>
                            <Route path="create" element={<CreatePost/>}/>
                </Route>
            </Routes>
    )
}