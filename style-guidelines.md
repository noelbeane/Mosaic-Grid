# Style Guidelines


## File Structure

Mosaic Grid uses SMACSS (Scalable and Modular Architecture for CSS) which is a set of CSS guidelines which organizes your CSS rules into reusable modules.
see [SMACSS](https://smacss.com)



* **Base** - *sass/base.scss*

 * Include defaults and reset rules
 * Applied with element selector, a descendent selector, or a child selector, along with any pseudo-classes. Do not include any class or ID selectors


* **Layout** - *sass/layout.scss*

 * Layout rules divide pages into sections.
 * Layouts hold one or more modules together
 * Layout rules apply to the 'major' components
 * Major layout styles such as header and footer are traditionally styled using ID selectors


* **Module** - *sass/module.scss*

 * Modules are the reusable, modular parts of the design
 * avoid defining modules with IDs or element selectors. stick to class names.
 * Use child or descendant selectors with element selectors if the element selectors will and can be predictable. If it will be used the same way every time while within that module



* **State** - *sass/state.scss*

 * State rules are ways to describe how our modules or layouts will look when in a particular state. Is it hidden or expanded? Is it active or inactive?They are about describing how a module or layout looks on screens that are smaller or bigger. They are also about describing how a module might look in different views like the home page or inside page.
 * A state is something that augments and overrides all other styles. For example, an accordion section may be in a collapsed or expanded state. A message may be in a success or error state.
 * state styles can apply to layout and/or module styles
 * state styles indicate a Javascript dependency
     * Sub module styles are applied to an element at render time and then are never changed again
     * state styles, however, are applied to elements to indicate a change in state while the page is still running on the client machine (i.e. ‘is-active’ , ‘is-hidden’, etc.)
 * represented in three ways:
     * class name
     * pseudo-class
     * media queries
 * take advantage of attribute selectors to handle state change
     * isolating states from layout and module classes
     * allowing easier transitions between multiple states
 * sub-module naming convention
     * .btn, .btn-pressed, .btn-disabled
     * The data- prefix on the attribute is part of the HTML5 specification that allows you to make up attribute names and place them within the data namaespace so as not to conflict with future HTML attribute specifications.

    >JQuery Example:

        $(“.btn”).bind(“Click”, function(){$(this).attr(‘data-state’, ‘pressed’);});

* **Theme** - *sass/theme.scss*

 * Theme rules are similar to state rules in that they describe how modules or layouts might look. Most sites don’t require a layer of theming but it is good to be aware of it.
 * Theme rules define colors and images that give your application or site its look and feel
 * Separating theme rules in its own set of styles allows for those styles to be easily redefined for alternate themes
 * override base styles like default link colors, change module elements such as colors and borders, layout arrangements, etc.
 * typography styles included on this layer



## Syntax

* Hyphen delimited class names
    * .block
    * .block-element
    * .block--modifier
* Two space indents
* Multi-line structure
* Declarations in relevance (NOT alphabetical) order
* Indent vendor prefixed declarations so their values are aligned
* Indent rulesets to mirror th DOM
* Always included the final semi-colon in a ruleset
* Indent children
    >

        .widget{}
          .widget-heading{}
* two spaces between classes <div class=”foo-bar  bar--baz”>
* namespace any classes with JS behaviour with ‘.js-’
* docBlock-esque commenting style
* Table of contents in large docs
* Avoid qualifying selectors.
    * Qualifying selectors decreases selector performance
    * quasi-qualify with commenting /*ul*/.image-thumbs{}
* work in OOCSS manner whenever possible. Split components into structure (object) and skin (extensions)
    * .room{}
    * .room--kitchen{}
* A components/modules should be free of widths
* Never set heights on anything
* Grid systems should be thought of as shelves. They contain content but are not content in themselves.
* use REM for font sizes with pixel backup   





