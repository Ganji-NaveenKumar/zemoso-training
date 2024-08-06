import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
interface UpdateDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
    name: string;
    role: string;
    experience:number;
    setName: (value: string) => void;
    setRole: (value: string) => void;
    setExperience: (value: number) => void;
}

const UpdateDialog: React.FC<UpdateDialogProps> = ({ open, onClose, onSubmit, name, role, experience, setName, setRole, setExperience }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Update Data</DialogTitle>
            <DialogContent>
                <TextField
                    placeholder={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                     placeholder={role}
                     type="text"
                    onChange={(e) => setRole(e.target.value)}
                />
                <TextField
                     placeholder="number"
                     type="number"
                    onChange={(e) => setExperience(e.target.valueAsNumber)}
                />
            </DialogContent>
            <DialogActions>
                <Button type='button' onclick={onClose}>Cancel</Button>
                <Button type='button' onclick={onSubmit}>Update</Button>
            </DialogActions>
        </Dialog>
    );
};

export default UpdateDialog;
