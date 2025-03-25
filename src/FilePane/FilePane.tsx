import React from "react";
import { Box, Typography } from "@mui/material";
import { FileRow } from "./components/FileRow";
import { useWorkspaceContext } from "../Workspace/WorkspaceContext";
import { FolderRow } from "./components/FolderRow";

type Folder = {
  parent: string;
  childrens: Folder[] | undefined;
};

export const FilePane = () => {
  const { files } = useWorkspaceContext();

  let computedPath = [];

  let filesArray = [];

  files.forEach((file) => {
    const filePaths = file.path.split("/");

    filesArray.push(filePaths);
  });

  console.log(filesArray);

  const compute = (filesArray) => {};

  // filesArray.forEach(fileArray => {
  //   for(let i=0; i < fileArray.length; i++){
  //     let folder: Folder = {
  //       parent: fileArray[i],
  //       childrens: [],
  //     }

  //     if(!computedPath.includes(folder)){
  //       computedPath.push(folder);
  //     }
  //     else{
  //       computedPath.find(folder)
  //     }
  //   }
  // });

  console.log(computedPath);

  return (
    <Box>
      <Box p={1}>
        <Typography variant="h6">Files</Typography>
      </Box>
      <Box>
        {files.map((file) => (
          <FileRow key={file.path} file={file} />
        ))}
      </Box>
    </Box>
  );
};
