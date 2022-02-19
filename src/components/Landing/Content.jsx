import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ConnectMetamask from './ConnectMetamask';
import { connect } from 'react-redux';
import ApproveToken from './ApproveToken';

function Content({isMetaMaskConnected, metaMaskAddress, metaMaskBalance}) {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
                {isMetaMaskConnected? <></>: <><ConnectMetamask></ConnectMetamask></>}
              
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
       {isMetaMaskConnected? <><ApproveToken></ApproveToken></>: <></>}
      </Typography>
    </Paper>
  );
}
const mapStateToProps = (state) => ({
    isMetaMaskConnected: state.metamask.isMetaMaskConnected,
    metaMaskAddress: state.metamask.metaMaskAddress
})
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)