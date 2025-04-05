import { useState, useRef, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(500);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  // Guest Selection State
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Ref for detecting outside clicks
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const fetchHotels = async () => {
  //   const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/search`, {
  //     params: { search: searchQuery, maxPrice, checkIn, checkOut, numRooms, numAdults, numChildren }
  //   });
  //   setHotels(data);
  // };

  //newly added
  const fetchHotels = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/search`, {
        params: {
          search: searchQuery,
          checkIn: checkIn.toISOString().split("T")[0],  // Convert Date to YYYY-MM-DD
          checkOut: checkOut.toISOString().split("T")[0],
          maxPrice: maxPrice,
          numRooms: numRooms,
          numAdults: numAdults,
          numChildren: numChildren
        }
      });
  
      setHotels(response.data); // Update state with hotel data
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };
  

  return (
    <div className="relative w-full min-h-screen bg-cover bg-[100%]  bg-no-repeat" style={{ backgroundImage: "url('/background-hero.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto flex justify-center mt-10">
          <div className="w-full max-w-8xl px-24 py-20">
            <h1 className="text-[70px] leading-[70px] font-bold font-playfair text-center text-white mb-4">
              "Find Your Perfect Stay, the Smart Way!"
            </h1>

            {/* Search & Filters */}
            <div className="flex  text-white mt-40 items-end justify-center gap-6 bg-white/55   p-6 rounded-lg shadow-lg">
              {/* Search Location */}
              <div className="flex flex-col">
                <label className="mb-1 font-comfortaa font-bold  text-gray-800">Search Location</label>
                <input
                  type="text"
                  placeholder="Search by city, Landmark..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border p-2 rounded w-64 bg-white text-black shadow-sm"
                />
              </div>

             {/* Budget Filter */}
              <div className="flex flex-col w-full sm:w-auto">
                <label className="font-bold font-comfortaa mb-1 text-gray-800">Budget</label>
                <div className="flex items-center">
                <input
                  type="range"
                  min="500"
                  max="100000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="cursor-pointer w-32"
                />
                <span className="ml-2 font-bold text-gray-800">₹{maxPrice}</span>
                </div>
              </div>

              {/* Check-in and Check-out Dates */}
              <div className="flex flex-col">
                <label className="font-bold font-comfortaa mb-1 text-gray-800">Check-in Date</label>
                <DatePicker selected={checkIn} onChange={(date) => setCheckIn(date)} className="border p-2 rounded bg-white text-black shadow-sm" />
              </div>
              <div className="flex flex-col">
                <label className="font-bold font-comfortaa mb-1 text-gray-800">Check-out Date</label>
                <DatePicker selected={checkOut} onChange={(date) => setCheckOut(date)} className="border p-2 rounded bg-white text-black shadow-sm" />
              </div>

              {/* Guests Selector */}
              <div className="relative" ref={dropdownRef}>
                <label className="font-bold font-comfortaa mb-1 text-gray-800">Guests</label>
                <div 
                  className="border p-2 rounded bg-white text-black shadow-sm cursor-pointer w-48"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {numRooms} ROOM{numRooms > 1 ? "S" : ""}, {numAdults} ADULT{numAdults > 1 ? "S" : ""}, {numChildren} CHILDREN
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white text-black border rounded shadow-lg p-4 z-20">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Rooms</span>
                      <input 
                        type="number" 
                        min="1" 
                        value={numRooms} 
                        onChange={(e) => setNumRooms(parseInt(e.target.value))} 
                        className="border text-center w-12"
                      />
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Adults</span>
                      <input 
                        type="number" 
                        min="1" 
                        value={numAdults} 
                        onChange={(e) => setNumAdults(parseInt(e.target.value))} 
                        className="border text-center w-12"
                      />
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Children</span>
                      <input 
                        type="number" 
                        min="0" 
                        value={numChildren} 
                        onChange={(e) => setNumChildren(parseInt(e.target.value))} 
                        className="border text-center w-12"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button 
                className="bg-blue-600 font-bold font-comfortaa text-white px-6 py-2 rounded hover:bg-blue-800 transition shadow-lg"
                onClick={fetchHotels}
              >
                Search
              </button>
              {/* Display Search Results */}
              {hotels.length > 0 && (
                <div className="hotel-list mt-6">
                  {hotels.map((hotel, index) => (
                    <div key={index} className="hotel-card p-4 bg-white shadow-md rounded-md">
                      <h3 className="font-bold text-lg">{hotel.name}</h3>
                      <p>{hotel.location}</p>
                      <p>₹{hotel.price_per_night} per night</p>
                      <p>⭐ {hotel.rating}</p>
                      <p>Available Rooms: {hotel.available_rooms}</p>
                      <p>Check-in: {hotel.check_in}</p>
                      <p>Check-out: {hotel.check_out}</p>
                    </div>
                  ))}
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
