# GIT
> A distributed version-control system for tracking changes in source code during software development.

## Basic
```bash
# !Note: remote => remote branch

git add <file>                         # Add new/changed files to stage
git commit -m "message"                # Commit staged files w/ message
git push                               # Push local branch to remote
git pull                               # update local branch from remote

git branch <branch>                    # Create branch
git switch <branch>                    # Switch branch
git branch -d <branch>                 # Delete branch
git merge <branch>                     # Merge branch with current branch

git status                             # Show the working tree status
git log                                # show log of commits
git restore <file>                     # Restore working tree files(undo)
git rm <file>                          # remove <file> from local branch
```


## Create New Repository
1. git init -b `<branch>` `<repo>`
2. cd `<repo>`
3. touch README.md
4. git add README.md
5. git commit -m "add README to initial commit"
6. git remote add origin https://github.com/USERNAME/REPOSITORY.git
7. git push --set-upstream-to origin `<branch>`


## Clone Existing Repository
1. git clone https://github.com/USERNAME/REPOSITORY.git
2. cd `<repo>`


## Make Changes to Repository
1. git add `<files>`
2. git commit -m `"<message>"`
3. git push


## Contribute to repository
1. git clone https://github.com/USERNAME/REPOSITORY.git
2. cd `<repo>`
3. git branch `<branch>`
4. git switch `<branch>`
5. git add `<files>`
6. git commit -m `"<message>"`
7. git push


## Git Branch
```bash
git branch <branch>                           # create branch
git checkout <branch>                         # goto branch
git checkout -b <branch>                      # create and goto new branch
git checkout -d <branch>                      # delete branch
git merge <branch>                            # merge branch to current branch
git push origin :<branch>                     # delete remote branch
```


## Git Tag
```bash
git tag                                       # shows all the tags
git tag -a <tag-name> -m "<message>"          # creates an annotated tag
git show <tag-name>                           # shows the description of <tag-name> tag
git tag --delete <tag-name>                   # deletes the <tag-name> tag in local directory
git push --delete origin <tag-name>           # delete <tag-name> tag in remote (be careful to not delete a branch)
git push origin <branch-name> <tag-name>      # push <tag-name> tag to remote in <branch-name>
git fetch --tags                              # pulls the tags from remote
```


## Git Stash
```bash
git stash                                     # stashes the staged and unstaged changes
git stash -u                                  # stash everything including new untracked files (but not .gitignore)
git stash save "msg"                          # stash with a msg
git stash list                                # list all stashes
git stash pop                                 # delete the recent stash and applies it
git stash stach@{2}                           # delete the {2} stash and applies it
git stash show                                # shows the description of stash
git stash apply                               # keep the stash and applies it to the git
git stash branch <branch-name> stash@{1}      # creates a branch from your stash
git stash drop stash@{1}                      # deletes the {1} stash
git stash clear                               # clears all the stash
```


## Git Clean
```bash
git clean -f                                   # clean untracked files permanently
git clean -f -d/git clean -fd                  # To remove directories permanently
git clean -f -X/git clean -fX                  # To remove ignored files permanently
git clean -f -x/git clean -fx                  # To remove ignored and non-ignored files permanently
```