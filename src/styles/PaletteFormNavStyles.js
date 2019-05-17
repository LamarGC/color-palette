import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
    [sizes.down("xs")]: {
      marginRight: "0.5rem"
    }
  },
  goBackButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem"
    }
  },
  saveButton: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem"
    }
  }
});

export default styles;
