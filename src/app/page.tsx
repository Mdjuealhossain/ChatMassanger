"use client";
import { useState } from "react";
import { Container, Grid, Hidden, Paper } from "@mui/material";
import ChatsPane from "./widgets/MyMessage/ChatsPane";
import { chats } from "./widgets/MyMessage/data";
import MessagesPane from "./widgets/MyMessage/MessagesPane";

const MessagePage = () => {
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  return (
    <Paper sx={{ height: "calc(100vh - 64px)" }}>
      <Container sx={{ px: { xs: 0, md: 2 } }}>
        <Grid container>
          <Hidden mdDown>
            <Grid item md={3.5}>
              <ChatsPane
                chats={chats}
                selectedChatId={selectedChat.id}
                setSelectedChat={setSelectedChat}
              />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={8.5}>
            <MessagesPane
              chat={selectedChat}
              setSelectedChat={setSelectedChat}
              selectedChatId={selectedChat.id}
            />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default MessagePage;
