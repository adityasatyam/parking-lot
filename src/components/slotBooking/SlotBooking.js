import { useState } from "react";
import "./SlotBooking.css";
import { findParkingSpot } from "../../utils/findParkingSpot";
const SlotBooking = ({ slots, setSlots }) => {
  const [vehicleNo, setVehicleNo] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const spot = findParkingSpot(slots);
    if (!spot) alert("Parkinng not available");
    else {
      const parkingSpot = slots[+spot.split("-")[0]][+spot.split("-")[1]];
      parkingSpot.booked = true;
      parkingSpot.vehicle_id = vehicleNo;
      parkingSpot.ticket_id = 12331;
      setSlots(JSON.parse(JSON.stringify(slots)));
      alert(`${spot} booked for vehicle no ${vehicleNo}`);
    }
  };

  return (
    <div className="SlotBooking">
      <form>
        <label htmlFor="vehicleNo"> Vehicle No</label>
        <input
          name="vehicleNo"
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit} disabled={!vehicleNo}>
          Generate Ticket
        </button>
      </form>
    </div>
  );
};

export default SlotBooking;
