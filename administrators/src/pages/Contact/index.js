import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';

import { GetMessages } from '../../api/MessagesAPI';
import Iconify from '../../components/Iconify';
import { api } from '../../config/keys';

function Contact() {
  const [message, setMessage] = useState('');
  const [listMessage, setListMessages] = useState([]);

  const socket = io(api);

  const { data: messages } = GetMessages();

  useEffect(() => setListMessages(messages?.data || []), [messages]);

  useEffect(() => socket.emit('join', { user_id: '79abcb8f-6c8d-4c7c-bd45-011cc4306ece' }), []);

  useEffect(() => {
    const handleReceiveMessage = () =>
      socket.on('receive_chat', ({ data }) => setListMessages((list) => [...list, data]));
    handleReceiveMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const handleSendMessage = () => {
    if (message !== '') {
      socket.emit('send_chat', {
        message,
        user_id: '79abcb8f-6c8d-4c7c-bd45-011cc4306ece',
        role: 'admin'
      });
      setMessage('');
    }
  };

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        borderRadius: '20px',
        padding: '20px',
        backgroundColor: 'white'
      }}
    >
      <Paper sx={{ maxHeight: 420, padding: '24px', overflow: 'auto' }}>
        {listMessage.map((m, index) => (
          <Typography key={index}>{m.message}</Typography>
        ))}
      </Paper>

      <Grid alignSelf="flex-end" container sx={{ flexGrow: 1 }}>
        <Grid item xs={10.5}>
          <TextField
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            sx={{ width: '100%', height: '50px' }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={1.3}>
          <Button
            onClick={handleSendMessage}
            endIcon={<Iconify sx={{ paddingLeft: '4px' }} icon="fluent:send-28-filled" />}
            sx={{
              flex: 1,
              width: '100%',
              height: '56px',
              marginLeft: '16px',
              alignSelf: 'flex-end',
              justifySelf: 'flex-end'
            }}
            variant="contained"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
