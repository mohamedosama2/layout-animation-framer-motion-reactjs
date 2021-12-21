import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, Reorder } from "framer-motion";
import Loader from "./Loader";

const Home = () => {
  const [animate, setAnimate] = useState("center");
  const [animateAxis, setAnimateAxis] = useState("x");
  const [items, setItems] = useState([0, 1, 2, 3]);

  const containerVarients = {
    hover: {
      scale: 1.1,
      boxShadow: "0 0 8px rgb(255,255,255)",
      textShadow: "0 0 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity, ////repeat animtion times or infinity
      },
    },
  };
  return (
    <>
      <motion.div
        className="home container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <h2>Welcome to Pizza Joint</h2>
        <Link to="/base">
          <motion.button whileHover="hover" variants={containerVarients}>
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader />
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          justifyContent: animate,
          margin: "10px",
        }}
      >
        <motion.div
          // layoutTransition
          layout
          style={{ width: "200px", height: "200px", background: "orange" }}
        />
        <motion.div
          // layoutTransition
          layout
          style={{ width: "200px", height: "200px", background: "orange" }}
        />
        <motion.div
          // layoutTransition
          layout
          style={{ width: "200px", height: "200px", background: "orange" }}
        />
      </motion.div>
      <motion.button
        style={{ display: "block", margin: "50px auto" }}
        whileHover="hover"
        variants={containerVarients}
        onClick={() =>
          setAnimate((prev) => (prev === "center" ? "space-around" : "center"))
        }
      >
        Animate it
      </motion.button>
      <Reorder.Group
        values={items}
        axis={animateAxis}
        as={"ol"}
        onReorder={setItems}
        style={{
          display: "flex",
          flexDirection: animateAxis === "x" ? "row" : "column",
          alignItems: "center",
          margin: "auto",
        }}
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            style={{
              width: "200px",
              height: "200px",
              background: "black",
              borderRadius: "10px",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "22px",
            }}
          >
            Drag me {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <motion.button
        style={{ display: "block", margin: "50px auto" }}
        whileHover="hover"
        variants={containerVarients}
        onClick={() => setAnimateAxis((prev) => (prev === "x" ? "y" : "x"))}
      >
        Animate it
      </motion.button>
    </>
  );
};

export default Home;
