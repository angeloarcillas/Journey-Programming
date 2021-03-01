
```bash
# STD IN/OUT/ERR

# stdout
echo "Hello World!" > a.txt # '>' overwrite
echo "Hello World!" >> a.txt # '>>' append

# stdin
echo < a.txt > b.txt # '<' in

# stderr
ls /fake/path 2> log.txt # '2>' show error message only
ls /fake/path 2>&1 # output and error
ls /fake/path &> log.txt # shorthand for output and error
ls /fake/path 2> /dev/null # '/dev/null' null device (special file)

# pipe '|' - output to input
ls | tee log.txt


# USER MANAGEMENT
/etc/sudoers # sudo users
# 'X' stored in /etc/shadow | '*' no login access | ' ' no password
/etc/passwd # user info
/etc/shadow # user password info
/etc/group # mange group

# PERMISSION
d | rwx | r-x | r-x  # filetype | user | group | other

chmod # change permission
chown # change owner
chgrp # change group
unmask # remove permission

# setuid - allows a user to run a program as the owner
# of the program file rather than as themselves
# sudo chmod 4755 myfile (numeric way)
sudo chmod u+s myfile # rwsr

# setgid - same as setuid but on group
sudo chmod 2555 myfile
sudo chmod g+s myfile

# sticky bit - only owner/root can delete
sudo chmod +t mydir
sudo chmod 1755 mydir

# PROCESS PERMISSION
effective user ID # grant right access
real user ID # launched process
saved user ID # a process to switch between the effective UID and real UID, vice versa

```