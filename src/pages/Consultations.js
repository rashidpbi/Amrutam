import React from "react";
import women from "../assets/consultations/women.png";
import jar from "../assets/consultations/jar.png";
import woman from "../assets/consultations/woman.png";
function Consultations() {
  return (
    <div class="bg-gradient-to-r from-yellow-50 to-amber-50">
      
        <div className="underline  decoration-4 decoration-gray-300 text-green font-bold text-3xl m-2 p-6  text-center">
          What sets Ayurvedic Consultations apart?
        </div>
    
      <div className="container px-3 mx-auto">
        <div className="flex max-sm:flex-col  gap-2 justify-between px-5 text-center  ">
         
            <div className="  basis-full md:basis-7/12  px-8 py-12 bg-white rounded-2xl shadow border-t-4 border-green flex-col justify-start items-start gap-2 inline-flex">
              <div className=" flex-col justify-start items-center gap-5 flex">
                <div className=" text-center text-green text-3xl font-normal font-['Inknut Antiqua'] leading-10">
                  स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
                </div>
                <div className=" text-center text-green text-lg font-normal font-['DINPro']">
                  [ Meaning: The Goal of Ayurveda is to maintain the health of a
                  healthy person and to cure the disease of a diseased person. ]
                </div>
              </div>
            </div>
         
          <div class="  basis-5/12 ">
            <img src={women} alt="women" className="w-full h-full"/>
          </div>
         
            <div className="basis-full md:basis-5/12 px-6 py-12 bg-white rounded-2xl shadow border-t-4 border-green flex-col justify-start items-start gap-2.5 inline-flex">
              <div className=" flex-col justify-center items-start gap-4 flex">
                <div className="text-center text-green text-2xl font-bold font-['DINPro-Bold'] capitalize">
                  precise diagnosis
                </div>
                <div className=" text-neutral-700 text-xl font-normal font-['DINPro']">
                  Ayurveda's core principles revolve around Vata, Pitta, and
                  Kapha doshas, guiding you with precise diagnosis and
                  treatment.
                </div>
              </div>
            </div>
          
        </div>
        <div className="flex max-sm:flex-col justify-between  gap-2  text-center  py-2 px-5">
       
            <div className="basis-1/4 max-sm:order-2  px-6 py-12 bg-white rounded-2xl shadow  border-t-4 border-green flex-col justify-start items-start gap-4 inline-flex">
              <div className=" flex-col justify-center items-start gap-4 flex">
                <div className="text-center text-green text-2xl font-bold font-['DINPro-Bold']">
                  Zero side-effects
                </div>
                <div className=" text-neutral-700 text-xl font-normal font-['DINPro']">
                  Ayurvedic treatments are devoid of chemicals, and are based
                  completely on natural herbs{" "}
                </div>
              </div>
            </div>
         
          <div class="basis-1/4 max-sm:order-1 ">
            <img src={jar} alt="jar" className="w-full h-full" />
          </div>
        
            <div className="basis-1/4 max-sm:order-4 px-6 py-12 bg-white rounded-2xl shadow border-t-4 border-green flex-col justify-start items-start gap-2.5 inline-flex">
              <div className=" flex-col justify-start items-start gap-4 flex">
                <div className=" text-green text-2xl font-bold font-['DINPro-Bold']">
                  Individual Treatment
                  <br />
                </div>
                <div className=" text-neutral-700 text-xl font-normal font-['DINPro']">
                  all Treatments are personalized based on a person's unique
                  constitution and health concerns.
                </div>
              </div>
            </div>
        
          <div class="basis-1/4 max-sm:order-3  ">
            <img src={woman} alt="woman" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultations;
