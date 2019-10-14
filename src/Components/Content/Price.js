import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
   
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'scroll',
  },
  table: {
    minWidth: 700,
   
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
      width: '100%',

    },
  },
});

let id = 0;
function createData(name, price, paymentType,pickup) {
  id += 1;
  return { id, name, price, paymentType,pickup };
}

const data = [
  createData('1st Class', '$95', 'Cash / Check', 'Free' ),
  createData('2nd Class', '$95', 'Cash / Check', 'Free'),
  createData('3rd class', '$80(6 hours = $270 total)', 'Cash / Check', 'Free'),
  createData('DMV Test', '$120', 'Cash / Check', 'Free'),
  createData('$90 for each class after 3 classes')
];

function Price(props) {
  const { classes } = props;
  
  return (
    <div  >
    <Paper className={classes.root}>
      <Table className={classes.table} >
        <TableHead >
          <TableRow >
            <CustomTableCell>Lesson(s)</CustomTableCell>
            <CustomTableCell >Price</CustomTableCell>  
            <CustomTableCell>Payment Type</CustomTableCell>  
            <CustomTableCell>PickUp/DropOff</CustomTableCell>    
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.name}
                </CustomTableCell>
                <CustomTableCell>{n.price}</CustomTableCell>
                <CustomTableCell>{n.paymentType}</CustomTableCell>
                <CustomTableCell>{n.pickup}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

Price.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Price);