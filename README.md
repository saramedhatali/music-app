<h2 align="left"> 
Music Database Application </h2> <br>
<p align="left">
  <img  src="https://user-images.githubusercontent.com/77699476/177244440-b8de0802-f70c-4ebe-8aa2-4dc71882c644.png" width="200"> 
</p>

<p align="left">
  This repo contains the music-database-app ( Front-end code ), The information below describes how to get it up and running, please cosider running the <a href="https://github.com/CarMedia2p0DotCom/recruitment-ui" target="_blank">music-service</a> which contains all the endpoints ( Back-end code )
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Technologies](#technologies)
- [Features](#features)
- [Recommendation/Thoughts](#thoughts)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

The aim of this repo is to build the front end to display Artist, Album and Song. Given that the user will be a normal user that navigate the web application searching around our music database for any Artist,Album and Song which prefered by the user.

The architect has defined the entities as follows:
<p align="center">
 <img  src="https://user-images.githubusercontent.com/77699476/177245463-c85071ec-6cc0-4ecb-9b8d-0902cbfb3a0a.png" width="450"> 
</p>

## Installation
- Clone or download the repo
- `npm` to install dependencies
- `npm install` to instal dependencies
- `cp .env.example .env` on the root and start edit the `VUE_APP_API_HOST`, `VUE_APP_API_TOKEN` depending on Music-Service 
- `npm run serve` to start the packager and run the app into a server link
- Navigate to the localhost link given in the console `localhost:8000` , port can be changed!


**Development Keys**: 

* `VUE_APP_API_HOST` : should be changed acccording to the `music-service` build url 
* `VUE_APP_API_TOKEN` : should be changed acccording to the `music-service` authorized user - 
"as there is no authorization enabled - application depends on a static token given from the backend code" 

Please free to get back to me for a detailed process on how to build the application as well as troubleshooting information.

## Technologies

* VueJs, Vuex, Vuetify, Axios, VueRoutes, HTML, CSS, SCSS, JavaScript.

## Features

A few of the things you can do with this music database application "Music Beat":

* View All Albums
* Filter Albums by Name 
* Filter Albums by Release Date 
* Sort Albums from A:Z or Z:A ( Sort By Album Name , Sort By Album Year ) 
* View Album Details to see related ( Album Info, Artist Name, Songs List ) - inside user can sort/filter the Songs list by song name 
* View All Artists 
* Filter Artists by Artist Name
* Sort All Artists from A:Z or Z:A
* View Artist Details ( View a list of related Albums ) 
* View All Songs 
* Filter Songs by Song Name
* Sort All Songs from A:Z or Z:A
* View Song Related Album Details 

* Note: all listing pages ( Album list , Songs List, Artists List ) are paginated , also note that pagination is showen obly if we have more than 10 rows in one page

## Sample UI

* Albums List

![screencapture-localhost-8080-2022-07-06-09_40_54](https://user-images.githubusercontent.com/23010129/177591918-1eec1aea-d696-4d3e-8f43-898305b114d4.png)

* Album Details 

![screencapture-localhost-8080-album-details-4-2022-07-06-09_41_28](https://user-images.githubusercontent.com/23010129/177592024-555cb735-f61a-47cf-8114-ffc163867f2c.png)

* Artists List 

![screencapture-localhost-8080-artists-2022-07-06-09_41_42](https://user-images.githubusercontent.com/23010129/177592053-f8dd5923-df74-4433-a9fa-be64918615aa.png)

* Artist Details 

![screencapture-localhost-8080-albums-Van-Halen-1-2022-07-06-09_41_57](https://user-images.githubusercontent.com/23010129/177592065-00778496-1d77-4e60-a9f4-cde0932e863d.png)

* Songs List 

![screencapture-localhost-8080-songs-2022-07-06-09_42_07](https://user-images.githubusercontent.com/23010129/177592088-bb2c2769-f592-4cc3-993a-9e3b0829f25d.png)


## Thoughts

* Apis can be optimized in a way that reduce the client-side calls, like getting the Album object with including the Artist Name for example ( `Album-1` can have `Artist-1` Name which will reduce the api request to get only the Artit Name; This will help also displying the Albums List with Artist names

* Using GraphQl will help also if we call one request to the server with Objects in relation , so as a developer I will make one api request to get All Albums > each album will have the full data of Artistc > and full data of songs as well


