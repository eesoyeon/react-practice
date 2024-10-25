// import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import Articles from './pages/Articles.jsx';
import Article from './pages/Article.jsx';
import Layout from './pages/Layout.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import MyPage from './pages/Mypage.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/profiles/:username" element={<Profile />}></Route>
            </Route>
            <Route path="/articles" element={<Articles />}>
                <Route path=":id" element={<Article />} />
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
}

export default App;
