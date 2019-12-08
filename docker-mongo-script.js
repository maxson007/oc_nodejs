use admin
db.createUser(
    {
        user: "stuff",
        pwd:"password", //passwordPrompt(), // or cleartext password
        roles: [ { role: "userAdminAnyDatabase", db: "stuff" }, "readWriteAnyDatabase" ]
    }
)