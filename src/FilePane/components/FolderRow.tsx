import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { FileIcon } from "./FileIcon";
import { useWorkspaceContext } from "../../Workspace/WorkspaceContext";

interface IFolderRowProps {
  folder: string;
}

export const FolderRow = ({ folder }) => {
  const { activeFile, activateFile } = useWorkspaceContext();

  return (
    <Box
      display="flex"
      height="1.5rem"
      flexDirection="row"
      alignItems="center"
      key={folder}
      px={1}
      sx={{
        cursor: "default",
        background: activeFile === folder ? "#DADADA" : "inherit",
        "&:hover": {
          background: "#E6E6E6",
        },
      }}
    >
      <Box width="1.5rem">
        <FileIcon fileName={folder} />
      </Box>
      <Typography variant="body2">{folder}</Typography>
    </Box>
  );
};
