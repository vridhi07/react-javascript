
//what is pollyfill?
// A polyfill is a piece of code (typically JavaScript) used to provide modern functionality on older browsers that do not
//     natively support it. Polyfills allow developers to use newer web standards and APIs without worrying about compatibility
// issues with older browsers. They essentially "fill in" the gaps in a browser's functionality, ensuring a consistent experience ' +
// 'across different platforms. For example, if a certain web API is available in the latest version of Chrome but not in ' +
// 'Internet Explorer, a polyfill can be used to replicate the behavior of that API in Internet Explorer, ' +
// 'allowing the same code to run on both browsers without issues.

// what is prototype
// In JavaScript, a prototype is an object from which other objects inherit properties. Every JavaScript object has a prototype,
// and the prototype itself is also an object. When a method or property is called on an object, JavaScript will first
// look for it on the object itself. If it doesn't find it
// JavaScript will look up the prototype chain until it finds the method or property or reaches the end of the chain

//Q1 what is doctype
// In web development, a doctype declaration is an instruction that tells the web browser about the version of
// HTML the page is written in. It ensures that the web page is rendered correctly by the browser.
// The declaration is placed at the very beginning of the HTML document, before the <html> tag. For example:

//Q2 it is necessary to write doctype
//Yes, including <!DOCTYPE html> at the beginning of an HTML document is important and considered a best practice.

//q3 if we dont write doctype what happen
//If you don't include a <!DOCTYPE html> declaration at the beginning of your HTML document,
// the page will still render, but the browser will operate in "quirks mode" rather than "standards mode."

//Q4 what is quirks mode
//Quirks mode is a compatibility mode used by web browsers to render web pages that do not follow modern web standards.
// It emulates the behavior of older browsers from the early days of the web,
// allowing pages that were built with outdated practices to still function as intended.

//what is the difference between http vs https
//HTTP (HyperText Transfer Protocol) and HTTPS (HyperText Transfer Protocol Secure) are protocols used for transmitting
// data over the internet.
// The primary difference between them lies in the security features provided by HTTPS.

//what is TLS vs ssl
// TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are cryptographic protocols
// designed to provide secure communication over a computer network. They are widely used to secure web traffic,
//     email, and other forms of data transmission over the internet.


// Security: HTTPS encrypts data using SSL/TLS, making it secure, whereas HTTP sends data in plain text,
// making it vulnerable to interception.
//     Performance: HTTPS can be slightly slower than HTTP due to the additional overhead of encryption and decryption.
//     However, modern optimizations have minimized this difference.
//     SEO: Search engines like Google prefer HTTPS and may rank HTTPS sites higher than their HTTP counterparts.
//     User Trust: Browsers often display security indicators (like a padlock icon) for HTTPS sites,
//     which can enhance user trust and confidence in the website.
//     Compliance: Many regulations and standards (e.g., GDPR, PCI DSS) require the use of HTTPS for handling sensitive information.


//what is promise.all promise.allsettled promise.race

//how to call an api before intial render in react



//what risk

var fullname = "jhone";

var obj = {

    fullname: "parimal",

    prop: {

        fullname: "has a life",

        getFullname: function() {

            return this.fullname

        }},

    getMyName: function () {

        return this.fullname;

    },

    getFirstName: ()=>{

        return this.fullname.split("")[0]},

    getLasName: ( function() {

        return this.fullname.split("")[1]} )()

}

//promise question
//how to write pollyfill the promise last resolved call first
class ReversePromiseQueue {
    constructor() {
        this.promises = [];
        this.queue = Promise.resolve();
    }

    add(promiseFunc) {
        // Create a new promise and add it to the queue
        const promise = new Promise(promiseFunc);

        // Push the promise to the list


        this.promises.push(promise);

        // Update the queue to ensure promises are handled in reverse order
        this.queue = this.queue.then(() =>
            promise.then(value => {
                // Handle the resolved value
                this.handleResolved(value);
            })
        );

        return promise;
    }

    handleResolved(value) {
        // Log or process the resolved value (last resolved first)
        console.log('Processed value:', value);
    }
}

// Create an instance of ReversePromiseQueue
const reverseQueue = new ReversePromiseQueue();

// Define the promises
const promise = (resolve, reject) => {
    setTimeout(() => {
        console.log('Resolving promise with: one');
        resolve('one');
    }, 600);
};

const promise2 = (resolve, reject) => {
    setTimeout(() => {
        console.log('Resolving promise2 with: two');
        resolve('two');
    }, 5);
};

// Add promises to the queue
reverseQueue.add(promise);
reverseQueue.add(promise2);

//Resolving promise2 with: two
// Resolving promise with: one
// Processed value: one
// Processed value: two