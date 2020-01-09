# Material Page Block

Blocks angular application UI.

## How to use

After installing the package, follow these steps:

- **Step 1:** Import `PageBlockModule` in `AppModule`.

- **Step 2:** Add `<mat-page-block>` tag in *app.component.html* file. (Tag placement can vary according to application structure. *Make sure this tag must be placed at the last of html page*).

- **Step 3:** Inject `PageBlockService` in constructor.

- **Step 4:** Use `blockPage()` & `unblockPage()` methods to show or hide app blocker.

`blockPage()` method takes `PageBlockOptions` as parameter (Optional) which have following properties:

Property | Type | Default Value
-------- | ---- | ------------
`color` | *'primary'*, *'accent'*, *'warn'* | 'primary'
`fillColor` | *string* | #fff
`fillOpacity` | *number* | 0.5
`text` | *string* | `undefined`
`timeout` | *number* | `undefined`
