`GIT REBASE`;

// Lets say you have a branch for a feature and you're ready to add it to the main branch. But the main branch has changed since you started working on the feature branch. By using rebase, you'll be moving the feature branch to the tip of the main branch, creating a linear history/straight line of commits. This is useful for keeping the history clean and easy to understand.

// Rebasing is used to combine a sequence of commits into a single commit. i.e it is used to combine two parralel branches with unrelated features into one branch. You can rebase a branch with the following command:



`git rebase branch-name`;    // rebases the current branch with the specified branch

`git rebase -i branch-name`;     // rebases the specified branch and opens an interactive vim editor     

