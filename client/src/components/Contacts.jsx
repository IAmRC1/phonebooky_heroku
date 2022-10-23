import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Button } from '@mui/material'

const Contacts = ({ contacts, handleRemove }) => {
    return (
        <TableContainer component={Table}>
            <Table aria-label='contacts' size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Full Name</TableCell>
                        <TableCell align='center'>Phone Number</TableCell>
                        <TableCell align='center'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                        <TableCell align='center'>
                            {contact.fullName}
                        </TableCell>
                        <TableCell align='center'>{contact.phoneNumber}</TableCell>
                        <TableCell align='center'>
                            <Button
                                variant='contained'
                                color='error'
                                size='small'
                                onClick={() => handleRemove(contact.id)}
                            >
                                Remove
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contacts
