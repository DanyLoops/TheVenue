import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

export default class Discount extends Component {

    state={
        discountStart:0,
        discountEnd:30
    }

    porcentage= () => {

        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart +1
            })

        }
    }

 componentDidUpdate(){

    setTimeout(() => {
        this.porcentage()
    }, 30);
 }



    render() {
        return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade
                // Callback Function
                onReveal={()=>this.porcentage()}
                
                >
                <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span> OFF</span>
                </div>
                </Fade>

                <Slide right>
                       
                <div className="discount_description">
                    <h3>Purchase tickets before 20th JUNE </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia consequatur, modi numquam possimus reiciendis, nesciunt laudantium quisquam quia omnis pariatur suscipit fuga consectetur assumenda itaque corporis perspiciatis ducimus animi magni.</p>

                    <MyButton
                    text="Purchase tickets"
                    bck='#ffa800'
                    color='#ffffff'
                    link='https://www.arianagrande.com/'
                    
                    
                    />

                </div>


                </Slide>

                
             


            </div>
        </div>
        )
    }
}
