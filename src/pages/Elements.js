import chatImage from "../assets/hero pics/chat.png";
import tickImage from "../assets/hero pics/tick.png";
import profileImage from "../assets/hero pics/profile.png";
import paperImage from "../assets/hero pics/paper.png";
import React from 'react'

function Elements() {
  return (

      <div className="flex flex-col  md:flex-row  relative   md:max-h-32">
        <div className="flex p-12 border border-element">
          <div className=" flex  items-center justify-center"><img src={chatImage} alt="chat" className="h-16" /></div>
          <div className=" flex  items-center justify-center">
            <p> convenient online & In-clinic consultations</p>
          </div>
       </div>
        <div className="flex p-12 border border-element">
        <div className=" flex  items-center justify-center"><img src={tickImage} alt="chat" className="h-16" /></div>
          <div className="flex  items-center justify-center">
            <p> Safe and effective treatment</p>
          </div>
        </div>
        <div className="flex p-12 border border-element">
        <div className=" flex  items-center justify-center"><img src={profileImage} alt="chat" className="h-16" /></div>
          <div className="flex  items-center justify-center">
            <p> Experienced Ayurvedic Practitioners</p>
          </div>
        </div>
        <div className="flex p-12 border border-element">
        <div className=" flex  items-center justify-center"><img src={paperImage} alt="chat" className="h-16" /></div>
          <div className=" flex  items-center justify-center">
            <p> personalized Treatment Plans & Guidance</p>
          </div>
        </div>
      </div>

  )
}

export default Elements
