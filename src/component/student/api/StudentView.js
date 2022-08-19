import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { StudentViewApi } from "./StudentViewApi";
import ListStudent from "./StudentList";
import StudentList from "./StudentList";
import { AddStudent } from "../addstudent/AddStudent";
import ResponsiveAppBar from "../../navbar/navbar";

export function StudentView() {

  const [students, setStudents] = useState([]);
  const [isAddStudentDialogOpen, setAddStudentDialogOpen] = useState(false);
  const [isUpdateStudentDialogOpen, setUpdateStudentDialogOpen] = useState();

  const studentViewApi = new StudentViewApi();

  async function getStudents() {
    const response = await studentViewApi.getStudents();
    setStudents(response.data);
  }

  useEffect(() => {
    getStudents();
  }, []);

  async function addStudent(formState) {
    const response = await studentViewApi.addStudent(formState);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {

      setAddStudentDialogOpen(false);
      getStudents();
    }
  }
  async function updateStudent(formState) {
    const response = await studentViewApi.updateStudent(formState);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {

      setUpdateStudentDialogOpen(false);
    }
  }



  return (
    <div>
      <ResponsiveAppBar />
      <br /> <br />

      <Button onClick={() => setAddStudentDialogOpen(true)} variant="contained">Add Student</Button>

      <StudentList students={students} getStudents={getStudents}/>

      <AddStudent isOpen={isAddStudentDialogOpen}
        close={() => setAddStudentDialogOpen(false)}
        addStudent={addStudent}
      />
    </div>
  )
}

