import {
    createTheme
} from "@mui/material"
import {
    deepOrange,
    pink
} from "@mui/material/colors"

const theme = createTheme({

    palette: {
        primary: {
            main: deepOrange[500],
        },
        secondary: {
            main: '#D10024',
        },
        // secondary doesnt work

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: 'none',
                    width: "10px",
                    fontWeight: 'bold',
                    boxShadow: 'none',
                }
            }
        }
    }
});
export default theme