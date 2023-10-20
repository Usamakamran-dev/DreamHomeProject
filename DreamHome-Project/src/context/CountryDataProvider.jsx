import React, { useState, useEffect, createContext } from "react";
import phoneData from "../data/phoneData";
export const CountryDataContext=createContext();

function CountryDataProvider(props){
  const [countryData,setCountryData]=useState();
  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
           }
           const data = await response.json();
           // Update each country data with the phone length
           const updatedCountryData = data.map(country => {
           const phoneLengthInfo = phoneData.find(item => item.code === country.cca2);
           const phoneLength = phoneLengthInfo ? phoneLengthInfo.phoneLength : null;
           // Add the phoneLength field to the country data
           return { ...country, phoneLength };
           })
            setCountryData(updatedCountryData);
           } catch (error) {
           console.error("Error fetching data:", error);
           }};
            fetchCountriesData();
           }, [phoneData]);

        return (
        <CountryDataContext.Provider value={countryData}>
            {props.children}
        </CountryDataContext.Provider>
    )}
    export default CountryDataProvider;