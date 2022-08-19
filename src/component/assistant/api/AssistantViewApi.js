import axios from "axios";

export class AssistantViewApi {

  getAssistant() {
    return axios.get("/assistant");
  }
  
  addAssistant(formState) {
    return axios.post("/assistant", formState);
  }
 
 updateAssistant(id,newData){
    return axios.put("/assistant/"+id,newData);
  }

 deleteAssistant(id){
    return axios.delete("/assistant/"+id);
  }

}