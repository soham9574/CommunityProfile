import React from "react";
import product from "./userData";
const productsObject = product.reduce((obj, product) => {
  obj[product.id] = product;
  return obj;
}, {});
const Productcard = (props) => {
  const userStyles = {
    card: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)", // Soft background gradient
      color: "#333", // Text color
      padding: "20px",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      width: "100%",
      maxWidth: "700px",
      margin: "0 auto",
      border: "1px solid #ddd",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      alignItems: "center",
      justifyContent:'center',
      // marginLeft:'2px',
      // marginRight:"2px"
      
    },
    imgWrapper: {
      width: "160px",
      height: "120px",
      overflow: "hidden",
      marginRight: "20px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      position: "relative",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    userInfo: {
      width: "60%",
    },
    name: {
      fontFamily: "Georgia, serif",
      marginBottom: "10px",
      fontSize: "24px",
      color: "#333", 
    },
    contact: {
      marginBottom: "5px",
      fontSize: "16px",
      color: "#777",
    },
    button: {
      background: "#e76f51",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "18px", 
      transition: "background-color 0.3s ease",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    buttonHover: {
      background: "#d9534f",
    },
  };

  return (
    <>
    <br />
    <br />
    <div style={{display:'flex',justifyContent:"center",alignItems:"center"}} >
        <h3>PRODUCTLIST</h3>
    </div>
    <br />
        <br />
       {Object.values(productsObject).map((product) => (

    <div className="mb-3" key={product.id} style={userStyles.card}>
      <div style={userStyles.imgWrapper}>
        <img
          style={userStyles.img}
          src={product.image}
          alt=""
        />
        
      </div>

      <div style={userStyles.userInfo} className="user-info">
        <h3 style={userStyles.name}>{product.name}</h3>
        <p style={userStyles.contact}>{product.desc}</p>
        {/* <p style={userStyles.contact}>{props.contact}</p> */}
        <button
          style={userStyles.button}
          value={props.product}
          type="button"
        >
       Product Details
        </button>
      </div>
    </div>
    ))}
    </>
  );
}

export default Productcard;
