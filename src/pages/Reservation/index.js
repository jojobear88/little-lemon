import { useReducer, useState } from "react";
import { fetchAPI } from "../../api/bookingAPI";
import Restaurant from "../../assets/restaurant.jpg";
function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const output = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  function updateTimes(date) {
    return fetchAPI(date);
  }

  function initializeTimes() {
    fetchAPI(new Date());
  }

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    updateTimes(date);
  }
  return (
    <article className="reservation container">
      <section className="reservation-form">
        <h1>Reservation Form</h1>
        <form>
          <label for="res-date">Choose date</label>
          <input
            value={date}
            type="date"
            id="res-date"
            onChange={(e) => handleDateChange(e)}
          />

          <label for="res-time">Choose time</label>
          <select
            id="res-time "
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((time) => (
              <option>{time}</option>
            ))}
          </select>

          <label for="guests">Number of guests</label>
          <input
            value={guest}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            onChange={(e) => setGuest(e.target.value)}
          />

          <label for="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button className="action-button reservation-button" type="submit">
            Make Your reservation
          </button>
        </form>
      </section>
      <section className="reservation-img">
        <img src={Restaurant} alt="res-img"></img>
      </section>
    </article>
  );
}

export default Reservation;
