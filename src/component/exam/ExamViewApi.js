import axios from "axios";
export class ExamViewApi {

  getLessons() {
    return axios.get("/lessons");
  }
  getLessonById(id) {
    return axios.get(`/lessons/${id}`);
  }

  getAssistant(){
    return axios.get("/assistant")
  }
  getAssistantById(id){
    return axios.get(`/assistant/${id}`)
  }
  addExam(formState) {
    return axios.post("/exams", formState);
  }
  addHomework(formState) {
    return axios.post("/homeworks", formState);
  }

  updateExam(id,newData){
    return axios.put("/exams/"+id,newData);
  }

  deleteExam(id){
    return axios.delete("/exams/"+id);
  }

}