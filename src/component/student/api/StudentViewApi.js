import axios from "axios";
export class StudentViewApi {

  getStudents() {
    return axios.get("/students");
  }

  getStudentById(id) {
    return axios.get(`/students/${id}`);
  }
  
  addStudent(formState) {
    return axios.post("/students", formState);
  }
 
  updateStudent(id,newData){
    return axios.put("/students/"+id,newData);
  }

  deleteStudent(id){
    return axios.delete("/students/"+id);
  }

}