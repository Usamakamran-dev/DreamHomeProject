import dummyImage from './../assets/Images/dummyImage.jpg';
import Logo from './../assets/Icons/Realtor9.svg';
import aboutUs from './../assets/Images/Project Image.jpg';
import image1 from './../assets/Images/sliderImage1.jpg';
import image2 from './../assets/Images/sliderImage2.jpg';
import mail from "./../assets/Icons/enquire.svg";
import damacImg from "./../assets/Projects/damac/damac.jpg";
import damacAbout from "./../assets/Projects/damac/damacAbout.jpg";
import samanaImg from "./../assets/Projects/samana/samana.jpg";
import samanaAbout from "./../assets/Projects/samana/samanaAbout.jpg";
import oceanzImg from "./../assets/Projects/oceanz/oceanzImg.png";
import oceanzAbout from "./../assets/Projects/oceanz/oceanzAbout.png";
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


const projectData=[
    {
    ProjectHeading: 'SAMANA - Manhattan',
    ProjectSubHeading: "By Samana Skyros",
    ProjectImage: samanaImg,
       hero: {
         heading: "LUXURY APARTMENTS WITH PRIVATE CLUBS AND POOLS",
         logo: Logo,
       },
       monthlyPayment: 
       {
         heading: "MONTHLY PAYMENTS",
         paragraph: "Your monthly payment information here.",
         label: "100,000",
       },
       aboutUs: 
       {
         paragraph: "Nestled in JVC Dubai, the ultimate combination of sophisticated architecture and opulent luxury is Samana Developers' recent launch Samana Manhattan. Samana Manhattan presents an exceptional chance for investment, enabling you to generate an amazing rental income. Following the project's completion in October 2026, you can choose to make the remaining 25% payment while still retaining a significant sum. Additionally, you have the option to sell the property and earn a profit from capital gains, even during the development phase.",
         image: samanaAbout,
       },
       unitTypes: {
         cards: [
           {
             title: "Card 1 Title + Description",
             price: "290,000",
           },
           {
             title: "Card 1 Title + Description",
             price: "290,000",
           },
           {
             title: "Card 1 Title + Description",
             price: "290,000",
           },
           {
             title: "Card 1 Title + Description",
             price: "290,000",
           },
         ],
       },
       gallery:{
          images: [image1, image2, image1,image2]
       },
       paymentPlan:{
           heading: "PAYMENT PLAN HEADING",
           startingPrice: "290,000",
           localHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
           localPercentage:['10%','10%','10%','10%','10%','10%'],
           internationalHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
           internationalPercentage:['10%','10%','10%','10%','10%','10%']
       }
       ,
        amenities:{
         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
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
         label: 'Private Swimming Pool Apartments '
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
          heading: "LUXURY APARTMENTS WITH PRIVATE CLUBS AND POOLS",
          logo: Logo,
        },
        monthlyPayment: 
        {
          heading: "MONTHLY PAYMENTS",
          paragraph: "Your monthly payment information here.",
          label: "100,000",
        },
        aboutUs: 
        {
          paragraph: "Embark on a Mediterranean journey and experience the alluring charm of sun-kissed sands, calm waters, cobblestone streets and island living at DAMAC Lagoons – Dubai's most awaited water-inspired community. With a perfect blend of contemporary living and traditional Mediterranean charm, DAMAC Lagoons offers the beauty of clear lagoons, lush landscapes and serene, calming vibes.",
          image: damacAbout,
        },
        unitTypes: {
          cards: [
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
          ],
        },
        gallery:{
           images: [image1, image2, image1,image2]
        },
        paymentPlan:{
            heading: "PAYMENT PLAN HEADING",
            startingPrice: "290,000",
            localHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
            localPercentage:['10%','10%','10%','10%','10%','10%'],
            internationalHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
            internationalPercentage:['10%','10%','10%','10%','10%','10%']
        },
        amenities:{
         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
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
       ]
       }
    },
    {
     ProjectHeading: 'Olivia Residences',
     ProjectSubHeading: "By Karma Developers",
     ProjectImage: dummyImage,
        hero: {
          heading: "LUXURY APARTMENTS WITH PRIVATE CLUBS AND POOLS",
          logo: Logo,
        },
        monthlyPayment: 
        {
          heading: "MONTHLY PAYMENTS",
          paragraph: "Your monthly payment information here.",
          label: "100,000",
        },
        aboutUs: 
        {
          paragraph:"Discover luxurious living at Olivia Residences in Dubai Investment Park (DIP), a project by Karma Developers that features 1, 2 and 3 bedroom apartments. This exceptional residential project redefines the art of modern living, offering residents an unmatched experience of convenience lifestyle in the G+6 structure offers a modern and efficient layout. The development is strategically located in Dubai Investment Park, a thriving hub of growth and innovation in Dubai. Dubai Investment Park is known for its integrated community with essential amenities, making it an attractive destination for both residents and businesses.",
          image: aboutUs,
        },
        unitTypes: {
          cards: [
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
          ],
        },
        gallery:{
           images: [image1, image2, image1,image2]
        },
        paymentPlan:{
            heading: "PAYMENT PLAN HEADING",
            startingPrice: "290,000",
            localHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
            localPercentage:['10%','10%','10%','10%','10%','10%'],
            internationalHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
            internationalPercentage:['10%','10%','10%','10%','10%','10%']
        },
        amenities:{
         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
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
     ProjectHeading: 'Danube - Oceanz',
     ProjectSubHeading: "By Danube Properties",
     ProjectImage: oceanzImg,
        hero: {
          heading: "LUXURY APARTMENTS WITH PRIVATE CLUBS AND POOLS",
          logo: Logo,
        },
        monthlyPayment: 
        {
          heading: "MONTHLY PAYMENTS",
          paragraph: "Your monthly payment information here.",
          label: "100,000",
        },
        aboutUs: 
        {
          paragraph: "Inspired by the sea, Oceanz by Danube gracefully blends architectural sophistication with the enchanting allure of maritime charisma. Located in the heart of the thriving Maritime City community, Get ready to be mesmerized by sweeping ocean vistas and the opulent interiors and luxury furnishing by Tonino Lamborghini CASA.The strategic location of Dubai Maritime City offers great capital appreciation for investors and buyers, and it boasts a connected causeway to an extensive road network, granting swift access to major expressways for seamless commuting.",
          image: oceanzAbout,
        },
        unitTypes: {
          cards: [
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
            {
              title: "Card 2 Title + Description",
              price: "10,000",
            },
          ],
        },
        gallery:{
           images: [image1, image2, image1,image2]
        },
        paymentPlan:{
            heading: "PAYMENT PLAN HEADING",
            startingPrice: "290,000",
            localHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
            localPercentage:['10%','10%','10%','10%','10%','10%'],
            internationalHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
            internationalPercentage:['10%','10%','10%','10%','10%','10%']
        },
        amenities:{
         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
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
      ProjectImage: oceanzImg,
         hero: {
           heading: "LUXURY APARTMENTS WITH PRIVATE CLUBS AND POOLS",
           logo: Logo,
         },
         monthlyPayment: 
         {
           heading: "MONTHLY PAYMENTS",
           paragraph: "Your monthly payment information here.",
           label: "100,000",
         },
         aboutUs: 
         {
           paragraph: "VYB, a 21-storey residential building planned for Dubai's vibrant Business Bay district. Developed by Ginco Properties, this exceptional project aims to redefine urban living in one of the city's most sought-after locations. With sleek design and stylish interiors, each unit exudes modernity and welcomes an abundance of natural light. Residents will relish a host of world-class amenities, including a state-of-the-art gym, a swimming pool, and convenient dedicated parking spaces.",
           image: oceanzAbout,
         },
         unitTypes: {
           cards: [
             {
               title: "Card 2 Title + Description",
               price: "10,000",
             },
             {
               title: "Card 2 Title + Description",
               price: "10,000",
             },
             {
               title: "Card 2 Title + Description",
               price: "10,000",
             },
             {
               title: "Card 2 Title + Description",
               price: "10,000",
             },
           ],
         },
         gallery:{
            images: [image1, image2, image1,image2]
         },
         paymentPlan:{
             heading: "PAYMENT PLAN HEADING",
             startingPrice: "290,000",
             localHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
             localPercentage:['10%','10%','10%','10%','10%','10%'],
             internationalHeading: ["onBooking","onBooking","onBooking","onBooking","onBooking","onBooking"],
             internationalPercentage:['10%','10%','10%','10%','10%','10%']
         },
         amenities:{
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing el',
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