import React from 'react'
import './footer.css'

function Footer (){
    return(
        <div>
              {/* <!-- Site footer --> */}
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">This is a social network of a standard individuals dollornet is neither an organization nor a monitary cooperate neither an insurance agency, nor a bank, it is a social network. The primary target of the network is to monetarily engage its part and help one another.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            {/* <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul> */}
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/Home/About">About Us</a></li>
              <li><a href="/Home/Contact">Contact Us</a></li>
              <li><a href="/#">Contribute</a></li>
              {/* <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li> */}
              {/* <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li> */}
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved 
         <a href="#"></a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://twitter.com/?lang=en-in" target="blank"><i className="fab fa-twitter"></i></a></li>
              <li><a class="dribbble" href="https://www.instagram.com/?hl=en" target="blank"><i className="fab fa-instagram"></i></a></li>
              <li><a class="linkedin" href="https://in.linkedin.com/" target="blank"><i className="fab fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    )
}

export default Footer;