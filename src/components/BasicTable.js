import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
//import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    table: {
        //minWidth: 650,
        backgroundColor: "white",
    },
    headerFont: {
        color: "rgba(0,0,0,0.87)",
        fontWeight: "600",
        fontFamily: "Segoe UI",
        fontSize: "0.8125rem"
    },
    tableFont: {
        color: "rgba(0,0,0,0.87)",
        fontWeight: "400",
        fontFamily: "Segoe UI",
        fontSize: "0.8125rem"
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 'e.wamala@student.ciu.ac.ug', 'abcd123'),
    createData(2, 'timo23@outlook.com', 'xyz123'),
    createData(3, 'zizo@gmail.com', 'opqrst'),
    createData(4, 'rowza@gmail.com', 'opera000'),
    createData(5, 'sula44@yahoo.co', 'eplfpl'),
];



export default function BasicTable() {
    const classes = useStyles();

    return (
        <>
            <TableContainer component="div" style={{ marginTop: "20px", }}>

                <div
                    style={{ color: "rgba(0,0,0,0.87)", fontWeight: "600", fontSize: "1.0625rem", fontFamily: "Segoe UI", marginBottom: "10px", }}>
                    Table showing details of farm managers
                </div>

                <Table className={classes.table} aria-label="simple table">

                    <TableHead>

                        <TableRow>
                            <TableCell className={classes.headerFont}>#</TableCell>
                            <TableCell className={classes.headerFont} align="left">Email</TableCell>
                            <TableCell className={classes.headerFont} align="left">Password</TableCell>
                            <TableCell className={classes.headerFont} align="left">Actions</TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {rows.map((row) => (
                            <TableRow key={row.name} hover>

                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableFont}
                                    style={{ fontWeight: "700" }}
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell className={classes.tableFont} align="left">{row.calories}</TableCell>
                                <TableCell className={classes.tableFont} align="left">{row.fat}</TableCell>
                                <TableCell className={classes.tableFont} align="left">
                                    <Link to={"/"} style={{ marginRight: "5px" }}>Update</Link>
                                    <Link to={"/"}>Delete</Link>
                                </TableCell>

                            </TableRow>
                        ))}

                    </TableBody>

                </Table>

            </TableContainer>
        </>
    );
}
