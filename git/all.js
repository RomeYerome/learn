`INSTALLING GIT`;

// On mac, download from git-scm.com/download and just install regularly. To check if it installed you can use the version command in your terminal

`git OR git --version`;



`GIT CONFIG`;
// You need to configure your git with your name and email. This is important because every commit uses this information to identify you. To do this, you can use the following commands:

`git config --global user.name "Your Name"`;     // sets the name you want to use for your git commits
`git config --global user.email "Your Email"`;   // sets the email you want to use for your git commits

// You can check if it worked by using the following command: 

`git config --list`;     // lists all the settings you have configured




`SSH KEY`;
// SSH keys are a way to identify trusted computers, without involving passwords.



`1. Steps to generate SSH key:`;
// You can use SSH keys to connect to your git account without having to type your username and password every time. To do this, you need to generate a key and add it to your account. To generate a key, you can use the following command:

`ssh-keygen -t ed25519 -C "your_email@example.com"`;

// this command means that you want to generate a key using the ed25519 algorithm. The -t flag specifies the algorithm and the -C flag specifies the comment.


// for legacy systems that don't support ed25519 you can use rsa as shown below

`ssh-keygen -t rsa -b 4096 -C "your git email address"`;

// this command means that you want to generate a key using the RSA algorithm with a key size of 4096 bits. The -t flag specifies the algorithm and the -b flag specifies the key size. The -C flag specifies the comment.

// You will be asked to enter a file name and a passphrase. You can leave the file name as it is and leave the passphrase empty. This will generate two files in your .ssh folder. 




`2. Steps to check if SSH key is generated:`;
// You can check if it worked by using the following command: 

`ls - a`;       // You should see two files: id_rsa and id_rsa.pub. The first is your private key and the second is your public key. 




`3. Steps to add SSH key to your git account:`;
// You need to add the public key to your git account. To do this, you need to copy the contents of the id_rsa.pub file and paste it into your git account. You can do this by using the following command:

`$ pbcopy < ~/.ssh/id_ed25519.pub`;     // this copies the contents of the file to your clipboard

`cat ~/.ssh/id_rsa.pub`;    // This will print the contents of the file in your terminal. 

//You can copy it and paste it into your github account. In the "Access" section of the sidebar, click  SSH and GPG keys.



`4. Check SSH connection:`;
// You can check if it worked by using the following command:

`ssh -T git@github.com`;    // You should see a message saying that you have successfully authenticated.



`5. If you get an error:`;

// Sometimes you may get an error when trying to push to your git repository. This is because you are using the HTTPS URL instead of the SSH URL. To fix this, you can use the following command:

`git remote set-url origin`;   // this command changes the remote URL from HTTPS to SSH. You can check if it worked by using the following command:

`git remote -v`;   // this command lists all the remote URLs in your repository.


// or try

`eval "ssh-agent"`;    // eval "$(ssh-agent -s)" starts the ssh-agent in the background

`ssh-add ~/.ssh/id_rsa`;     // adds your SSH private key to the ssh-agent or ssh-add ~/.ssh/id_rsa_github










`GIT INIT`;

// To start using git in a project, you need to initialize it. To do this, you need to navigate to the project folder in your terminal and use the following command:

`git init`;  // initializes git in your project folder

// This will create a .git folder in your project folder that stores all the information and versions of your project. You can confirm it worked by using the following command: 

`ls -a`; // lists all files in your project folder including hidden files. You'll see a .git folder 











`GIT ADD`;

// To add snapshots of your project files to your git folder, you use the git add command


`git add index.html style.css app.js`;   // adds stated files
`git add *.html`;    // adds all html files
`git add .`;        // adds all files in current folder

// The files are added to what is generally called a 'STAGING AREA'. It is a temaporary holding area and tracks changes in the files till you commit them.  You can check the files in the staging are with the following command:

`git status`; // Shows the files in the staging area in green if they're the same as the files in the working directory and in red if you've made changes since you staged them

`git rm --cached file-name`; // removes file from staging area but not from working directory

`git rm -r --cached .`;  // removes all files from staging area but not from working directory

// the flags mean the following:  -r means recursive and -cached means that the files will be removed from the staging area but not from the working directory.






`GIT COMMIT`;

// To commit the files in the staging area .i.e save copies/snapshots of them, you use the git commit command. 

`git commit -m "commit message"`;    // commits files in staging area with commit message

`git commit --amend -m "new commit message"`; // overwrite the last commit with the staged files and last commit message. or add -m "new commit message" to change the commit message








`GIT IGNORE`;

// You can create a .gitignore file to tell git which files to ignore. This is useful for files that contain sensitive information like passwords or bloat files like node_modules/. To create a .gitignore file, you can use the following command:

