import ProjectTable from './../components/ProjectTable';

function AdminProject(){
    return (
        <div style={{width: '80%', marginLeft:'auto'}}>
          <div className='d-flex flex-column gap-3 p-5'>
          <div className="d-flex flex-column gap-2">
            <h1 className=" text-center font-color-primary fw-semibold fs-3 m-0">Project <span className="font-color-secondary"> Table</span></h1>
            <p className="font-color-light fw-regular px-2 px-md-5 text-center fs-mobile">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida vitae velit ut fringilla.
                Cras non leo luctus, pharetra turpis nec, suscipit sem
            </p>
          </div>
          <ProjectTable></ProjectTable>
          </div>
        </div>
    )
}

export default AdminProject;