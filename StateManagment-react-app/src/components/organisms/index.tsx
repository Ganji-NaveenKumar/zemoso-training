import React, { useState } from "react";
import data from "../../utils/Constants/data";
import { Typography } from "@mui/material";
import Button from "../atoms/Button/index";
import Book from "../molecules/Book";
import styled from "styled-components";
import { Box } from "@mui/material";
const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: auto;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Books: React.FC = () => {
  const [Flag, setFlag] = useState<number>(0);
  const [currentreading, setcurrentreading] = useState(
    data.filter((item) => item.reading)
  );
  const [finished, setfinished] = useState(
    data.filter((item) => !item.reading)
  );
  const HandleClick = () => {
    setFlag(0);
  };
  const HandleClick1 = () => {
    setFlag(1);
  };
  const handlechange = (id: number) => {
    const updatedData = [...data];
    updatedData.forEach((item) => {
      if (item.id === id) {
        item.reading = !item.reading;
      }
    });
    const updateReading = updatedData.filter((item) => item.reading);
    const finishedReading = updatedData.filter((item) => !item.reading);
    data.splice(0, data.length, ...updatedData);
    setcurrentreading(updateReading);
    setfinished(finishedReading);
  };

  return (
    <MainContainer>
      <Typography variant="h3">My Library</Typography>
      <Box>
        <Button onClick={HandleClick}>Currently Reading</Button>
        <Button onClick={HandleClick1}>Finshed</Button>
      </Box>
      {Flag === 0 ? (
        <BookContainer>
          {currentreading.map(
            (item) =>
              item.reading && (
                <Book
                  key={item.id}
                  src={item.src}
                  data1={item.data1}
                  data2={item.data2}
                  readtime={item.readtime}
                  totalreadings={item.totalreadings}
                  reading={item.reading}
                  onClick={() => handlechange(item.id)}
                />
              )
          )}
        </BookContainer>
      ) : (
        <BookContainer>
          {finished.map(
            (item) =>
              !item.reading && (
                <Book
                  key={item.id}
                  src={item.src}
                  data1={item.data1}
                  data2={item.data2}
                  readtime={item.readtime}
                  totalreadings={item.totalreadings}
                  reading={item.reading}
                  onClick={() => handlechange(item.id)}
                />
              )
          )}
        </BookContainer>
      )}
    </MainContainer>
  );
};

export default Books;
