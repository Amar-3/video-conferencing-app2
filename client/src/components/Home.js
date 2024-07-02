import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { useSocket } from '../Providers/SocketProvider';


export const Home = () => {
    const [userName, setUserName] = useState('');
    const [meetingUrl, setMeetingUrl] = useState('');
    const navigate = useNavigate();
    const socket =useSocket();
    
   
    
    const handleSubmit =useCallback((e) => {
        e.preventDefault();
        socket.emit("room:join" , {userName , meetingUrl});  // this is a particular event so i have to handel that at backend
       
        console.log({ userName, meetingUrl});
    },[userName , meetingUrl , socket]
);

const handleJoinRoom = useCallback(
    (data) => {
      const { userName , meetingUrl } = data;
      navigate(`/meeting/${meetingUrl}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);



    // link generator

    const [generatedUrl, setGeneratedUrl] = useState('');

    // Function to generate a UUID
    const generateUUID = () => {
        const uuid = uuidv4();
        setGeneratedUrl(uuid);
    };

    // Function to handle copying UUID to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(generatedUrl)
            .then(() => {
                alert('link copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };


    return (
        <div className="home">
            {/* <div >
        <img src={projectImage} className="background-image" />
        </div> */}
            <h2 >Join meeting 🎙... </h2>
            <div className="home-meeting-join">
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <br />

                        <input
                            type="text"
                            
                            placeholder="Enter your name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </label>
                    <br />
                    {/* 
                   <label>
                        Enter Password:
                        <br/>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter shared meeting link..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    */}
                    <br />
                    <label>
                        Enter Room URL:
                        <br />
                        <input
                            type="text"
                            name="url"
                            placeholder="Enter shared meeting link..."
                            value={ meetingUrl}
                            onChange={(e) => setMeetingUrl(e.target.value)}
                        />
                    </label>

                    <br />
                    <button type="submit" className=' navButton'><span></span>Join Room</button>
                </form>
            </div>

            <hr />

            <div className="home-url-builder">
                Generate Meeting link
                <br />
                <button onClick={generateUUID} className=' navButton'><span></span>Generate Link</button>
                <br />
                <textarea rows={3} value={generatedUrl} readOnly />
                <br />
                <button onClick={handleCopy} className='navButton'><span></span>Copy link</button>
            </div>
        </div>
    );
};