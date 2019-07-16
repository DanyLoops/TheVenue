import React, { Component } from 'react'

export default class Pricing extends Component {
     

    state={
        prices:[100,150,250],
        positions:['Balcony', 'Medium','Star'],
        desc:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ],

    linkto:['http://sales/b','http://sales/m','http://sales/s']

    }

    showBoxes=()=>(

        this.state.prices.map(()=>(

            <div>
                
            </div>
        ))
    )





    render() {
        return (
           <div className="bck_black">
               <div className="center_wrapper pricing_section">
                   <h2>Pricing</h2>
                   <div className="pricing_wrapper">
                     {this.showBoxes()}
                   </div>
               </div>
           </div>
        )
    }
}
