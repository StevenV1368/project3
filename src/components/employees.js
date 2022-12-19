import React from 'react';
import './employees.css'


const Employees = (props) => {
  
  const updateEmployee = (employeeId) =>{
    props.setSelectedEmployee(employeeId);
  }
  
  return (
    <div>{

        props.data.map(employee =>{
            return(
            <>

            <div class="container">
              <div class="row row-cols-3">

                <div class="d-flex justify-content-center ">
                  <div class="card" style={{width: '18rem'}} >
                    <div class="card-body bg-gradient bg-dark">
                      <h5 class="card-title text-white"> Name: {employee.name} </h5>
                      <h6 class="card-subtitle mb-2 text-white"> Department: {employee.department}</h6>
                      <p class="card-text text-white">ID#: {employee.id}</p>
                      <button  key={employee.id} onClick={() => {updateEmployee(employee.id)}} type="button" class="btn btn-primary">Visit Page</button>
                    </div> 
                  </div>
                </div>  


              </div>
            </div>
            </>
            );
            


        })
    
        }</div>
  );
}

export default Employees
