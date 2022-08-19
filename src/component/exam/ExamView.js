import * as React from "react";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import ResponsiveAppBar from "../navbar/navbar";
import { ExamViewApi } from "./ExamViewApi";
import AllExams from "./ExamList";
import AddExam from "./AddExam";
export function ExamView() {

    const [exams, setExams] = useState([]);
    const [isAddExamDialogOpen, setAddExamDialogOpen] = useState(false);
    const [isUpdateExamDialogOpen,setUpdateExamDialogOpen]=useState();
  
    const examViewApi = new ExamViewApi();
  
    async function getExams() {
      const response = await examViewApi.getLessons();
      setExams(response.data);
    }
  
    useEffect(() => {
      getExams().then();
    }, []);
  
    async function addExam(formState) {
      const response = await examViewApi.addExam(formState);
      const messageResponse = response.data;
      if (messageResponse.responseType === "SUCCESS") {
        
        setAddExamDialogOpen(false);
      }
    }
    async function updateExam(formState) {
      const response = await examViewApi.updateExam(formState);
      const messageResponse = response.data;
      if (messageResponse.responseType === "SUCCESS") {
        
        setUpdateExamDialogOpen(false);
      }
    }
  
  
  
    return (
      <div>
                    <ResponsiveAppBar/>
                    <br/> <br/>
  
        <AllExams exams={exams}/>
  
        
      </div>
    )
  }
  
   