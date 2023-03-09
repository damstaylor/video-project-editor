import VideoProjectItem from "./VideoProjectItem";

export default function VideoProjectList({list}) {
  return (
    <>
      <div className="VideoProjectList">
        <span>All video projects</span>
        {list.length === 0 ?
          <span>No project found :(</span> :
          <ul>
            {list.map((item, idx) => (
              <VideoProjectItem key={idx} item={item}/>
            ))}
          </ul>
        }
      </div>
    </>
  );
}
