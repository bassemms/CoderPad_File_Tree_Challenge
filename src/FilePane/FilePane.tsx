import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { FileRow } from "./components/FileRow";
import { useWorkspaceContext } from "../Workspace/WorkspaceContext";
import { FolderRow } from "./components/FolderRow";

const buildFileTree = (files) => {
  let root = {};

  files.forEach(({ path }) => {
    const parts = path.split("/");
    let currentLevel = root;

    parts.forEach((part, index) => {
      if (!currentLevel[part]) {
        currentLevel[part] = index === parts.length - 1 ? null : {};
      }
      currentLevel = currentLevel[part];
    });
  });

  console.log(root);
  return root;
};

const renderTree = (tree, parentPath = "") => {
  return Object.keys(tree).map((key) => {
    const fullPath = parentPath ? `${parentPath}/${key}` : key;
    const isFolder = tree[key] !== null;

    return (
      <Box key={fullPath}>
        {isFolder ? (
          <FolderRow folder={key}>{renderTree(tree[key], fullPath)}</FolderRow>
        ) : (
          <FileRow file={{ path: fullPath }} />
        )}
      </Box>
    );
  });
};

export const FilePane = () => {
  const { files } = useWorkspaceContext();
  const fileTree = buildFileTree(files);

  const maxFileNameLength = useMemo(() => {
    return Math.max(...files.map(({ path }) => path.length), 10);
  }, [files]);

  const minWidth = maxFileNameLength * 8 + 40;

  return (
    <Box sx={{ minWidth: minWidth, overflow: "hidden", userSelect: "none" }}>
      <Box p={1}>
        <Typography variant="h6">Files</Typography>
      </Box>
      <Box>{renderTree(fileTree)}</Box>
    </Box>
  );
};
