`GIT PUSH`;

// pushing changes to a remote means that you are sending the changes from your local repository to the remote repository. You can push changes to a remote with the following command:

`git push remote-name branch-name`;  // pushes commits to the specified branch in the specified remote


`git push -u remote-name branch-name`;   // pushes commits to the specified branch in the specified remote and sets the remote as the default remote. the -u flag means upstream


`git push --all remote-name`;   // pushes all branches to the specified remote



`NOTE`;
// When pushing to github, you might encounter an error that says 

`Permission denied (publickey). fatal: Could not read from remote repository. Please make sure you have the correct access rights and the repository exists.`;

// This means that you don't have the correct permissions to push to the repository. To fix this, you can use the following command:

`eval "ssh-agent"`;    // starts the ssh-agent in the background

`ssh-add ~/.ssh/id_rsa_github`;     // adds your SSH private key to the ssh-agent or ssh-add ~/.ssh/id_rsa

