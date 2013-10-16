## CLIENT7: StarCraft Rankings

### Objective

Write a player ranking page for a StarCraft tournament community. The focus of the page is
a large data table that displays statistics about tournament players, and provide tools for
sorting and filtering the data. You can use the provided [dummy data](/public/samples/starcraft-data.js).

Use [Underscore](http://documentcloud.github.io/underscore/) to perform any data manipulation (mapping, filtering, counting, etc). It will also 
come in really handy for
generating the statistics panel on Step 3.

### Skills

*   HTML Table
*   DOM manipulation
*   Design/Usability
*   Functional Programming (underscore)
*   Higher Order Programming

### Resources

*   [Underscore](http://documentcloud.github.io/underscore/)
*   [dummy data](/public/samples/starcraft-data.js)

### Requirements

1.  Pagination

*   Basic Pagination Control

1.  20 players per page
2.  next, previous, first, and last buttons in addition to each number*   Dynamic Labels2.  Filter

*   Add a form that allows the user to filter the table data by different fields, such as name and games
played. Decide which UI component (text input, dropdown, slider, etc) makes sense for each field.3.  Statistics

#### Bonus I

Implement the exercise using a data table Javascript library such as [SlickGrid](https://github.com/mleibman/SlickGrid/wiki), [DataTables](http://www.datatables.net/), or another library of your choice.

3rd party libraries can save you a ton of time. However, there is added complexity in learning how 
the library works, integrating it into your code,
and figuring out the 'quirks' of the library. Sometimes this can add up to more time than if you 
implemented it yourself! In general though, 3rd party libraries/frameworks allow developers to share
and reuse code without having to reinvent the wheel. Learning how to read 3rd party documentation 
and understand how to use libraries with widely varying conventions and paradigms are key skills for
the modern web developer.

#### Bonus II

Replace underscore with your own library that defines map, filter, etc. In addition, implement the 
following methods. Use the 
Underscore documentation to figure out how each method is intended to work (but avoid looking 
at the source).

*   each
*   map
*   filter
*   reduce
*   find
*   every
*   some
*   contains
*   pluck
*   max
*   min
*   groupBy
*   countBy
*   flatten
*   union
*   intersection
*   uniq
*   zip
*   object
*   range
