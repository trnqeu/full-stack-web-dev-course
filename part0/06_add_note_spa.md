```mermaid
    sequenceDiagram
        participant browser
        participant server

        Note right of browser: The user writes a note and clicks the "Save" button

        Note right of browser: The JavaScript code (spa.js) adds the new note to the local list <br/> and rerenders the note list on the page immediately

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server
        Note left of server: The server saves the new note to the database
        server-->>browser: HTTP status code 201 Created
        deactivate server

        Note right of browser: The browser stays on the same page; no further HTTP requests are needed
```