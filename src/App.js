import React from "react";
import MainLayout from "./pages/mainLayout/MainLayout";

// import react-bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import ant design css
import 'antd/dist/antd.css';
// import slide show css
import 'react-slideshow-image/dist/styles.css'
// import local scss
import './styles/App.scss';

function App() {
    return (
        <div className="App">
            <MainLayout/>
        </div>
    );
}

export default App;
