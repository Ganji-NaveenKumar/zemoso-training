import React from "react";
import Form from "../../molecules/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uniqueId } from 'uuid';
import { Box } from "@mui/material";
import Table from "../../molecules/Table";
import UpdateDialog from "../../molecules/DialougeBox";
interface TableDataProps {
  id: number;
  Name: string;
  Role: string;
  Experience: string;
}
const AddData: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [Role, setRole] = useState<string>("");
  const [Experience, setExperience] = useState<number>(0);
  const [Id, setId] = useState<string>("");
  const [data, setdata] = useState<TableDataProps[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");
  const [editRole, setEditRole] = useState<string>("");
  const [editExperience, setEditExperience] = useState<number>(0);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios.get("http://localhost:6060/formData");
    const dataset=result.data;
    const newId=uniqueId();
    setdata(dataset);
    setId(newId)
  };
  const addData = async () => {
   await axios.post("http://localhost:6060/formData", {
      id: `${Id}`,
      Name: name,
      Role: Role,
      Experience: Experience,
    });
    setId(Id + 1);
    fetchData();
  };
  const handleClick = async () => {
    fetchData();
  };
  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:6060/formData/${id}`);
    fetchData();
  };
  const handleUpdate = (id: number) => {
    const itemToUpdate = data.find(item => item.id === id);
    if (itemToUpdate) {
      setEditId(id);
      setEditName(itemToUpdate.Name);
      setEditRole(itemToUpdate.Role);
      setEditExperience(parseInt(itemToUpdate.Experience));
      setOpen(true);
    }
  };
  const handleUpdateSubmit = async () => {
    if (editId !== null) {
      await axios.put(`http://localhost:6060/formData/${editId}`, {
        Name: editName,
        Role: editRole,
        Experience: editExperience,
      });
      setOpen(false);
      fetchData();
    }
  };
  return (
    <Box>
      <Form
        setName={setName}
        setExperience={setExperience}
        setRole={setRole}
        onclick={addData}
      />
      <Table data={data} onclick={handleClick}  onClickDelete={handleDelete} onClickUpdate={handleUpdate}></Table>
      <UpdateDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleUpdateSubmit}
        name={editName}
        role={editRole}
        experience={editExperience}
        setName={setEditName}
        setRole={setEditRole}
        setExperience={setEditExperience}
      />
    </Box>
  );
};
export default AddData;
