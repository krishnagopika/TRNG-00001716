# Angular

Angular is a framework built on TypeScript. Angular includes:

- A component-based framework to create single-page applications and scalable applications.
- A collection of well-defined libraries that include many features like routing, and client-server management etc.
- Tools to develop, build, test and deploy a front-end application.


Angular should be preferred as a front-end framework when:

1. Developing Large scale dynamic applications

   - Reusable components make it easier to build and manage complex architecture and dynamic elements.

2. Developing PWAs and SPAs

   - Progressive Web Applications (PWA): A website that is similar to a mobile app is called PWA. The goal of PWA is to blur the gap between native apps and the mobile web.

   - Single Page Application (SPA): A single page application is a web app which is built with multiple components, unlike normal web pages, SPA's are loaded only once and they improve the user experience by avoiding multiple web pages and waiting time to load the webpages.

3. Developing cross-platform applications

   - Angular web apps are compatible with both desktop and mobile.

4. You have a massive project with massive team

   - Many developers can work on the same Angular project without any maintenance and error debugging issues.


Angular is widely used as a frontend framework for many webpages, a few famous webpages built using Angular are:

1. Google
   - Google Play Store
   - Google Voice App
   - G Suite Homepage
   - Google Open Source
   - Google Play Books
   - Google Arts and Culture
   - Google.org Website 
   - Gmail

2. Microsoft Xbox
    - Microsoft Homepage
    - Microsoft Azure
    - Microsoft Flow
    - TimeFind
    - Microsoft Support Page

3. Forbes
4. Paypal
5. Deutsche Bank
6. UpWork
7. The Guardian 
8. Weather.com

# Angular JS vs Angular

- AngularJS is the first version of Angular or Angular1.X. 


The main differences between AngularJS and Angular are:

| AngularJS                                                                                     | Angular                                                |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| JavaScript based                                                                              | TypeScript based                                       |
| Uses Directives                                                                               | Uses Components                                        |
| Uses the ng-model directive for two-way binding and the ng-bind directive for one-way binding | Uses ngModel directive for one-way and two-way binding |
| MVC (model-view-controller) based framework                                                   | Component-based framework                              |
| Doesn’t provide mobile support                                                                |  Provides mobile support                               |
| Relies on third-party tools as IDE and WebStorm                                               | Uses Command Line Interface (CLI)                      |



Angular setup is a quick process, and the requirements are

1. Node.js should be installed.
2. Node package manager (npm), which is installed along with Node.js is required to build and run Angular applications.
3. Finally Angular CLI is installed using npm.

**Node.js**

- Node.js is a JavaScript runtime built on Chrome V8 JavaScript engine.
- Node.js is used for web development, Mobile development, Desktop Development and IoT development.

**NPM**

- The npm(Node Package Manager) is installed with Node.js.
- npm is used to download all public software packages like Angular.
- The npm is open source and developers use it to share software.


### Single Page Application

SPA (Single Page Application) is a web application that dynamically rewrites a single web page with new data from the server.

- The following image explains the working of SPA.

![SPA](/resources/SPA.PNG)

- For initial request from the client, an HTML page is the response.
- From the second request the page is dynamically rewritten using JavaScript APIs.


### Benefits of using SPA

- **Quick loading time**: Unlike MPA (Multi-page application) HTML page is loaded only once in SPA.
- **fluid user experience**: SPA's provide an experience like a desktop or mobile app.
- **Ease in building feature-rich apps**: Adding new features to a web application is easy in SPA.
- **Less bandwidth use**: SPA's load page only once. So, they consume less bandwidth.

### Drawbacks of using SPA

- SPA loads a single page, which is a disadvantage for SEO.
- SPA requires many browser resources.
- SPA's are prone to cross-site scripting attacks, this causes security issues.



## @NgModule

Every Angular application consists of at least one module, the root module. We bootstrap that module to launch the application.

