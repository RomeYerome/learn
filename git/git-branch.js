`GIT BRANCH`;

// Branches are used to work on different versions of a repository at one time. By default, every repository has a master branch. When working on a branch, the changes you make do not affect the other branches. If you create files in a branch, they will not be available in the other branches.


`git branch branch-name`;    // creates a new branch

`git branch`;    // lists all branches in the repository. Current branch is asterisked

`git checkout branch-name`;  // switches to the specified branch  

`git checkout -b branch-name`;   // creates a new branch and switches to it

`git branch -d branch-name`; // deletes branch-name

`git branch -M branch-name`; // renames current branch to branch-name

