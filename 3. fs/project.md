Create a users CRUD(create, read, update, delete) application using Node's fs module.
There will be 4 files, each for one operaion i.e create a user, read a user, update a user, delete a user.

1. First create a project directory of your choice. 
2. Create a user folder inside project directory where  we will store all users.

3. create a user(createUser.js or any name you want)
steps are:
    - Open a file for writing using fs.open
    - write(fs.wrietFile) to that file using file descriptor from fs.open
    - close the file

4. Read a user
  - use fs.readFile to read

5. Update a user
  - open a file for updating
  - truncate everything using fs.ftruncate
  - write new data to tha file 
  - close that file

6. Delete a user
  - use fs.unlink to delete a file

### Final Project

Implement user crud operaton on a server. 
All the operations should be implemented on seperate routes.

Steps are
  - create a server using http.createServer
  - Fetch user data from request using event Listeners like `data` and `end` on request.
  - match routes for all operations and perform accordingly.