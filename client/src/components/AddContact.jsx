import { useState } from 'react';
import { Box, Stack, FormControl, Button, InputLabel, OutlinedInput } from '@mui/material'

const AddContact = ({ title, addContact }) => {

    const [contact, setContact] = useState({
        fullName: '',
        phoneNumber: '',
    })

    const handleChange = e => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        addContact({id: Math.round(Math.random() * 10000), ...contact})
        setContact({ fullName: '', phoneNumber: '' })
    }

    return (
        <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit}>
            <h3>{title}</h3>
            <Stack direction='row' spacing={2}>
                <FormControl size='small'>
                    <InputLabel htmlFor='fullName'>Full Name</InputLabel>
                    <OutlinedInput
                        id='fullName'
                        name='fullName'
                        value={contact.fullName}
                        onChange={handleChange}
                        label='Full Name'
                    />
                </FormControl>
                <FormControl size='small'>
                    <InputLabel htmlFor='phoneNumber'>Phone Number</InputLabel>
                    <OutlinedInput
                        id='phoneNumber'
                        name='phoneNumber'
                        value={contact.phoneNumber}
                        onChange={handleChange}
                        label='Phone Number'
                    />
                </FormControl>
                <Button
                    size='small'
                    type='submit'
                    variant='contained'
                    color='success'
                    sx={{ flex: '1 1 25%' }}
                    disabled={Object.values(contact).some(value => !value)}
                >
                    Add
                </Button>
            </Stack>
        </Box>
    )
}

export default AddContact
