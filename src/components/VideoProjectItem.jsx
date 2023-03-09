export default function VideoProjectItem({item}) {
  return (
    <>
      <li className="VideoProjectItem">
        <div className="VideoProjectItem--title-container">
          <div className="VideoProjectItem--title">
            <span>{item.name}</span> - <span>{item.type}</span>
          </div>
          <div className="VideoProjectItem--dates">
            <div>{item.creationDate}</div>
          </div>
        </div>
        <div className="VideoProjectItem--author">
          {item.author}
        </div>
        <div className="VideoProjectItem--description">
          {item.description}
        </div>
      </li>
    </>
  );
}
