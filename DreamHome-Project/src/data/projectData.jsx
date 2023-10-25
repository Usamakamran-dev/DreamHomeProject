import Logo from './../assets/Icons/Realtor9.svg';
import image1 from './../assets/Images/sliderImage1.jpg';
import image2 from './../assets/Images/sliderImage2.jpg';
import mail from "./../assets/Icons/enquire.svg";
import damacImg from "./../assets/Projects/damac/damac.jpg";
import damacAbout from "./../assets/Projects/damac/damacAbout.jpg";
import samanaImg from "./../assets/Projects/samana/samana.jpg";
import samanaAbout from "./../assets/Projects/samana/samanaAbout.jpg";
import oceanzImg from "./../assets/Projects/oceanz/oceanzImg.png";
import oceanzAbout from "./../assets/Projects/oceanz/oceanzAbout.png";
import oliviaImg from './../assets/Projects/olivia/olivia.jpeg';
import oliviaAbout from './../assets/Projects/olivia/oliviaAbout.jpeg';
import vybImg from './../assets/Projects/vyb/vybImg.jpeg';
import vybAbout from './../assets/Projects/vyb/vybAbout.jpeg';

// Amenities import
import jacuzzi from './../assets/Amenities/jacuzzi.svg';
import kidPool from './../assets/Amenities/kid-pool.svg';
import lawn from './../assets/Amenities/lawn.svg';
import mainPool from './../assets/Amenities/main-pool.svg';
import playground from './../assets/Amenities/playground.svg';
import relax from './../assets/Amenities/relax.svg';
import running from './../assets/Amenities/running.svg';
import sauna from './../assets/Amenities/sauna.svg';
import swimmingPool from './../assets/Amenities/swimming-pool.svg';
import swimmingPool2 from './../assets/Amenities/swimming-pool2.svg';
import swimmingPool3 from './../assets/Amenities/swimming-pool3.svg';
import table from './../assets/Amenities/table.svg';
import treadmill from './../assets/Amenities/treadmill.svg';
import waterfall from './../assets/Amenities/waterfall.svg';
// Samana Gallery
import samanaGallery1 from './../assets/Projects/samana/samanaGallery1.jpg';
import samanaGallery2 from './../assets/Projects/samana/samanaGallery2.jpg';
import samanaGallery3 from './../assets/Projects/samana/samanaGallery3.jpg';
import samanaGallery4 from './../assets/Projects/samana/samanaGallery4.jpg';
import samanaGallery5 from './../assets/Projects/samana/samanaGallery5.jpg';
import samanaGallery6 from './../assets/Projects/samana/samanaGallery6.jpg';
import samanaGallery7 from './../assets/Projects/samana/samanaGallery7.jpg';
import samanaGallery8 from './../assets/Projects/samana/samanaGallery8.jpg';
import samanaGallery9 from './../assets/Projects/samana/samanaGallery9.jpg';
import samanaGallery10 from './../assets/Projects/samana/samanaGallery10.jpg';
// Olivia Gallery
import oliviaGallery1 from './../assets/Projects/olivia/oliviaGallery1.jpeg';
import oliviaGallery2 from './../assets/Projects/olivia/oliviaGallery2.jpeg';
import oliviaGallery3 from './../assets/Projects/olivia/oliviaGallery3.jpeg';
import oliviaGallery4 from './../assets/Projects/olivia/oliviaGallery4.jpeg';
import oliviaGallery5 from './../assets/Projects/olivia/oliviaGallery5.jpeg';
import oliviaGallery6 from './../assets/Projects/olivia/oliviaGallery6.jpeg';
import oliviaGallery7 from './../assets/Projects/olivia/oliviaGallery7.jpeg';
import oliviaGallery8 from './../assets/Projects/olivia/oliviaGallery8.jpeg';
import oliviaGallery9 from './../assets/Projects/olivia/oliviaGallery9.jpeg';
// Oceanz Gallery
import oceanzGallery1 from './../assets/Projects/oceanz/oceanzGallery1.webp';
import oceanzGallery2 from './../assets/Projects/oceanz/oceanzGallery2.webp';
import oceanzGallery3 from './../assets/Projects/oceanz/oceanzGallery3.webp';
import oceanzGallery4 from './../assets/Projects/oceanz/oceanzGallery4.webp';
import oceanzGallery5 from './../assets/Projects/oceanz/oceanzGallery5.png';
// vyb Gallery
import vybGallery1 from './../assets/Projects/vyb/vybGallery1.jpeg';
import vybGallery2 from './../assets/Projects/vyb/vybGallery2.jpeg';
import vybGallery3 from './../assets/Projects/vyb/vybGallery3.jpeg';
import vybGallery4 from './../assets/Projects/vyb/vybGallery4.jpeg';
import vybGallery5 from './../assets/Projects/vyb/vybGallery5.jpeg';
// damac Gallery
import damacGallery1 from './../assets/Projects/damac/damacGallery1.jpg';
import damacGallery2 from './../assets/Projects/damac/damacGallery2.jpg';
import damacGallery3 from './../assets/Projects/damac/damacGallery3.jpg';
import damacGallery4 from './../assets/Projects/damac/damacGallery4.jpg';
import damacGallery5 from './../assets/Projects/damac/damacGallery5.jpg';
import damacGallery6 from './../assets/Projects/damac/damacGallery6.jpg';
import damacGallery7 from './../assets/Projects/damac/damacGallery7.jpg';
// Project Logos
import samanaLogo from './../assets/PartnerLogos/samanaWhite.png';
import damacLogo from './../assets/PartnerLogos/damacWhite.png';
import oliviaLogo from './../assets/PartnerLogos/oliviaWhite.png';
import oceanzLogo from './../assets/PartnerLogos/oceanzWhite.png';
import vybLogo from './../assets/PartnerLogos/vybWhite.png';


