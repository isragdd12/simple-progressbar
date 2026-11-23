# Simple Progress Bar
Simple Progress Bar *(SPB)* is a progress bar plugin for [**Obsidian Markdown**](https://obsidian.md/).
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

And that's it! You now have a completely working progress bar. :)

---

And yes, there is more customization for it, if you want to see them, go to the [Properties Page](#properties).

### Properties
This is the whole list of properties that can be used in the progress bar item.

| Property       | Type   | Default           | Description                                                                                                                                                        |
| -------------- | ------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`         | string | `"Unnamed"`       | The name displayed before the progress bar. This label won't be displayed if the `showName` property is false.                                                     |
| `max`          | int    | `100`             | The limit of the progress bar, you can't go over that number.                                                                                                      |
| `value`        | int    | `0`               | The current value of the progress bar.<br>                                                                                                                         |
| `id`           | string | `Null`            | A unique ID for the progress bar.<br>                                                                                                                              |
| `width`        | string | `"160px"`         | The bar width, you can use any [CSS Units](https://www.w3schools.com/csSref/css_units.php).<br>                                                                    |
| `step`         | int    | `1`               | Controls how much the progress bar’s value increases or decreases with a single button click.<br>                                                                  |
| `btnUp`        | string | `"+"`             | Changes the display text or symbol inside the increment button.<br>                                                                                                |
| `btnDown`      | string | `"-"`             | Changes the display text or symbol inside the decrement button.<br>                                                                                                |
| `customFormat` | string | `"{value}/{max}"` | The custom value label formatting, for more info on how to format the label using this property, refer to the [Custom Formatting](#custom-formatting) section.<br> |
| `showName`     | bool   | `true`            | Determines if the name label should be shown.<br>                                                                                                                  |
| `showButtons`  | bool   | `true`            | Determines if the control buttons (+/-) should be shown.                                                                                                           |
| `showId`       | bool   | `false`           | Determines if the ID label should be shown.<br>                                                                                                                    |
| `showBar`      | bool   | `true`            | Determines if the progress bar should be shown.                                                                                                                    |
| `showLabel`    | bool   | `true`            | Determines if the value label ("\[value/max]") should be shown.                                                                                                    |

---

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

(`(currentVal / max) * 100` using Round Half Up rounding to the nearest whole integer).

### For developers:

You are completely free to use, edit, and anything else with the code in this plugin. If you repost it anywhere else, give me the credits, and don't remove the comment on line 1 of main.js.

The code is also pretty easy to read and edit, but if you need help i might be able to help you, if so, contact me on ...

This is experimental, and my first obsidian plugin, so feel free to give me any feedback/suggestion! :)
