
import React from 'react';
import '../css/Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1 className="header-title">Welcome to Our Website</h1>
      </header>
      <main>
        <section>
          <h2 className="section-title">About Us</h2>
          <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus fermentum diam, eget vestibulum erat gravida nec.</p>
        </section>
        <section>
          <h2 className="section-title">Services</h2>
          <ul className="service-list">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-content">Email: contact@example.com</p>
          <p className="section-content">Phone: +1234567890</p>
        </section>
      </main>
      <footer>
        <p className="footer-text">&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