NgModules are TypeScript classes decorated with the [@NgModule](https://angular.io/api/forms/NgModel) decorator imported from the `@angular/core` package.

NgModule takes metadata and describes how to compile a component's template and how to create an injector at runtime. It identifies the module's components, directives, and pipes and makes them public through the export property which can be used by external components.

The Angular CLI generates the basic *AppModule* (src/app/app.module.ts file) when creating a new application.

`@NgModule` takes the below metadata to launch the application:

- **declarations** —  contains a list of components, directives, and pipes, which belong to this module. 

- **imports** —  contains a list of modules, which are used by the component templates in this module reference.  For example, we import *BrowserModule* to have browser-specific services such as DOM rendering, sanitization, and location. 

- **providers** — the list of service providers that the application needs.

- **bootstrap** — contains the root component of the application.

Angular CLI creates an application with one component (AppComponent), so it is in both the declarations and the bootstrap arrays.


## Webpack

- Webpack is a powerful module bundler.
-  A JavaScript file that  contains all the files that belong together and served to client in a response to single file request is called bundle.
-  A bundle can include JS, CSS, HTML and almost any other type of files.

The following files can be configured in webpack:

- **Entry**: The module where webpack starts.
- **Output**: The bundles created by webpack are emmited here.
- **Loaders**: Used in webpack to process more than JavaScript files.
- **Plugins**: A JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.


## Component 
Components are building blocks of Angular applications.

A component consists of:
1. An HTML template.
2. A CSS selector.
3. Optional CSS Styles applied to the template
4. A TypeScript class that defines the behaviour of the component.


### Advantages of Angular Components
- Using Angular Components a Single Page Application can be created.
- Angular components are independent. So, if an error occurs with one component, the functionality of the other component might not be affected.
- Angular components support lazy loading (only components necessary at a particular time are loaded and the Application runs smoothly).
- As Angular Components are independent, it is easy to maintain the code.

**Component Decerator**
- `@Component`, is the component decorator which marks the class as an Angular component and provides metadata about how the component works during the runtime.
- Every Angular Project has a default component called, app.component.

* **app.component.css** -  holds all the CSS styles 
* **app.component.html**  -  this template contains typical HTML elements and alters the HTML based on our app's logic and DOM manipulations. 
* **app.component.ts** -  contains typescript code to control the component behaviour.

Let's have a look at the app.component.ts file under the app folder and understand the code behind the root component of the application.

```typescript
import { Component } from '@angular/core';

 @Component ({
 selector: 'app-root',
 templateUrl: './app.component.html' ,
 styleUrls: ['./app.component.css']
 })
 export class AppComponent {
 title = 'my first app';
 } 
```
In this file, we export the *AppComponent* class, and we decorate it with the `@Component` decorator, imported from the `@angular/core` package, which takes a few metadata, such as:

-  **selector:** A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. For example, if an app's HTML contains <app-root></app-root>, then Angular inserts an instance of the AppComponent view between those tags.

- **templateUrl:** The module-relative address of this component's HTML template. Alternatively, you can provide the HTML template inline, as the value of the **template** property. 

-  **styleUrls:** This is an array of relative paths to where the component can find the styles used to style the HTML view. Alternatively, you can provide the CSS Style inline, as the value of the **styles** property.


- A component must belong to the `Ng Module`, for it to be available for another component.

### How to create a component in Angular?

Run the `ng generate component <component_name>` or `ng g c <component-name>` command in the terminal to create a component.



## Components Life Cycle Hooks

- Angular Component Lifecycle is described using the Lifecycle Hooks.

Angular creates a component; renders it; creates and renders its children; checks it when its data-bound properties change; and destroys it before removing it from the DOM. These events are called **Lifecycle Hooks**. These Lifecycle hooks have eight different function calls which correspond to the lifecycle event. Every angular component has a life cycle event carried out in 2 different phases -  one linked to the component itself and the other linked to the children of that component.

## Eight lifecycle hooks in Angular

The below diagram illustrates the order in which the eight hooks are executed.

![Lifecycle Hooks](/modules/resources/hooks.png)

**constructor()** - The constructor of the component class gets executed first, before the execution of any other lifecycle hook events. If we need to inject any dependencies into the component, then the constructor is the best place to do so.

#### Lifecycle Hooks

**ngOnChanges()** - Called whenever the input properties of the component change. It returns a *SimpleChanges* object which holds any current and previous property values.

**ngOnInit()** - Called once to initialize the component and set the input properties. It initializes the component after Angular first displays the data-bound properties. 

**ngDoCheck()** - Called during all change-detection runs that Angular can't detect on its own. Also called immediately after the `ngOnChanges()` method.

**ngAfterContentInit()** - Invoked once after Angular performs any content projection into the component’s view.

**ngAfterContentChecked()** - Invoked after each time Angular checks for content projected into the component. It's called after `ngAfterContentInit()` and every subsequent `ngDoCheck()`.

**ngAfterViewInit()** - Invoked after Angular initializes the component's views and its child views.

**ngAfterViewChecked()** - Invoked after each time Angular checks for the content projected into the component. a It called after `ngAfterViewInit()` and every subsequent `ngAfterContentChecked()`.

**ngOnDestroy()** - Invoked before Angular destroys the directive or component.


# Sharing data between child and parent components

In Angular data is shared among the parent and child components using

Angular uses `@Input` and `@Output` decorators to flow data between components. We can also use Angular services to flow data between the components. If we have to pass data into a component we use the `@Input` decorator, and if we have to emit the event or data from a component we use the `@Output` decorator with the `EventEmitter` API.

![Component Interaction](/modules/resources/component-interaction.PNG)

### `@Input` decorator

In Angular, the [`@Input`](https://angular.io/api/core/Input) decorator is defined in the [@angular/core](https://angular.io/api/core) package that marks a class field as an **input property** and supplies configuration metadata.

![Input flow](/modules/resources/input-flow.PNG)

### Component events with EventEmitter and `@Output`

In Angular, a component can emit an event using [`@Output`](https://angular.io/api/core/Output) and [EventEmitter](https://angular.io/api/core/EventEmitter) API in the [@angular/core](https://angular.io/api/core) package.

`@Output` decorator that marks a class field as an **output property** and supplies configuration metadata.

![Output Flow](/modules/resources/output-flow.PNG)

### Event Emitters in Angular

An [EventEmitter](https://angular.io/api/core/EventEmitter) is used to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.


### Directives

 A Directive is a custom HTML element or attribute used to power up and extend our HTML 

- Directives fall into one of three categories
    - Component Directive: established in the selector attribute of the @Component decorator 
    - Structural Directive: changes the structure or layout of a view by manipulating, adding, or removing elements and their children 
        - `*ngIf`: takes a boolean expression and makes an entire chunk of the DOM appear or disappear (exposed in BrowserModule)
        - `*ngFor`: used to create for loops, at minimum needs a looping variable and a list (exposed in BrowserModule)
        - `ngSwitch` : (actually a set of directives and ngSwitch is an attribute directive since it controls the behaviour of *ngSwitchCase and *ngSwitchDefault)
            - ngSwitch
            - *ngSwitchCase
            - *ngSwitchDefault
    - Attribute Directive: listens to and modifies the behaviour of other elements, attributes, properties, and components. However, usually applied to attributes 
        - NgClass : adds and removes a set of CSS classes 
        - NgStyle : adds and removes a set of HTML styles
        - NgModel : allows for two-way data binding to an HTML form element (exposed in FormsModule)

### Differences between Directives and Components

In a short note, A component(@component) is a directive-with-a-template.

- Some of the major differences are mentioned in a tabular form

    | Component | Directive |
    |---- | ---------
    | To register a component we use @Component meta-data annotation  | To register directives we use @Directive meta-data annotation |
    | Components are typically used to create UI widgets| Directive is used to add behaviour to an existing DOM element |
    | Component is used to break up the application into smaller components| Directive is used to design re-usable components|
    | Only one component can be present per DOM element | Many directives can be used per DOM element |
    | @View decorator or templateurl/template are mandatory | Directive doesn't use View|



<br>
<i> <b>Note</b>: detailed explanation about attribute directives and structural directives will be given in the upcoming modules.</i> 



## Content Projection

Content projection is the process of inserting or projecting the content into the desired component.

### Implementations of contnet projection

1. Single-slot content projection: projecting content to a component from a single source.
2. Multi-slot content projection: projecting content to a component from multiple sources.
3. Conditional content projection: the content projected is rendered only when the conditions are satisfied.

### <ng-content>

`<ng-content>` is a placeholder, used to project the message into the component.

- `<ng-content>`, `<ng-template>` and `<ng-container>` are used for content projection


## Binding

- The data transfer between the part of the Template and the model is called Binding.
- Binding is used to synchronize the view and model, and the Change detection algorithm is used for this process.

### One way binding


1. Text Interpolations: Text interpolation is a one-way transfer of data from a TypeScript file in a model to an HTML template.
2. Property Binding: The properties of HTML elements in the template can be dynamically modified by transferring data from TypeScript. it is used to set a specific element property.
3. Event Binding: Listens for an element change event. Mostly event binding is used to listen to user actions.

Other types of binding are :

1. Attribute binding: Used to improve accessibility, style the application dynamically and manage multiple CSS classes and styles simultaneously. 
2. Class and style binding:  Used to add and remove CSS class names from an element's class and also to set styles dynamically.

## 2-way binding
Conventionally two-way binding is achieved by combining property binding/text interpolation and event binding, but in Angular, this is achieved by "[()]". Two-way binding is used to listen for events and update values.

![Two Way Binding](/modules/resources/TwoWayBinding.PNG)

## Pipes

In any full stack application, the data is received from the backend in HTTP format. when that data is displayed on the HTML page, the format should be changed. The pipes are used to transform data from one form to other.

Pipes are classified into two types.

1. Default Pipes
2. Custom Pipes

Data, currency, case and percent are a few commonly used default pipes.

The syntax for pipe is:

```html
{{ text | pipe_name }}
```
where `{{}}` represent the Text interpolation and `|` is the syntax for the pipe.


 




