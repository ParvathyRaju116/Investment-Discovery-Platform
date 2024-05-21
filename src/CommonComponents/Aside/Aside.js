import React from 'react'
import './Aside.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


function Aside({asideObj}) {
    
  return (
    <div  >
     <CDBSidebar className='asideBody'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>

            <h2 className='me-3'>
                <b>
                    <span>
                        Capital <span className='head2'>Clue</span>
                    </span>
                </b>
            </h2>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
           {asideObj?asideObj.map((i)=>(<Link to={i.link}> <CDBSidebarMenuItem icon={i.icon}>{i.text}</CDBSidebarMenuItem></Link>)):""}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <Link style={{textDecoration:'none',color:'white'}} to={'/innovator/profile'}>
            <div
              className="sidebar-btn-wrapper ms-3"
              style={{padding: '20px 5px'}}
            >
              <Stack direction="row" spacing={2}>
          <Avatar alt="Innovator" src="/static/images/avatar/1.jpg" /> <h5 className='mt-2'>Innovator</h5>
        </Stack>
            </div>
        </Link>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default Aside