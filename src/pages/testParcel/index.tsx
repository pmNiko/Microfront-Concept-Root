import { Button, Todos } from "../../Remotes";
import { MunismaCard } from "../../components";
import Title from "../../components/Title";
import { Box } from "@mui/material";

export default () => {
  return (
    <MunismaCard title="Parcel remoto">
      <Box textAlign="center">
        <Title />

        <Todos />
      </Box>
      <Box textAlign="center" mx="auto">
        <Button />
      </Box>
    </MunismaCard>
  );
};
