(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0a482d"],{"076f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"description-lead q-py-xl"},[s("div",{staticClass:"text-h3 text-center q-pb-xs"},[t._v("Customize Glance")]),s("div",{staticClass:"text-subtext1 text-center q-pb-md"},[t._v("\n      Glance has a very dynamic set of settings allowing it to be used in a\n      variety of different use cases. below are the settings that you can\n      change to your liking.\n    ")]),s("div",{staticClass:"text-h6 text-grey-10"},[t._v("Settings glossary/key")]),s("ul",{staticClass:"q-mt-none"},[s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Data Source:")]),t._v(" Where your\n        blood sugars are being hosted in the cloud.\n        "),s("ul",[s("li",[s("a",{staticClass:"text-primary",attrs:{href:"https://github.com/Rytiggy/Glance/wiki/How-to-setup-Dexcom-as-a-data-source"}},[t._v("Dexcom")]),s("ul",[s("li",[t._v("Username: Your dexcom username")]),s("li",[t._v("Password: your dexcom password")]),s("li",[t._v("\n                International: Toggle to switch between international (not in\n                USA) share server and national share server\n              ")])])]),s("li",[s("a",{staticClass:"text-primary",attrs:{href:"https://github.com/Rytiggy/Glance/wiki/How-to-setup-Nightscout-as-a-data-source"}},[t._v("Nightscout")]),s("ul",[s("li",[t._v("\n                Site name: Nighscout app name or nightscout URL both will work\n                in 2.2\n              ")]),s("li",[t._v("\n                Acceptable formates\n                "),s("ul",[s("li",[s("a",{staticClass:"text-primary",attrs:{href:"https://SiteName.herokuapp.com"}},[t._v("https://SiteName.herokuapp.com")])]),s("li",[t._v("SiteName")])])]),s("li",[t._v("\n                Nightscout host site: Where you're nightscout site is hosted\n                at. Heroku or Azure.\n              ")])])]),s("li",[s("a",{staticClass:"text-primary",attrs:{href:"https://github.com/Rytiggy/Glance/wiki/How-to-setup-xDrip--as-a-data-source"}},[t._v("xDrip+")])]),s("li",[s("a",{staticClass:"text-primary",attrs:{href:"https://github.com/Rytiggy/Glance/wiki/How-to-setup-Spike-as-a-data-source"}},[t._v("Spike")])]),s("li",[t._v("\n            Tomato\n          ")]),s("li",[t._v("\n            Custom\n            "),s("ul",[s("li",[t._v("\n                a custom api URL with data formatted similar to nightscout\n              ")])])])])]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Glucose Units:")]),t._v(" The unit\n        type you are in "),s("code",[t._v("mgdl")]),t._v(" or "),s("code",[t._v("mmol")])]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("High threshold:")]),t._v(" The\n        limit when the high alert will fire\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Low threshold:")]),t._v(" The limit\n        when the low alert will fire\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Disable Alerts:")]),t._v(" Disable\n        all alerts\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Extra glucose settings:")]),t._v("\n        Advanced glucose settings handling settings that don't normally need\n        changed\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("High alerts:")]),t._v(" alert to\n        high blood sugars when blood sugar is above high threshold\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Dismiss high alerts for n minutes:")]),t._v("\n        How long to dismiss the high alert for after user dismissal.\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Low alerts:")]),t._v(" alert to low\n        blood sugars when blood sugar is below low threshold\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Dismiss low alerts for n minutes:")]),t._v("\n        How long to dismiss the low alert for after user dismissal.\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Rapid rise alerts:")]),t._v(" Alert\n        to rapid rises in blood sugars (double up)\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("High threshold:")]),s("p",[s("a",[t._v("**Rapid fall alerts:**")]),t._v(" Alert to rapid falls in blood sugars\n          (double down)\n        ")])]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Loop status alerts:")]),t._v("\n        Alert when loop status is in warning state\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Stale date alerts:")]),t._v(" Alert\n        when data is more then 25 minutes old.\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Stale data alerts after n minutes:")]),t._v("\n        How long to wait before alerting to stale data\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Dismiss alarm when back in range:")]),t._v("If alert was fired in the last n minutes (based on users alert times)\n        but blood sugar goes within thresholds during that time. allow another\n        alert to be fired if threshold is met.\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Time format:")]),t._v(" A time\n        format to display time in 24 or 12 hours\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Date format:")]),t._v(" A date\n        formate based on users preference\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Day of week at end of date:")]),t._v("Adds day of week to end of date\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Main Graph Predictions:")]),t._v("\n        Enable predictions on main graph (note this is only available if you\n        have it enabled on your end points)\n      ")]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Large graph popup screen:")]),t._v("\n        Adds a more detailed large graph pop screen. to open and close the\n        large graph tap the graph in the lower right hand corner\n        "),s("ul",[s("li",[s("img",{attrs:{src:"https://media.giphy.com/media/1WbRR9FSE6WhYxaPIP/giphy.gif",width:"200px"}})])])]),s("li",[s("p",[s("a",[t._v("**Background color:**")]),t._v(" Select a color for the watch background\n        ")]),s("ul",[s("li",[t._v("\n            The white circle color is used for randomly generating a color.\n            you can also enter\n            "),s("a",{staticClass:"text-primary",attrs:{href:"https://www.color-hex.com/"}},[t._v("hex values")]),t._v("\n            for any color.\n            "),s("ul",[s("li",[s("strong",[t._v("Hex Color One:")]),t._v(" A hex color code that is used\n                for the top background color on the watch\n              ")]),s("li",[s("strong",[t._v("Hex Color Two:")]),t._v(" A hex color code that is used\n                for the bottom background color on the watch\n              ")]),s("li",[s("strong",[t._v("Text Color:")]),t._v(" A hex color code that is used for\n                changing the text color on the watch\n              ")])])])])]),s("li",[s("span",{staticClass:"text-subtitle1 text-bold"},[t._v("Customize:")]),t._v(" The layouts\n        are used to change the default values with other ones present from\n        your data source.(currently only working for nightscout)\n      ")])])])])},i=[],l={data:function(){return{}}},o=l,n=s("2877"),r=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=r.exports}}]);