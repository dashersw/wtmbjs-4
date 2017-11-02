# REST API example with Express.js

Clone the repository:

```
git clone git@github.com:dashersw/wtmbjs-4.git
```

Enter the project folder and install dependencies:

```
cd wtmbjs-4
npm install
```

Run the project:

```
node index.js
```

----

## Final step

Check out the `final` branch to see the whole project in action.

```
git checkout final
```

And run the code again.

You can visit the following URLs;

| URL | Description
| --- | ---
| `http://localhost:3000` | Index page
| `http://localhost:3000/person` | People JSON
| `http://localhost:3000/person/all` | People list
| `http://localhost:3000/person/:personId` | Person detail page with `personId`

`http://localhost:3000/person` also supports `POST` and `DELETE` actions to
create new records or delete given records.
