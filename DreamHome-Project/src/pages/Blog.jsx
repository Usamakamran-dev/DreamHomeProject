import dubaiImage from './../assets/Images/dubaiImage.jpg'

function Blog(){
    return(
        <div class="container">
         <div class="row">
          {/*Main Blog Data  */}
          <div class="col-8 shadow-sm mt-3 px-4 py-4 d-flex flex-column gap-4">
            <div className='d-flex flex-column align-items-start  gap-3'>
            <h1 className="fs-2 fw-bold font-color-primary m-0">Dubai ranked as the world’s 
            <span className="fs-2 fw-bold font-color-secondary"> fourth most active</span> luxury residential market</h1>
            <p className="font-color-light fw-semibold m-0">Published on 8 MARCH 2023</p>
            <div className='rounded m-0 p-0'><img src={dubaiImage} alt="dubai-Image" className='w-100 h-100 rounded img-fluid'/></div>
            </div>
            {/* Dummy Blog Data */}
                <p className='font-color-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a egestas orci, 
                    congue euismod sapien. Mauris cursus volutpat mauris porttitor feugiat. Pellentesque varius 
                    ut lorem in pharetra. Suspendisse ut nibh id ex eleifend posuere.  <br /><br /> Donec ac odio vitae erat 
                    vestibulum facilisis. Nullam eu dolor gravida ex venenatis tempor pellentesque non risus. Sed 
                    a mauris lectus. Curabitur viverra, arcu vitae tristique convallis, mi risus consectetur ante,
                    ultricies ornare magna orci eu lectus. Maecenas semper a diam quis fermentum. Donec egestas 
                    lectus in enim aliquet, in gravida est ornare. Suspendisse in leo nulla. Nunc pulvinar risus 
                    non ex feugiat fermentum. Nam nec <br /><br />consectetur odio, in mattis tortor.
                    Aenean euismod auctor nulla quis consectetur. Etiam aliquet aliquet sapien. Fusce sagittis 
                    lobortis risus, a pretium lorem consequat ut. Vivamus maximus euismod urna, non ullamcorper
                    diam volutpat ac. Curabitur at vehicula quam. Donec scelerisque semper pharetra. Pellentesque
                    commodo elementum lectus, a bibendum ante. Fusce non eros mauris. Phasellus diam lectus, varius
                    vitae aliquet non, sagittis vitae justo. Cras aliquet elementum porttitor. Phasellus sagittis
                    turpis ex, id elementum nibh finibus <br /><br />eget. Sed efficitur lobortis velit ac pulvinar. Nam 
                    nulla enim, ultricies vitae nunc sit amet, lacinia sodales diam. Aenean dapibus, enim non 
                    lobortis ornare, nisl massa malesuada elit, convallis ultricies velit nunc ut augue.Aenean 
                    pretium libero nulla, non suscipit turpis rutrum id. Vivamus id diam dui. Phasellus arcu 
                    dolor, porttitor vitae arcu quis, feugiat mattis dolor. Integer id sapien at leo eleifend
                    fringilla. Aliquam eu sollicitudin <br /><br />lacus. Vestibulum risus elit, auctor ut lacinia et, 
                    dictum vitae erat. Quisque feugiat ante tortor, ac sodales arcu vestibulum a. Pellentesque
                        suscipit molestie ipsum ut malesuada.</p>
            </div>
          {/* for ads */}
          <div class="col-3"></div>
         </div>
        </div>

    )
}

export default Blog;