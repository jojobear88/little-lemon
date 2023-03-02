import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../../api/bookingAPI";
import Restaurant from "../../assets/restaurant.jpg";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");
  const navigate = useNavigate();

  let output;
  initializeTimes();
  const [availableTimes] = useReducer(updateTimes, output);

  function updateTimes(date) {
    return fetchAPI(date);
  }

  function initializeTimes() {
    output = fetchAPI(new Date());
  }

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    updateTimes(date);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData);
    if (submitAPI(formData)) {
      navigate("/confirm");
    }
    return false;
  }
  return (
    <article className="reservation container">
      <section className="reservation-form">
        <h1>Reservation Form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="res-date">Choose date</label>
          <input
            value={date}
            type="date"
            id="res-date"
            onChange={(e) => handleDateChange(e)}
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            value={guest}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            onChange={(e) => setGuest(e.target.value)}
          />

          <label htmlFor="occasion">Occasion</label>
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
