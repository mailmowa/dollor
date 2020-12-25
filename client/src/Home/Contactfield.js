import React from 'react';
import './home.css'


class Contactfield extends React.Component{
    render(){
        return(
            <div class="mb-5">
               <form class="rounded msg-form" >
                <div class="form-group"> <label for="name" class="h6">Your Name</label>
                    <div class="input-group border rounded">
                        <div class="input-group-addon px-2 pt-1">
                            <p class="fas fa-user text-primary"></p>
                        </div> <input type="text" class="form-control border-0" placeholder="Your name"/>
                    </div>
                </div>
                <div class="form-group"> <label for="name" class="h6">Email</label>
                    <div class="input-group border rounded">
                        <div class="input-group-addon px-2 pt-1"> <i class="fa fa-envelope text-primary"></i> </div> <input type="text" placeholder="Email" class="form-control border-0"/>
                    </div>
                </div>
                <div class="form-group"> <label for="msg" class="h6">Message</label> <textarea name="message" id="msgus" cols="10" rows="5" class="form-control bg-light" placeholder="Message"></textarea> </div>
                <div class="form-group d-flex justify-content-end"> <input type="submit" class="btn btn-primary text-white" value="send message"/> </div>
            </form>
            </div>
        )
    }

}

export default Contactfield;
 