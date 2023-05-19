import "./ParkingSlots.css";
import React from "react";

const ParkingSlots = ({ slots, setSlots }) => {
  return (
    <div className="ParkingSlots">
      <div className="ParkingGrid">
        <div className="Gate">Gate</div>
        {slots.map((row, rowKey) => (
          <div className="row">
            {row.map((col, colKey) => {
              return (
                <div className="col">
                  <Slot
                    booked={col.booked}
                    vehicleId={col.vehicle_id}
                    ticketId={col.ticket_id}
                    parkingNo={`${rowKey}-${colKey}`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const Slot = ({ booked, vehicleId, ticketId, parkingNo }) => {
  return (
    <div
      className="Slot"
      style={{ backgroundColor: booked ? "#ff6666" : "#29a329" }}
    >
      <div className="ParkingNo">P No :{parkingNo}</div>
      {booked && (
        <>
          {/* <div className="ticketId">Ticket : {ticketId}</div> */}
          <div className="vehicleId">Vehicle No : {vehicleId}</div>
        </>
      )}
    </div>
  );
};

export default ParkingSlots;
