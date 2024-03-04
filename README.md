# JS_Training
<h1>what is atomic design</h1>
Atomic design is methodology for creating  more coherent, hierarchical, and thoughtful interface design systems. There are five distinct levels in atomic design:

1.Atoms<br>
2.Molecules<br>
3.Organisms<br>
4.Templates<br>
5.Pages<br>


<h2>atoms</h2>
Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

<h2>Molecules</h2>
Molecules are the group of atoms bound together to be the smallest fundamental unit.
A form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.

<h2>Organisms</h2>
Molecules give us a fundamental unit or building block. An organism can be formed by combining many molecules. An organism, like a login page or form, is a group of molecules joined together to make intricate individual parts of the design.
Molecules that are similar or different can make up an organism. A website for instance, could have a variety of elements, including a search form, social media channel list, principal navigation, and logo. 

<h2>Templates</h2>
During the template phase, we move into a language that is more meaningful to our clients and to our final product. Templates are typically composed of groups of organisms that are stitched together to create pages. This is the phase where we begin to see the design in action and start to see things like layout.

<h2>Pages</h2>
Pages are a particular type of template. Here, the placeholder content is used to represent the actual content that a user will see.
It contains all the information that is specific to the user requirements.


<h1>12 Factor Apps</h1>
<h2>What is the 12-factor app? </h2>
The 12-factor app (sometimes referred to as the 12-factor web app or the 12-factor best practice) is a collection of principles and best practices for creating web applications, which are now more commonly referred to as SAAS (software-as-a-service) applications.

<h2>Codebase</h2>
Keep a single code base under version control, but deploy it to multiple environments. This ensures consistency and minimizes differences between development and production..

<h2>Dependencies</h2>
Explicit declaration and isolation of dependencies (libraries, packages, etc.).
Use tools such as package managers (npm, pip, Maven) to effectively manage dependencies.
Isolation prevents conflicts and ensures reproducibility.

<h2>Config</h2>
Keep configuration (environment-specific settings) outside the codebase,use environment variables for configuration and avoid hard-coding configuration values ​​in code.

<h2>Backing Services</h2> 
Treat backing services (databases, queues, caches) as attached resources. Connect to them via well-defined interfaces.

<h2>Build, Release, Run</h2>
Separate the build, release, and run stages. This allows for better management of each phase and ensures reproducibility.

<h2>Processes</h2> 
Execute the app as one or more stateless processes. Stateless processes are easier to scale and manage.

<h2>Port Binding</h2>
Export services via port binding. This enables communication with external services.

<h2>Concurrency</h2>
Scale out via the process model. Distribute work across multiple processes to handle increased load.

<h2>Disposability</h2>
Maximize robustness with fast startup and graceful shutdown. Make your app disposable and resilient.

<h2>Dev/Prod Parity</h2>
Keep development, staging, and production environments as similar as possible. Avoid surprises during deployment.

<h2>Logs</h2> 
Logs are very important to understand the inner workings of an application and can be of different levels and are usually stored in a file called "logFile". Ideally, our 12-factor application should not worry about logging. Every time a request comes into the system, response logs are created and processed as a series of events that can be used to debug if a problem occurs..

<h2>Admin Processes</h2>
Run admin or management tasks as one-off processes. These tasks should not impact the main application.
