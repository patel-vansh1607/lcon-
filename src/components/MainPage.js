import "../styles/MainPage.css"
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";




const activities = [
  {
    title: "Beach Cleanup",
    desc: "Leo Club members actively clean local beaches to promote environmental awareness.",
    image: "/images/beach-cleanup.jpg",
  },
  {
    title: "Tree Planting",
    desc: "Join us in making Nakuru greener with our tree planting drives across the city.",
    image: "/images/tree-planting.jpg",
  },
  {
    title: "Food Drives",
    desc: "Distributing food to the underprivileged is one of our regular community projects.",
    image: "/images/food-drive.jpg",
  },
];

const MainPage = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-left">
          <img src="/images/hero-volunteer.png" alt="Leo volunteering" />
        </div>
        <div className="hero-right">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Uniting for Good
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leo Club of Nakuru makes a difference every day. Through international support and local dedication, we're changing lives, communities, and the world we share.
          </motion.p>
          <motion.a
            href="#activities"
            className="hero-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.a>
        </div>
      </section>

      <section className="activities-section" id="activities">
        <h2>Our Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              className="activity-card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <img src={activity.image} alt={activity.title} />
              <h3>{activity.title}</h3>
              <p>{activity.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
