/*doc
---
title: Dropdowns
name: dropdown_react
categories:
- react_components_dropdowns
- react_all
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-dropdowns --save

<img src="/styleguide/download.svg" width="16" height="16"/>
npm install babel-loader svg-react-loader --save-dev
</code>

## Props

Property | Required | Type | Default | Description
---------|----------|------|---------|------------
border           | no | Boolean  |       | If true, adds a border between menu items
buttonClassName  | no | String   |       | Classname to add to the button
closeOnMenuClick | no | Boolean  | true  | If false, do not close the menu when clicking in the dropdown menu
disableScrim     | no | Boolean  | false | If true, do not close the menu when clicking outside the dropdown
dropCaret        | no | Boolean  | true  | If false, do not render the caret in the dropdown toggle
flat             | no | Boolean  |       | If true, dropdown toggle has no borders and is transparent
link             | no | Boolean  |       | If true, color the dropdown toggle like a link
menuCaret        | no | Boolean  |       | If true, render a caret in the menu pointing at the toggle
onEntered        | no | Function |       | Callback that fires after opening the dropdown
onExited         | no | Function |       | Callback that fires after closing the dropdown
pullRight        | no | Boolean  |       | If true, right align the menu with the button
split            | no | Boolean  |       | If true, separates the button text from the toggle
title            | no | Node     |       | The button contents
toggle           | no | Node     |       | The toggle contents

## Basic usage

(The extra loaders are for the [Iconography](/react_base_iconography.html) component.)

Import the subcomponents:

```
import {Dropdown, DropdownItem} from 'pui-react-dropdowns';
```

This is the basic bootstrap dropdown:

```react_example_table
<Dropdown title='DropDown'>
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
</Dropdown>
```

Here are some examples:

```react_example_table
<Dropdown flat title="DropDown">
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
</Dropdown>

<Dropdown split title="DropDown">
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
</Dropdown>

<Dropdown flat link title="DropDown">
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
</Dropdown>

<Dropdown toggle={<Icon src="check_circle"/>} title="DropDown">
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
</Dropdown>

<div className="contrast-bar">
  <Dropdown title="DropDown" flat menuCaret>
    <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
    <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
  </Dropdown>
</div>

<div className="contrast-bar">
  <Dropdown title="DropDown" pullRight flat menuCaret>
    <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
    <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
  </Dropdown>
</div>

<Dropdown title="DropDown" border>
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
</Dropdown>

<Dropdown title="DropDown">
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem divider></DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
</Dropdown>
```

If you want to customize the dropdown, you can use `className` to add a modifier class to the `btn-group`.

To customize the dropdown button, you can add modifier classes to it
using the `buttonClassName` property. `id` and `style` will also be applied to the dropdown button.

```react_example
<Dropdown title="DropDown" buttonClassName="btn-lg">
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
</Dropdown>
```

If you want a dropdown without a label, you can omit the `title` attribute.

```react_example
<Dropdown toggle={<div style={{color: 'darkgoldenrod'}}>&#9733;</div>} flat>
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/13py6c5BSnBkic/giphy.gif">Booyeah</DropdownItem>
  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">Adorable</DropdownItem>
</Dropdown>
```

A DropdownItem renders a link if given an `href` prop. For more control, do not provide an `href` prop to a DropdownItem.

```react_example
<Dropdown title="DropDown">
  <DropdownItem className="pam">
    <div onClick={() => alert('You clicked Booyeah!')}>Booyeah</div>
  </DropdownItem>
  <DropdownItem className="pam">
    <div onClick={() => alert('You clicked Adorable!')}>Adorable</div>
  </DropdownItem>
</Dropdown>
```
*/
