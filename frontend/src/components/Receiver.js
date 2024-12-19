import React from 'react';
import { FaUser, FaBuilding, FaPhone, FaMapMarkerAlt, FaCity, FaMailBulk, FaGlobe, FaIdCard, FaFileAlt, FaCalendarAlt, FaUsers, FaCarrot, FaLeaf, FaBox, FaTruck, FaTruckPickup, FaClock, FaWarehouse, FaTruckMonster, FaCheckCircle, FaHeart, FaPaperPlane } from 'react-icons/fa';
import '../CSS/Receiver.css'

const Receiver = () => {
  return (
    <div className="receiver-container">
      <main>
        <section className="form-section">
          <form className="receiverform">
            <h2><FaUser /> Basic Info</h2>
            <div>
              <label htmlFor="ngoName"><FaBuilding /> NGO Name:</label>
              <input type="text" id="ngoName" name="ngoName" placeholder="Enter NGO Name" required />
            </div>
            <div>
              <label htmlFor="contactPerson"><FaUser /> Contact Person:</label>
              <input type="text" id="contactPerson" name="contactPerson" placeholder="Enter Contact Person Name" required />
            </div>
            <div>
              <label htmlFor="contact"><FaPhone /> Contact Number:</label>
              <input type="tel" id="contact" name="contact" placeholder="Enter Contact Number" required />
            </div>
            <div>
              <label htmlFor="address"><FaMapMarkerAlt /> Address:</label>
              <textarea id="address" name="address" placeholder="Enter your address" required></textarea>
            </div>
            <div>
              <label htmlFor="city"><FaCity /> City:</label>
              <input type="text" id="city" name="city" placeholder="Enter your city" required />
            </div>
            <div>
              <label htmlFor="zipCode"><FaMailBulk /> Zip Code:</label>
              <input type="text" id="zipCode" name="zipCode" placeholder="Enter your zip code" required />
            </div>

            <h2><FaBuilding /> NGO Information</h2>
            <div>
              <label htmlFor="website"><FaGlobe /> Website or Social Media:</label>
              <input type="url" id="website" name="website" placeholder="Enter Website or Social Media URL" />
            </div>
            <div>
              <label htmlFor="registrationNumber"><FaIdCard /> Registration/License Number:</label>
              <input type="text" id="registrationNumber" name="registrationNumber" placeholder="Enter Registration Number" required />
            </div>
            <div>
              <label htmlFor="idProof"><FaIdCard /> ID Proof:</label>
              <input type="file" id="idProof" name="idProof" accept=".pdf,.jpg,.png" required />
            </div>
            <div>
              <label htmlFor="ngoGovNo"><FaFileAlt /> NGO Gov No.:</label>
              <input type="text" id="ngoGovNo" name="ngoGovNo" placeholder="Enter NGO Gov No." required />
            </div>
            <div>
              <label htmlFor="dateEstablishment"><FaCalendarAlt /> Date of Establishment:</label>
              <input type="date" id="dateEstablishment" name="dateEstablishment" required />
            </div>
            <div>
              <label htmlFor="supportLevel"><FaUsers /> Support Level:</label>
              <select id="supportLevel" name="supportLevel" required>
                <option value="state">State</option>
                <option value="national">National</option>
                <option value="international">International</option>
              </select>
            </div>
            <div>
              <label htmlFor="funding"><FaCarrot /> Funding Type:</label>
              <select id="funding" name="funding" required>
                <option value="government">Government</option>
                <option value="ngo">NGO</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>
            <div>
              <label htmlFor="benefits"><FaLeaf /> Benefits to the Receiver:</label>
              <textarea id="benefits" name="benefits" placeholder="Enter benefits" required></textarea>
            </div>
            <div>
              <label htmlFor="itemsReceived"><FaBox /> Items Received:</label>
              <input type="text" id="itemsReceived" name="itemsReceived" placeholder="Enter items received" required />
            </div>
            <div>
              <label htmlFor="deliveryDetails"><FaTruck /> Delivery Details:</label>
              <textarea id="deliveryDetails" name="deliveryDetails" placeholder="Enter delivery details" required></textarea>
            </div>
            <div>
              <label htmlFor="deliveryMethod"><FaTruckPickup /> Delivery Method:</label>
              <select id="deliveryMethod" name="deliveryMethod" required>
                <option value="direct">Direct</option>
                <option value="courier">Courier</option>
              </select>
            </div>
            <div>
              <label htmlFor="preferredTime"><FaClock /> Preferred Delivery Time:</label>
              <input type="time" id="preferredTime" name="preferredTime" required />
            </div>
            <div>
              <label htmlFor="warehouse"><FaWarehouse /> Warehouse Details:</label>
              <input type="text" id="warehouse" name="warehouse" placeholder="Enter warehouse details" required />
            </div>

            <div className="modal" id="confirmModal">
              <div className="modal-content">
                <span className="close">&times;</span>
                <h3>Your information has been submitted successfully!</h3>
                <p>Thank you for your submission.</p>
              </div>
            </div>

            <button type="submit"><FaPaperPlane /> Submit</button>
          </form>
        </section>

        <section className="benefits-section">
          <h2><FaCheckCircle /> Program Benefits</h2>
          <ul>
            <li><FaHeart /> Increased access to resources for communities</li>
            <li><FaCheckCircle /> Efficient distribution of surplus food</li>
            <li><FaCheckCircle /> Improved collaboration with local organizations</li>
            <li><FaCheckCircle /> Enhanced visibility of your NGO's mission</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Receiver;
