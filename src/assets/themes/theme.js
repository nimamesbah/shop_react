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
})
export default theme