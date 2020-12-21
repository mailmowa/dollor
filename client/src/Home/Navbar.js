import React from 'react';
import './navbar.css';



class Navbar extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {  }
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
                        <div class="container"><a href="#" class="navbar-brand text-uppercase font-weight-bold">Transparent Nav </a>
                            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
                            
                            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active"><a href="/" class="nav-link text-uppercase font-weight-bold m-1">Home <span class="sr-only">(current)</span></a></li>
                                    <li class="nav-item"><a href="/Home/users" class=" nav-link text-uppercase font-weight-bold m-1 ">About</a></li>
                                    <li class="nav-item"><a href="/Home/about" class="nav-link text-uppercase font-weight-bold m-1">Contact</a></li>
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