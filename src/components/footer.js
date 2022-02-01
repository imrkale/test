import React from 'react';

function Footer() {
  return <div className="footer">
            <button
                type="previous"
                className="previous"
                disabled={true}
            >
                Previous
            </button>
            <button
                type="next"
                className="next"
            >
                Next
            </button>
  </div>;
}

export default Footer;