const projectData=[
    {
    ProjectHeading: 'SAMANA Manhattan',
    ProjectSubHeading: "By Samana Skyros",
    ProjectImage: samanaImg,
       hero: {
         heading: "1 & 2 BEDROOMS AND STUDIO WITH PRIVATE POOL",
         logo: samanaLogo,
       },
       monthlyPayment: 
       {
         heading: "MONTHLY PAYMENTS",
         paragraph: "1,2 Bedrooms and Studio with Pool",
         label: "689K",
       },
       aboutUs: 
       {
         paragraph: "Nestled in JVC Dubai, the ultimate combination of sophisticated architecture and opulent luxury is Samana Developers' recent launch Samana Manhattan. Samana Manhattan presents an exceptional chance for investment, enabling you to generate an amazing rental income. Following the project's completion in October 2026, you can choose to make the remaining 25% payment while still retaining a significant sum. Additionally, you have the option to sell the property and earn a profit from capital gains, even during the development phase.",
         image: samanaAbout,
       },
       unitTypes: {
         cards: [
           {
             title: "STUDIO WITHOUT POOL",
             price: "689K",
           },
           {
             title: "STUDIO WITH POOL",
             price: "689K",
           },
           {
             title: "1 BEDROOM WITH POOL",
             price: "1.09M",
           },
           {
             title: "2 BEDROOM WITH POOL",
             price: "1.7M",
           },
         ],
       },
       gallery:{
          images: [samanaGallery1,samanaGallery2,samanaGallery3,samanaGallery4,samanaGallery5,samanaGallery6,samanaGallery7,samanaGallery8,samanaGallery9,samanaGallery10]
       },
       paymentPlan:{
           heading: "PAYMENT PLAN",
           footerHeading: "SAMANA Manhattan - Studio, 1 & 2 Bedroom Apartments ",
           startingPrice: "689K",
           column1: [
            {
              heading: "On Booking",
              percentage: '15%'
            },
            {
              heading: "x35 Months",
              percentage: '1%'
            }, {
              heading: "on 6th Months",
              percentage: '10%'
            }, {
              heading: "on 12th Months",
              percentage: '5%'
            }, {
              heading: "on 18th Months",
              percentage: '0.5%'
            }, {
              heading: "x60 Months",
              percentage: '0.5%'
            },
          ],
          column2: [
            {
              heading: "Down Payment",
              percentage: '20%'
            },
            {
              heading: "x35 Months",
              percentage:'1%'
            }, {
              heading: "on 6th Months",
              percentage: '10%'
            }, {
              heading: "on 12th Months",
              percentage: '5%'
            }, {
              heading: "on 18th Months",
              percentage: '5%'
            }, {
              heading: "on 6th Months",
              percentage: '0.5%'
            },
          ]
       },
        amenities:{
         items:[
         { image: treadmill,
           label: 'Indoor / Outdoor Gym'
         },
         { image: mail,
         label: 'Basketball court'
         },
          { image: mail,
         label: 'Yoga'
         },
          { image: swimmingPool,
         label: 'Private Swimming Pool Apartments'
         },
          { image: mail,
         label: 'Valet Parking'
         } ,
         { image: mail,
         label: 'Concierge Services'
         },
         { image: swimmingPool2,
           label: 'Leisure Pool Deck'
           },
           { image: jacuzzi,
             label: 'Infinity Swimming Pool & Jacuzzi'
             }
            ,
          { image: mail,
         label: 'Outdoor Cinema'
         },
          { image: playground,
         label: 'Kids Play Area'
         } ,
         { image: mail,
         label: 'Barbeque Area'
         },
         { image: sauna,
           label: 'Steam and Sauna '
           },
           { image: mail,
             label: 'Green Parking'
             }
       ]
       }
   },
   {
     ProjectHeading: 'Damac Lagoons',
     ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
     ProjectImage: damacImg,
        hero: {
          heading: "BEDROOMS WITH TOWNHOUSES AND PRIVATE VILLAS",
          logo: damacLogo,
        },
        monthlyPayment: 
        {
          heading: "MONTHLY PAYMENTS",
          paragraph: "4,5,6,7 Bedrooms with TownHouses and Villas",
          label: "2.99M",
        },
        aboutUs: 
        {
          paragraph: "Embark on a Mediterranean journey and experience the alluring charm of sun-kissed sands, calm waters, cobblestone streets and island living at DAMAC Lagoons – Dubai's most awaited water-inspired community. With a perfect blend of contemporary living and traditional Mediterranean charm, DAMAC Lagoons offers the beauty of clear lagoons, lush landscapes and serene, calming vibes.",
          image: damacAbout,
        },
        unitTypes: {
          cards: [
            {
              title: "4 BEDROOM TOWNHOUSE",
              price: "2.99M",
            },
            {
              title: "5 BEDROOM TOWNHOUSE",
              price: "3.99M",
            },
            {
              title: "6 BEDROOM VILLA(55K)",
              price: "16.2M",
            },
            {
              title: "6 BEDROOM VILLA(1000K)",
              price: "32.69M",
            },
            {
              title: "7 BEDROOM VILLA",
              price: "20.92M",
            }
          ],
        },
        gallery:{
           images: [damacGallery1,damacGallery2,damacGallery3,damacGallery4,damacGallery5,damacGallery6,damacGallery7]
        },
        paymentPlan:{
            heading: "PAYMENT PLAN",
            footerHeading:"DAMAC LAGOONS - Bedrooms with TownHouses and Villas ",
            startingPrice: "2.99M",
            column1: [
              {
                heading: "Deposit (intermediate)",
                percentage: '20%'
              },
              {
                heading: "1st Installment (within 3 months)",
                percentage: '5%'
              }, {
                heading: "2nd Installment (within 6 months)",
                percentage: '5%'
              }, {
                heading: "3rd Installment (within 9 months)",
                percentage: '5%'
              }, {
                heading: "4th Installment (within 12 months)",
                percentage: '5%'
              }, {
                heading: "5th Installment (within 15 months)",
                percentage: '5%'
              },
              {
                heading: "6th Installment (within 18 months)",
                percentage: '5%'
              }, {
                heading: "7th Installment (within 21 months)",
                percentage: '5%'
              }
            ],
            column2: [
              {
                heading: "8th Installment (within 24 months)",
                percentage: '5%'
              },
              {
                heading: "9th Installment (within 27 months)",
                percentage: '5%'
              },
              {
                heading: "10th Installment (within 30 months)",
                percentage:'5%'
              }, {
                heading: "11th Installment (within 33 months)",
                percentage: '5%'
              }, {
                heading: "12th Installment (70% completion)",
                percentage: '5%'
              }, {
                heading: "13th Installment (80% completion)",
                percentage: '2%'
              }, {
                heading: "14th Installment (90% completion)",
                percentage: '2%'
              },
              {
                heading: "15th Installment (On completion)",
                percentage: '1%'
              }]
        },
        amenities:{
         items:[
         { image: mail,
           label: 'Private tents'
         },
         { image: mail,
         label: 'Serenity garden'
         },
          { image: mail,
         label: 'Cactus garden'
         },
          { image: mail,
         label: 'Outdoor yoga studio'
         },
          { image: mail,
         label: 'Floating glow lamps'
         } ,
         { image: mail,
         label: 'Argan tree garden hills'
         },
         { image: mail,
           label: 'Art garden'
           },
           { image: mail,
             label: 'Orange clementine café'
             },
             { image: mail,
              label: 'Watermelon bar'
            },
            { image: mail,
            label: 'Aromatic garden'
            },
             { image: mail,
            label: 'Glow in the dark mini golf'
            },
             { image: mail,
            label: 'Floating walkways'
            },
             { image: mail,
            label: 'Fishing ponds'
            } ,
            { image: playground,
            label: 'Play area'
            },
            { image: mail,
            label: 'Light maze and mountains'
            },
            { image: mail,
            label: 'Botanical garden'
            },
            { image: mail,
            label: 'Observation deck'
            },
            { image: mail,
            label: 'Henna art lounge'
            }
             ]}
    },
    {
     ProjectHeading: 'Olivia Residences',
     ProjectSubHeading: "By Karma Developers",
     ProjectImage: oliviaImg,
        hero: {
          heading: "1 2 & 3 BEDROOMS WITH PARK AND SWIMMING POOL",
          logo: oliviaLogo,
        },
        monthlyPayment: 
        {
          heading: "MONTHLY PAYMENTS",
          paragraph: "1,2,3 Bedrooms with 96,115 and 18 Units respectively",
          label: "700K",
        },
        aboutUs: 
        {
          paragraph:"Discover luxurious living at Olivia Residences in Dubai Investment Park (DIP), a project by Karma Developers that features 1, 2 and 3 bedroom apartments. This exceptional residential project redefines the art of modern living, offering residents an unmatched experience of convenience lifestyle in the G+6 structure offers a modern and efficient layout. The development is strategically located in Dubai Investment Park, a thriving hub of growth and innovation in Dubai. Dubai Investment Park is known for its integrated community with essential amenities, making it an attractive destination for both residents and businesses.",
          image: oliviaAbout,
        },
        unitTypes: {
          cards: [
            {
              title: "01 BEDROOM WITH 96 UNITS",
              price: "700K",
            },
            {
              title: "02 BEDROOMS WITH 115 UNITS",
              price: "1.25M",
            },
            {
              title: "03 BEDROOMS WITH 18 UNITS",
              price: "1.34M",
            }
          ],
        },
        gallery:{
           images: [oliviaGallery1,oliviaGallery2,oliviaGallery3,oliviaGallery4,oliviaGallery5,oliviaGallery6,oliviaGallery7,oliviaGallery8,oliviaGallery9]
        },
        paymentPlan:{
          heading: "PAYMENT PLAN",
          footerHeading:"OLIVIA RESEDENCIES - Bedrooms with Luxury Pools ",
            startingPrice: "700K",
            column1:[
              {
                heading: "Down Payment",
                percentage: '10%'
              },
              {
                heading: "30 Months* 1% during construction",
                percentage: '1%'
              }
            ],
            column2:[
              {
                heading: "Handover April 2026",
                percentage: '1%'
              }, {
                heading: "59 Months * 1% Post Handover Plan",
                percentage: '1%'
              }
            ]
        },
        amenities:{
         items:[
         { image: treadmill,
           label: 'Gymnasium'
         },
         { image: playground,
         label: 'Kids Play Area'
         },
          { image: lawn,
         label: 'Parks and Leisure Areas'
         },
          { image: mail,
         label: 'Restaurants'
         },
          { image: mail,
         label: 'Retail Outlets'
         } ,
         { image: mail,
         label: 'Supermarket'
         },
         { image: swimmingPool,
           label: 'Swimming Pool'
           },
           { image: mail,
             label: 'Dining Outlets'
             }
       ]
       }
    },
    {
     ProjectHeading: 'Danube Oceanz',
     ProjectSubHeading: "By Danube Properties",
     ProjectImage: oceanzImg,
        hero: {
          heading: "1 2 & 3 BEDROOMS AND STUDIO WITH LUXURY POOL",
          logo: oceanzLogo,
        },
        monthlyPayment: 
        {
          heading: "MONTHLY PAYMENTS",
          paragraph: "1,2,3 Bedrooms and Studio with Pool",
          label: "1.25M",
        },
        aboutUs: 
        {
          paragraph: "Inspired by the sea, Oceanz by Danube gracefully blends architectural sophistication with the enchanting allure of maritime charisma. Located in the heart of the thriving Maritime City community, Get ready to be mesmerized by sweeping ocean vistas and the opulent interiors and luxury furnishing by Tonino Lamborghini CASA.The strategic location of Dubai Maritime City offers great capital appreciation for investors and buyers, and it boasts a connected causeway to an extensive road network, granting swift access to major expressways for seamless commuting.",
          image: oceanzAbout,
        },
        unitTypes: {
          cards: [
            {
              title: "STUDIO AND POOL",
              price: "1.25M",
            },
            {
              title: "SINGLE BEDROOM",
              price: "1.9M",
            },
            {
              title: "1 BEDROOM AND POOL",
              price: "1.99M",
            },
            {
              title: "2 BEDROOM AND POOL",
              price: "2.6M",
            },
            {
              title: "3 BEDROOM AND POOL",
              price: "3.8M",
            }
          ],
        },
        gallery:{
           images: [oceanzGallery1, oceanzGallery2, oceanzGallery3,oceanzGallery4,oceanzGallery5]
        },
        paymentPlan:{
            heading: "PAYMENT PLAN",
            footerHeading:"DANUBE OCEANZ - Bedrooms and Studio with Pool ",
            startingPrice: "1.25M",
            column1: [
              {
                heading: "Down Payment (booking date)",
                percentage: '10%'
              },
              {
                heading: "1st Installment (within 2 months)",
                percentage: '10%'
              }, {
                heading: "2nd to 12th Installment (1% monthly)",
                percentage: '11%'
              }, {
                heading: "13th Installment (within 14 months)",
                percentage: '4%'
              }, {
                heading: "14th to 24th Installment (1% monthly)",
                percentage: '11%'
              }
            ],
            column2: [
              {
                heading: "25th Installment (within 26 months)",
                percentage: '5%'
              },
              {
                heading: "26th to 28th Installment (1% monthly)",
                percentage: '13%'
              },
              {
                heading: "39th Installment (on handover)",
                percentage:'1%'
              }, {
                heading: "Easy Installments (within 35 months)",
                percentage: '35%'
              }]
        },
        amenities:{
         
         items:[
         { image: treadmill,
           label: 'Aquatic Gym'
         },
         { image: mail,
         label: 'Daycare Center'
         },
          { image: mail,
         label: 'BBQ Area'
         },
          { image: mail,
         label: 'Sunset Deck'
         },
          { image: jacuzzi,
         label: 'Sky Jacuzzi'
         } ,
         { image: playground,
         label: 'Kids Play Area'
         },
         { image: mail,
           label: 'Floating Cinema'
           },
           { image: mail,
             label: 'Cricket Pitch'
             }
             ,
             { image: running,
              label: 'Jogging Track'
            },
            { image: mail,
            label: 'Paddle Tennis'
            },
             { image: mail,
            label: 'Basket Ball'
            },
             { image: relax,
            label: 'Relaxation Zone'
            },
             { image: mail,
            label: 'Cabana Seating'
            } ,
            { image: mail,
            label: 'Multi-Purpose Hall'
            },
            { image: waterfall,
              label: 'Water Feature'
              },
              { image: mail,
                label: 'Smart Mart'
                }
       ]
       }
    },
    {
      ProjectHeading: 'VYB Dubai',
      ProjectSubHeading: "By Ginco Properties",
      ProjectImage: vybImg,
         hero: {
           heading: "1 & 2 BEDROOMS WITH PRIVATE SWIMMING POOL",
           logo: vybLogo,
         },
         monthlyPayment: 
         {
           heading: "MONTHLY PAYMENTS",
           paragraph: "1,2 Bedrooms with Luxury Pools",
           label: "1.23M",
         },
         aboutUs: 
         {
           paragraph: "VYB, a 21-storey residential building planned for Dubai's vibrant Business Bay district. Developed by Ginco Properties, this exceptional project aims to redefine urban living in one of the city's most sought-after locations. With sleek design and stylish interiors, each unit exudes modernity and welcomes an abundance of natural light. Residents will relish a host of world-class amenities, including a state-of-the-art gym, a swimming pool, and convenient dedicated parking spaces.",
           image: vybAbout,
         },
         unitTypes: {
           cards: [
             {
               title: "01 BEDROOM",
               price: "1.23M",
             },
             {
               title: "02 BEDROOM",
               price: "1.67M",
             }
           ],
         },
         gallery:{
            images: [vybGallery1,vybGallery2,vybGallery3,vybGallery4,vybGallery5]
         },
         paymentPlan:{
             heading: "PAYMENT PLAN",
             footerHeading:"VYB DUBAI - Bedrooms with Luxury Pools ",
             startingPrice: "1.23M",
             column1: [
              {
                heading: "30 days from booking",
                percentage: '10%'
              },
              {
                heading: "15th December , 2023",
                percentage: '5%'
              }, {
                heading: "15th April , 2024",
                percentage: '5%'
              }
            ],
            column2: [
              {
                heading: "15th August , 2024",
                percentage: '5%'
              }, {
                heading: "15th December , 2024",
                percentage: '5%'
              }, {
                heading: "on Handover",
                percentage: '60%'
              }]
         },
         amenities:{
          items:[
          { image: treadmill,
            label: 'Gym'
          },
          { image: mail,
          label: 'Covered Parking'
          },
           { image: mail,
          label: 'Security'
          },
           { image: swimmingPool,
          label: 'Shared Pool'
          },
           { image: mail,
          label: 'Tennis Court'
          } 
        ]
        }
     }
   ]

   export default projectData;