import React from 'react'
import VideoListaItem from './video_list_item';


const VideoList = (props)=>{

  const videoItems = props.videos.map((video)=>{

    return <VideoListaItem 
    onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList