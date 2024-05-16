import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const NameAnimation = ({ name }) => {
    const [displayName, setDisplayName] = useState('');
    const [showLine, setShowLine] = useState(false);
    const characters = '闩乃⼕ᗪ㠪千Ꮆ廾工丿长㇄爪𝓝ㄖ尸Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙闩乃⼕ᗪ㠪千Ꮆ廾工丿长㇄爪𝓝ㄖ尸Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙丨己㇋丩丂꧵㇆⽇꧶꧰';

    useEffect(() => {
        let iterations = 0;
        const maxIterations = 20; // Number of iterations before displaying the actual character

        const interval = setInterval(() => {
            if (iterations >= maxIterations) {
                clearInterval(interval);
                setDisplayName(name);
                setShowLine(true); // Show the line after the name animation
            } else {
                let newName = name.split('').map((char, index) => {
                    if (index <= iterations / 2) {
                        return char;
                    }
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join('');

                setDisplayName(newName);
                iterations++;
            }
        }, 100);

        return () => clearInterval(interval);
    }, [name]);

    return (
        <div className="name-container w-auto flex">
            <text className="text-3xl font-bold text-[#b4bcc2]">{displayName}</text>
            {showLine && <div className="line ml-4"></div>}
        </div>
    );
};

NameAnimation.propTypes = {
    name: PropTypes.string.isRequired
};

const Home = () => {
    return (
        <div id="home" className="content h-full ">
            <div className="flex flex-col w-min bg-red-50">
                <NameAnimation name="Paksh Patel" />
            </div>
        </div>
    );
};

export default Home;