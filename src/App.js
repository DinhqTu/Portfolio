// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import { Fragment } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAy8cGPDv1QcUk6Vg8_PT25UJoJB37sfW4',
    authDomain: 'portfolio-1fcd5.firebaseapp.com',
    projectId: 'portfolio-1fcd5',
    storageBucket: 'portfolio-1fcd5.appspot.com',
    messagingSenderId: '359370492148',
    appId: '1:359370492148:web:14f8ca87d4d390e4baf6a1',
    measurementId: 'G-SNNCZBEM95',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function () {
//     console.log('callback - particles.js config loaded');
// });
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes?.map((route, index) => {
                        const Layout =
                            route.layout === null
                                ? Fragment
                                : route.layout || Header;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <div>
                                        <Layout />
                                        <Page />
                                    </div>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
