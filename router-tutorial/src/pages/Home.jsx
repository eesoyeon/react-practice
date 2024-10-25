import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Link to="/about">소개</Link>
            <ul>
                <li>
                    <Link to="/profiles/soyeon">soyeon</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재x</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
