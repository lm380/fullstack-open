sequenceDiagram
    participant browser
    participant server
    participant user
    
user->>browser: types into text field and clicks submit
Note right of browser: js is used to stop the default submit behaviour; update the notes; rerender the displayed notes and then send the new note to the server
browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server->>browser: status code 201
deactivate server
