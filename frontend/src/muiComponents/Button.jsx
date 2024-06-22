import Button from "@mui/material/Button";

export default function BasicButtons({ label }) {
  return (
    <Button sx={{ width: 300, backgroundColor: "#4470ad", paddingY: 1.25 }} variant="contained">
      {label}
    </Button>
  );
}
