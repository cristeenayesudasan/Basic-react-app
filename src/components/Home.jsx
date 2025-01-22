import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'


const data = [
    {"Name":"Cristeena","Course":"MCA","Place":"KTM","Address":"ABC"},
    {"Name":"Avanthika","Course":"BTech","Place":"KLM","Address":"DEF"},
  ];


const Home = () => {
  return (
    <>
    <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Address</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.map((item) => (
                <TableRow key={item.Name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{item.Name}</TableCell>
                    <TableCell>{item.Course}</TableCell>
                    <TableCell>{item.Place}</TableCell>
                    <TableCell>{item.Address}</TableCell>
                </TableRow>
            ))}
            </TableBody>
            
        </Table>
    </TableContainer>
    </>
  )
}

export default Home