import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import "./AlertDialog.css"

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" className="mt-2" onClick={handleClickOpen}>
                Show Certificate
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={"lg"}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <img src={props.imgSrc} style={{maxWidth:"60vw" , maxHeight: "70vh"}} className="imgDialog" alt=""/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="primary" autoFocus>
                      Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
