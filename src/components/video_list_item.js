import React from 'react'

const VideoListaItem = ({video, onVideoSelect}) => {

  const imagenUrl= video.snippet.thumbnails.default.url
  return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left"> 
          <img className="media-object" src={imagenUrl} />
        </div>
        <div className = "media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div> 
    </li>
)

}
export default VideoListaItem