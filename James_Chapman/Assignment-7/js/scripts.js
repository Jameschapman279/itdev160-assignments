//Array to hold tasks
var tasks =[]

// Task status 'enum'
var taskStatus = {
  active: 'active',
  completed: 'completed'
}

// Task constructor function
function Task(id, name, status) {
  this.id = id;
  this.name = name;
  this.status = status;
  }

// Create a net task element and adds it to the DOM
function addTaskElement(task) {
  var listEl = document.getElementById('active-list');
  var taskEl = document.createElement('li');
  var textEl = document.createTextNode(task.name);

// Set Attributes
taskEl.setAttribute('id', task.id);

// Add text to task element
taskEl.appendChild(textEl);


// Add task element to list
 listEl.appendChild(taskEl);
}

// Click handler to add a new tasks
function addTask(event) {
var inputEl = document.getElementById('input-task');
if (inputEl.value != '') {
 // Create a unique //
  var id = 'item-' + tasks.length;

  // Create new tasks
  var task = new Task(id, inputEl.value, taskStatus.active);
  tasks.push(task);

  //Add the task to the DOM
  addTaskElement(task);

  //Reset input
  inputEl.value ='';
 }
}
// Click handler to complete task
function completeTask(event) {
 // get the task element
  var taskEl = event.target;
  var id = taskEl.id;

  // find the corresponding task in the tasks array and update the status
   for (let i = 0; i< tasks.length; i++) {
     if (tasks[i].id === id) {
       tasks[i].status = taskStatus.completed;
       break;
     }
   }


 // Have task element from active list moved to completed list
 taskEl.remove();
 document.getElementById('completed-list').appendChild(taskEl);
}

// Key press handler to automatically click add task button
function clickButton(event){
  if(event.keyCode === 13) {
    document.getElementById('add-task').click();
  }

}

// initialize the app
function init() {
 // wire up the add task button click handler
 document.getElementById('add-task').onclick = addTask;

 // Wire up the task completed list item click handler
 document.getElementById('active-list').onclick = completeTask;

 //Wire up the task input keyy press handler
 document.getElementById('input-task').onkeypress = clickButton;
}

init();
