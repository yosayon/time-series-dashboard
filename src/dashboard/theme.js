import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  "palette":{
    "common":{
      "black":"rgba(249, 231, 248, 1)",
      "white":"rgba(18, 216, 250, 1)"
    },
    "background":{
        "paper":"#fff",
        "default":"rgba(241, 239, 242, 1)"
    },
    "primary":{
        "light":"#7986cb",
        "main":"rgba(131, 174, 218, 1)",
        "dark":"#303f9f",
        "contrastText":"rgba(255, 255, 255, 1)"
    },
    "secondary":{
        "light":"rgba(247, 189, 208, 1)",
        "main":"rgba(247, 217, 245, 1)",
        "dark":"rgba(233, 92, 155, 1)",
        "contrastText":"rgba(255, 255, 255, 1)"
    },
    "error":{
      "light":"#e57373",
      "main":"#f44336",
      "dark":"#d32f2f",
      "contrastText":"#fff"
    },
    "text":{
      "primary":"rgba(29, 67, 114, 1)",
      "secondary":"rgba(0, 0, 0, 0.54)",
      "disabled":"rgba(0, 0, 0, 0.38)",
      "hint":"rgba(0, 0, 0, 1)"
    }
   }
 })

 export default theme;
