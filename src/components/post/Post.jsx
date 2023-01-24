import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({post}) {
  //const user = Users.filter(u=>u.id===1)
  //console.log(user[0].username)

  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = ()=>{
    setLike(isLiked ? like -1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        {/* postTop */}
        <div className="postTop">
          <div className="postTopLeft">
            <img src={ Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImage" />
            <span className="postUserName">{ Users.filter(u=>u.id===post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        {/* postCenter */}
        <div className="postCenter">
          <div className="postText">{post?.desc} </div>
          <img src={post.photo} alt="" className="postImage" />
        </div>
        {/* postBottom */}
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" onClick={likeHandler} className="likeIcon" />
            <img src="assets/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
            <span className="postLikeCounter">{like} People like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentsText">{post.comment} comments</div>
          </div>
        </div>
      </div>

    </div>
  )
}
