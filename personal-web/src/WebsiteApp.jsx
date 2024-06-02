import{ Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Form from './pages/form/Form';


const WebsiteApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/form" element={<Form/>} />
        </Routes> 
    );
}

export default WebsiteApp;
