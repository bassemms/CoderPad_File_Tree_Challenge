import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

type IFolderRowProps = {
  folder: string;
  children?: React.ReactNode;
};

export const FolderRow = ({ folder, children }: IFolderRowProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        px={1}
        sx={{
          cursor: "pointer",
          background: "inherit",
          "&:hover": { background: "#E6E6E6" },
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <Typography variant="body2">
          {expanded ? "📂" : "📁"} {folder}
        </Typography>
      </Box>
      {expanded && <Box pl={2}>{children}</Box>}
    </Box>
  );
};
