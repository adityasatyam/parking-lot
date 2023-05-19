import { useState } from "react";
import "./App.css";
import { DeleteBooking, Header, ParkingSlots, SlotBooking } from "./components";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import slotData from "./slots.json";

function App() {
  const [slots, setSlots] = useState([
    ...slotData.slots.map((row) =>
      row.map((col) => {
        col.inTime = new Date(new Date() - 95 * 60000);
        return col;
      })
    ),
  ]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ParkingSlots slots={slots} setSlots={setSlots} />}
          />
          <Route
            path="/book"
            element={<SlotBooking slots={slots} setSlots={setSlots} />}
          />
          <Route
            path="/delete"
            element={<DeleteBooking slots={slots} setSlots={setSlots} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
