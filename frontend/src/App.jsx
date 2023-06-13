// react deps
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// pages
import { Home, CreatePost } from './pages';

// custom components
import { Header, Main } from './components';

// styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App
