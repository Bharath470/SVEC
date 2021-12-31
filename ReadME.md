### Media quries
- Extra small devices (mobiles) 
    - max-width:600px
- small devices (large phones) 
    - min-width:600px
    - max 
- medium devices (small laptops)
    - min-width-768px
- Large devices (Large laptops or desktops)
- extra large devices 


....
@media only screen (max-width:320px){
    CSS code
}
....

@media only screen (min-width:320px) and (max-width:500px){
    CSS code
}
....


### Bootstrap 4.6
- CSS framework
- modules (collection of functions and classes)
- package (collection of modules)
- Library (collection of packages)
- Framework (collection of libraries)
+ module --> package --> library --> framework

+ type of modes
    - offline (getbootstrap.com)
    - online 
        - CDN links
+ background-color - bg
+ text-white
+ margin in Bootstrap (m-* (0-5))
    - 0 --> 0 rem
    - 1 --> 0.25 rem (4px)
    - 2 --> 0.5 rem (8px)
    - 3 --> 1 rem (16px)
    - 4 --> 1.5 rem (24px)
    - 5 --> 3 rem (48px)
    - ml-8 (margin left)
    - m (margin in all directions)
    - mt (margin-top)
    - mb (margin-bottom)
    - mr (margin-right)
+ padding (padding-left --> pl-5)

+ colors
    - primary
    - secondary
    - info
    - success
    - warning
    - danger
    - light
    - dark
    - white

+ We can use color classes for 
    - Buttons (btn btn-primary)
    - text (text-white)
    - background (bg-secondary)
    - alerts (alert alert-primary)

+ Grid System
    -   col-sm-12
    - sm (small devices)
    - md (medium devices)
    - lg (large devices)
    - xl (Extra large devices)

+ Modal
+ Table




### JavaScript

+ In 1995 Brenden Eich introduced javascript (ES-262)
+ JavaScript is loosely toupled and dynamic language 
+ It is a text based programming language and we can run in client-side and server-side 
(node.js) for dynamic web applications.
- tied up with ECMA (ES-1 to ES-11 except ES-4) (ES-6 can be used)
    - let & const
    - map()
    - arrow function
    - classes
    - spread operator
    - rest parameter
    
+ datatypes
    - Number
    - BigInt(2^53-1)
    - String
    - Boolean
    - Undefine
    - Null
    - object
    - Array

+ variables
    - var , let & const
    - scope
        - function level --> var
        - block level --> let & const
    - redefine --> var , let
    - redeclare  --> only var

+ typeof()

+ Objects

    - pair of key and value 
    - ex: 
    {
        name:"kalyan",
        std:"udu"
    }


+ Arrays

### Alerts
+ to generate notifications
    - alert
    - prompt (to take input from the user)
    - confirm 

+ console statements
    - `console.log()`
    - `console.info()`
    - `console.warn()`
    - `console.error()`     

+ spread operator

...
    ...VariableName
...


+ Rest Parameter
    + to handle function parameters

...
    ...parameter
...

+ Destructuring of array & objects

+ Functions

    - Function with functionname
    ...
    function demo(x,y){
        return x+y
    }
    demo()
    ...


    - anonymous function
    ...
    let demo=function(x,y){
        return x+y
    }
    ...

    - Arrow function

    ...
    let demo= (x,y)=>{
        return x*y
    }
    demo(3,4)
    ...


+ for
    - for-in
        - to get index values of the index
    - for-of
        - to get elements in an array    
    - forEach() --> ES5
    + map --> ES-6


### DOM
- Document Object model

- document
- history 
- window
- navigator

+ DOM methods
- `getElementsById()`
- `getElementsByClassName()`
- `querySelector()`
- `innerText`
- `textContent`
- `append`
- `appendChild`
- `innerHTML`
- `setAttribute()`
- `classList`
- `style`
- `src`


###  JSON
+ Java Script Object Notation
    - To exchange information between application and server
    ...
    {
        "name":"Bharath Tumati",
        "salary":"6.5 LPA",
        "designation":"MERN Developer",
        "mobile":8179157847
    }
    ...

+ Ajax call or promises (fetch API) or axios



#### ReactJS


### Features of ReactJS

+ It is a library
+ It follows component based architecture
    - Function component
    - class component
    - Pure component
    - Higher order component
+ It provides virtual DOM    
+ it provides JSX (JavaScript and XML)
+ Uni-directional data flow
+ Single Page Applications

+ Project Environment setup
    - [DownloadVisualstudioCode]
    - [DownloadNode.js] (https://nodejs.org/en/download/)
    - install nodejs and check versions of `node` and `npm`
        - `node -v`
        - `npm -v`
    - `webpack` and `babel`
    - `create-react-app`
        - `npm install create-react-app`
            -`create-react-app projectname`    
    -  `npx create-react-app appname`
    
+ Index.html
+ index.js
+ App.js
    + IndexPage
        - nav.js    
        - body.js
        - footer.js

        + Home.js
            - nav
            - body
            - footer

        + Login.js 
        + Register
        + About
        + contact
            - 