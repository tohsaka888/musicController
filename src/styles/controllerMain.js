import styled from "styled-components";

const ControllerOutside = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    width: 100%;
    height: 100%;
    background-color: darkgray;
    padding: 20px 5%;
`;

const ControllerSlider = styled.input`
    width: 70%;
    margin-left: 2%;
    margin-right: 2%;
`;

const MusicInfo = styled.div`
    width: 5%;
    overflow: hidden;
    margin-left: 2%;
`;

const MusicTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const MusicArtist = styled.div`
    font-size: 12px;
`;

export {
  ControllerOutside,
  ControllerSlider,
  MusicArtist,
  MusicInfo,
  MusicTitle,
};
