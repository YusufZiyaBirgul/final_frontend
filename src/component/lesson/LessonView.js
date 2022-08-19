import * as React from "react";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import ResponsiveAppBar from "../navbar/navbar";
import{AddLesson} from './AddLesson';
import LessonList from './LessonList';
import { LessonViewApi } from "./LessonViewApi";

export function LessonView() {

  const [lessons, setLessons] = useState([]);
  const [isAddLessonDialogOpen, setAddLessonDialogOpen] = useState(false);
  const [isUpdateLessonDialogOpen,setUpdateLessonDialogOpen]=useState();

  const lessonViewApi = new LessonViewApi();

  async function getLessons() {
    const response = await lessonViewApi.getLesson();
    setLessons(response.data);
  }

  useEffect(() => {
    getLessons().then();
  }, []);

  async function addLesson(formState) {
    const response = await lessonViewApi.addLesson(formState);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {
      
      setAddLessonDialogOpen(false);
    }
  }
  async function updateLesson(formState) {
    const response = await lessonViewApi.updateLesson(formState);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {
      
      setUpdateLessonDialogOpen(false);
    }
  }



  return (
    <div>
                  <ResponsiveAppBar/>
                  <br/> <br/>

            <Button onClick={() => setAddLessonDialogOpen(true)} variant="contained">Add Lesson</Button>

      <LessonList lessons={lessons}/>

      <AddLesson isOpen={isAddLessonDialogOpen}
                  close={() => setAddLessonDialogOpen(false)}
                  addLesson={addLesson}
      />
    </div>
  )
}

 