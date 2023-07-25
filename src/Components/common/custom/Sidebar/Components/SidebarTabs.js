import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons"
import { faLandmark } from "@fortawesome/free-solid-svg-icons"
import { faLandmarkFlag } from "@fortawesome/free-solid-svg-icons"
import { faSitemap } from "@fortawesome/free-solid-svg-icons"
import { faHandHoldingDroplet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SIDEBAR_TABS = [
    {
        title : "Details",
        icons : <FontAwesomeIcon icon={faCalendarWeek} />,
    },
    {
        title : "History",
        icons : <FontAwesomeIcon icon={faLandmark} />,
    },
    {
        title : "Profile",
        icons : <FontAwesomeIcon icon={faUsers} />,
    },
    {
        title : "Member",
        icons : <FontAwesomeIcon icon={faLandmarkFlag} />,
    },
    {
        title : "Classes",
        icons : <FontAwesomeIcon icon={faHandHoldingDroplet} />,
    },
    {
        title : "Appointments",
        icons : <FontAwesomeIcon icon={faCalendarCheck} />,
    },
    {
        title : "Products",
        icons : <FontAwesomeIcon icon={faSitemap} />,
    },
    {
        title : "Users",
        icons : <FontAwesomeIcon icon={faUsers} />,
    },
    {
        title : "Shop",
        icons : <FontAwesomeIcon icon={faHandHoldingDroplet} />,
    },
]