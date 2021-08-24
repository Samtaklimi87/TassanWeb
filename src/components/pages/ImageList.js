import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import image from "../../images/lam3.jpg";
import image1 from "../../images/lam4.jpg";
import { ButtonR } from "../ButtonElements";
import Typography from "@material-ui/core/Typography";

// import itemData from "./itemData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "80%",
    height: 550,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const itemData = [
  {
    dark: false,
    primary: false,
    dark2: true,
    goto: "/breakfast",
    img: image,
    title: "Berkfast",
    author: "Sam",
    buttonLabel: "watch now!",
  },
  {
    dark: false,
    primary: false,
    dark2: true,
    goto: "/laminat",
    img: image1,
    title: "dinner",
    author: "saeed",
    buttonLabel: "watch now!",
  },
];

export default function TitlebarImageList() {
  const classes = useStyles();
  const clickme = () => {
    console.log("click");
  };

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton
                  onClick={clickme}
                  aria-label={`info about ${item.title}`}
                  className={classes.icon}
                >
                  <ButtonR
                    to={item.goto}
                    smooth={true}
                    duartion={500}
                    spy={true}
                    primary={item.primary ? 1 : 0}
                    dark={item.dark ? 1 : 0}
                    dark2={item.dark2 ? 1 : 0}
                  >
                    <Typography variant="button" display="block" gutterBottom>
                      {item.buttonLabel}
                    </Typography>
                  </ButtonR>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
