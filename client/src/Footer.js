import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className="text-center footer">
        {/* eslint-disable-next-line */}
        code hosted <text className="red">on</text> <a target="_blank" href="https://github.com/mcqdb/mcqdb" >github</a>
    </div>
  );
}

export default Footer;  