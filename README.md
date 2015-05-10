# jQuery Slide Back Plugin

Simple plugin which effects a carousel on the background-image property of a DOM element.

## Features

Or in fact, anti-features. 

* Simple forward only carousel which changes every 5 seconds.
* No controls - there's no pause button, there's no play button, there's no _next_ or _previous_ image.
* No configuration - the speed is fixed, the transition is fixed. You can, however, define the images. 


## Install

Pull down the .js file, reference it in your html

## Usage

Once you've included the plugin, create your html structure similar to the following:

```html
<div id="hero" data-images=''>
</div>
```

and initialize as you would any jQuery plugin:

```javascript
$(function() {
    $('#hero').slideBack();
}
```