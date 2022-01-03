# ViwerjsAngular

This project is simple use of viwerjs library in Angular

## Installation
 
 Install our package  `npm i viwerjs-ang`
 then install `npm i viwerjs`

## import css

import css from viwerjs 

`@import '~viewerjs/dist/viewer.css';`

## use 

add  directive `viwerjsAngPreview` on any image you want to show preview.
also you can pass options for custom chagnes
more information check viwerjs library

Example : 

`  <img
    viwerjsAngPreview
    width="200"
    [options]="{}"
    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  />
`


