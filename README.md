# MODULE FEDERATION || MICRO FRONTEND - PROJECT


## Installation and Run all the applications on parallel ( Mono Repos )

```bash
yarn
yarn start
```


## Inside APP1 and APP2
### Installation 

```bash
npm i
```

## Running the APP1 or APP2

````bash
# development
npm start
````
## What does the Project do ?
Here, we have two applications APP1 and APP2 and we are exposing HEADER Component from APP2.
Now the exposed component is shared from APP2 and used in APP1 with dynamic props to leverage the power of micro-frontends. Both the applications are running seperately and are independent projects with indepedent builds of their own.