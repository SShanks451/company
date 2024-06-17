import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ label }) {
  return (
    <Stack spacing={2} direction="row">
      <Button sx={{ width: 300, backgroundColor: "#4470ad", paddingY: 1.25 }} variant="contained">
        {label}
      </Button>
    </Stack>
  );
}
