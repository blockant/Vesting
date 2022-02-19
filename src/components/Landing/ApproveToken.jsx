import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// prettier-ignore
import {Box,Button,Modal,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography} from "@mui/material";
import { getVestingHistory } from "../../actions/vesting";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ApprooveToken = ({isMetaMaskConnected,metaMaskAddress,getVestingHistory,vestData}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  useEffect(() => {
    async function getUserVestingTable() {
      if (metaMaskAddress) {
        await getVestingHistory(metaMaskAddress);
      }
    }
    getUserVestingTable();
  }, [metaMaskAddress, getVestingHistory]);
  return (
    <>
      {!isMetaMaskConnected ? (
        <>Please Connect Metamast First</>
      ) : (
        <>
          {vestData?.length <= 0 ? (
            <>No Vest Data Found</>
          ) : (
            <>
              Your List of Vestings are as follows
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Date Has Not Expired Yet!
                  </Typography>
                </Box>
              </Modal>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Receiver</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Expires On</TableCell>
                      <TableCell align="right">Claimed</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vestData?.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.receiver}
                        </TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">
                          {new Date(Date.now() + row.release).toUTCString()}
                        </TableCell>
                        <TableCell align="right">
                          {row.expired ? (
                            <>
                              <Button variant="contained" color="success">
                                Claimed
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button variant="contained" color="warning" onClick={()=>{handleOpen()}}>
                                Claim Now!
                              </Button>
                            </>
                          )}
                        </TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
    </>
  );
};
ApprooveToken.propTypes = {};
const mapStateToProps = (state) => ({
  isMetaMaskConnected: state.metamask.isMetaMaskConnected,
  metaMaskAddress: state.metamask.metaMaskAddress,
  vestData: state.vesting.vestData,
});
const mapDispatchToProps = {
  getVestingHistory,
};
export default connect(mapStateToProps, mapDispatchToProps)(ApprooveToken);
