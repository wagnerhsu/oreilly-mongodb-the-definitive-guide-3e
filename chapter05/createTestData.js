function addUsers() {
    for (let index = 0; index < 100000; index++) {
        db.users.insertOne(
            {
                "i": index,
                "username": "user" + index,
                "age": Math.floor(Math.random() * 120),
                "created": new Date()
            }
        )

    }
}