import React from 'react'

import meerabasu from "../assets/meerabasuWebsite.png"
import avattagems from "../assets/AvanttaGems.png"
import kns from "../assets/knsMetals.png"
import laserfold from "../assets/LaserFold.png"
import studio from "../assets/GenieStudio.png"
import buildzone from "../assets/buildzon.png"
import wordpress from "../assets/wordpress.png"
import shopify from "../assets/shopify.webp"
import code from "../assets/code.png"
import ContactSec from '../components/contactSection'

export default function Projects() {

    const projects = [
      {
        name: "Meera Basu",
        image:
          meerabasu,
          url: "https://meerabasu.co.in/"
      },
      {
        name: "Avantta Gems",
        image:
          avattagems,
          url: "https://8z2bgt-68.myshopify.com/"
      },
      {
        name: "KNS Metal Solutions",
        image:
          kns,
          url: "https://knsmetalsolutions.com.au/"
      },
      {
        name: "Laserfold",
        image:
          laserfold,
          url: "https://laserfold.com.au/"
      },
      {
        name: "GenieStudio",
        image:
          studio,
          url: "https://geniestudio.in/"
      },
      {
        name: "Buildzone",
        image:
          buildzone,
          url: "https://www.buildzonprojects.com/"
      }
    ];
  return (
   <>
       <div className="bg-gradient-to-br 
        from-slate-900 via-slate-800 to-slate-900 
        px-4 sm:px-6 lg:px-16 pt-24 mt-12 sm:pt-24 pb-12 sm:pb-12 lg:pb-18">

        <div className="max-w-4xl mx-auto">
         
          
            <div className="text-white space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-center">
                Our Work
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl text-center">
               From impactful digital campaigns to high-quality studio productions, our projects reflect creativity, precision, and results that help brands grow.
              </p>
            </div>

        </div>
      </div>

      <section className="relative py-10 bg-white overflow-hidden border-y-2">
            
            <h2 className="text-center text-4xl font-bold mb-16">
              Platforms we use for Web Development
            </h2>
      
           
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-12">
              <img
                src={wordpress}
                alt="WordPress"
                className="w-28 md:w-32 hover:scale-110 transition-transform duration-300 -mb-8"
              />
              <img
                src={shopify}
                alt="Shopify"
                className="w-36 md:w-42 hover:scale-110 transition-transform duration-300 -mb-8"
              />
              <img
                src={code}
                alt="code"
                className="w-36 md:w-48 hover:scale-110 transition-transform duration-300"
              />
            </div>
      
            
            <div className="max-w-4xl mx-auto text-center px-4">
              <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed mb-8">
                If you're looking for an agency that elevates your brand with creativity,
                strategy, and innovation, then you’re ready for us.
              </p>
      
              
              <button
                className="
                   inline-flex items-center justify-center gap-2
                    px-5 py-3                
                    sm:px-8 sm:py-4          
                    
                    rounded-full
                    bg-orange-500
                    text-black
                    text-sm sm:text-base    
                    font-semibold
                    hover:bg-gray-900
                    hover:text-gray-100
                    active:scale-95
                    
                    transition-all duration-300
                    shadow-lg
                    w-full sm:w-auto  
                "
                onClick={() => window.location.href="https://wa.me/919032845433"}
              >
                Need help to upscale your brand
                <span className="text-xl font-bold">→</span>
              </button>
            </div>
      
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02),transparent_70%)]" />
          </section>

           <section className="bg-white py-8 md:py-12" id='projects'>
      <div className="max-w-7xl mx-auto px-2">

       
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-700 mb-10">
          Your Digital Presence, Perfected
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">

          {projects.map((project, index) => (
            <div key={index} className="text-center group">

             
              <div className="bg-orange-400   rounded-3xl p-0 md:p-0.5  mb-8 transition-transform duration-300 group-hover:scale-105">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 boder-2 border-orange-500"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-6">
                {project.name}
              </h3>

             
              <button className="
                px-8 py-3 
                rounded-full 
                font-semibold 
                border-2 border-orange-400
                text-white 
                bg-gray-900
                hover:bg-orange-400
                hover:text-black
                transition-all duration-300
              " onClick={()=> window.open(project.url, "_blank")}>
                VIEW PROJECT
              </button>

            </div>
            
          ))}
        </div>
        
     
     

      </div>
       
    </section>

    <ContactSec/>
   
   </>
  )
}

