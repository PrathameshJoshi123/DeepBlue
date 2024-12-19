import React from "react";
import { FaInfoCircle, FaUser, FaEnvelope, FaStore, FaPhone, FaMapMarkerAlt, FaHome, FaCity, FaMapSigns, FaMailBulk, FaCarrot, FaWeight, FaCalendarAlt, FaStickyNote, FaShieldAlt, FaIdCard, FaCertificate, FaFileAlt, FaAward, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import '../CSS/Donor.css'
const Donor = () => {
  return (
    <div className="donor-container">
      <form className="donorform">
        <h3>
          <FaInfoCircle /> Basic Information
        </h3>
        <div>
          <label htmlFor="name">
            <FaUser /> Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">
            <FaEnvelope /> Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label htmlFor="restaurantName">
            <FaStore /> Restaurant Name:
          </label>
          <input
            type="text"
            id="restaurantName"
            name="restaurantName"
            placeholder="Enter restaurant name (if applicable)"
          />
        </div>

        <div>
          <label htmlFor="contact">
            <FaPhone /> Contact Number:
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="Enter your contact number"
            required
          />
        </div>

        <h3>
          <FaMapMarkerAlt /> Address Details
        </h3>
        <div>
          <label htmlFor="address">
            <FaHome /> Full Address:
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your full address"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="city">
            <FaCity /> City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            required
          />
        </div>

        <div>
          <label htmlFor="state">
            <FaMapSigns /> State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter your state"
            required
          />
        </div>

        <div>
          <label htmlFor="zip">
            <FaMailBulk /> Zip Code:
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            placeholder="Enter your zip code"
            required
          />
        </div>

        <h3>
          <FaCarrot /> Food Donation Details
        </h3>
        <div>
          <label htmlFor="foodType">
            <FaCarrot /> Type of Food:
          </label>
          <select id="foodType" name="foodType" required>
            <option value="">Select Food Type</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy Products</option>
            <option value="Bakery">Bakery Items</option>
            <option value="Prepared Meals">Prepared Meals</option>
            <option value="Grains">Grains</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label htmlFor="foodQuantity">
            <FaWeight /> Quantity of Food:
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="number"
              id="foodQuantity"
              name="foodQuantity"
              placeholder="Enter quantity"
              required
              min="0"
              step="0.1"
            />
            <select id="quantityUnit" name="quantityUnit" required>
              <option value="kg">kg</option>
              <option value="grams">grams</option>
              <option value="liters">liters</option>
              <option value="pieces">pieces</option>
              <option value="packets">packets</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="donationFrequency">
            <FaCalendarAlt /> Donation Frequency:
          </label>
          <select id="donationFrequency" name="donationFrequency">
            <option value="">Select Donation Frequency</option>
            <option value="One-time">One-time Donation</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label htmlFor="additionalNotes">
            <FaStickyNote /> Additional Notes:
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            placeholder="Any additional information about your food donation"
          ></textarea>
        </div>

        <h3>
          <FaShieldAlt /> Verification and Compliance
        </h3>
        <div>
          <label htmlFor="idProof">
            <FaIdCard /> ID Proof:
          </label>
          <input
            type="file"
            id="idProof"
            name="idProof"
            accept=".pdf,.jpg,.png"
            required
          />
        </div>

        <div>
          <label htmlFor="fssaiId">
            <FaCertificate /> FSSAI ID:
          </label>
          <input
            type="text"
            id="fssaiId"
            name="fssaiId"
            placeholder="Enter your FSSAI ID"
          />
        </div>

        <h3>
          <FaFileAlt /> Terms of Service
        </h3>
        <div>
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">
            I agree to the{" "}
            <a href="#" id="openTerms">
              Terms and Conditions
            </a>
            .
          </label>
        </div>

        <button type="submit">
          <FaPaperPlane /> Register
        </button>
      </form>

      <section className="benefits-section">
        <h2>
          <FaAward /> Why Register?
        </h2>
        <ul>
          <li>
            <FaCheckCircle /> Corporate Social Responsibility (CSR) benefits
          </li>
          <li>
            <FaCheckCircle /> Brand recognition for businesses
          </li>
          <li>
            <FaCheckCircle /> Tax incentives for donations
          </li>
          <li>
            <FaCheckCircle /> Make a positive impact on the community
          </li>
        </ul>
      </section>

      <div id="termsModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Terms and Conditions</h2>
          <ol>
            <li>
              <strong>Food Safety:</strong> All donated food must meet
              applicable safety and health standards. Donors are responsible for
              ensuring the food is not expired or spoiled.
            </li>
            <li>
              <strong>Timely Donation:</strong> Food donations should be made
              within the agreed-upon time to maintain quality and facilitate
              efficient distribution.
            </li>
            <li>
              <strong>Proper Packaging:</strong> All donated food must be
              securely and appropriately packaged to prevent contamination
              during transit.
            </li>
            <li>
              <strong>Accurate Information:</strong> Donors must provide
              accurate details regarding the type and quantity of food being
              donated.
            </li>
            <li>
              <strong>Food Categories:</strong> Donors should ensure the donated
              food aligns with the organization’s capacity to store and
              distribute it.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Donor;