`touch .gitignore`;

// You write the name files and folders (/folder-name) you want to ignore in the .gitignore file. To check the contents of the .gitignore file, use the following command to print the contents in the terminal:

`cat .gitignore`;












`GIT BRANCH`;

// Branches are used to work on different versions of a repository at one time. By default, every repository has a master branch. When working on a branch, the changes you make do not affect the other branches. If you create files in a branch, they will not be available in the other branches.


`git branch branch-name`;    // creates a new branch

`git branch`;    // lists all branches in the repository. Current branch is asterisked

`git checkout branch-name`;  // switches to the specified branch  

`git checkout -b branch-name`;   // creates a new branch and switches to it

`git branch -d branch-name`; // deletes branch-name

`git branch -M branch-name`; // renames current branch to branch-name









`GIT MERGE`;
// Merging lets you combine done work on one branch with another. You can merge a branch with the current branch using the following command:

`git merge branch-name`;

// When you merge a branch, you are combining the changes you made in that branch with the current branch. If there is a conflict, you will see a message saying that there is a conflict. You can open the file and resolve the conflict. You can then add the file to the staging area and commit it again.









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










`GIT CLONE`;
// cloning a repository means that you are copying the repository (usually someone else's app) to your local machine. You can clone a repository with the following command:

`git clone remote-url`;









`GIT PULL/FETCH`;
// pulling changes from a remote means that you are fetching the changes from the remote and merging them with your local repository. You can pull changes from a remote with the following command:

`git pull remote-name branch-name`;  // fetch + merge changes from the specified branch in the remote

`git fetch remote-name branch-name`;   // fetches changes from the specified branch in the remote

// The difference between pull and fetch is that pull combines fetch and merge. Fetch only fetches the changes from the remote but does not merge them. You can merge them manually after fetching them.



// When you have an error due to unrelated histories, you can use the following command to forcefully pull changes from a remote:

`git pull remote-name branch-name --allow-unrelated-histories`;

// You can also pull changes from a remote and rebase them with the following command:

`git pull --rebase remote-name branch-name`;





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







`GIT TAG`;

// Tags are used to mark important commits. They are usually used for releases. You can create a tag with the following command:

`git tag`;  // lists the existing tags in the commit history

`git tag tag-name`;  // tags the last commit with the specified name

`git push --tags remote-name`;   // pushes all tags to the specified remote


`git tag -d tag-name`;   // deletes the tag with the specified name

`git push --delete remote-name tag-name`;    // deletes the tag with the specified name from the remote


`git checkout tag-name`; // switches to the tag with the specified name     











`GIT REBASE`;

// Lets say you have a branch for a feature and you're ready to add it to the main branch. But the main branch has changed since you started working on the feature branch. By using rebase, you'll be moving the feature branch to the tip of the main branch, creating a linear history/straight line of commits. This is useful for keeping the history clean and easy to understand.

// Rebasing is used to combine a sequence of commits into a single commit. i.e it is used to combine two parralel branches with unrelated features into one branch. You can rebase a branch with the following command:



`git rebase branch-name`;    // rebases the current branch with the specified branch

`git rebase -i branch-name`;     // rebases the specified branch and opens an interactive vim editor     





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







`GIT DIFF`;

// Diff is used to compare changes between commits, branches and more. 

`git diff`; // shows diff between working directory and last commit

`git diff --cached`; // shows diff between staging area and last commit

`git diff commit-hash-1 commit-hash-2`; // compare changes between commits

`git diff branch-name-1 branch-name-2`; // compare changes between branches

`git diff commit-hash branch-name`;  // compare changes between commit and branch





`GIT LOG`;

// Log is used to view the commit history. 

`git log`;   // shows all commits

`git log --oneline`; // shows commits as one liners with commit messages only (first 7 xters of commit hash)

`git log -limit`; // shows limited commits e.g git log -2

`git log --graph`;   // shows a visual graph of commits in full detail

`git log --stat`;    // shows commits with stats, the no. of files changed, lines added, lines deleted

`git log --patch`;   // shows every line of the files in each commit with highlighted diffs

`git log --author="author name"`;    // shows commits by a certain author

`git log --before="date"`;   // shows commits before a certain date





`GIT STASH`;

// Stash is used to save changes that you don't want to commit immediately. You can stash changes with the following command:

`git stash`;

`git stash save "message"`;  // saves changes with message


`git stash --keep-index`;    // keeps changes in staging area









// In summary
`
  git init
  git add .
  git commit - m "first commit"
  git branch - M main
  git remote add origin https://github.com/RomeYerome/flixx-app.git
  git push -u origin main
`





