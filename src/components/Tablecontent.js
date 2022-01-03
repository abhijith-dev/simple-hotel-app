import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {deleteData, loadData,editData,singleContent} from '../functions/function'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Tablecontent({event}) {
   const classes = useStyles();
   const [rows,setRows] = React.useState([])
   const [action,setAction] = React.useState(0)
   const [edit,setEdit] = React.useState(false)
   const [name,setName] = React.useState('')
   const [desc,setDesc] = React.useState('')
   const [price,setPrice] = React.useState('')
   const [id,setId] = React.useState('')
   const triggerEdit = (id)=>{
      setEdit(true) 
      let editable = singleContent(id)
      setName(editable.name)
      setDesc(editable.desc)
      setPrice(editable.price)
      setId(id)
   }
   const editAll = ()=>{
     editData(id,{sno:id,name,desc,price})
     setEdit(false)
     setAction(prev=>prev+1)
     setName('');setDesc('');setPrice('')
   }
    React.useEffect(()=>{
        let data = loadData()
        setRows(data)
    },[event,action])
    return (
      <>
      {
        edit ?(
          <>
          <form onSubmit={editAll}>
            <input value = {name} onChange={(e)=>{setName(e.target.value)}} />
            <input value ={desc}  onChange={(e)=>{setDesc(e.target.value)}}/> 
            <input value ={price} onChange={(e)=>{setPrice(e.target.value)}} />
            <button>Edit Item</button>
          </form>
          </>
        ):null
      }
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Item Id</b></TableCell>
            <TableCell align="right"><b>Item Name</b></TableCell>
            <TableCell align="right"><b>Item Description</b></TableCell>
            <TableCell align="right"><b>Item Price</b></TableCell>
            <TableCell align="right"><b>Edit</b></TableCell>
            <TableCell align="right"><b>Remove</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.sno}>
              <TableCell component="th" scope="row">
                {row.sno}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.desc}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><button onClick={()=>{triggerEdit(row.sno)}}>edt</button></TableCell>
              <TableCell align="right"><button onClick={()=>{deleteData(row.sno);setAction(prev=>prev+1);}}>dlt</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}
