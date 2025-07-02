
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"
import theme from "../themes/theme";

export default function NotFound(){
  
  const navigate=useNavigate()
  console.log("themeCheck",theme.palette.secondary.main)

     return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 10 }}>
      <Typography variant="h1" fontWeight="bold" color="secondary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Page not found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={() => navigate("/")}
        
      >
        Go to Homepage
      </Button>
    </Container>
  );
}