import { Button, Container, Typography } from "@mui/material";
import NotFound from "../assets/components/NotFound";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@material-tailwind/react";
import theme from "../assets/themes/theme";

export default function NotFoundPage(){

  const navigate=useNavigate()
  console.log("themeCheck",theme.palette.primary.main)


     return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h1" fontWeight="bold" color="primary" gutterBottom>
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
        color="primary"
        onClick={() => navigate('/')}
        sx={{ px: 4, borderRadius: 3 }}
      >
        Go to Homepage
      </Button>
    </Container>
  );
}