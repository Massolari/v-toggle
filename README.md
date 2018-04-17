# v-toggle

Vue component based on http://www.bootstraptoggle.com/ 

To use it just put the script tag in your html and that's it (of course you'll need to have vue.js working on your page)!

The simplest way to use it is:

```<v-toggle :status="myVariable" @change="v => { myVariable = v }"></v-toggle>```

This way ```myVariable``` will receive true and false from the v-toggle, if you need another values like "Y" or "N", "A" or "B", "yes" or "no", just put the "on-value" and "off-value" attributes:

```<v-toggle :status="myVariable" @change="v => { myVariable = v }" on-value="Y" off-value="N"></v-toggle>```

This way ```myVariable``` will receive "Y" or "N".

The ```on``` and ```off``` attributes tell the component what it should to display.
You can change the classes using the ```onClassName``` and ```offClassName```
