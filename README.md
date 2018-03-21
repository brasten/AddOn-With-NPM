# AddOn_With_NPM

Demonstrates using NPM + clasp to build Apps Script projects in a modular way.

## Prerequisites

You'll need a working Clasp installation: [https://github.com/google/clasp](https://github.com/google/clasp)

After installing clasp, go to the `MasterAddOn` directory in this repository.

Initialize a new Google Apps Script project:

```
clasp create MasterAddOn
```

Install dependencies (LibraryOne) with NPM:

```
npm install
```

Push the project to script.google.com:

```
clasp push
```

Open the project:

```
clasp open
```

You can verify the LibraryOne code is useable by running the script as an add-on, or by running the onOpen function from the script editor.

## Authors

* **Brasten Sager** [brasten](https://github.com/brasten)

## License

This project is licensed under the MIT License.
