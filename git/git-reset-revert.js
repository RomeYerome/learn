`GIT RESET`;

// Reset is used to undo changes. It moves the HEAD pointer to a previous commit without resetting the working directory. You can reset to a previous commit with the following command:

`git reset`; // resets staging area to last commit but leaves working directory unchanged

`git reset commit-hash`; // resets to the specified commit without altering the working directory    

`git reset --soft commit-hash`;  // resets to the specified commit and moves the changes to the staging area

`git reset --hard commit-hash`;  // resets staging area and working directory to the specified commit









`GIT REVERT`

    // Revert is used to undo changes. Unlike reset, it creates a new commit that undoes the changes. You can revert to a previous commit with the following command:

    `git revert commit-hash`;

`git revert -e commit-hash`; // -e opens an interactive vim editor to edit comment

`git revert --no-edit commit-hash`;  // --no-edit skips the commit message

