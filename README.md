# Chalk.io
A web application for creating resumes that can easily be modified to tailor it
to a specific job application. This will easy the burden of maintaining multiple versions of your resume by providing a single source of truth, where you can edit the information that is shared by multiple resumes in one place, without information duplication.

When this web application is complete, you will easily be able to:
- Use different templates for your resume.
- show or hide some information in some resume by a single click of a button without deleting it.
- Rearrange your information using drag and drop. 
- Convert your resume to PDF and DOCX.
- You will be able to use this service for free. 

## Getting started

```bash
 $ git clone https://github.com/kaddy120/chalk  && cd chalk
```

### Development

### Running the code

. </br>
├── server/ </br>
├── front-end/ </br>
├── compose-prod.yaml </br>
├── compose.yaml </br>
└── README.md  </br>


For development, you can use Docker or develop in your machine. 


### Server Setup

#### Config Authentication
The web app uses Github and Google [OAuth2](https://datatracker.ietf.org/doc/html/rfc6749) for authentication. Before you can use Github and Google OAuth, you must register your application by creating a new project in the [Google Developer Console](https://console.developers.google.com/) and follow [Creating an OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) guide for Github. 

When registering the app, use:
- `http://localhost:3000/api/v1/auth/google/callback` as Authorization callback URL for Google.
- `http://localhost:3000/api/v1/auth/github/callback` as Authorization callback URL for Github.

When you complete your application registration, you will get `Client ID` and
`Client Secrets` for both Google and Github. Write them in your `.env` file.


Create `.env` file in your `./server` by running:

First, change to server directory.
```bash
 $ cd server/
```

In **Linux/Unix system**, create `.env` file using: 
```
 $ touch .env
```
In **Windows system**, create `.env` file using:
```
 type nul > .env
```

The content of `server/.env`

```conf
NODE_ENV=development
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

#### Connect to the Database

The app uses **mongoDB** database to store use data. There are several ways in which
you can use **mongoDB** for this application. You can either [install it in your
machine](https://www.mongodb.com/docs/manual/administration/install-community/) or use it with `Docker`, or use [mongodb Atlas](https://www.mongodb.com/atlas/database). 

If you intent to use mongoDB with docker, we have already configured it. You can simply run the container using: 

```
 $ docker compose up -d mongo
```

#### Installation and running
To install the application dependencies and start the server, run: 

```bash
 $ npm install \ 
   npm run dev
```

Test if you have configured the app's OAuth correctly by opening the URLs below in a browser to login in your using Google and Github OAuth. 

- `http://localhost:3000/api/v1/login/google` 
- `http://localhost:3000/api/v1/login/github` 

When you successfully login, you will get redirect to your frontend at `http://localhost:5000`

### front-end
Go to the front-end directory:
```
 $ cd front-end
```

To install the application dependencies and start the front-end, run: 
```
 $ npm install \ 
   npm run dev
```

The front-end is listening at `http://localhost:5000`.

#### Using Docker
Running the code in docker is quite straight forward, but you first have to
ensure that you have docker running in your machine.

```bash
 $ docker compose up -d 
```

 The above command creates three containers which are running `mongoDB`,
`frontend`, and `backend server`.

Verify that the mentioned containers are running using:
```
 $ docker ps
```

In case you don't want to run all this service using docker, you can run
selected images. For instance, only `mongo` and `frontend`, run:

```bash
 $ docker compose up -d mongo frontend
```

If you want to rebuild the image, use `--build` flag.

To see the output log from the container, run

```
 docker logs -f <mongo|frontend|server> 
```


### Running in production 

SSL certificate


## Similar site
