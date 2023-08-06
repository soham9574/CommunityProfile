import React from 'react';
import '../Css/Profile.css';

const ProfileCard = ({ name, description, profilePhoto }) => {
  return (
    <div className="centerplace">
    <div className="container maincontainer">
    <div className="avator mb-2 mt-2 ">
       <img className='avator' src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
    </div>

    <div className="info">
       <div className="name">Soham Pati</div>
       <br />
       {/* <br /> */}
       <div className="desc">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Amet aliquam qui illo, architecto quod quas voluptatem,
        rem pariatur, dolore consectetur sed repellat beatae expedita!
       Eos voluptas porro repellat quae optio. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Vel sunt rem consequuntur
        officia fugiat quam voluptatibus sapiente exercitationem porro
         sed repudiandae corrupti at alias quae in dignissimos eaque, quia sequi?
       </div>
       <br />
       {/* <br /> */}
       <div className="add">SALTLAKE , SECTOR II ,BIDHANNAGAR </div>
       <br />
       <div className="loc">ADD LOCATION</div>
    </div>
</div>
</div>
  );
};

export default ProfileCard;
