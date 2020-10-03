import React from 'react';
import '../GlobalStyles.css'
import LeviathanNavbar from './LeviathanNavbar'

function LeviathanHome() {
    console.log('here')
    return (
        <div className="component-wrapper">
            <LeviathanNavbar />
            <div className='page-wrapper'>
                <h1 className='page-title'> Leviathan Home </h1>
                <p>
                Dare you face the lord of the oceans?
                </p>
                <p>
                Leviathan is a wargame that has been rescued from the demise of intruded.net, previously hosted on leviathan.intruded.net. Big thanks to adc, morla and reth for their help in resurrecting this game!
                </p>
                <p>
                What follows below is the original description of leviathan, copied from intruded.net:
                </p>
                <p>
                Summary:
                Difficulty:     1/10
                Levels:         8
                Platform:   Linux/x86

                Author:
                Anders Tonfeldt

                Special Thanks:
                We would like to thank AstroMonk for coming up with a replacement idea for the last level,
                deadfood for finding a leveljump and Coi for finding a non-planned vulnerability.

                Description:
                This wargame doesn't require any knowledge about programming - just a bit of common
                sense and some knowledge about basic *nix commands. We had no idea that it'd be this
                hard to make an interesting wargame that wouldn't require programming abilities from 
                the players. Hopefully we made an interesting challenge for the new ones.
                </p>
                <p>
                Leviathan’s levels are called leviathan0, leviathan1, … etc. and can be accessed on leviathan.labs.overthewire.org through SSH on port 2223.
                </p>
                <p>
                To login to the first level use:
                </p>
                <p>
                Username: leviathan0
                Password: leviathan0
                </p>
                <p>
                Data for the levels can be found in the homedirectories. You can look at /etc/leviathan_pass for the various level passwords.
                </p>
            </div>
        </div>
    );
}

export default LeviathanHome;
