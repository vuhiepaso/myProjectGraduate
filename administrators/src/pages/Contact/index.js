import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { Box, Typography, TextField, Button, Grid, Paper, Avatar } from '@mui/material';

import { GetListUser, GetMessages } from '../../api/MessagesAPI';
import Iconify from '../../components/Iconify';
import { api } from '../../config/keys';

function Contact() {
  const [message, setMessage] = useState('');
  const [listMessage, setListMessages] = useState([]);
  const pagerRef = useRef(null);
  const chatRef = useRef(null);
  const [userId, setUserId] = useState('');

  const socket = io(api);

  const { data: users } = GetListUser();
  const { data: messages, refetch } = GetMessages(userId);

  useEffect(() => {
    setListMessages(messages?.data || []);
  }, [messages]);

  useEffect(() => {
    setListMessages(messages?.data || []);
  }, [userId]);

  useEffect(() => {
    setUserId(users?.data[0]?.user_id);
  }, [users]);

  useEffect(() => socket.emit('join', { user_id: userId }), []);

  useEffect(() => {
    const handleReceiveMessage = () =>
      socket.on('receive_chat', ({ data }) => setListMessages((list) => [...list, data]));
    handleReceiveMessage();
    pagerRef?.current?.scroll({ top: pagerRef?.current?.scrollHeight, behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  useEffect(() => refetch(), [userId]);

  const handleSendMessage = () => {
    pagerRef?.current?.scroll({ top: pagerRef?.current?.scrollHeight, behavior: 'smooth' });
    if (message !== '') {
      socket.emit('send_chat', {
        message,
        user_id: userId,
        role: 'admin'
      });
      setMessage('');
      chatRef?.current?.focus();
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Paper sx={{ borderRadius: '20px', marginRight: '20px', padding: '24px' }}>
        {users &&
          users?.data.map((u) => (
            <Button
              key={u.user_id}
              onClick={() => setUserId(u.user_id)}
              sx={{
                width: '200px',
                maxHeight: '200px',
                alignItems: 'center',
                justifyContent: 'flex-start',
                display: 'flex',
                flexDirection: 'row',
                marginTop: '20px',
                backgroundColor: userId === u.user_id ? '#F4F7F9' : '#FFFFFF'
              }}
            >
              <Avatar />
              <Box sx={{ marginLeft: '12px', textAlign: 'left' }}>
                <Typography
                  sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'clip',
                    maxHeight: '1.4em',
                    lineHeight: '1.4em'
                  }}
                >
                  {u.user_id}
                </Typography>
                <Typography>User name</Typography>
              </Box>
            </Button>
          ))}
      </Paper>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          borderRadius: '20px',
          padding: '20px',
          backgroundColor: 'white'
        }}
      >
        <Paper
          ref={pagerRef}
          sx={{
            maxHeight: '420px',
            padding: '24px',
            overflow: 'auto',
            display: 'inline-flex',
            flexDirection: 'column'
          }}
        >
          {listMessage.map((m, index) => (
            <Box
              key={index}
              alignItems="center"
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: m.role === 'user' ? 'row-reverse' : 'row'
              }}
            >
              <Avatar sx={{ marginLeft: '12px', marginRight: '12px' }} />
              <Typography
                sx={{
                  marginTop: '12px',
                  marginBottom: '12px',
                  borderRadius: '12px',
                  paddingTop: '6px',
                  float: m.role === 'user' ? 'right' : 'left',
                  paddingBottom: '6px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  backgroundColor: m.role === 'user' ? '#027235' : '#EEF0F5',
                  maxWidth: '45%',
                  width: 'fit-content'
                }}
              >
                {m.message}
              </Typography>
            </Box>
          ))}
        </Paper>

        <Grid mt={2} alignSelf="flex-end" container sx={{ flexGrow: 1 }}>
          <Grid item xs={10.5}>
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              ref={chatRef}
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
    </Box>
  );
}

export default Contact;
