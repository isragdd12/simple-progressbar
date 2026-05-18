# Simple Progress Bar
<font color="#b2a2c7">Simple Progress Bar</font> *(SPB)* is a progress bar plugin for **Obsidian**.

### How does it work?
It works by adding [Markdown code blocks](https://www.codecademy.com/resources/docs/markdown/code-blocks), and adding your options there.
### Installation

You can refer to this [Official Plugins FAQ](https://forum.obsidian.md/t/plugins-mini-faq/7737) to learn how to install plugins.
### Setup

1. [Install the plugin](#installation).
2. Enable it.
3. Done!

### Usage

To create a new progress bar, simply do:

~~~markdown
```progbar
name: Progress Bar
max: 100
value: 0
id: new-progressbar
```
~~~

And that's it! You now have a completely working progress bar:)

---

And yes, there is more customization for it, if you want to see them, go to the [Properties Page](#properties).

### Properties
This is the whole list of properties that can be used in the progress bar item.

```js
name: string
max: int
value: int
id: string
width: string
step: int
btnUp: string
btnDown: string
customFormat: string
showName: bool
showButtons: bool
showId: bool
showBar: bool
showLabel: bool
```

This is the detailed properties:

`name`: The name displayed before the progress bar. This label won't be displayed if the `showName` property is false. *Defaults to* <font color="#b2a2c7">'Unnamed'</font>.

`max`: The limit of the progress bar, you can't go over that number. *Defaults to* <font color="#8db3e2">100</font>.

`value`: The current value of the progress bar. *Defaults to* <font color="#8db3e2">0</font>.

`id`: A unique ID for the progress bar. *Defaults to* <font color="#c00000">null</font>.

`width`: The bar width, you can use any [CSS Units](https://www.w3schools.com/csSref/css_units.php). *Defaults to* <font color="#fac08f">'160px'</font>.

`step`: Controls how much the progress bar’s value increases or decreases with a single button click. *Defaults to* <font color="#8db3e2">1</font>.

`btnUp`: Changes the display text or symbol inside the increment button. *Defaults to* <font color="#b2a2c7">'+'</font>.

`btnDown`: Changes the display text or symbol inside the decrement button. *Defaults to* <font color="#b2a2c7">'-'</font>.

`customFormat`: The custom value label formatting, for more info on how to format the label using this property, refer to the [Custom Formatting](#custom-formatting) section. *Defaults to* <font color="#fac08f">'[<font color="#95b3d7">{value}</font>/<font color="#95b3d7">{max}</font>]'</font>.

`showName`: Determines if the name label should be shown. *Defaults to* <font color="#9bbb59">true</font>.

`showButtons`: Determines if the control buttons (+/-) should be shown. *Defaults to* <font color="#9bbb59">true</font>.

`showId`: Determines if the ID label should be shown. *Defaults to* <font color="#c0504d">false</font>.

`showBar`: Determines if the progress bar should be shown. *Defaults to* <font color="#9bbb59">true</font>.

`showLabel`: Determines if the value label ("\[value/max]") should be shown. *Defaults to* <font color="#9bbb59">true</font>.

### Custom Formatting.

You can use custom formatting on the *value label* with some of the bar's properties.
To use it, just set the `customFormat` property to the formatting of your liking, you can use the other bar's properties by wrapping them inside *curly braces* ( <font color="#c3d69b">{}</font> ), for example, lets say you want the formatting to be the following:

Unnamed | [0/100] | Width: 160px

You can easily do that by replacing every property with the formatting style:

`{name} | [{value}/{max}] | Width: {width}`

Yay! You now have a custom format for the label.

Every normal property (except for the booleans) are supported in the custom formatting, as long as you wrap them inside *curly braces*.

Also, there are some unique custom formatting-only "properties":

- `{percent}/{percentage}/{%}`: The completion percentage of the progress bar, calculated using the following formula: 

$$\lfloor \left( \frac{\text{currentVal}}{\text{max}} \right) \times 100 \rceil$$

*(Note: Calculated as `(currentVal / max) * 100` using Round Half Up rounding to the nearest whole integer).*
### For developers:

You are completely free to use, edit, and anything else with the code in this plugin. If you repost it anywhere else, give me the credits, and don't remove the comment on line 1 of main.js.

This is experimental, and my first obsidian plugin, so feel free to give me any feedback/suggestion! :)