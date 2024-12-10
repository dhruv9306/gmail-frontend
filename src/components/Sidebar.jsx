import  {Drawer} from '@mui/material';
import  SideBarContent  from './sidebar_content';
const Sidebar=({openDrawer})=>{
    return (
        <Drawer
            anchors='left'
            open={openDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper':{
                    marginTop: '64px',
                    width: 250,
                    background:"#424242",
                    borderRight:'none',
                    height:'calc(100vh-64px)',

                }
            }}
        >
        <SideBarContent/>

        </Drawer>
    )
}

export default Sidebar;