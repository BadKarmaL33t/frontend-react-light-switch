import React, {useState} from 'react';
import './App.css';

function App() {
    const [lightSwitch, setLightSwitch] = useState(false);

    return (
        <main className={lightSwitch === true ? "on" : "off" }>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => setLightSwitch(!lightSwitch)}>
                    {lightSwitch === true ? "Turn off" : "Turn on" }</button>
            </section>
        </main>
    );
}

export default App;
