import dummyImage from './../assets/Images/dummyImage.jpg';
import Logo from './../assets/Icons/Realtor9.svg';
import aboutUs from './../assets/Images/Project Image.jpg';
import image1 from './../assets/Images/Studio_6.jpg';
import image2 from './../assets/Images/Studio_7.jpg';
import mail from "./../assets/Icons/enquire.svg";
import damacImg from "./../assets/Projects/damac/damac.jpg";
import damacAbout from "./../assets/Projects/damac/damacAbout.jpg";
import damacHero from "./../assets/Projects/damac/damacHero.jpg";
import samanaImg from "./../assets/Projects/samana/samana.jpg";
import samanaAbout from "./../assets/Projects/samana/samanaAbout.jpg";
import samanaHero from "./../assets/Projects/samana/samanaHero.jpg";
import elitzImg from "./../assets/Projects/elitz/elitz.png";
import elitzAbout from "./../assets/Projects/elitz/elitzAbout.png";
import elitzHero from "./../assets/Projects/elitz/elitzHero.png";
import oceanzImg from "./../assets/Projects/oceanz/oceanzImg.png";
import oceanzAbout from "./../assets/Projects/oceanz/oceanzAbout.png";
import oceanzHero from "./../assets/Projects/oceanz/oceanzHero.png";
import fairmontImg from "./../assets/Projects/fairmont/fairmontImg.png";
import fairmontAbout from "./../assets/Projects/fairmont/fairmontAbout.png";
import fairmontHero from "./../assets/Projects/fairmont/fairmontHero.png";


const projectData=[
    {
    ProjectHeading: 'SAMANA - Manhattan',
    ProjectBg: samanaHero,
    ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
    ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
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
         paragraph: " SAMANA Manhattan - an exceptional residential development that set a new standard for contemporary living. This innovative project by SAMANA Developers, located in Jumeirah Village Circle (JVC), is designed to provide residents with an unparalleled lifestyle ; blended with luxurious amenities, stunning designs, and a prime location.  Make SAMANA Manhattan your new home andunlock the gateway to a truly extraordinary lifestyle. Immerse yourself in the epitome of modern living and indulge in the unrivalled amenities, prime location, and exquisite design that this exceptional project has to offer.",
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
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         } ,
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
           },
           { image: mail,
             label: 'Luxurious & Largest Pool Deck'
             }
       ]
       }
   },
   {
     ProjectHeading: 'DAMAC - Lagoons',
     ProjectBg: damacHero,
     ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
     ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
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
          paragraph: " SAMANA Manhattan - an exceptional residential development that set a new standard for contemporary living. This innovative project by SAMANA Developers, located in Jumeirah Village Circle (JVC), is designed to provide residents with an unparalleled lifestyle ; blended with luxurious amenities, stunning designs, and a prime location.  Make SAMANA Manhattan your new home andunlock the gateway to a truly extraordinary lifestyle. Immerse yourself in the epitome of modern living and indulge in the unrivalled amenities, prime location, and exquisite design that this exceptional project has to offer.",
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
           label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         } ,
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
           },
           { image: mail,
             label: 'Luxurious & Largest Pool Deck'
             }
       ]
       }
    },
    {
     ProjectHeading: 'Olivia Residences',
     ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
     ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
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
          paragraph: " SAMANA Manhattan - an exceptional residential development that set a new standard for contemporary living. This innovative project by SAMANA Developers, located in Jumeirah Village Circle (JVC), is designed to provide residents with an unparalleled lifestyle ; blended with luxurious amenities, stunning designs, and a prime location.  Make SAMANA Manhattan your new home andunlock the gateway to a truly extraordinary lifestyle. Immerse yourself in the epitome of modern living and indulge in the unrivalled amenities, prime location, and exquisite design that this exceptional project has to offer.",
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
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         } ,
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
           },
           { image: mail,
             label: 'Luxurious & Largest Pool Deck'
             }
       ]
       }
    },
    {
     ProjectHeading: 'Danube - Elitz 3',
     ProjectBg: elitzHero,
     ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
     ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
     ProjectImage: elitzImg,
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
          paragraph: " SAMANA Manhattan - an exceptional residential development that set a new standard for contemporary living. This innovative project by SAMANA Developers, located in Jumeirah Village Circle (JVC), is designed to provide residents with an unparalleled lifestyle ; blended with luxurious amenities, stunning designs, and a prime location.  Make SAMANA Manhattan your new home andunlock the gateway to a truly extraordinary lifestyle. Immerse yourself in the epitome of modern living and indulge in the unrivalled amenities, prime location, and exquisite design that this exceptional project has to offer.",
          image: elitzAbout,
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
           label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         } ,
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
           },
           { image: mail,
             label: 'Luxurious & Largest Pool Deck'
             }
       ]
       }
    },
    {
     ProjectHeading: 'Danube - Oceanz',
     ProjectBg: oceanzHero,
     ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
     ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
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
          paragraph: " SAMANA Manhattan - an exceptional residential development that set a new standard for contemporary living. This innovative project by SAMANA Developers, located in Jumeirah Village Circle (JVC), is designed to provide residents with an unparalleled lifestyle ; blended with luxurious amenities, stunning designs, and a prime location.  Make SAMANA Manhattan your new home andunlock the gateway to a truly extraordinary lifestyle. Immerse yourself in the epitome of modern living and indulge in the unrivalled amenities, prime location, and exquisite design that this exceptional project has to offer.",
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
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         } ,
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
           },
           { image: mail,
             label: 'Luxurious & Largest Pool Deck'
             }
       ]
       }
    },
    {
     ProjectHeading: 'Fairmont',
     ProjectBg: fairmontHero,
     ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
     ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
     ProjectImage: fairmontImg,
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
          paragraph: " SAMANA Manhattan - an exceptional residential development that set a new standard for contemporary living. This innovative project by SAMANA Developers, located in Jumeirah Village Circle (JVC), is designed to provide residents with an unparalleled lifestyle ; blended with luxurious amenities, stunning designs, and a prime location.  Make SAMANA Manhattan your new home andunlock the gateway to a truly extraordinary lifestyle. Immerse yourself in the epitome of modern living and indulge in the unrivalled amenities, prime location, and exquisite design that this exceptional project has to offer.",
          image: fairmontAbout,
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
           label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
          { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         } ,
         { image: mail,
         label: 'Luxurious & Largest Pool Deck'
         },
         { image: mail,
           label: 'Luxurious & Largest Pool Deck'
           },
           { image: mail,
             label: 'Luxurious & Largest Pool Deck'
             }
       ]
       }
    }
   ]

   export default projectData;