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
function createData(name, hours, price, paymentType,pickup) {
  id += 1;
  return { id, name, hours, price, paymentType,pickup };
}

const data = [
  createData('1 Session',  '2 hours', '$85', 'Cash/Check', 'FREE'),
  createData('2 Sessions', '4 hours', '$170', 'Cash/Check', 'FREE'),
  createData('3 Sessions', '6 hours', '$240', 'Cash/Check', 'FREE'),
  createData('4 Sessions', '8 hours', '$320', 'Cash/Check', 'FREE'),
  createData('5 Sessions', '10 hours', '$400', 'Cash/Check', 'FREE'),
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
            <CustomTableCell >Hours</CustomTableCell>
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
                <CustomTableCell>{n.hours}</CustomTableCell>
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