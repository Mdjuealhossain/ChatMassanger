import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const meta: Meta<typeof Card> = {
  title: 'Component/Card',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Cards: Story = {

  render: () => {
    return (
      <Card sx={{ width: 700 }}>
        <CardHeader sx={{ background: "#757575", color: "white" }} title="Bangladesh Cricket Board" avatar={
          <Avatar alt="BCB" src="https://www.tigercricket.com.bd/images/2023/07/1770757207587092.png" sx={{ width: 60, height: 60 }}></Avatar>
        } subheader="Bangladesh Era (1971 - )"
          action={
            <IconButton sx={{ color: "white" }}>
              <MoreVertIcon />
            </IconButton>
          }
        ></CardHeader>
        <CardMedia
          sx={{ padding: "20px 10px 80px 10px", backgroundSize: "cover !important", backgroundPosition: "center top !important" }}
          image="https://www.tigercricket.com.bd/images/2023/07/1770757207587092.png"
        >
          <>
            <Avatar src="https://www.tigercricket.com.bd/images/2023/07/1770757207587092.png"></Avatar>
            <Typography variant="h2" color="info">This nature is very Beautiful</Typography>
            <Typography>After the partition of Bengal in 1947, matches of domestic cricket in Pakistan were conducted in four leagues. Regional East Bengali of Pakistan teams regularly took part in the first-class Quaid-e-Azam trophy from 1954 through 1968. 1955–1969: Seven international Test matches with Pakistan participating as the host team were played in Dhaka between 1955 and 1969.</Typography>
          </>
        </CardMedia>

        <CardContent sx={{ background: "rgba(0,0,0,0.2)" }}>
          <Typography>After the partition of Bengal in 1947, matches of domestic cricket in Pakistan were conducted in four leagues. Regional East Bengali of Pakistan teams regularly took part in the first-class Quaid-e-Azam trophy from 1954 through 1968.1955–1969: Seven int</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Avatar sx={{ width: 60, height: 60 }} src="https://resources.pulse.icc-cricket.com/ICC/photo/2018/07/23/f6339ceb-f0b1-4f1e-81b0-1053a178825e/Tamim-Iqbal.jpg" ></Avatar>
          <Avatar sx={{ width: 60, height: 60 }} src="https://api.bdcrictime.com/litton-das-15_03_2022.jpg" ></Avatar>
          <Avatar sx={{ width: 60, height: 60 }} src="https://resources.pulse.icc-cricket.com/ICC/photo/2018/07/23/f6339ceb-f0b1-4f1e-81b0-1053a178825e/Tamim-Iqbal.jpg" ></Avatar>
          <Avatar sx={{ width: 60, height: 60 }} src="https://resources.pulse.icc-cricket.com/ICC/photo/2018/07/23/f6339ceb-f0b1-4f1e-81b0-1053a178825e/Tamim-Iqbal.jpg" ></Avatar>
          <Avatar sx={{ width: 60, height: 60 }} src="https://resources.pulse.icc-cricket.com/ICC/photo/2018/07/23/f6339ceb-f0b1-4f1e-81b0-1053a178825e/Tamim-Iqbal.jpg" ></Avatar>
          <Avatar sx={{ width: 60, height: 60 }} src="https://resources.pulse.icc-cricket.com/ICC/photo/2018/07/23/f6339ceb-f0b1-4f1e-81b0-1053a178825e/Tamim-Iqbal.jpg" ></Avatar>
          <Avatar sx={{ width: 60, height: 60 }} src="https://resources.pulse.icc-cricket.com/ICC/photo/2018/07/23/f6339ceb-f0b1-4f1e-81b0-1053a178825e/Tamim-Iqbal.jpg" ></Avatar>
          <Avatar sx={{ width: 60, height: 60 }} src="https://resources.pulse.icc-cricket.com/ICC/photo/2018/07/23/f6339ceb-f0b1-4f1e-81b0-1053a178825e/Tamim-Iqbal.jpg" ></Avatar>
        </CardContent>
      </Card>)
  }


};
