import { useState, useEffect } from "react";
import './App.css'

export default function App() {
  const [resBuildings, setResultBuil] = useState([]);
  const [resOrganizations, setResultOrg] = useState([]);
  const [resRooms, setResultRooms] = useState([]);
  useEffect(() => {

    //fetching Buildings
    const fetchBuildings = async () => {
      const data = await fetch("http://localhost:8000/api/buildings", {
        method: "GET"
      }).then(Response => Response.json())
      setResultBuil(data);
    };

    //fetching Organizations  
    const fetchOrganizations = async () => {
      const data = await fetch("http://localhost:8000/api/organizations", {
        method: "GET"
      }).then(Response => Response.json())
      const jsonData = await data;
      setResultOrg(jsonData);
    };

    //fetching rooms  
    const fetchRooms = async () => {
      const data = await fetch("http://localhost:8000/api/rooms", {
        method: "GET"
      }).then(Response => Response.json())
      const jsonData = await data;
      setResultRooms(jsonData);
    };

    // call the fetch functions
    fetchBuildings();
    fetchOrganizations();
    fetchRooms();

  }, []);

  // Use our data and print it on a card.
  return (
    <div className="App">
      <div className="card-container">
        {resBuildings.slice(0, 3).map((Buildingvalue: any) => {
          return (
            <div className="card">
              <div className="card-title">Building Name: {Buildingvalue.name}</div>
              <div className="card-body">
                <div className="id">ID: {Buildingvalue.id}</div>
                <div className="zc">Zip Code: {Buildingvalue.zipcode}</div>

              </div>
            </div>
          );
        })}

        {resOrganizations.slice(0, 2).map((Organisationsvalue: any) => {
          return (
            <div className="card">
              <div className="card-title">Organization Name: {Organisationsvalue.name}</div>
              <div className="card-body">
                <div className="id">ID: {Organisationsvalue.id}</div>
              </div>
            </div>
          );
        })}

        {resRooms.slice(0, 4).map((Roomsvalue: any) => {
          return (
            <div className="card">
              <div className="card-title">Room Name: {Roomsvalue.name}</div>
              <div className="card-body">
                <div className="id">ID: {Roomsvalue.id}</div>
                <div className="p_presentes">Personnes presentes: {Roomsvalue.p_presentes}</div>
                <div className="building_id">Building_ID: {Roomsvalue.building_id}</div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
