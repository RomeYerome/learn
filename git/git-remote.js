`GIT REMOTE`;
// A remote is a repository that is hosted on the internet or a network. You can link a remote to your repository with the following command:

`git remote add origin remote-url`;  // links the repo in the url to your local repo. 'origin' is the alias you give to the remote

`git remote -v`; // lists all remotes in your repository

`git remote rm remote-name`; // unlinks the remote with the specified name from your repository

`git remote rename old-name new-name`;   // renames the remote with the old name to the new name

`git push remote-name branch-name`;  // pushes commits to the specified branch in the specified remote

`git pull remote-name branch-name`;  // pulls changes from the specified branch in the specified remote

`git fetch remote-name branch-name`;   // fetches changes from the specified branch in the remote    

// The difference between pull and fetch is that pull combines fetch and merge. Fetch only fetches the changes from the remote but does not merge them. You can merge them manually after fetching them.
