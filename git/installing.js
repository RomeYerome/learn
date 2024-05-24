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
