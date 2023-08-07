import React from 'react';


const Styles = {

  // maincontainer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   minHeight: '100vh',
  //   padding: '20px',
  // },
  centerplace: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width:"100vw",
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap:"wrap",
    maxWidth: '100vw',
    height: '70vh',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatarContainer: {
    flex: '0 0 200px', // Fixed width for the avatar container
  },
  avator: {
    width: '80%',
    height: '80%',
    borderRadius: '100%',
    border: '4px solid #fff',
  },
  img:{
    width: '80%',
    height: '80%',
    borderRadius: '100%',
    marginRight:"125px"
  },
  infoContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:"20px",
    // height:"100vh",
    width:"100vw"
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
    textAlign: 'center',
  },
  desc: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '20px',
    textAlign: 'center',
  },
  add: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  loc: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#888',
    cursor: 'pointer',
    textDecoration: 'underline',
    textAlign: 'center',
  },
};

const ProfileCard = ({ name, description, profilePhoto }) => {
  return (
    <div className="centerplace">
      <div style={Styles.maincontainer}>
        <div style={Styles.cardContainer}>
          <div style={Styles.avatarContainer}>
            <div style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              marginTop:"85%",
              // marginBottom:"45%"
            }}>
              <img style={{
                height:"150px",
                width:"150px",
                borderRadius:"100%"
              }}
                className="avator"
                src="https://www.w3schools.com/w3images/avatar6.png"
                alt="Profile Avatar"
              />
            </div>
          </div>
          <div  style={Styles.infoContainer}>
            <div style={Styles.name}>{name || 'Soham Pati'}</div>
            <div style={Styles.desc}>
              {description ||
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aliquam qui illo, architecto quod quas voluptatem, rem pariatur, dolore consectetur sed repellat beatae expedita! Eos voluptas porro repellat quae optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel sunt rem consequuntur officia fugiat quam voluptatibus sapiente exercitationem porro sed repudiandae corrupti at alias quae in dignissimos eaque, quia sequi?'}
            </div>
            <div style={Styles.add}></div>
            <div style={Styles.loc}>Latitude: 25.72184, Longitude: -150.20871
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
