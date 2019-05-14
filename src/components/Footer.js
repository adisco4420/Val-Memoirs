import React from 'react';

function Footer() {
    return (
      <footer className="footer mt-auto py-3 bg-danger">
      <div className="container">
        <span className="text-light">Val Memories All right reserved &copy; copyright {new Date().getFullYear()}</span>
      </div>
    </footer>
    )
}
export default Footer;