# open_source-rendu-js

## Explaination
<hr>

This library allows you to add random grades to students listed on a csv file and adds the average to the last line of the csv.

The csv must be in this form:
```
Student_pk;Nom;Prenom;Note;Commentaire
12312321312;DOE;John;;
12312321313;DOE;Maria;;
```

The final rendering of the csv will be:
```
Student_pk;Nom;Prenom;Note;Commentaire
"12312321312";"DOE";"John";10;""
"12312321313";"DOE";"Maria";9;""
average;13
```




## Install
<hr>

### Dowloard library

```bash
npm i yannisobert-open_source-rendu-js
```
or

```bash
yarn add yannisobert-open_source-rendu-js
```


### Create "data" folder in the project folder and go in
```
mkdir data
```

### Create "students.csv" in the "data" folder

## Usage
<hr>

In our library we find three functions:

<strong>convertToCSV:</strong>

The convertToCsv() function will first add the headers of our future csv file by taking the header of the base csv file.
Then will add line by line by modifying the cell of the notes of the old lines.
Finally, he will add a line at the end where we will find the average of all the notes.


<strong>getRandomNumber:</strong>

The getRandomNumber() function will send, when called, a random number.

<strong>mean:</strong>

The mean() function receives an array of values and returns its mean.


## Linter & Test
<hr>

To run the linter and the tests, you need to run the following command:

```bash
npm run eslint
```

```bash
npm run test
```

## License

<hr>
The MIT License. Please see <a href="https://github.com/yannisobert/open_source-rendu-js/blob/main/LICENSE">License File</a> for more information.


