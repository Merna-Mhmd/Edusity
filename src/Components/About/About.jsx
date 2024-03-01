import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setplaystate}) => {
  return (
    <div className='about'>
      <div className="about-left">
<img src={about_img} alt="" className='about-img'/>
<img src={play_icon} alt="" className='play-icon' onClick={()=>{setplaystate(true)}}/>

      </div>
      <div className="about-right">
<h3>
    About University
</h3>
<h2>
    Nurturing Tomorrow's Leaders Today

</h2>
<p>
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Rem nemo alias magnam 
    doloremque modi corporis sunt eaque quidem 
    odio et!
</p>
<p>
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Expedita, consectetur 
    aut pariatur natus dicta vel ad ipsa quis
     culpa fugit qui, ratione nostrum porro 
     facilis ullam eum voluptas beatae omnis.
</p>
<p>
    Lorem ipsum dolor sit, amet consectetur
     adipisicing elit. Laborum voluptate, 
     nobis molestiae tempore repellat incidunt 
     atque deserunt reprehenderit nemo eveniet
      consectetur,
     quae maxime dolorem. Quis.
</p>

      </div>
    </div>
  )
}

export default About
