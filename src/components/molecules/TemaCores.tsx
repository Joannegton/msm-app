import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { themes } from "../../theme/theme";

type TemaCoresProps = {
  onThemeChange: (theme: typeof themes[keyof typeof themes]) => void;
  initialTheme: keyof typeof themes;
};

export const TemaCores = ({ onThemeChange, initialTheme }: TemaCoresProps) => {
  const [selectedTheme, setSelectedTheme] = useState(initialTheme);

  useEffect(() => {
    setSelectedTheme(initialTheme);
  }, [initialTheme]);

  const handleThemeChange = (themeName: keyof typeof themes) => {
    setSelectedTheme(themeName);
    onThemeChange(themes[themeName]);
  };

  return (
    <Box className="space-y-2">
      <Typography variant="h6">Tema de cores</Typography>
      <Box className="grid grid-cols-5 gap-2">
        <Box
          className={`h-8 w-8 rounded-full bg-blue-500 cursor-pointer ${selectedTheme === "principal" ? "ring-2 ring-offset-2 ring-blue-500" : ""}`}
          onClick={() => handleThemeChange("principal")}
        ></Box>
        <Box
          className={`h-8 w-8 rounded-full bg-purple-500 cursor-pointer ${selectedTheme === "roxo" ? "ring-2 ring-offset-2 ring-purple-500" : ""}`}
          onClick={() => handleThemeChange("roxo")}
        ></Box>
        <Box
          className={`h-8 w-8 rounded-full bg-green-500 cursor-pointer ${selectedTheme === "verde" ? "ring-2 ring-offset-2 ring-green-500" : ""}`}
          onClick={() => handleThemeChange("verde")}
        ></Box>
        <Box
          className={`h-8 w-8 rounded-full bg-rose-500 cursor-pointer ${selectedTheme === "rose" ? "ring-2 ring-offset-2 ring-rose-500" : ""}`}
          onClick={() => handleThemeChange("rose")}
        ></Box>
      </Box>
    </Box>
  );
};