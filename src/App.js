// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import Header from './component/Header';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { publicRoutes } from './routes/routes';

import Home from './component/Home';
// import Particles from '../particles.json'
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
// particlesJS.load('particles-js', 'Particles', function() {
//     console.log('callback - particles.js config loaded');
//   });
function App() {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        <Router>
            <div className="App">
                {/* <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        fullScreen: {
                            enable: true,
                            zIndex: -10,
                        },
                        particles: {
                            number: {
                                value: 10,
                                density: {
                                    enable: false,
                                    value_area: 800,
                                },
                            },
                            color: {
                                value: '#fff',
                            },
                            shape: {
                                type: 'star',
                                options: {
                                    sides: 5,
                                },
                            },
                            opacity: {
                                value: 0.8,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 4,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false,
                                },
                            },
                            rotate: {
                                value: 0,
                                random: true,
                                direction: 'clockwise',
                                animation: {
                                    enable: true,
                                    speed: 5,
                                    sync: false,
                                },
                            },
                            line_linked: {
                                enable: true,
                                distance: 600,
                                color: '#ffffff',
                                opacity: 0.4,
                                width: 2,
                            },
                            move: {
                                enable: true,
                                speed: 2,
                                direction: 'none',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200,
                                },
                            },
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: ['grab'],
                                },
                                onclick: {
                                    enable: false,
                                    mode: 'bubble',
                                },
                                resize: true,
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1,
                                    },
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3,
                                },
                                repulse: {
                                    distance: 200,
                                },
                                push: {
                                    particles_nb: 4,
                                },
                                remove: {
                                    particles_nb: 2,
                                },
                            },
                        },
                        retina_detect: true,
                        background: {
                            color: '#111',
                            image: '',
                            position: '50% 50%',
                            repeat: 'no-repeat',
                            size: 'cover',
                        },
                    }}
                /> */}
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
