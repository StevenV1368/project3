import React from 'react';
import './employees.css'

const Employee = (props) => {
  return (
    <>
    <div class="d-flex justify-content-center p-5">
      <div class="card border-2 border-danger rounded-3" style={{width: '30em'}}>
        <img src={props.data.photo} alt=''/>
        <div class="card-body bg-primary bg-gradient">
        <p class="fs-5 font1">
        Name: {props.data.name}<br/> 
        ID#: {props.data.id}<br/> 
        Department: {props.data.department}<br/> 
        Role: {props.data.role}<br/> 
        Started on: {props.data.startDate}<br/> 
        </p>
        <button class="btn btn-info " onClick={props.resetState}> Back To List</button>
        </div>
      </div>
    </div>  
    </>
  );
}

export default Employee
