import React from 'react';
import './home.css'
import axios from 'axios';


class Contactfield extends React.Component{
    render(){
        return(
            <div class="mb-5">
               <form class="rounded msg-form" onSubmit={(e) => {
                    e.preventDefault();
                    axios.post('/api/users/CreateContact',{

                        uname: e.target.uname.value,
                        mail : e.target.mail.value,
                        message: e.target.message.value,

                    }).then(res => {
                         if(res.data.status === 1){
                             console.log("sucess");
                             window.location.reload();
                         }
                    })
               }} >
                <div class="form-group"> <label for="name" class="h6">Your Name</label>
                    <div class="input-group border rounded">
                        <div class="input-group-addon px-2 pt-1">
                            <p class="fas fa-user text-primary"></p>
                        </div> <input type="text" required name="uname" class="form-control border-0" placeholder="Your name"/>
                    </div>
                </div>
                <div class="form-group"> <label for="name" class="h6">Email</label>
                    <div class="input-group border rounded">
                        <div class="input-group-addon px-2 pt-1"> <i class="fa fa-envelope text-primary"></i>
                         </div> <input type="text" required name="mail"  placeholder="Email" class="form-control border-0"/>
                    </div>
                </div>
                <div class="form-group"> <label for="msg" class="h6">Message</label>
                 <textarea name="message" id="msgus" name="message" cols="10" rows="5" class="form-control bg-light" placeholder="Message"></textarea> </div>
                <div class="form-group d-flex justify-content-end">
                     <input type="submit" required class="btn btn-primary text-white"  value="send message"/> </div>
            </form>
            </div>
        )
    }

}

export default Contactfield;
 