import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, FormControlLabel, IconButton, Typography } from "@mui/material";
import meta from "../../package.json";

/** Component Footer Page */
export const Footer = () => (
  <Box
    sx={{
      flexGrow: 1,
      background: "#1f1f1f",
      minHeight: 200,
      minWidth: 350,
      color: "white",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      py: 4,
    }}
  >
    <Typography fontSize={16}>
      Municipalidad de San Martín de los Andes
    </Typography>

    <Typography fontSize={12}>General Roca y Juan Manuel de Rosas</Typography>

    <Typography fontSize={12}> CP Q8370, Neuquén</Typography>

    <Typography fontSize={12}> 0800-345-1975</Typography>

    <Typography fontSize={12} mt={1} mx={2}>
      Central telefónica: (02972) 427315 - 427316 - 428795 - 428796 - 428797 -
      411997
    </Typography>

    <Box display="flex" justifyContent="center" flexWrap="wrap">
      <Typography pt={1.4} pr={2} fontSize={12}>
        Rentas internos: 223 / 224 / 225
      </Typography>
      <FormControlLabel
        control={
          <a
            target="_top"
            rel="noopener noreferrer"
            href="mailto:consultas.rentas@smandes.gob.ar"
          >
            <IconButton color="primary">
              <MailOutlineIcon />
            </IconButton>
          </a>
        }
        label={"consultas.rentas@smandes.gob.ar"}
        labelPlacement="end"
        sx={{ color: "#1976d2" }}
      />
    </Box>

    <Typography fontSize={12} mt={2}>
      versión {meta.version}
    </Typography>
  </Box>
);
