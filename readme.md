to run this
1. run tsc -w in a separate cmd window. The compiler will throw errors. because  module angular/core can not be found, etc...
The key thing is that the compiler is instructed to emit .js files even if errors are encountered.

2. run http-server -c-1 (cache minus 1) to serve the Js files to the browser.
make sure that system js imports the dist/main file.


in dev tools go to component.ngfactory.js
 put a breakpoint into detectChangesInternal()
 