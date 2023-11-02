import "./VideoProjectManager.css";
import mock from "./../../services/mock.json";
import VideoProjectList from "../VideoProjectList/VideoProjectList";

export default function VideoProjectManager() {
  return (
    <>
      <VideoProjectList list={mock.list} />
    </>
  );
}
