import React from "react";
import heart from "../assets/main/heart.png";
import plus from "../assets/main/plus.png";
import muscle from "../assets/main/muscle.png";
import crush from "../assets/main/crush.png";
import hand from "../assets/main/hand.png";
import pray from "../assets/main/pray.png";
import woman from "../assets/main/woman.png";
function Main() {
  return (
    <div className="">
      <div className="text-center mx-10 p-5">
        <div className="underline  text-green font-bold text-3xl m-2">Discover Ayurveda's Magic With Us</div>
        <div className="">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, <br />a totally effective approach for a better life.
        </div>
      </div>

      <div className="grid gap-2 grid-cols-2 grid-rows-4 justify-center md:grid-rows-3 md:grid-cols-3 ">
      <div className="col-span-2 row-span-1  flex justify-center items-center md:row-start-1 md:row-span-3 md:col-start-2 md:col-span-1">
         
          <img src={woman} className="max-w-full h-[300px] md:h-fit" alt="woman" />
        </div>
        <div className="   h-[300px] p-5 border rounded-2xl m-5 md:row-start-1 md:row-span-1 md:col-span-1 md:h-fit md:flex md:flex-row-reverse ">
          <div className="flex justify-center items-center ">
            <img className="w-16 h-14" src={heart} alt="heart" />
          </div>

          <div className="  justify-center">
            <div className=" text-black text-xl font-bold font-['DINPro-Bold'] flex justify-center">
              Personalized Wellness
              <br />
            </div>
            <div className="text-right text-neutral-600 text-base font-normal font-['DINPro']  flex justify-center ">
              Get treatments made just for you based on your individual doshas (
              body type)
            </div>
          </div>
        </div>
        <div className="    h-[300px] p-5 border rounded-2xl m-5 md:h-fit md:flex  ">
          <div className="flex justify-center ">
            <img className="w-16 h-14" src={plus} alt="plus" />
          </div>

          <div className="  justify-center">
            <div className=" text-black text-xl font-bold font-['DINPro-Bold']g-gray-500 flex justify-center">
            Holistic Healing
              <br />
            </div>
            <div className="text-right text-neutral-600 text-base font-normal font-['DINPro']  flex justify-center">
            Fix the root problem for long-lasting health.
            </div>
          </div>
        </div>
       
        <div className="    h-[300px] p-5 border  rounded-2xl m-5 md:row-start-2 md:row-span-1  md:col-span-1  md:h-fit md:flex md:flex-row-reverse ">
          <div className="flex justify-center ">
            <img className="w-16 h-14" src={hand} alt="hand" />
          </div>

          <div className="  justify-center">
            <div className=" text-black text-xl font-bold font-['DINPro-Bold']  flex justify-center">
            Focus on prevention
              <br />
            </div>
            <div className="text-right text-neutral-600 text-base font-normal font-['DINPro']  flex justify-center">
            Stop problems even before they start.
            </div>
          </div>
        </div>
        <div className="    h-[300px] p-5 border rounded-2xl  m-5  md:h-fit md:flex ">
          <div className="flex justify-center ">
            <img className="w-16 h-14" src={crush} alt="crush" />
          </div>

          <div className="  justify-center">
            <div className=" text-black text-xl font-bold font-['DINPro-Bold']  flex justify-center ">
            Natural Remedies
              <br />
            </div>
            <div className="text-right text-neutral-600 text-base font-normal font-['DINPro']  flex justify-center">
            Using herbs and natural therapies for healing.
            </div>
          </div>
        </div>
        <div className="   h-[300px] p-5 border rounded-2xl  m-5 md:h-fit md:flex md:flex-row-reverse">
          <div className="flex justify-center ">
            <img className="w-16 h-14" src={pray} alt="pray" />
          </div>

          <div className="  justify-center">
            <div className=" text-black text-xl font-bold font-['DINPro-Bold']  flex justify-center">
            Mind-Body Connection
              <br />
            </div>
            <div className="text-right text-neutral-600 text-base font-normal font-['DINPro']  flex justify-center">
            Keep your mind and body in sync for a happy life.
            </div>
          </div>
        </div>
        <div className="    h-[300px] p-5 border  rounded-2xl m-5 md:row-start-3 md:row-span-1 md:col-start-3 md:col-span-1 md:h-fit  md:flex">
          <div className="flex justify-center ">
            <img className="w-16 h-14" src={muscle} alt="muscle" />
          </div>

          <div className="  justify-center">
            <div className=" text-black text-xl font-bold font-['DINPro-Bold']  flex justify-center">
            Boosting immunity
            </div>
            <div className="text-right text-neutral-600 text-base font-normal font-['DINPro'] flex justify-center">
            Stay strong and healthy for life, not just for today.
            </div>
          </div>
        </div>
        
        
      </div>

     
             
                
      </div>
   
  );
}

export default Main;
