import React from 'react'

function Map() {
  return (
    <div className='map-area'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7230096260605!2d49.80828347607887!3d40.37066575844175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc2eab2be39%3A0x908b6d930484dda4!2sInternational%20Commercial%20Arbitration%20Court!5e0!3m2!1sen!2saz!4v1691064847477!5m2!1sen!2saz" 
        width="484"
        height="500"
        style={{ border: "0" }}
        loading="lazy"
        >
      </iframe>
    </div>
  )
}

export default Map
