import React, { useState } from 'react'
import { Container } from '@mui/material'
import Filter from './components/Filter'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

const App = () => {
    const [contacts, setContacts] = useState([{
        id: 1,
        fullName: 'qwe',
        phoneNumber: '123'
    }, {
        id: 2,
        fullName: 'asd',
        phoneNumber: '456'
    }])
    const [contact, setContact] = useState({
        fullName: '',
        phoneNumber: '',
    })
    const [searchValue, setSearchValue] = useState('')

    // useEffect(() => {
    //     apiService.getAll().then((contacts) => {
    //         setContacts(contacts);
    //     })
    // }, [])

    const handleChangeContact = e => {
        const { name, value } = e.name
        setContact({ ...contact, [name]: value })
    }

    return (
        <Container maxWidth="sm">
            <h1>Contacts Book</h1>
            <Filter searchValue={searchValue} handleSearch={val => setSearchValue(val)} />
            <AddContact
                title="Add Contact"
                contact={contact}
                handleChangeContact={handleChangeContact}
                addPerson={() => {}}
            />
            <Contacts contacts={contacts} />
        </Container>
    )
}

export default App
