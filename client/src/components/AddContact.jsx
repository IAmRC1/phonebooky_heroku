import { Box, TextField } from '@mui/material'

const AddContact = () => {
    return (
        <Box
            component='form'
            noValidate
        >
            <div>
                <TextField
                    required
                    id='fullName'
                    label='Full Name'
                    defaultValue='Hello World'
                />
                <TextField
                    required
                    id='phoneNumber'
                    label='Phone Number'
                    defaultValue='Hello World'
                />
            </div>
        </Box>
  )
}

export default AddContact
