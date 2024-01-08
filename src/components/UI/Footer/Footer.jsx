import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaTwitter } from 'react-icons/fa'; 
import './footerStyles.css';

function Footer() {
  return (
    <Card className="footer mt-auto">
      <Card.Footer className="text-muted d-flex justify-content-center footerStyles">
        {/* Links to GitHub and Twitter */}
        <a href="https://github.com/Camsca/" className="mx-3">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com" className="mx-3">
          <FaTwitter size={30} />
        </a>
      </Card.Footer>
    </Card>
  );
}

export default Footer;
