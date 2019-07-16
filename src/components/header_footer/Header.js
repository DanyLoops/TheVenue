import React, {Component} from 'react'

//install Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import SideDrawer from './SideDrawer';   

export default class Header extends Component {

    /*States*/

    state={
        drawerOpen:false,
        headerShor:false
    }

    /*Método que solo se ejecuta después de que el componente haya sido montado en el DOM*/

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
        
    }

    /* Function handleScroll- Scroll change to color*/
        handleScroll=()=>{
            if (window.scrollY > 0){
                this.setState({
                    headerShow:true
                })
 
            } else {
                this.setState({
                    headerShow:false
                })    

            }
        }
    

    /*Function ToggleDrawer/SideMenu*/

    toggleDrawer=(value)=> {
        this.setState({
            drawerOpen:value 
        })
    }

    render() {
        return ( <div>
            <AppBar 
            
            style = {
                {
                    /*Ternario ? true:false */

                    backgroundColor:this.state.headerShow? "#2f2f2f":'transparent',
                    boxShadow: "none",
                    padding: "10px 0px"
                }
            } >
            <Toolbar>
            <div className="header_logo">
        {/* Google Fonts*/}
                <div className="font_righteous header_logo_venue">The Venue</div>
                <div className="header_logo_title">Musical Events</div>
               

            </div>

            <IconButton
            aria-label= "Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true )}
            >
                <MenuIcon/>    
            </IconButton>

            {/*Open-Close SideMenu*/}
            <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value)=> this.toggleDrawer(value)}
            />

            

            </Toolbar>
            </AppBar>   

            </div>
        )
    }
}