A typical CI/CD pipeline for a Python application usually starts with static analysis of the code. Linting is an important step in this phase, as it standardizes the code to improve readability and point out common mistakes that could lead to bugs. 
For this purpose, the de facto standard is the Pylint library. A close second is pyflakes.
Then comes testing. Developers have many options when it comes to testing libraries, but a few stand out in terms of adoption and usability: Pytest, possibly the most widely used framework and embraced by big players like Dropbox; PyUnit, which even comes built-in with Python itself; Behave, specifically designed for behaviour-driven development.

When streamlining these tasks into a pipeline, the developer has again a selection of tools that allow to set up the desired architecture.
GitHub Actions and Jenkins are the most used frameworks for this purpose, but they are not the only ones.
An open-core alternative to GitHub, which is also widely adopted, is GitLab. GitLab also provides its own versioning interface and supports CI/CD pipeline and workflows.
Another option is Travis CI, which easily plugs into GitHub repositories to allow CI/CD development.

When setting up a DevOps workflow, an important choice to make is where to execute pipelines. 
Most of the CI/CD frameworks available let users choose whether they want to host the software on premise or in the cloud. 
While there is no right answer, as every configuration depends on the project and its needs, some important parameters need to be considered. 
As we have learnt from experience, migrating to the cloud means offloading many tasks and responsibilities, resulting in savings and increased efficiency, while trading off control.
The application language, in this case, doesn't really matter. 
Technical requirements, as well as budget and administration bandwidth will be the decisive factors in the choice.
