import React, { useContext, useState , useEffect } from "react";
import { MultiFormContext } from "../context/MultiFormProvider";
import jacuzzi from './../assets/Amenities/jacuzzi.svg';
import lawn from './../assets/Amenities/lawn.svg';
import playground from './../assets/Amenities/playground.svg';
import relax from './../assets/Amenities/relax.svg';
import running from './../assets/Amenities/running.svg';
import sauna from './../assets/Amenities/sauna.svg';
import swimmingPool from './../assets/Amenities/swimming-pool.svg';
import swimmingPool2 from './../assets/Amenities/swimming-pool2.svg';
import treadmill from './../assets/Amenities/treadmill.svg';
import waterfall from './../assets/Amenities/waterfall.svg';
import barbeque from './../assets/Amenities/barbeque.png';
import basketballCourt from './../assets/Amenities/basketball-court.png';
import bellboy from './../assets/Amenities/bellboy.png';
import cinema from './../assets/Amenities/cinema.png';
import tent from './../assets/Amenities/circus.png';
import parking from './../assets/Amenities/parking.png';
import yoga from './../assets/Amenities/yoga.png';
import cafe from './../assets/Amenities/cafe.svg';
import aromaticGarden from './../assets/Amenities/chamomile.svg';
import cocktail from './../assets/Amenities/cocktail.svg';
import golf from './../assets/Amenities/golf.svg';
import artGarden from './../assets/Amenities/growth.svg';
import juice from './../assets/Amenities/juice.svg';
import maps from './../assets/Amenities/maps.svg';
import nature from './../assets/Amenities/nature.svg';
import streetLight from './../assets/Amenities/street-light.svg';
import botanicalGarden from './../assets/Amenities/Botanical Garden.svg';
import cabanaSeating from './../assets/Amenities/Cabana Seating.svg';
import cricketPitch from './../assets/Amenities/Cricket Pitch.svg';
import dayCareCenter from './../assets/Amenities/Daycare Center.svg';
import diningOutlets from './../assets/Amenities/Dining Outlets.svg';
import fishingPonds from './../assets/Amenities/Fishing Ponds.svg';
import hennaArtLounge from './../assets/Amenities/Henna art lounge.svg';
import lightMaze from './../assets/Amenities/Light Maze and mountains.svg';
import market from './../assets/Amenities/Market.svg';
import mpHall from './../assets/Amenities/Multi-Purpose Hall.svg';
import observationDeck from './../assets/Amenities/Observation deck.svg';
import paddleTennis from './../assets/Amenities/Paddle Tennis.svg';
import retailOutlets from './../assets/Amenities/Retail Outlets.svg';
import security from './../assets/Amenities/Security.svg';
import smartMart from './../assets/Amenities/Smart Mart.svg';
import sunsetDeck from './../assets/Amenities/Sunset Deck.svg';
import cactusGarden from './../assets/Amenities/cactusGarden.svg';
import serenityGarden from './../assets/Amenities/serenityGarden.svg';
import wellnessCenter from './../assets/Amenities/wellnessCenter.svg';
import centralPark from './../assets/Amenities/centralPark.svg';
import mosque from './../assets/Amenities/mosque.svg';
import picnicPatch from './../assets/Amenities/picnicPatch.svg';
import school from './../assets/Amenities/school.svg';
const options = [
  { image: treadmill, label: 'Gym' },
  { image: basketballCourt, label: 'Basketball court' },
  { image: yoga, label: 'Yoga' },
  { image: swimmingPool, label: 'Private Swimming' },
  { image: parking, label: 'Valet Parking' },
  { image: bellboy, label: 'Concierge Services' },
  { image: swimmingPool2, label: 'Leisure Pool Deck' },
  { image: jacuzzi, label: 'Jacuzzi' },
  { image: cinema, label: 'Outdoor Cinema' },
  { image: playground, label: 'Kids Play Area' },
  { image: barbeque, label: 'Barbeque Area' },
  { image: sauna, label: 'Steam and Sauna' },
  { image: parking, label: 'Green Parking' },
  { image: tent, label: 'Private tents' },
  { image: serenityGarden, label: 'Serenity garden' },
  { image: cactusGarden, label: 'Cactus garden' },
  { image: yoga, label: 'Outdoor yoga studio' },
  { image: streetLight, label: 'Floating glow lamps' },
  { image: nature, label: 'Argan tree garden hills' },
  { image: artGarden, label: 'Art garden' },
  { image: juice, label: 'Orange café' },
  { image: cocktail, label: 'Watermelon bar' },
  { image: aromaticGarden, label: 'Aromatic garden' },
  { image: golf, label: 'Glow in the dark mini golf' },
  { image: maps, label: 'Floating walkways' },
  { image: fishingPonds, label: 'Fishing ponds' },
  { image: playground, label: 'Play area' },
  { image: lightMaze, label: 'Mountains' },
  { image: botanicalGarden, label: 'Botanical garden' },
  { image: observationDeck, label: 'Observation deck' },
  { image: hennaArtLounge, label: 'Henna art lounge' },
  { image: playground, label: 'Kids Play Area' },
  { image: lawn, label: 'Parks and Leisure Areas' },
  { image: cafe, label: 'Restaurants' },
  { image: retailOutlets, label: 'Retail Outlets' },
  { image: market, label: 'Supermarket' },
  { image: swimmingPool, label: 'Swimming Pool' },
  { image: diningOutlets, label: 'Dining Outlets' },
  { image: dayCareCenter, label: 'Daycare Center' },
  { image: barbeque, label: 'BBQ Area' },
  { image: sunsetDeck, label: 'Sunset Deck' },
  { image: playground, label: 'Kids Play Area' },
  { image: cinema, label: 'Floating Cinema' },
  { image: cricketPitch, label: 'Cricket Pitch' },
  { image: running, label: 'Jogging Track' },
  { image: paddleTennis, label: 'Paddle Tennis' },
  { image: relax, label: 'Relaxation Zone' },
  { image: cabanaSeating, label: 'Cabana Seating' },
  { image: mpHall, label: 'Multi-Purpose Hall' },
  { image: waterfall, label: 'Water Feature' },
  { image: smartMart, label: 'Smart Mart' },
  { image: parking, label: 'Covered Parking' },
  { image: security, label: 'Security' },
  { image: swimmingPool, label: 'Shared Pool' },
  { image: paddleTennis, label: 'Tennis Court' },
  { image: wellnessCenter, label: 'Wellness Center' },
  { image: maps, label: 'Run & Ride Tracks' },
  { image: playground, label: 'Shaded Play Zone' },
  { image: centralPark, label: 'Central Park' },
  { image: yoga, label: 'Meditation Pavilion' },
  { image: treadmill, label: 'Air Fitness' },
  { image: school, label: 'Kinder Garten' },
  { image: mosque, label: 'Mosque' },
  { image: retailOutlets, label: 'Retail Therapy' },
  { image: botanicalGarden, label: 'Garden' },
  { image: swimmingPool, label: 'Transquility Pool' },
  { image: picnicPatch, label: 'Picnic Patch' }
];


