import React from 'react';
import '../GlobalStyles.css'
import BanditNavbar from './BanditNavbar'

function BanditHome() {
    return (
        <div className="component-wrapper">
            <BanditNavbar />
            
            <div className='page-wrapper'>
                <h1 className='page-title'> Bandit Home </h1>

                <p> The Bandit wargame is aimed at absolute beginners. It will teach the basics needed to be able to play other wargames. If you notice something essential is missing or have ideas for new levels, please let us know!
                </p>

                <h2 className='section-heading'> Note for beginners </h2>
                <p>
                    This game, like most other games, is organised in levels. You start at Level 0 and try to “beat” or “finish” it. Finishing a level results in information on how to start the next level. The pages on this website for “Level X” contain information on how to start level X from the previous level. E.g. The page for Level 1 has information on how to gain access from Level 0 to Level 1. All levels in this game have a page on this website, and they are all linked to from the sidemenu on the left of this page.
                </p>
                <p>
                    You will encounter many situations in which you have no idea what you are supposed to do. Don’t panic! Don’t give up! The purpose of this game is for you to learn the basics. Part of learning the basics, is reading a lot of new information.
                </p>
                <p>
                    There are several things you can try when you are unsure how to continue:
                </p>
                <p>
                    First, if you know a command, but don’t know how to use it, try the manual (man page) by entering “man command” (without the quotes). e.g. if you know about the “ls” command, type: man ls. The “man” command also has a manual, try it. Press q to quit the man command.
                </p>
                <p>
                    Second, if there is no man page, the command might be a shell built-in. In that case use the “help X” command. E.g. help cd
                    Also, your favorite search-engine is your friend. Learn how to use it! I recommend Google.
                    Lastly, if you are still stuck, you can join us on IRC. Good luck!
                </p>
            </div>
        </div>
    )
}

export default BanditHome;
