import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { AssistantViewApi } from "../api/AssistantViewApi";
import AllAssistant from "../AssistantList";
import { AddAssistant } from "../crud/AddAsisstant";
import ResponsiveAppBar from "../../navbar/navbar";

export function AssistantView() {

  const [assistant, setAssistant] = useState([]);
  const [isAddAssistantDialogOpen, setAddAssistantDialogOpen] = useState(false);
  const [isUpdateAssistantDialogOpen, setUpdateAssistantDialogOpen] = useState();

  const assistantViewApi = new AssistantViewApi();

  async function getAssistant() {
    const response = await assistantViewApi.getAssistant();
    setAssistant(response.data);
  }

  useEffect(() => {
    getAssistant().then();
  }, []);

  async function addAssistant(formState) {
    const response = await assistantViewApi.addAssistant(formState);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {

      setAddAssistantDialogOpen(false);
    }
  }
  //   async function updateAssistant(formState) {
  //     const response = await AssistantViewApi.updateAssistant(formState);
  //     const messageResponse = response.data;
  //     if (messageResponse.responseType === "SUCCESS") {

  //         setUpdateAssistantDialogOpen(false);
  //     }
  //   }



  return (
    <div>
     <ResponsiveAppBar/>
     <br/><br/>

      <Button onClick={() => setAddAssistantDialogOpen(true)} variant="contained">Add Assistant</Button>

      <AllAssistant assistant={assistant} />

      <AddAssistant isOpen={isAddAssistantDialogOpen}
                    close={() => isAddAssistantDialogOpen(false)}
                    addAssistant={addAssistant}
      />
    </div>
  )
}