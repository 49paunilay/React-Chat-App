import React , { forwardRef } from 'react';
import './message.css';
import { CardContent,Card,Typography } from '@material-ui/core';

const Message = forwardRef(
    ({message,username},ref)=>{
        const isUser = username ===message.username;
        return(
            <div ref ={ref}>
                <Card className={`message_card ${isUser && 'message_user'}`}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {!isUser && `${message.username || 'Unknown'} : `} {message.message}
                    
                    </Typography>
                </CardContent>
                </Card>
                
            </div>
        )
    }
) 
export default Message;