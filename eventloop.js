/*
Event Loop in Node.js

 Task

Your task is to create a Node.js program that delves deeply into the mechanics of the event loop. You will implement various asynchronous operations, microtasks, and investigate the interactions between different phases of the event loop.

 Instructions

1. **Async Operation Manager**: Implement a class called `AsyncOperationManager`. This class should have methods for scheduling asynchronous operations with varying delay times.
2. **Event Loop Simulation**: In the `AsyncOperationManager` class, implement a method called `simulateAsyncOperation` that takes a delay time (in milliseconds) as an argument. Use `setTimeout` to simulate an asynchronous operation and log a message after the specified delay.
3. **Microtask Scheduler**: After each `simulateAsyncOperation` call, use `process.nextTick` to schedule a microtask that logs a message. Observe how microtasks are executed immediately after the completion of the current phase.
4. **Immediate Task Scheduler**: Implement a method called `scheduleImmediate` in the `AsyncOperationManager` class that uses `setImmediate` to schedule a task that logs a message. Observe the behavior of `setImmediate` in the context of the event loop.
5. **Execution Flow Analysis**: In your code comments, explain the expected execution flow of the event loop as it transitions through different phases during the execution of your asynchronous operations, microtasks, and tasks scheduled with `setImmediate`.

 Submission

Submit your Node.js program in a file along with comments that provide a detailed explanation of each part of the code. Your comments should describe the event loop's behavior, the order of execution, and the role of microtasks and `setImmediate`.

 Bonus

Create a scenario where multiple microtasks and immediate tasks are scheduled within different phases of the event loop. Analyze the execution order and provide insights into how the event loop manages these tasks.
*/

class AsyncOperationManager {
    simulateAsyncOperation(delay) {
      setTimeout(() => {
        console.log(`Async operation completed after ${delay} ms`);
        process.nextTick(() => {
          console.log("this message shows after the setTimeout"); 
        });
      }, delay);
    }

    scheduleImmediate() {
      setImmediate(() => {
        console.log("Immediate task executed");
        process.nextTick(() => {
          console.log("this message shows after the setImmediate"); 
        });
      });

    }
      // Implement process.nextTick scheduling and event loop interactions
  }

  const manager = new AsyncOperationManager();
  manager.simulateAsyncOperation(200); // 3rd place in the output
  process.nextTick(() => {
    console.log("Microtask executed immediately"); // 1st place in the output
  });
  manager.scheduleImmediate(); // 2nd place in the output

/* Order of execution:

1. simulateAsyncOperation(200) method executed;
    1.1. setTimeout() is being executed in the Timers phase of Event Loop;
    1.2. When 200 ms up (right away, or if to be more precise then it would be better to say “as soon as possible”), the console.log(`Async operation completed after ${delay} ms`) is moved to Macro-Task Queue; 
    1.3. When this Macro Task will be done - log console.log(`Async operation completed after ${delay} ms`), process.nextTick() is being called and console.log("this message shows after the setTimeout") is moved to Micro-Task queue;
2. process.nextTick() is being called and console.log("Microtask executed immediately") method is moved to Micro-Task queue;
3. scheduleImmediate() method executed;
    3.1. setImmediate() is being executed in the Check phase of Event Loop;
    3.2. the console.log("Immediate task executed") method is moved to Macro-Task Queue immediately;
    3.3. When this Macro Task will be done - log console.log("Immediate task executed"), process.nextTick() is being called and console.log("this message shows after the setImmediate") method is moved to Micro-Task queue;
4. Checking if there is something in the Micro-Queue, and executes console.log("Microtask executed immediately"); 
5. Checking if there is something in the Micro-Queue, now it is empty;
6. Checking if there is something in the Macro-Queue, and executes console.log("Immediate task executed");
7. Checking if there is something in the Micro-Queue, and executes console.log("this message shows after the setImmediate"); 
8. Checking if there is something in the Micro-Queue, now it is empty;
9. Checking if there is something in the Macro-Queue, and executes console.log(`Async operation completed after ${delay} ms`);
10. Checking if there is something in the Micro-Queue, and executes console.log("this message shows after the setTimeout"); 
11. Checking if there is something in the Micro-Queue, now it is empty;
12. Checking if there is something in the Macro-Queue, now it is empty;
*/


const bonusManager = new AsyncOperationManager();
  setTimeout(() => console.log("SetTimeout 20 ms"), 20); // 9th place in the output
  setImmediate(() => console.log("SetImmediate 1")); // 5th place in the output
  Promise.resolve().then(() => {
        console.log("Promise"); // 3rd place in the output
        process.nextTick(() => console.log("Promise next tick")); // 4th place in the output
    });
  bonusManager.simulateAsyncOperation(200); // 11th place in the output
  setImmediate(() => console.log("SetImmediate 2")); // 6th place in the output
  process.nextTick(() => {
    console.log("Microtask 1 nextTick"); // 1st place in the output
  });
  setTimeout(()=> console.log("SetTimeout 100 ms"), 100); // 10th place in the output
  process.nextTick(() => {
    console.log("Microtask 2 nextTick"); // 2nd place in the output
  });
  setImmediate(() => console.log("SetImmediate 3")); // 7th place in the output
  bonusManager.scheduleImmediate(); // 8th place in the output

