`GIT TAG`;

// Tags are used to mark important commits. They are usually used for releases. You can create a tag with the following command:

`git tag`;  // lists the existing tags in the commit history

`git tag tag-name`;  // tags the last commit with the specified name

`git push --tags remote-name`;   // pushes all tags to the specified remote


`git tag -d tag-name`;   // deletes the tag with the specified name

`git push --delete remote-name tag-name`;    // deletes the tag with the specified name from the remote


`git checkout tag-name`; // switches to the tag with the specified name     

