# react-json-editor-ajrm

<p align="center"><img src=http://i.imgur.com/rDgFRtY.gif><br /><br />A stylish, modular, react component for viewing, editing, json and more!</p>

Using npm:

```
$ npm i -g npm
$ npm i --save react-json-editor-ajrm
```

## How to Use

```
    import JSONInput from './src/components/jsoninput';

    <JSONInput
        placeholder = { sampleObject }
        colors      = { darktheme }
        height      = '550px'
    />
```
[**See full working example**](https://github.com/AndrewRedican/react-json-editor-ajrm/tree/master/src/index.js)

## Latest Release Notes
1. Fixed: Component now re-renders when `placeholder` property is updated.
2. Now accepts `border` property for any color theme to specify the color of the border separating the status bar and the code viewer.

## Set Up
If you'd like to interact with it right away. Follow these instructions.
1. Clone github repository
2. Run the following on the command line tool in the local directory of the repo to install dev dependencies: `npm i`
3. Run the following on the command line tool in the local directory of the repo to launch: `npm start`
4. Open browser and set web address to: `localhost:8080`

## Features

1. Write as if you are in a text editor.
2. Checks for syntax mistakes and provides feedback.
3. You can customize color palette as you please.
4. Accepts a javascript object in props.placeholder to display after component mounts. 
5. For any valid textContent, calculates and makes available in this.state as plain text, markup text, and javascript object.

## Built With

* [**React.js**](https://reactjs.org/) and Vanilla Javascript [**Javascript**](https://betterexplained.com/articles/the-single-page-javascript-overview/), ES5, [**ES6**](http://es6-features.org/#Constants)
* Also requires: ``` "babel-plugin-transform-object-rest-spread": "^6.26.0" ```

## Authors

* **Andrew Redican** [andrewredican](https://github.com/andrewredican)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
