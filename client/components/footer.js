import React from 'react';
import {connect} from 'react-redux';

const Footer = () => (
  <div className="footer">
      Built by <a href="https://github.com/anjiemerchant"> Anjali Merchant </a> using the <a href="https://newsapi.org/"> News API </a> for <a href="http://www.polisapp.com/"> Polis </a>
  </div>
)
export default connect(null, null)(Footer)

