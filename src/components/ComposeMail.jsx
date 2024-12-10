
import { useState} from 'react';
import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material'; 
import { Close, DeleteOutline } from '@mui/icons-material';
const DialogStyle={
    height:"80%",
    width:"70%",
    maxWidth:"100%",
    boxShadow:"none",
    borderRadius:"10px"

}

const ComposeHeader= styled(Box)({ ///////header
    display:"flex",
    justifyContent:"space-between",
    padding:"10px 10px",
    backgroundColor:"lightblue",
    '& > p':{
        fontSize:14,
        fontWeight:500,
    }
})

const RecipientWrapper= styled(Box)({
    display: "flex",
    flexDirection: 'column',
    padding:"0 10px",
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid lightgrey',
        marginTop:8,
    }

})

const TextAreaInputWrapper=styled(Box)({
    display: "flex",
    flexDirection: 'column',
    padding:"0 10px",
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid lightgrey',
        marginTop:80,
        marginBottom:40,
    }
})

const ComposeFooter=styled(Box)({  /////footer
    display:'flex',
    justifyContent: 'space-between',
    padding:"10px 10px",
    
})

const SendButton=styled(Button)({
    background:'darkblue',
    color:'white',
    textTransform:'none',
    borderRadius:'18px',
    width:'100px',

})



const ComposeMail=({openDialog,setOpenDialog})=>{
    const [data, setData] = useState({});

    const config={
        
        Username : "dhruv123@yopmail.com",
        Password : "13304E4F2463D7D48013BB3C1599E76129EA",
        Host : "smtp.elasticemail.com",
        Port: 2525,
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        
    }

    const closeComposeMail = (e) =>{
        e.preventDefault();
        setOpenDialog(false);
        
    }

    const sendMail= async (e)=>{
        e.preventDefault();
        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : 'dhruvgandhi982003@gmail.com',
                Subject : data.subject,
                Body : data.body,
                Unofficial: data.unofficial

                
            }).then(
            message => alert(message)
            );
        }
    
        setOpenDialog(false);
    }
    return (
        <Dialog 
            open={openDialog}
            PaperProps={{sx: DialogStyle}}
        >
            <ComposeHeader>
                <Typography>New Message</Typography><Typography/>
                <Close fontSize="small" onClick={(e)=>closeComposeMail(e)} />


            </ComposeHeader>
            <RecipientWrapper>
                <InputBase placeholder="Recipients" name="to" onChange={(e)=> onValueChange(e)}/>
                <InputBase placeholder="Subject" name="subject" onChange={(e)=> onValueChange(e)}/>


            </RecipientWrapper>
            <TextField 
                multiline
                rows={10}
                sx={{'& .MuiOutlinedInput-notchedOutline':{
                    border:'none',
                }}}
                name="body"
                onChange={(e) => onValueChange(e)}
                value={data.body}
            />
                
                
      
            <TextAreaInputWrapper>
                <InputBase placeholder="Unofficial" name="unofficial message" onChange={(e)=> onValueChange(e)}/>
            </TextAreaInputWrapper>

            <ComposeFooter>
                <SendButton onClick={(e)=> sendMail(e)}>Send</SendButton>
                <DeleteOutline onClick={()=>setOpenDialog(false) } />
            </ComposeFooter>
        </Dialog>
        
    )
}

export default ComposeMail;