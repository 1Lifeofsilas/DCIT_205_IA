import React from 'react'

export default function Footer() {
    const footer = [
        {title:"About The Department",
        links:[
           {
               name:"Introducing DCS",
               href:"#"
           },

           {
               name:"Faculty",
               href:"#"
           },
           {
               name:"Events",
               href:"#"
           }
       ]
     },
       
        {title:"Research",
         links:[
            {
                name:"Research at DCS",
                href:"#"
            },

            {
                name:"Libraries",
                href:"#"
            }
        ]
      },
 
       
        
    ]
  return (
    <div className='main footer flex'>

              <div className='footer-column'>
                  <h1 className='title-text' style={{margin:"20px 5px ",textAlign:"left"}}>University of Ghana @ 2023</h1>
               </div>

    </div>
  )
}