import React, { Component, useState } from "react";
const DeleteBooking = ({ slots, setSlots }) => {
  const [spot, setSpot] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (spot && spot.split("-").length === 2) {
      const parkingSpot = slots[+spot.split("-")[0]][+spot.split("-")[1]];
      if (!parkingSpot) {
        alert("invalid spot");
        return;
      }
      if (!parkingSpot.booked) {
        alert("spot is empty");
        return;
      }
      const inTime = parkingSpot.inTime;
      const totalTime = Math.floor(
        Math.abs(new Date() - new Date(inTime)) / 1000 / 60
      );
      const cost = 2 * totalTime;
      alert(`Total charge is Rs ${cost} for ${totalTime} mins`);
      parkingSpot.booked = false;
      setSlots(JSON.parse(JSON.stringify(slots)));
    } else {
      alert("invalid spot");
    }
  };

  return (
    <div className="SlotBooking">
      <form>
        <label htmlFor="vehicleNo"> Parking Spot</label>
        <input
          name="vehicleNo"
          value={spot}
          onChange={(e) => setSpot(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit} disabled={!spot}>
          Generate Parking Fee
        </button>
      </form>
    </div>
  );
};

export default DeleteBooking;