/* Order of execution:

1. setTimeout() is being executed in the Timers phase of Event Loop;
2. When 20 ms up, the console.log("SetTimeout 20 ms") is moved to Macro-Task Queue;
3. setImmediate() is being executed in the Check phase of Event Loop;
4. console.log("SetImmediate 1") method is moved to Macro-Task Queue immediately;
5. Promise.resolve().then() is being called, console.log("Promise") and process.nextTick(() => console.log("Promise next tick")) methods are moved to Micro-Task queue - promise Queue;
6. simulateAsyncOperation(200) method executed;
    6.1. setTimeout() is being executed in the Timers phase of Event Loop;
    6.2. When 200 ms up (right away, or if to be more precise then it would be better to say “as soon as possible”), the console.log(`Async operation completed after ${delay} ms`) is moved to Macro-Task Queue; 
    6.3. When this Macro Task will be done - log console.log(`Async operation completed after ${delay} ms`), process.nextTick() is being called and console.log("this message shows after the setTimeout") is moved to Micro-Task queue;
7. setImmediate() is being executed in the Check phase of Event Loop;
8. console.log("SetImmediate 2") method is moved to Macro-Task Queue immediately;
9. process.nextTick() is being called and console.log("Microtask 1") method is moved to Micro-Task queue - nextTick Queue;
10. setTimeout() is being executed in the Timers phase of Event Loop;
11. When 100 ms up, the console.log("SetTimeout 100 ms") is moved to Macro-Task Queue;
12. process.nextTick() is being called and console.log("Microtask 2") method is moved to Micro-Task queue - nextTick Queue;
13. setImmediate() is being executed in the Check phase of Event Loop;
14. console.log("SetImmediate 3") method is moved to Macro-Task Queue immediately;
15. scheduleImmediate() method executed;
    15.1. setImmediate() is being executed in the Check phase of Event Loop;
    15.2. the console.log("Immediate task executed") method is moved to Macro-Task Queue immediately;
    15.3. When this Macro Task will be done - log console.log("Immediate task executed"), process.nextTick() is being called and console.log("this message shows after the setImmediate") method is moved to Micro-Task queue;
16. Checking if there is something in the Micro-Queue - nextTick Queue, and executes console.log("Microtask 1"); 
17. Checking if there is something in the Micro-Queue - nextTick Queue, and executes console.log("Microtask 2"); 
18. Checking if there is something in the Micro-Queue - nextTick Queue, and now it is empty; 
19. Checking if there is something in the Micro-Queue - promise Queue,  executes console.log("Promise"), process.nextTick() is being called and console.log("Promise next tick") method is moved to Micro-Task queue - nextTick Queue; 
20. Checking if there is something in the Micro-Queue, and executes console.log("Promise next tick");
21. Checking if there is something in the Micro-Queue, now it is empty;
22. Checking if there is something in the Macro-Queue, and executes console.log("SetImmediate 1").
23. Checking if there is something in the Micro-Queue, now it is empty;
24. Checking if there is something in the Macro-Queue, and executes console.log("SetImmediate 2").
25. Checking if there is something in the Micro-Queue, now it is empty;
26. Checking if there is something in the Macro-Queue, and executes console.log("SetImmediate 3").
27. Checking if there is something in the Micro-Queue, now it is empty;
28. Checking if there is something in the Macro-Queue, and executes console.log("Immediate task executed");
29. Checking if there is something in the Micro-Queue, and executes console.log("this message shows after the setImmediate"); 
30. Checking if there is something in the Micro-Queue, now it is empty;
31. Checking if there is something in the Macro-Queue, and executes console.log("SetTimeout 20 ms").
32. Checking if there is something in the Micro-Queue, now it is empty;
33. Checking if there is something in the Macro-Queue, and executes console.log("SetTimeout 100 ms").
34. Checking if there is something in the Micro-Queue, now it is empty;
35. Checking if there is something in the Macro-Queue, and executes console.log(`Async operation completed after ${delay} ms`).
36. Checking if there is something in the Micro-Queue, and executes console.log("this message shows after the setTimeout"); 
37. Checking if there is something in the Micro-Queue, now it is empty;
38. Checking if there is something in the Macro-Queue, now it is empty;
*/

// NB! nextTick queue gets priority over the promise queue (it’s how the Node.js runtime works)
// NB! the event loop should process the micro-task queue entirely, after processing one macro-task from the macro-task queue
// NB! Check Queue before Timer Queue
