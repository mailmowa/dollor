import React from 'react';
import './navbar.css';



class Navbar extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            toggle: false,
         }
    }

    // componentDidMount() {
         
    //    window.addEventListener( "scroll",() => {
    //         if ( window.scrollY > 10 ) {
    //             document.getElementById('NAV_BAR').classList.add('active')
     
                
    //         } else {
    //             document.getElementById('NAV_BAR').classList.remove('active')
    //         }
    //     })
    // }

    render() { 
        return ( 
            <div className="body_Nav">
                    {/* <!-- Navbar--> */}
                <header class="header">
                    <nav id="NAV_BAR" className="navbar  navbar-expand-lg fixed-top  active py-4">
                        <div class="container"><a href="/Home" class="navbar-brand text-uppercase font-weight-bold">
                           <div className="Brand_heading_nav">
                                {/* <i class='fas fa-dollar-sign fa-rotate-45'></i> */}
                                <span >
                                            <span style={{color:"gold",fontSize:"1.5em"}}>$</span>Dollar.net
                                </span>
                            </div>
                        </a>
                            <button type="button" onClick={() => {this.setState({toggle: !this.state.toggle})}} class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
                            
                            <div id="navbarSupportedContent" className={this.state.toggle?"navbar-collapse":"collapse navbar-collapse"}>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active"><a href="/" class="nav-link text-uppercase font-weight-bold m-1">Home <span class="sr-only">(current)</span></a></li>
                                    <li class="nav-item"><a href="/Home/About" class=" nav-link text-uppercase font-weight-bold m-1 ">About</a></li>
                                    <li class="nav-item"><a href="/Home/Contact" class="nav-link text-uppercase font-weight-bold m-1">Contact</a></li>
                                    <li class="nav-item"><a href="/Home/BusinessPlan" class=" nav-link text-uppercase font-weight-bold m-1 ">Business Plan</a></li>

                                </ul>
                                <span className="btn btn-rounded rounded-pill aqua-gradient m-1 btn-md"><a href="/Home/Login">login</a></span>
                                <span className="btn btn-rounded aqua-gradient rounded-pill m-1 btn-md"><a href="/Home/Register">Register</a></span>

                            </div>
                        </div>
                    </nav>
                </header>


                {/* <!-- For demo purpose --> */}
              

            </div>
         );
    }
}
 
export default Navbar;