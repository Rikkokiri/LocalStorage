# LocalStorage
Local storage related demo/experiment for class WWW Applications at Aalto University

Demo site is available at http://rajala.me/localstorage/

## For developers

Project's stylesheets are written in SCSS. All styles are imported into `main.scss` and thus only that file needs to be compiled and only the resulting `main.css` should be imported in HTML files (alongside Bootstrap). The styles have been broken into multiple files just to improve readability.

To compile `main.css` run the following command in `styles/` directory.
```
sass main.scss main.css
```

To automatically compile the stylesheets each time you make changes, run the following command:
```
sass --watch main.scss main.css
```

Now each time you change `main.scss` or any of the files imported to it, the stylesheets is automatically compiled to CSS. To learn more about SCSS/SASS, visit [sass-lang.com](https://sass-lang.com/guide).