
## The RxJs In Practice Course

This repository contains the code of the [RxJs In Practice Course](https://angular-university.io/course/rxjs-course).

This course repository is updated to Angular v20:

![RxJs In Practice Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png)


# Installation pre-requisites

Please use Node 22 LTS (Long Term Support version).

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/rxjs-course.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd rxjs-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install 

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

In order to be able to provide realistic examples, we will need in our playground a small REST API backend server. We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)



# Important 

This repository has multiple branches, have a look at the beginning of each section to see the name of the branch.

At certain points along the course, you will be asked to checkout other remote branches other than master. You can view all branches that you have available remotely using the following command:

    git branch -a

  The remote branches have their starting in origin, such as for example 1-navigation-and-containers.

We can checkout the remote branch and start tracking it with a local branch that has the same name, by using the following command:

      git checkout -b section-1 origin/1-navigation-and-containers

It's also possible to download a ZIP file for a given branch,  using the branch dropdown on this page on the top left, and then selecting the Clone or Download / Download as ZIP button.

# Other Courses
# Modern Angular With Signals

If you are looking for the [Modern Angular With Signals Course](https://angular-university.io/course/angular-signals-course), the repo with the full code can be found here:

![Modern Angular With Signals Course](https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-signals-course.jpg)

# Angular PWA Course

If you are looking for the [Angular PWA Course](https://angular-university.io/course/angular-pwa-course), the repo with the full code can be found here:

![Angular PWA Course - Build the future of the Web Today](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png)

# Angular Security Masterclass

If you are looking for the [Angular Security Masterclass](https://angular-university.io/course/angular-security-course), the repo with the full code can be found here:

[Angular Security Masterclass](https://github.com/angular-university/angular-security-course).

![Angular Security Masterclass](https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png)

# Angular Advanced Library Laboratory Course

If you are looking for the Angular Advanced Course, the repo with the full code can be found here:

[Angular Advanced Library Laboratory Course: Build Your Own Library](https://angular-university.io/course/angular-advanced-course).

![Angular Advanced Library Laboratory Course: Build Your Own Library](https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png)


## RxJs and Reactive Patterns Angular Architecture Course

If you are looking for the RxJs and Reactive Patterns Angular Architecture Course code, the repo with the full code can be found here:

[RxJs and Reactive Patterns Angular Architecture Course](https://angular-university.io/course/reactive-angular-architecture-course)

![RxJs and Reactive Patterns Angular Architecture Course](https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png)



## Angular Ngrx Reactive Extensions Architecture Course

If you are looking for the Angular Ngrx Reactive Extensions Architecture Course code, the repo with the full code can be found here:

[Angular Ngrx Reactive Extensions Architecture Course](https://angular-university.io/course/angular2-ngrx)

[Github repo for this course](https://github.com/angular-university/ngrx-course)

![Angular Ngrx Course](https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-angular.png)



## Angular 2 and Firebase - Build a Web Application Course

If you are looking for the Angular 2 and Firebase - Build a Web Application Course code, the repo with the full code can be found here:

[Angular 2 and Firebase - Build a Web Application](https://angular-university.io/course/build-an-application-with-angular2)

[Github repo for this course](https://github.com/angular-university/angular-firebase-app)

![Angular firebase course](https://angular-academy.s3.amazonaws.com/thumbnails/angular_app-firebase-small.jpg)


## Complete Typescript 2 Course - Build A REST API

If you are looking for the Complete Typescript 2 Course - Build a REST API, the repo with the full code can be found here:

[https://angular-university.io/course/typescript-2-tutorial](https://github.com/angular-university/complete-typescript-course)

[Github repo for this course](https://github.com/angular-university/complete-typescript-course)

![Complete Typescript Course](https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png)



Note : 

    //what is stream in angular rxjs ?

    // Streams in Angular, particularly in the context of RxJS, are sequences of asynchronous events or data that can be observed and reacted to over time.
    // They allow developers to work with asynchronous data flows, such as user inputs, HTTP requests, or any other event-driven data source.
    // Streams can be created using Observables, which are a core part of RxJS, and they provide powerful operators to transform, filter, and combine data streams.


    //what is rxjs ?
    // RxJS is a library for reactive programming using Observables, making it easier to compose asynchronous or callback-based code.
    // It provides a way to work with asynchronous data streams, allowing developers to handle events, HTTP requests, and other asynchronous operations in a more declarative and functional style.
    // RxJS is often used in Angular applications to manage asynchronous data flows, such as handling user inputs, HTTP requests, and real-time data updates.
    // RxJS is a powerful library that provides a wide range of operators for transforming, filtering, and combining streams of data.
    // It is widely used in Angular applications to handle asynchronous operations, such as HTTP requests, user inputs, and real-time data updates.

    //what is an RXJS Observable?
    //An Observable is a stream of data that can be observed over time. It allows you to work with asynchronous data streams, such as user inputs, HTTP requests, or any other event-driven data source. Observables can emit multiple values over time and can be subscribed to in order to react to those emitted values. They are a core part of the ReactiveX library and are widely used in Angular applications for handling asynchronous operations and events.
    //example:
    ```
    const observable$ = new Observable(subscriber => {
      subscriber.next('Hello');
      subscriber.next('World');
      subscriber.complete();
    });
    observable$.subscribe({
      next: value => console.log(value),
      error: err => console.error('Error:', err),
      complete: () => console.log('Completed')
    });
    ```

 //Core RxJs Concepts - Errors, Completion and Subscriptions :
    // 1. Errors: If an error occurs in the observable stream, it will stop emitting values and call the error handler.
    // 2. Completion: When the observable completes, it will call the complete handler and stop emitting values.
    // 3. Subscriptions: Subscriptions are used to listen to the observable stream and receive values, errors, and completion notifications.
    // 4. Unsubscribing: Unsubscribing from an observable stops the subscription and prevents further emissions.
    // 5. Operators: RxJS provides a wide range of operators to transform, filter, and combine observable streams.


     //How Observables Work Under the Hood, Build Your Own HTTP Observable ?
    //provide theory and code example
    //Observables are lazy, they do not execute until subscribed to.
    //When you create an Observable, it does not start emitting values until you subscribe to it.
    //This is different from Promises, which execute immediately upon creation.
    //When you subscribe to an Observable, it starts executing the code inside the Observable and begins emitting values.

    //example :
    ```
     http$.subscribe({
      next: (data) => console.log("Data received: ", data),
      error: (err) => console.error("Error fetching data: ", err),
      complete: () => console.log("Data fetch completed")
    });
    ```
    

