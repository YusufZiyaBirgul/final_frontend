import * as React from "react";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import { AcademicianViewApi } from "../api/AcademicianViewApi";
import { AddAcademician } from "../addAcademician/AddAcademician";
import AllAcademician from "../AcademicianList";
import ResponsiveAppBar from "../../navbar/navbar";

export function AcademicianView() {

  const [academician, setacademician] = useState([]);
  const [isAddacademicianDialogOpen, setAddacademicianDialogOpen] = useState(false);
  const [isUpdateacademicianDialogOpen,setUpdateacademicianDialogOpen]=useState();

  const academicianViewApi = new AcademicianViewApi();

  async function getAcademician() {
    const response = await academicianViewApi.getAcademician();
    setacademician(response.data);
  }

  useEffect(() => {
    getAcademician().then();
  }, []);

  async function addAcademician(formState) {
    const response = await academicianViewApi.addAcademician(formState);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {
      
        setAddacademicianDialogOpen(false);
    }
  }
//   async function updateAcademician(formState) {
//     const response = await academicianViewApi.updateAcademician(formState);
//     const messageResponse = response.data;
//     if (messageResponse.responseType === "SUCCESS") {
      
//         setUpdateacademicianDialogOpen(false);
//     }
//   }



  return (
    <div>
<ResponsiveAppBar/>
     <br/><br/>
            <Button onClick={() => setAddacademicianDialogOpen(true)} variant="contained">Add Academician</Button>

      <AllAcademician academician={academician}/>

      <AddAcademician isOpen={isAddacademicianDialogOpen}
                  close={() => isAddacademicianDialogOpen(false)}
                  addAcademician={addAcademician}
      />
    </div>
  )
}