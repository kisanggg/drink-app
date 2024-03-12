import React from 'react'
import './contact.css';
import { Envelope, GeoAlt, Telephone } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <div style={{backgroundColor:"black"}}>
    <div style={{display:"flex",border:"1px solid white",margin:"20px",width:"1150px",backgroundColor:"black",marginTop:"0px",marginBottom:"0px",marginLeft:"55px"}}>
        <div style={{display:"flex"}}> 
            <img src='https://ichef.bbci.co.uk/news/480/cpsprodpb/12192/production/_132603147_06.jpg.webp' alt='' style={{width:"600px",height:"500px"}}></img>
            <div style={{position:"absolute",marginTop:"200px",marginLeft:"260px"}}>
            <p style={{fontSize:"17px"}}><GeoAlt size={19}/>Address<br/>Kathmandu, Nepal</p>
            </div>
            <div style={{position:"absolute",marginTop:"300px",marginLeft:"260px"}}>
            <p style={{fontSize:"17px"}}><Telephone size={19}/> Lets Talk<br/>+977 9823456178</p>
            </div>
            <div style={{position:"absolute",marginTop:"400px",marginLeft:"240px"}}>
            <p style={{fontSize:"17px"}}><Envelope size={19}/> General Support<br/>cocktail.party2@gmail.com</p>
            </div>  
        </div>
        <div style={{border:"1px solid black",margin:"20px",height:"500px",alignContent:"center",width:"500px"}}>
            <h2 style={{marginBottom:"20px",fontFamily:"Times New Roman",color:"white"}}>Send Us A Message</h2>
            <form id='form' className='form' style={{}}>
                <label for="Name" style={{marginLeft:"10px",fontSize:"18px",color:"white"}}>Full Name*</label>
                <br/>
                <input type='text' placeholder='First Name ' id='fName' style={{margin:"10px",width:"160px",marginRight:"2px"}}></input>
                <input type='text' placeholder='Last Name ' id='lName' style={{margin:"10px",width:"160px",marginLeft:"4px"}}></input>
                <br/>
                <label for="Email"  style={{marginLeft:"10px",fontSize:"18px",color:"white"}}>Enter your email*</label>
                <br/>
                <input type='email' placeholder='Eg. example@gmail.com' id='email' style={{margin:"10px"}}></input>
                <br/>
                <label for='phone number'  style={{marginLeft:"10px",fontSize:"18px",color:"white"}}>Enter your phone number*</label>
                <br/>
                <input type='tel' placeholder='Eg +9771234567892' id='phnNo' style={{margin:"10px"}}></input>
                <br/>
                <label for='message'  style={{marginLeft:"10px",fontSize:"18px",color:"white"}}>Message*</label>
                <br/>
                <textarea type='text' placeholder='Write us a message.' style={{margin:"10px",width:"330px",height:"100px"}}></textarea>
                <br/>
                <button className='msgBtn' style={{marginLeft:"10px",marginTop:"10px",backgroundColor:"#0084d3",border:"1px solid black",borderRadius:"8px",width:"130px",height:"40px",color:"white"}}>Send Message</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact
