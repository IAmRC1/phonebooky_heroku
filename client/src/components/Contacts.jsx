import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper, Button } from '@mui/material'

const Contacts = ({ contacts }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="contacts">
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
                        <TableCell align='center' component="th" scope="row">
                            {contact.fullName}
                        </TableCell>
                        <TableCell align='center'>{contact.phoneNumber}</TableCell>
                        <TableCell align='center'>
                            <Button variant='contained' color='error' size='small'>Remove</Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contacts
