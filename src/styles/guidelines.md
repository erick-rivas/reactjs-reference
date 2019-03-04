# SAAS Styles

## Overview
  - *.scss:  Represent stylesheets associated with a component
  - css/*: Are the generated files of scss compilation (*Don't touch*)

### Code Guidelines

- Each file must be named using the sintaxis **Module-submodule-.module.scss** 
  > e.g pet-list-item.module.scss
- Each style must include .module parent, e.g:
```css
.module{}
.module .item{}
.module .subitem{}
```
- Each module can only import *"util.scss"* file

### Quality checklist

- All files ends with .modules.scss
- All styles include .module at the beginning of the definition.
- Util.scss is the only imported file.

