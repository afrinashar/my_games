import './Footer.css'; // Import custom CSS

const Footer = ({ style, content }) => {
  return (
    <footer className="footer-container" style={{ ...style }}>
      <div className="container">
        <p className="footer-content">{content}</p>
      </div>
    </footer>
  );
};

export default Footer;
