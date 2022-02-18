import { Language, NotificationsNone, Settings } from '@material-ui/icons'


import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
            
                <span className="logo">Simple Admin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                    
                </div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/fd69a733850498.56ba69ac2f221.png" alt="avatar" className="topAvater" />
            </div>
        </div>
    </div>
  )
}
