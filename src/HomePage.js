
import React, { useEffect, useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import tableData from './output.json'







export default function HomePage() {
   
   
  return (
    <TableContainer component={Paper} style={{height:'100vh',width:'100vw', marging:"5%",marginTop:'100px'}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
          <TableCell>State</TableCell>
          <TableCell> Active</TableCell>
          <TableCell> Confirmed</TableCell>
          <TableCell> Deaths</TableCell>
          <TableCell>Delta_Confirmed</TableCell>
          <TableCell>Delta_Deaths</TableCell>
          <TableCell>Delta_Recovered</TableCell>
          <TableCell>Last_Updated_Time</TableCell>
          <TableCell>Recovered</TableCell>
          <TableCell>State_Notes</TableCell>
          <TableCell>State_code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {tableData.map(td=>{
            return (
                <TableRow>
                <TableCell>{td.State}</TableCell>
                <TableCell >{td.Active}</TableCell>
                <TableCell>{td.Confirmed}</TableCell>
                <TableCell>{td.Deaths}</TableCell>
                <TableCell>{td.Delta_Confirmed}</TableCell>
                <TableCell>{td.Delta_Deaths}</TableCell>
                <TableCell>{td.Delta_Recovered}</TableCell>
                <TableCell>{td.Last_Updated_Time}</TableCell>
                <TableCell>{td.Recovered}</TableCell>
                <TableCell>{td.State_Notes}</TableCell>
                <TableCell>{td.State_code}</TableCell>
                </TableRow>
            )
        }
        )
        
      
    }
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}