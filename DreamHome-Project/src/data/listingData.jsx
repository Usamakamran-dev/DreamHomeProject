import listingGallery1 from './../assets/listing/residentialImage1.jpg'
import listingGallery2 from './../assets/listing/residentialImage2.jpg'
import listingGallery3 from './../assets/listing/residentialImage3.jpg'
// Amenities import
import jacuzzi from './../assets/Amenities/jacuzzi.svg';
import playground from './../assets/Amenities/playground.svg';
import sauna from './../assets/Amenities/sauna.svg';
import swimmingPool from './../assets/Amenities/swimming-pool.svg';
import swimmingPool2 from './../assets/Amenities/swimming-pool2.svg';
import treadmill from './../assets/Amenities/treadmill.svg';
import barbeque from './../assets/Amenities/barbeque.png';
import basketballCourt from './../assets/Amenities/basketball-court.png';
import bellboy from './../assets/Amenities/bellboy.png';
import cinema from './../assets/Amenities/cinema.png';
import parking from './../assets/Amenities/parking.png';
import yoga from './../assets/Amenities/yoga.png';


const listingData=[
    {
       name: 'listing 1',
       category: 'Residential',
       listingUnit: 'One Studio with one bath and private pool',
       listingSubHeading: 'Magnificent View, 8.33% Net Roi, Payment plan available',
       location: 'Cote D Azur Hotel, The Heart of Europe, The World Islands, Dubai, UAE',
       studioQuantity: '1',
       bathQuantity: '1',
       totalArea: '2323',
       gallery: [listingGallery1,listingGallery2,listingGallery3],
       features:['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6', 'feature7'],
       paymentPlan:['60% During Construction','40% On Handover'],
       amenities: 
       [
       { image: treadmill,
         label: 'Indoor / Outdoor Gym'
       },
       { image: basketballCourt,
       label: 'Basketball court'
       },
        { image: yoga,
       label: 'Yoga'
       },
        { image: swimmingPool,
       label: 'Private Pool'
       },
        { image: parking,
       label: 'Valet Parking'
       } ,
       { image: bellboy,
       label: 'Concierge Services'
       },
       { image: swimmingPool2,
         label: 'Leisure Pool Deck'
         },
         { image: jacuzzi,
           label: 'Pool & Jacuzzi'
           }
          ,
        { image: cinema,
       label: 'Outdoor Cinema'
       },
        { image: playground,
       label: 'Kids Play Area'
       } ,
       { image: barbeque,
       label: 'Barbeque Area'
       },
       { image: sauna,
         label: 'Steam and Sauna '
         },
         { image: parking,
           label: 'Green Parking'
           }
     ]
    },
    {
        name: 'listing 2',
        category: 'Apartment',
        listingUnit: 'Two Studio with one bath and private pool',
        listingSubHeading: 'Magnificent View 2, 8.33% Net Roi, Payment plan available',
        location: 'Cote D Azur Hotel 2, The Heart of Europe, The World Islands, Dubai, UAE',
        studioQuantity: '1',
        bathQuantity: '1',
        totalArea: '2323',
        gallery: [listingGallery1,listingGallery2,listingGallery3],
        features:['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6', 'feature7'],
        paymentPlan:['60% During Construction','40% On Handover'],
        amenities: 
        [
        { image: treadmill,
          label: 'Indoor / Outdoor Gym'
        },
        { image: basketballCourt,
        label: 'Basketball court'
        },
         { image: yoga,
        label: 'Yoga'
        },
         { image: swimmingPool,
        label: 'Private Pool'
        },
         { image: parking,
        label: 'Valet Parking'
        } ,
        { image: bellboy,
        label: 'Concierge Services'
        },
        { image: swimmingPool2,
          label: 'Leisure Pool Deck'
          },
          { image: jacuzzi,
            label: 'Pool & Jacuzzi'
            }
           ,
         { image: cinema,
        label: 'Outdoor Cinema'
        },
         { image: playground,
        label: 'Kids Play Area'
        } ,
        { image: barbeque,
        label: 'Barbeque Area'
        },
        { image: sauna,
          label: 'Steam and Sauna '
          },
          { image: parking,
            label: 'Green Parking'
            }
      ]
     },
     {
      name: 'listing 3',
      category: 'Apartment',
      listingUnit: 'One Studio with one bath and private pool',
      listingSubHeading: 'Magnificent View, 8.33% Net Roi, Payment plan available',
      location: 'Cote D Azur Hotel, The Heart of Europe, The World Islands, Dubai, UAE',
      studioQuantity: '1',
      bathQuantity: '1',
      totalArea: '2323',
      gallery: [listingGallery1,listingGallery2,listingGallery3],
      features:['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6', 'feature7'],
      paymentPlan:['60% During Construction','40% On Handover'],
      amenities: 
      [
      { image: treadmill,
        label: 'Indoor / Outdoor Gym'
      },
      { image: basketballCourt,
      label: 'Basketball court'
      },
       { image: yoga,
      label: 'Yoga'
      },
       { image: swimmingPool,
      label: 'Private Pool'
      },
       { image: parking,
      label: 'Valet Parking'
      } ,
      { image: bellboy,
      label: 'Concierge Services'
      },
      { image: swimmingPool2,
        label: 'Leisure Pool Deck'
        },
        { image: jacuzzi,
          label: 'Pool & Jacuzzi'
          }
         ,
       { image: cinema,
      label: 'Outdoor Cinema'
      },
       { image: playground,
      label: 'Kids Play Area'
      } ,
      { image: barbeque,
      label: 'Barbeque Area'
      },
      { image: sauna,
        label: 'Steam and Sauna '
        },
        { image: parking,
          label: 'Green Parking'
          }
    ]
   },
   {
    name: 'listing 4',
    category: 'Apartment',
    listingUnit: 'One Studio with one bath and private pool',
    listingSubHeading: 'Magnificent View, 8.33% Net Roi, Payment plan available',
    location: 'Cote D Azur Hotel, The Heart of Europe, The World Islands, Dubai, UAE',
    studioQuantity: '1',
    bathQuantity: '1',
    totalArea: '2323',
    gallery: [listingGallery1,listingGallery2,listingGallery3],
    features:['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6', 'feature7'],
    paymentPlan:['60% During Construction','40% On Handover'],
    amenities: 
    [
    { image: treadmill,
      label: 'Indoor / Outdoor Gym'
    },
    { image: basketballCourt,
    label: 'Basketball court'
    },
     { image: yoga,
    label: 'Yoga'
    },
     { image: swimmingPool,
    label: 'Private Pool'
    },
     { image: parking,
    label: 'Valet Parking'
    } ,
    { image: bellboy,
    label: 'Concierge Services'
    },
    { image: swimmingPool2,
      label: 'Leisure Pool Deck'
      },
      { image: jacuzzi,
        label: 'Pool & Jacuzzi'
        }
       ,
     { image: cinema,
    label: 'Outdoor Cinema'
    },
     { image: playground,
    label: 'Kids Play Area'
    } ,
    { image: barbeque,
    label: 'Barbeque Area'
    },
    { image: sauna,
      label: 'Steam and Sauna '
      },
      { image: parking,
        label: 'Green Parking'
        }
  ]
 },
 {
  name: 'listing 5',
  category: 'Residential',
  listingUnit: 'One Studio with one bath and private pool',
  listingSubHeading: 'Magnificent View, 8.33% Net Roi, Payment plan available',
  location: 'Cote D Azur Hotel, The Heart of Europe, The World Islands, Dubai, UAE',
  studioQuantity: '1',
  bathQuantity: '1',
  totalArea: '2323',
  gallery: [listingGallery1,listingGallery2,listingGallery3],
  features:['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6', 'feature7'],
  paymentPlan:['60% During Construction','40% On Handover'],
  amenities: 
  [
  { image: treadmill,
    label: 'Indoor / Outdoor Gym'
  },
  { image: basketballCourt,
  label: 'Basketball court'
  },
   { image: yoga,
  label: 'Yoga'
  },
   { image: swimmingPool,
  label: 'Private Pool'
  },
   { image: parking,
  label: 'Valet Parking'
  } ,
  { image: bellboy,
  label: 'Concierge Services'
  },
  { image: swimmingPool2,
    label: 'Leisure Pool Deck'
    },
    { image: jacuzzi,
      label: 'Pool & Jacuzzi'
      }
     ,
   { image: cinema,
  label: 'Outdoor Cinema'
  },
   { image: playground,
  label: 'Kids Play Area'
  } ,
  { image: barbeque,
  label: 'Barbeque Area'
  },
  { image: sauna,
    label: 'Steam and Sauna '
    },
    { image: parking,
      label: 'Green Parking'
      }
]
}
]

export default listingData;