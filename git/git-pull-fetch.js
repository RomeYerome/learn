`GIT PULL/FETCH`;
// pulling changes from a remote means that you are fetching the changes from the remote and merging them with your local repository. You can pull changes from a remote with the following command:

`git pull remote-name branch-name`;  // fetch + merge changes from the specified branch in the remote

`git fetch remote-name branch-name`;   // fetches changes from the specified branch in the remote

// The difference between pull and fetch is that pull combines fetch and merge. Fetch only fetches the changes from the remote but does not merge them. You can merge them manually after fetching them.



// When you have an error due to unrelated histories, you can use the following command to forcefully pull changes from a remote:

`git pull remote-name branch-name --allow-unrelated-histories`;

// You can also pull changes from a remote and rebase them with the following command:

`git pull --rebase remote-name branch-name`;
