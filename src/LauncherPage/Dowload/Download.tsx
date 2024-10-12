
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import './Download.scss'

const Download = () => {
    return (
        <>
        <div className="wrapper_setings">
         <div className="settings_block">
        <MdOutlineSettings fill="#fcaf17"size={25} className="settings_icon"/>
        <p className="setings">Сам встановить необхідні файли та все налаштує</p>
        </div>

        <div className="Update_block">
        <MdOutlineUpdate fill="#fcaf17"size={25} className="settings_icon"/>
        <p className="Update ">Автоматично оновлюється</p>
        </div>

        
        <div className="Update_Download">
        <MdOutlineFileDownload fill="#fcaf17"size={25} className="settings_icon"/>
        <p className="Download ">Підтримує додаткові функції
            </p>
        </div>

        </div>
        </>
    )
}

export  default Download;