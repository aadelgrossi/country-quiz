# :earth_americas:  country-quiz

Challenge yourself and test your knowledge on countries of the world.

This is a solution for the [country-quiz](https://devchallenges.io/challenges/Bu3G2irnaXmfwQ8sZkw8) dev challenge.

##  :wrench: Setup & Installation
Clone the repository and install dependencies by running.

```sh
$ yarn
```
Run the app on http://localhost:3000 with:
```sh
$ yarn start
```

## :heavy_plus_sign: Extending with custom difficulties

As an additional feature, this implementation allows the user to select a difficulty before starting the quiz. The defaults are:

- Easy (4 questions, 20 countries)
- Medium (8 questions, 30 countries)
- Hard (12 questions, 40 countries)

You can create a custom setting by editing [src/parameters/difficulties.ts](src/parameters/difficulties.ts) to determine a number of questions and specific countries to be used. You can do so by adding a new object to the array:
 
```diff
export const difficulties: Difficulty[] = [ 
    ...
   },
+  {
+    name: 'a new difficulty'
+    numQuestions: 8,
+    countries: 'au;br;ca;ie;at;cu;jm;no;sa;ch;ve;il;hr;ba'
+  }
]
```

**name** (*string*)  
Label that will be displayed on splash screen

**numQuestions** (*number*)  
Self-explanatory.

**countries** (*string*)  
List of countries to be used in this difficulty. Must be a valid IBAN alpha-2 or alpha-3 format code. 
Check the full list [here](https://www.iban.com/country-codes).


## :construction:  TODO
- :x: Live demo

License
----
MIT
