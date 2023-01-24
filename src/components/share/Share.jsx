import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
import './share.css';
export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                {/* shareTop */}
                <div className="shareTop">
                    <img className='shareProfileImage' src='/assets/person/1.jpg' />
                    <input type="text"
                        placeholder='What is in your mind salem?'
                        className="shareInput" />
                </div>

                <hr className='shareHr' />

                {/* shareBottom */}
                <div className="shareBottom">
                    <div className="shareOptions">
                        <PermMedia htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText" id='media'>Photo or Video</span>
                    </div>
                    <div className="shareOptions">
                        <Label htmlColor='blue' className='shareIcon' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOptions">
                        <Room htmlColor='green' className='shareIcon' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOptions">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                    <button className="shareButton">Share</button>
                </div>

            </div>
        </div>
    )
}
