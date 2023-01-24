import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Social App</span>
      </div>

      <div className="topbarCenter">
        <div className="search">
          <Search className='searchIcon' />
          <input type="text" placeholder='Search for friend, post or video' className='searchInput' />
        </div>
      </div>


      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <div className="topbarIconBadge">2</div>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <div className="topbarIconBadge">1</div>
          </div>
          <img src="/assets/person/1.jpg" alt="" className="topbarImage" />
        </div>
      </div>

    </div>
  )
}
