import { useEffect , useContext } from "react";
import ResidentialList from "../components/ResidentialList";
import { ListingCardContext } from "../context/ListingCardProvider";
import { CurrentProjectBlogContext } from "../context/CurrentProjectBlog";
import { useNavigate } from "react-router-dom";

function ListingPage(){
    const navigate=useNavigate();
    const { ListingCardDetails }=useContext(ListingCardContext);
    const {updateCurrentListingData}=useContext(CurrentProjectBlogContext);
    useEffect(() => { window.scrollTo(0, 0);}, []);

    const currentListingCard = (currentData,id) => {
      updateCurrentListingData(currentData);
      navigate(`/listing/${id.split(' ').join('-')}`);
    }

    return( 
        <div style={{margin: '4rem auto'}}
        className="my-5 p-5 text-center container d-flex flex-column align-items-center gap-2">
            <h1 className="fs-1 fw-bold font-color-primary">LISTING</h1>
            <p className="font-color-light fw-regular px-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisi quis urna imperdiet vehicula. 
            Ut interdum dignissim dui. Suspendisse nunc nunc, ornare in dignissim in, efficitur vitae nisl
            </p>
           {ListingCardDetails?.map((detail,index) => (
             <ResidentialList 
              onClick={()=> currentListingCard(detail,detail.name)}
              startingPrice='10' residentialUnit={detail.listingUnit} 
              residentialSubHeading={detail.listingSubHeading}
              location={detail.location}>
             </ResidentialList>
           ))}
        </div>
        )}
        export default ListingPage;