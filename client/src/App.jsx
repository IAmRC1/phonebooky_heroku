import React, { useState, useEffect } from 'react'
import { Container, Stack, Divider, TextField } from '@mui/material'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

const App = () => {
    const [contacts, setContacts] = useState([])
    const [filteredContacts, setFilteredContacts] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const addContact = contact => {
        setContacts([...contacts, contact])
        setFilteredContacts([...contacts, contact])
    }

    const removeContact = id => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }

    useEffect(() => {
        if (searchValue.length > 0) {
            setFilteredContacts(contacts.filter(contact => contact.fullName.toLowerCase().includes(searchValue.toLowerCase())))
        } else {
            setFilteredContacts(contacts)
        }
    }, [contacts, searchValue])
    
    return (
        <Container maxWidth='sm'>
            <Stack spacing={2}>
                <h1>Contacts Book</h1>
                <AddContact
                    title='Create Contact'
                    addContact={addContact}
                />
                <Divider />
                {contacts.length > 0 && (
                    <Stack spacing={2}>
                        {contacts.length > 5 && (
                            <TextField
                                size='small'
                                id='search'
                                label='Search by Name'
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                            />
                        )}
                        <Contacts
                            contacts={filteredContacts}
                            handleRemove={removeContact}
                        />
                    </Stack>
                )}
            </Stack>
        </Container>
    )
}

export default App
