import React from "react";

const Invoice = () => {
  return (
    <section className='invoice'>
      <p style={{ marginLeft: "92%", padding: "3px 5px", fontSize: "larger" }}>
        &times;
      </p>
      <h3 style={{ fontSize: "medium", padding: "5px 20px", width: "50%" }}>
        Create Invoice
      </h3>

      <div
        style={{
          padding: "10px 20px",
          backgroundColor: "#EDEDF3",
          margin: "10px 20px",
        }}
      >
        <p
          style={{
            height: "20px",
            marginRight: "40%",
            backgroundColor: "gray",
            marginBottom: "5%",
          }}
        ></p>
        <p
          style={{
            height: "20px",
            marginRight: "25%",
            backgroundColor: "white",
            marginBottom: "15%",
          }}
        ></p>
        <p
          style={{
            height: "20px",
            marginRight: "55%",
            backgroundColor: "white",
            marginBottom: "",
          }}
        ></p>
      </div>

      <div>
        <p style={{ marginLeft: "20px", padding: "8px 0px" }}>For to</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="./White Girl.jpg"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              objectFit: "cover",
              padding: "5px 15px",
            }}
          />
          <h4>AR Shakir</h4>
          <p
            style={{
              marginLeft: "40%",
              border: "2px black dashed",
              borderRadius: "50%",
              fontSize: "larger",
              fontWeight: "bolder",
              padding: "0px 4px",
            }}
          >
            +
          </p>
        </div>

        <h3 style={{ padding: "8px 15px" }}>USD 2000</h3>
      </div>

      <button
        style={{
          marginTop: "10px",
          border: "none",
          padding: "10px 110px",
          margin: "10px 20px",
          fontWeight: "bolder",
          borderRadius: "0.5rem",
        }}
      >
        Done
      </button>
    </section>
  );
};

export default Invoice;
