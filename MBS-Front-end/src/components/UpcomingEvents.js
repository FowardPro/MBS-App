import React, { useState } from 'react';
import './UpcomingEvents.css';
import eventPhoto1 from '../assets/photos/house1.jpg';
import eventPhoto2 from '../assets/photos/kelvin momo.png';
import eventPhoto3 from '../assets/photos/sjava.png';


const UpcomingEvents = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="upcoming-events-container">
      <div>
        <h1>Gallary</h1>
      </div>
      <div className={`events-wrapper ${showMore ? 'show-more' : ''}`}>
        <div className="event-content">
          <img src={eventPhoto1} alt="Upcoming Event" className="event-photo" />
          <div className="event-description">

            <div className="vertical-pipe-container">
              <div className="vertical-pipe">
                <div className="pipe">|</div>
                <div className="text">
                  <h2>MBS Properties</h2>
                  <p>
                    MBS Properties is a trusted real estate company specializing in rental housing solutions that cater to a diverse range of needs and preferences. 
                    Whether you're looking for a cozy apartment, 
                    a spacious family home, or a luxurious villa,
                     MBS Properties offers an extensive portfolio of well-maintained rental properties in desirable locations. 
                     Our commitment to providing excellent customer service ensures that every tenant enjoys a seamless renting experience, 
                     from property search to move-in and beyond. At MBS Properties, we understand the importance of finding the perfect home, 
                     and we strive to match our clients with properties that offer both comfort and convenience. With flexible rental terms and a dedication to quality, 
                     MBS Properties is your go-to partner for finding your next home.</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="event-content reverse">
          <img src={eventPhoto2} alt="Upcoming Event 2" className="event-photo1" />
          <div className="event-description1">

            <div className="vertical-pipe-container">
              <div className="vertical-pipe">
                <div className="pipe1">|</div>
                <div className="text">
                  <h2>More</h2>
                  <p>
                  In addition to our extensive range of rental properties, MBS Properties prides itself on building lasting relationships with our tenants. We believe that renting a home should be more than just a transaction; it should be the beginning of a positive and fulfilling living experience. Our dedicated team is always available to assist with any inquiries or concerns, ensuring that your stay is as comfortable and worry-free as possible. We regularly inspect and maintain our properties to the highest standards, so you can rest assured that your home is safe, secure, and in excellent condition. With a deep understanding of the rental market and a passion for customer satisfaction, MBS Properties is committed to helping you find a place you can truly call home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button className={`view-more-button ${showMore ? 'fixed' : ''}`} onClick={handleViewMore}>
        {showMore ? 'SHOW LESS UPCOMING EVENTS' : 'SHOW MORE UPCOMING EVENTS'}
      </button>
    </div>
  );
};

export default UpcomingEvents;
