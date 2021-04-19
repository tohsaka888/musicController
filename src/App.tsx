import React from "react";
import {
  ControllerOutside,
  ControllerSlider,
  MusicInfo,
  MusicTitle,
  MusicArtist,
} from "./styles/controllerMain";
import "./App.css";
import { Avatar, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

function App() {
  return (
    <ControllerOutside>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        shape={"square"}
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQuwBIYnoJ-kRhuGoFXtg4eOOeOFTLvxCzQ&usqp=CAU"
        }
      />
      <MusicInfo>
        <MusicTitle>MusicTitle</MusicTitle>
        <MusicArtist>MuiscArtist</MusicArtist>
      </MusicInfo>
      <ControllerSlider type={"range"} />
      <Button icon={<PlayCircleOutlined />} size={"large"} shape={"circle"} type={"primary"} />
    </ControllerOutside>
  );
}

export default App;
