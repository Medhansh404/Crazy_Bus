// SearchForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './searchform.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const SearchForm = ({ history }) => {
    const [dataInp, setData] = useState("");
    const [startCity, setStartCity] = useState('');
    const [destination, setDestination] = useState('');

    const [startDate, setStartDate] = useState(new Date());

    const handleToCity = e => {
        e.preventDefault();
        setDestination({ destination: e.target.value });
        localStorage.setItem("destination", e.target.value);
    }

    const renderBusList = (dataInp) => {
        if (Object.keys(dataInp).length > 0) {
            return (<BusList value={dataInp} />);
        }
    }

    const handleFromCity = e => {
        e.preventDefault();
        setStartCity({ startCity: e.target.value });
        localStorage.setItem("start", e.target.value);
    }

    const getBuses = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/booking/', { startCity, destination })
            .then(response => response.data)
            .then(data => {
                setData(data.bus);
            })
            .catch(error => {
                console.error("Error fetching buses:", error);
            });
    }

    const handleDate = e => {
        e.preventDefault();
        localStorage.setItem("date", e.target.value);
    }

    return (
        <div className="custom-search-form">
            <h2>Find Your Bus</h2>
            <form className="custom-form">
                <div className="custom-form-group">
                    <div htmlFor="to" className="custom-label">Destination:</div>
                    <input
                        type="text"
                        id="to"
                        name="to"
                        placeholder="Enter destination"
                        onChange={e => handleToCity(e)}
                        required
                        className="custom-input"
                    />
                </div>
        <div className="custom-form-group">
                    <div htmlFor="departure-date" className="custom-label">Departure Date:
                    </div>
                    <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        minDate={new Date()}
                        className="custom-input"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select a date"
                        popperPlacement="bottom-end"
                    />
                    <FaCalendarAlt className="calendar-icon" />
                </div>

                <button type="submit" onClick={e => getBuses(e)} className="custom-button">
                    <Link to="/bus" className="custom-link">
                        Search Buses
                    </Link>
                </button>
            </form>
        </div>
    );
}

export default SearchForm;
