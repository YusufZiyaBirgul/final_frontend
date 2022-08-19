import axios from "axios";

export class AcademicianViewApi {

  getAcademician() {
    return axios.get("/academicians");
  }
  
  addAcademician(formState) {
    return axios.post("/academicians", formState);
  }
 
 updateAcademician(id,newData){
    return axios.put("/academicians/"+id,newData);
  }

 deleteAcademician(id){
    return axios.delete("/academicians/"+id);
  }

}