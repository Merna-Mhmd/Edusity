import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import msg2 from '../../assets/mail-icon.png'
import msg3 from '../../assets/phone-icon.png'
import msg4 from '../../assets/location-icon.png'
import white from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "457c5e69-2b7d-47d1-8b53-70278e93a077");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  



  return (
    <div className='Contact'>
<div className="contact-col">
<h3>
    Send us a message
    <img src={msg} alt="" />
</h3>
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed at non a, placeat earum provident. Nulla consequuntur cupiditate vitae facere adipisci? Sed similique mollitia praesentium corrupti ullam excepturi officiis. Expedita?
</p>
<ul>
    <li>
        <img src={msg2} alt="" />
        mernamhmd8@gmail.com
    </li>
    <li>
        <img src={msg3} alt="" />
      011000000
    </li>
    <li>
        <img src={msg4} alt="" />
        77 alex,alex<br/> Ma1234,alexandria
    </li>
</ul>
</div>
<div className="contact-col">
    <form onSubmit={onSubmit} >
<label >Your Name:</label>
<input type="text" name="name" id=""placeholder='Enter Your Name' required />
<label >Your Phone Number:</label>
<input type="tel" name="phone" id=""placeholder='Enter Your phone' required />
<label >Write your message here </label>
<textarea name="message"  rows="6" placeholder='enter your message'required ></textarea>
<button type='submit' className='btn dark-btn'>Submit Now
<img src={white} alt="" />
</button>
    </form>
<span>
 {result}
</span>

</div>

    </div>
  )
}

export default Contact