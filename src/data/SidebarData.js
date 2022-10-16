import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'


export const SidebarData = [
   {
    icon:<MdIcons.MdDashboard/>,
    title:'dashboard',
    path:'/'
   },
   {
    icon:<AiIcons.AiOutlineAreaChart/>,
    title:'Venues',
    path:'/venues'
   },
   {
    icon:<FaIcons.FaChartPie/>,
    title:'Courses & Programs',
    path:'/courses'
   },
   {
    icon:<AiIcons.AiFillSetting/>,
    title:'Settings',
    path:'/settings'
   },
   {
    icon:<FaIcons.FaSignOutAlt/>,
    title:'Sign Out',
    path:'/sign-out'
   }
]