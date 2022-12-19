import './App.css';
import Loading from './components/loading.js';
import Employees from './components/employees.js';
import Employee from './components/employee.js';
import Problem from './components/problem.js';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  //The JS stuff
  const [loading,setLoading] = useState(true);
  const [employeeData,setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [error, setError] = useState(false);

  const resetState = () =>{

    setEmployeeData([]);
    setSelectedEmployee(null);
    setLoading(true);
    setError(false);
    getEmployeeData();

  }

  console.log(employeeData);
  
  const getEmployeeData = (id=null) => {
    setLoading(true);

    let actualId = ''; //Making sure a number is passed in and is not 0
    if(!!id && parseInt(id,10) >0)
    {
      actualId = parseInt(id,10); //set actual ID = to parseInt
    } 


    axios.get(`https://api.matgargano.com/employees/${actualId}`).then(response =>{
      setEmployeeData(response.data);
    setLoading(false);

    }).catch((error) =>{
      setError(error.message || "No error given");
    })
  }

  useEffect( () => {
    getEmployeeData();
  }, []);

  useEffect(() => {

    if(!!selectedEmployee){
      getEmployeeData(selectedEmployee);
    }

  }, [selectedEmployee])



  //
  //
  // JSX 
  //
  //
  return (
    <div className="App " >
      
        {!!error && <Problem resetState= {resetState} message={error}/>} {/* if theres an Error display the error screen.*/}


{/* If not then display the menu as normal */}
       {!error && <>
        {!!loading && <div class='bg-dark'><Loading/></div>}
       
        {!loading && <div class="p-3 mb-2 bg-secondary text-dark">


        {!selectedEmployee && <Employees setSelectedEmployee={setSelectedEmployee} data={employeeData}/>} {/*cards of Employees */}
       
        {!!selectedEmployee && <Employee resetState={resetState} data={employeeData}/>}    {/*selected a single Employee*/} 
     
        </div>}

      </>}
    </div>
  );
}

export default App;
