import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { FileIcon } from "./FileIcon";
import { useWorkspaceContext } from "../../Workspace/WorkspaceContext";

interface IFileRowProps {
  file: File;
}

export const FileRow = ({ file }) => {
  const { activeFile, activateFile } = useWorkspaceContext();

  let fileName = file.path.split("/");
  fileName = fileName[fileName.length - 1];

  return (
    <Box
      display="flex"
      height="1.5rem"
      flexDirection="row"
      alignItems="center"
      key={file.path}
      px={1}
      sx={{
        cursor: "default",
        background: activeFile === file ? "#DADADA" : "inherit",
        "&:hover": {
          background: "#E6E6E6",
        },
      }}
      onClick={() => activateFile(file.path)}
    >
      <Box width="1.5rem">
        <FileIcon fileName={file.path} />
      </Box>
      <Typography variant="body2">{fileName}</Typography>
    </Box>
  );
};
