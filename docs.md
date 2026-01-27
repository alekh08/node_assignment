# steps to create and import module for mathematical functions

1. create new folder in drive
2. open node js terminal as administrator
3. in terminal:
    - open folder directory
    - run "npm init -y"
4. open vs code:
    - rename the type in package.json module
5. create math.js export mathematical functions
6. create app.js (call the function that are made in math.js)
7. run app.js


# Command line Argument
    Values passed to a program through command line or terminal

    1. agrc: argument count --- It counts the value of arguments
        - if there are 3 var in program then agrc will be 4 (3 for var and 1 for program)
    
    2. agrv: An array of character pointers listing all the arguments. argv[0] is the name of the program, and argv[1] to argv[argc-1] are the command line arguments.



# difference between require and import?

    - require: synchronous, can be anywhere in the code, commonjs (old or traditional), default


    - import: asynchronous, only on the top of the file, ES6 (new), requires the enabling of es6 module


#
