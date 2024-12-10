import {AppBar, Toolbar,styled,InputBase,Box} from '@mui/material'
import {Menu as MenuIcon, Search,Tune,HelpOutlineOutlined,
   SettingsOutlined,AppsOutlined,AccountCircleOutlined } from"@mui/icons-material";
import {glogo} from '../constants/constant.js'

const StyledAppBar=styled(AppBar)({
    backgroundColor:"#424242",

})

const SearchWrapper=styled(Box)({
    background:"lightblue",
    marginLeft:150,
    borderRadius:13,
    display:"flex",
    alignItems: "center",
    width:1200,
    justifyContent: "space-between",
    padding:"0 20px",
    '& > div':{
        width:"100%",
        padding:"0 10px"
    }

})

const OptionsWrapper=styled(Box)({
    width:"100%",
    display:"flex",
    justifyContent:"end",
    '& > svg':{
        marginLeft:"10px",
    }
})

const Header=({toggleDrawer})=>{
   
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon onClick={toggleDrawer} />
                <img src={glogo} alt="logo" style={{width:75, marginLeft:12,height:37, borderRadius:14,}} />
                <SearchWrapper>
                    <Search color="action"/>
                    <InputBase 
                        placeholder='Search mail'
                    />
                    <Tune color="action"  />
                </SearchWrapper>
                <OptionsWrapper>
                    <HelpOutlineOutlined/>
                    <SettingsOutlined/>
                    <AppsOutlined/>
                    <AccountCircleOutlined />
                </OptionsWrapper>


            </Toolbar>
            
        </StyledAppBar>
    )
}

export default Header;