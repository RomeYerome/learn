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
