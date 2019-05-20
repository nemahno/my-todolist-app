# Todo list exercise

#### Note
1. Please note the API_URL's IP is dependent on the setup of your docker engine
   replace with your docker-machine  IP, i.e docker-machine ip

### Building, testing and deploying

### Building
1. cd into my-todolist directory
2. Run docker build -t lindelani/my-todolist:0.0.1 .      (This will build the application's environment)
3. Run docker build -t lindelani/my-todolist-test:0.0.1 . (This will build the test environment)

### Run
1. docker-compose up
2. Visit http://localhost:8080 in your browser

### Results
,,,
   Recreating mytodolist_web-test_1 ... done
   Recreating mytodolist_web-app_1  ... done
   Attaching to mytodolist_web-test_1, mytodolist_web-app_1
   web-test_1  |
   web-test_1  |
   web-app_1   | Running on http://localhost:8080
   web-test_1  |   ✓ Main Page Content (46ms)
   web-test_1  |   ✓ Add Task Page Content
   web-test_1  |   ✓ Edit Task Page Content
   web-test_1  |   ✓ Delete Task Page Content
   web-test_1  |
   web-test_1  |   4 passing (128ms)
   web-test_1  |
   mytodolist_web-test_1 exited with code 0
,,,

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
Explain what you have done here and why...

### Added the edit task:
* Added button to edit task, to make task editable
* Added save button, to persist updates into a list
* created an endpoint to handle submission of the update of the task

### Added JQuery
* To handle the hide/show of button.

### Added two Dckerfiles
* Dockerfile, to build the application's execution environment
* Dockerfile.test, to build the test environment

### Added docker-compose.yml file
* Handles the deployment of the application, and execution of tests.

### Testing Frameworks
1. Mocha and chai