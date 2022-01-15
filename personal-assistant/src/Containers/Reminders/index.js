import { SearchBar, AddButton, Reminder, ReminderBox } from "./styles.js"
import React, { useState } from 'react'

const Reminders = () => {
    const initialTodos = ["Click the plus button below to add a reminder!", "Click this reminder to mark it as complete!", "mo reminders mo power"]
    const [reminders, setReminders] = useState(initialTodos)
    const [query, setQuery] = useState('')
    const [backup, setBackup] = useState(initialTodos)

    const handleComplete = (todo) => {
        reminders.forEach((e) => console.log(e))
        console.log(reminders.indexOf(todo))
        reminders.splice(reminders.indexOf(todo), 1)
        reminders.forEach((e) => console.log(e))
        const dummyArray = [...reminders]
        setBackup([...dummyArray])
        setReminders(() => { return dummyArray })
    };

    const handleSearch = (query) => {
        console.log("reminders contains...")
        query ? console.log(query) : console.log("no query")
        if (!query) {
            const dummyArray = [...backup]
            setReminders(dummyArray)
            return
        }
        let res = []
        reminders.forEach(e => {
            if (e.toLowerCase().includes(query.toLowerCase())) {
                res.push(e)
            }
        })
        res.forEach(e => {
            console.log(e)
        })
        setReminders(res)
    }

    const handleAdd = () => {
        const newReminder = prompt('Add your reminder')
        if (!newReminder) {
            return
        }
        // update reminder
        reminders.push(newReminder)
        const dummyArray = []
        reminders.forEach((e) => { if (e) { dummyArray.push(e) } return; })
        setBackup(dummyArray)
        setReminders(dummyArray)
    }

    return (
        <div>
            <SearchBar query={query} setQuery={setQuery}>
                <input type="text" value={query} onChange={e => { setQuery(e.target.value); handleSearch(e.target.value) }} placeholder="Search for a reminder" />
            </SearchBar>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <ReminderBox>
                    {/* How do I get this to work??? */}
                    {reminders.map((todo) => (
                        <Reminder key={todo}
                            onClick={() => handleComplete(todo)}
                        > {todo}
                        </Reminder>
                    ))}
                    <AddButton onClick={() => handleAdd()}>Add Reminder</AddButton>
                </ReminderBox>
            </div>
        </div>
    );
}
export default Reminders
