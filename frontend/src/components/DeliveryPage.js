import React from 'react';
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaGlobe, FaIdCard, FaCar, FaBus, FaClock, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaGift, FaFileAlt } from 'react-icons/fa';
import '../CSS/DeliveryPage.css'
const DeliveryPage = () => {
  return (
    <div className="delivery-container">
      <header>
        <h1>Partner Registration</h1>
      </header>

      <main>
        <section className="form-section">
          <form className="deliveryform">
            
            {/* Basic Information */}
            <h2>Basic Information</h2>
            <div>
              <label htmlFor="companyName"><FaBuilding /> Company/Individual Name:</label>
              <input type="text" id="companyName" name="companyName" placeholder="Enter your company or individual name" required />
            </div>
            <div>
              <label htmlFor="contactPerson"><FaUser /> Contact Person Name:</label>
              <input type="text" id="contactPerson" name="contactPerson" placeholder="Enter contact person's name" required />
            </div>
            <div>
              <label htmlFor="contactEmail"><FaEnvelope /> Contact Email:</label>
              <input type="email" id="contactEmail" name="contactEmail" placeholder="Enter your email" required />
            </div>
            <div>
              <label htmlFor="contactPhone"><FaPhone /> Contact Number:</label>
              <input type="tel" id="contactPhone" name="contactPhone" placeholder="Enter your contact number" required />
            </div>
            <div>
              <label htmlFor="website"><FaGlobe /> Website/Social Media Handle (optional):</label>
              <input type="url" id="website" name="website" placeholder="Enter your website or social media link" />
            </div>

            {/* Business/Individual Details */}
            <h2>Business/Individual Details</h2>
            <div>
              <label htmlFor="registrationNumber"><FaIdCard /> Registration Number/License ID:</label>
              <input type="text" id="registrationNumber" name="registrationNumber" placeholder="Enter registration number or license ID" />
            </div>
            <div>
              <label htmlFor="vehicleTypes"><FaCar /> Vehicle Type(s):</label>
              <input type="text" id="vehicleTypes" name="vehicleTypes" placeholder="e.g., bike, van, truck" required />
            </div>
            <div>
              <label htmlFor="fleetSize"><FaBus /> Fleet Size:</label>
              <input type="number" id="fleetSize" name="fleetSize" placeholder="Number of vehicles available" required />
            </div>
            <div>
              <label htmlFor="experienceYears"><FaClock /> Years of Experience:</label>
              <input type="number" id="experienceYears" name="experienceYears" placeholder="Years of experience in delivery services" required />
            </div>

            {/* Address Details */}
            <h2><FaMapMarkerAlt /> Address Details</h2>
            <div>
              <label htmlFor="streetAddress"><FaMapMarkerAlt /> Street Address:</label>
              <input type="text" id="streetAddress" name="streetAddress" placeholder="Enter your street address" required />
            </div>
            <div>
              <label htmlFor="city"><FaMapMarkerAlt /> City:</label>
              <input type="text" id="city" name="city" placeholder="Enter your city" required />
            </div>
            <div>
              <label htmlFor="state"><FaMapMarkerAlt /> State/Region:</label>
              <input type="text" id="state" name="state" placeholder="Enter your state or region" required />
            </div>
            <div>
              <label htmlFor="postalCode"><FaMapMarkerAlt /> Postal/ZIP Code:</label>
              <input type="text" id="postalCode" name="postalCode" placeholder="Enter your postal/ZIP code" required />
            </div>
            <div>
              <label htmlFor="country"><FaGlobe /> Country:</label>
              <input type="text" id="country" name="country" placeholder="Enter your country" required />
            </div>

            {/* Service Details */}
            <h2>Service Details</h2>
            <div>
              <label htmlFor="areasCovered"><FaMapMarkerAlt /> Areas / Regions Covered:</label>
              <input type="text" id="areasCovered" name="areasCovered" placeholder="Enter areas or regions covered" required />
            </div>
            <div>
              <label htmlFor="deliveryHours"><FaClock /> Delivery Hours/Availability:</label>
              <input type="text" id="deliveryHours" name="deliveryHours" placeholder="e.g., days and times" required />
            </div>

            {/* Agreement/Verification */}
            <h2><FaFileAlt /> Terms of Service</h2>
            <div>
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                I agree to the <a href="#" id="openTerms">Terms and Conditions</a>.
              </label>
            </div>
            <button type="submit">
              <FaPaperPlane /> Register
            </button>
          </form>
        </section>

        {/* Partner Benefits Section */}
        <section className="benefits-section">
          <h2><FaGift /> Partner Benefits</h2>
          <ul>
            <li><FaCheckCircle /> Flexible working hours</li>
            <li><FaCheckCircle /> Competitive delivery incentives</li>
            <li><FaCheckCircle /> Be part of a noble cause</li>
            <li><FaCheckCircle /> Regular earning opportunities</li>
          </ul>
        </section>
      </main>

      {/* Terms Modal */}
      <div id="termsModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Terms and Conditions</h2>
          <ol>
            <li>
              <strong>Timely Pickup and Delivery:</strong> Deliveries must be completed within the agreed-upon time to ensure food quality and safety.
            </li>
            <li>
              <strong>Food Safety During Transit:</strong> Proper care must be taken to prevent food spoilage, contamination, or damage during transportation.
            </li>
            <li>
              <strong>Tracking and Updates:</strong> Delivery personnel must provide real-time updates and tracking information where applicable.
            </li>
            <li>
              <strong>Proper Handling:</strong> All food items must be handled according to health and safety guidelines to maintain quality during delivery.
            </li>
            <li>
              <strong>Verification:</strong> Deliveries should be verified by both the donor and receiver to ensure accuracy in food quantity and type.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