import { ProjectCardContext } from "../context/ProjectCardProvider";

function ProjectAmenities() {
  const value = useContext(MultiFormContext);
  // const ProjectCardDetails=useContext(ProjectCardContext);
  // console.log(ProjectCardDetails);
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => { window.scrollTo(0, 0);}, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (selectedOptions.length === 0) return
    value.setFormIndex(5);
    }

  const handleCheckboxChange = (index) => {
    const selectedOption = options[index];
    if (selectedOptions.some(option => option.label === selectedOption.label)) 
      {
        const updatedOptions = selectedOptions.filter(option => option.label !== selectedOption.label);
        setSelectedOptions(updatedOptions);
      } 
      else
      {
        setSelectedOptions([...selectedOptions, selectedOption]);
      }
    }
 
    return (
    <form onSubmit={formSubmitHandler} className="rounded text-center d-flex flex-column align-items-center gap-3 gap-md-5 w-100">
          <div className="w-100 row row-cols-md-4 row-cols-2 amenity-list-height">
              {options.map((option, index) => (
                <div key={index} className="col py-3 px-2">
                    <label className="d-flex flex-row align-items-center gap-3">
                        <input 
                        type="checkbox" 
                        name="option"
                        onChange={() => handleCheckboxChange(index)}
                        />
                        <div style={{width:'3rem'}} className="d-flex align-items-start">
                          <img src={option.image} width="35" height="auto" />
                        </div>
                        <p className="fs-para m-0 font-color-primary fw-medium">{option.label}</p>
                    </label>
                </div>
              ))}
        </div>
      <button className="button-hover-primary px-5 py-3 rounded w-50 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
    </form>
    )
  }
    export default ProjectAmenities;

