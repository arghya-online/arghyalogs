---
title: What exactly is ECMAScript?
date: 2024-02-13
description: Unraveling the history, the standard, and why we call it JavaScript.
tags:
  - javascript
  - history
  - fundamentals
  - ecmascript
category: Programming
---

# What exactly is ECMAScript?

If you have spent any time in the web development world, you have probably heard terms like ES6, ES2020, or ECMAScript used almost interchangeably with JavaScript.

So are they the same thing?

Not exactly.

They are closely related, but not identical. Once you understand the relationship, the confusion disappears completely.

Let’s break it down properly.

---

## The Origin Story

In May 1995, Brendan Eich created a scripting language for Netscape Navigator in just 10 days. It was first called Mocha, then renamed to LiveScript, and finally to JavaScript. The final name was mostly a marketing move to ride on the popularity of Java at the time, even though the two languages are completely different.

Soon after, Microsoft released its own version for Internet Explorer called JScript.

This created a serious problem. Code written for Netscape would not always run correctly in Internet Explorer. Developers had to deal with browser-specific behavior, and the web was becoming inconsistent.

To fix this, Netscape submitted JavaScript to ECMA International in 1996 so that a formal standard could be created. The goal was simple: define one official specification that all browsers could follow.

You can think of ECMAScript as the recipe, and JavaScript as the cake baked by different chefs. Chrome, Firefox, Safari, and others all follow the same recipe, but their internal implementations may differ slightly.

---

## ECMA-262 and TC39

The official document that defines the standard is called ECMA-262. That document contains the full technical specification of the language.

The group responsible for maintaining it is called Technical Committee 39, commonly known as TC39.

TC39 includes representatives from major browser vendors and technology companies such as Google, Apple, Microsoft, and Mozilla. They meet regularly to discuss, design, and approve new language features.

### How Features Get Added

New ideas do not immediately become part of the language. Every feature must pass through a structured process with five stages:

1. Stage 0 – A rough idea is introduced.
2. Stage 1 – A formal proposal is created and a champion is assigned.
3. Stage 2 – The specification draft is written.
4. Stage 3 – The feature is considered complete and ready for implementation feedback.
5. Stage 4 – The feature is finalized and included in the official standard.

Only after reaching Stage 4 does a feature become part of ECMAScript.

This process ensures that the language evolves carefully and remains stable.

---

## The Versioning Confusion

For many years, ECMAScript updates were irregular.

ES3 was released in 1999 and became the foundation of modern JavaScript.  
ES4 was planned but eventually abandoned because it was too ambitious and controversial.  
ES5 was released in 2009 and introduced strict mode, native JSON support, and important improvements to objects and arrays.  

Then came ES6 in 2015.

This was a massive update. It introduced classes, modules, arrow functions, promises, let and const, destructuring, and much more. It fundamentally changed how developers write JavaScript.

After ES6, TC39 decided to move to a yearly release cycle. Instead of waiting many years for major upgrades, smaller improvements are now released every year.

Officially, ES6 is called ES2015. The naming convention continues with ES2016, ES2017, and so on. However, the community still casually uses the term ES6 to refer to modern JavaScript features in general.

---

## So What Is JavaScript?

JavaScript is the implementation of the ECMAScript standard.

However, when you write JavaScript in the browser, you are not using only ECMAScript.

You are using:

1. The ECMAScript core language  
   This includes things like arrays, objects, loops, conditionals, functions, and classes.

2. Web APIs  
   These include document.getElementById, fetch, setTimeout, localStorage, and many other browser-specific features.

The important thing to understand is that Web APIs are not defined by ECMAScript. They are defined by other standards bodies such as the World Wide Web Consortium (W3C).

So technically, browser JavaScript is:

ECMAScript + Web APIs

This is why code that runs in a browser may not work the same way in environments like Node.js, which does not include the DOM by default.

---

## Summary

Here is a simple breakdown:

ECMA-262  
The official document that defines the ECMAScript standard.

ECMAScript  
The specification that defines the core language rules and syntax.

JavaScript  
The language you use in practice. It includes ECMAScript plus additional APIs depending on the environment.

TC39  
The committee responsible for designing and evolving the language.

ES6 / ES2015  
The sixth edition of ECMAScript, released in 2015, which modernized the language significantly.

---

The next time someone insists on correcting “JavaScript” to “ECMAScript,” you will know the difference.

If you are writing code in the browser using console.log, setTimeout, or interacting with the DOM, you are writing JavaScript.

Underneath it all, though, it is powered by the ECMAScript standard quietly doing its job.
