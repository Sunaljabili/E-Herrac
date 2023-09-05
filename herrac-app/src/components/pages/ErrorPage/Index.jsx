import React from 'react'
import { Link } from 'react-router-dom';

import "./Index.css"

function Index() {
  return (
    <div class="flex-container">
      <div class="text-center">
        <h1>
          <span class="fade-in" id="digit1">4</span>
          <span class="fade-in" id="digit2">0</span>
          <span class="fade-in" id="digit3">4</span>
        </h1>
        <h3 class="fadeIn">Səhifə tapılmadı ...</h3>
        <Link to="/">Ana səhifəyə get</Link>
      </div>
    </div>
  )
}

export default Index;
