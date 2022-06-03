import React from "react"
import borgir from '../assets/borgir.svg'
import "../styles/main.css"
import hashtag from '../assets/hashtag.svg'
import announcementChannel from '../assets/announcementsChannel.svg'
import chat from '../assets/chat.svg'
import search from '../assets/search.svg'
import person from '../assets/members.svg'
import loggedInUser from '../assets/UGContent/nrdietz.png'

const TopBar = () =>{

    return(

        <div className="header">

                <div className="headerSideBar">
                
                    <img src={borgir} className="headerButton"></img>
                </div>
                <div className="headerServer">

                    <a href="http://localhost:3000">

                        <img src={chat} className="headerButton" id="icon"></img>
                    </a>
                    <a className="appName" href="http://localhost:3000">Chat</a>
                </div>
                <div className="textChannelHeader">
                    
                    <div className="leftSection">

                        <div className="container">

                            <img className="headerButton" src={person}></img>
                            <span className="notificationBadge" id="friendsNotifications">69</span>
                        </div>
                        <div className="container">

                            <img className="headerButton" src={chat}></img>
                            <span className="notificationBadge" id="textNotifications">69</span>
                        </div>
                    </div>
                    <div className="searchBox">

                        <input className="searchInput" placeholder="search"></input>
                        <img src={search} className="searchButton"></img>
                    </div>
                    <div className="rightSection"></div>
                </div>
                <div className="rightSection">

                    <div></div>
                    <div className="currentUser">

                        <div className="loggedInUserName">NRD</div>
                        <img className="loggedInUser" src={loggedInUser}></img>
                    </div>
                </div>
            </div>
    )
}

export default TopBar