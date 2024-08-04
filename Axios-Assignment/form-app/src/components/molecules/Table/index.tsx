import React, { MouseEventHandler } from "react";
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow  } from "@mui/material";
import Button from "../../atoms/Button";
interface TableProps{
    data: { id: number; Name: string; Role: string; Experience: string }[];
    onclick:MouseEventHandler<HTMLButtonElement>;
    onClickDelete: (id: number) => void;
    onClickUpdate: (id: number) => void; 
}
const Table:React.FC<TableProps>=({data,onClickDelete,onClickUpdate})=>{
    return(
        <MuiTable>
             <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Experience</TableCell>
                    <TableCell>Delete</TableCell> 
                    <TableCell>Update</TableCell> 
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item,index) => (
                    <TableRow key={item.id}>
                         <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.Name}</TableCell>
                        <TableCell>{item.Role}</TableCell>
                        <TableCell>{item.Experience}</TableCell>
                        <TableCell>
                            <Button type="button" onclick={() => onClickDelete(item.id)}>
                                Delete
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button type="button" onclick={() => onClickUpdate(item.id)}>
                                Update
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </MuiTable>
    );
}
export default Table;