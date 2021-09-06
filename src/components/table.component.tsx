import React, {PropsWithChildren, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { NavLink } from 'react-router-dom';
import { Dialogs } from './dialogs.components';


 export type TableColumnType<T> = {
    id: keyof T | "action";
    label: string;
    minWidth?: number;
    align?: 'left' | 'center' | 'right';
    format?: any;
  }

  type TableParamsType<T> = {
    columns:Array<TableColumnType<T>>,
    data:Array<T> | undefined
  }

  const useStyles = makeStyles({
    container: {
      height: '100%',
    },
  });


export const TableComponent = <T,>({columns, data}:PropsWithChildren<TableParamsType<T>>) => {
    const classes = useStyles();
    return(
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column:any) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                        </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((news:any) => {
                        return(
                            <TableRow hover role="checkbox" tabIndex={-1} key={news.id}>
                                {columns.map(column => {
                                    return  <TableCell key={column.id === "action" ? news.id: news[column.id]} align={column.align}>
                                        {column.format? column.format(news): news[column.id]}
                                    </TableCell>
                                })}
                            </TableRow>
                        )
                    })} 
                </TableBody>
            </Table>
        </TableContainer>
    )
}

type TableActionsType = {
    editLink:string,
    deleteAction:() => void,
    dialogMessage:string
}

export const TableActions = ({editLink, deleteAction, dialogMessage}:TableActionsType) => {
    const [deleteDialog, setDeleteDialog] = useState(false);

    const agreeDialogs = () => {
        deleteAction();
        setDeleteDialog(false);
    };

    return <div style={{display:"flax", alignItems:'center', justifyContent:'center'}}>
        <Dialogs 
            isOpen={deleteDialog} 
            title={dialogMessage} 
            close={() => setDeleteDialog(false)}
            agree={agreeDialogs} 
        />

        <NavLink to={editLink}>
            <IconButton color="primary" aria-label="edit">
                <EditIcon />
            </IconButton>
        </NavLink>

        <IconButton color="secondary" aria-label="delete" onClick={() => setDeleteDialog(true)}>
            <DeleteIcon />
        </IconButton>
    </div>
}

