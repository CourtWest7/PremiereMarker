$.noConflict();

jQuery(function(){
jQuery("#runButton").click(runAll);
var csInterface = new CSInterface();
csInterface.evalScript('$._PPP_.getVersionInfo()', myVersionInfoFunction);
csInterface.evalScript('$._PPP_.getActiveSequenceName()', myCallBackFunction);
csInterface.evalScript('$._PPP_.getUserName()', myUserNameFunction);
csInterface.evalScript('$._PPP_.getProjectProxySetting()', myGetProxyFunction);
csInterface.evalScript('$._PPP_.keepPanelLoaded()');
csInterface.evalScript('$._PPP_.disableImportWorkspaceWithProjects()');

csInterface.evalScript('$._PPP_.registerProjectPanelSelectionChangedFxn()');  	// Project panel selection changed
csInterface.evalScript('$._PPP_.registerItemAddedFxn()');					  	// Item added to project
csInterface.evalScript('$._PPP_.registerProjectChangedFxn()');					// Project changed
csInterface.evalScript('$._PPP_.registerSequenceSelectionChangedFxn()');		// Selection within the active sequence changed
csInterface.evalScript('$._PPP_.registerSequenceActivatedFxn()');				// The active sequence changed
csInterface.evalScript('$._PPP_.registerActiveSequenceStructureChangedFxn()');	// Clips within the active sequence changed
csInterface.evalScript('$._PPP_.registerSequenceMessaging()');
csInterface.evalScript('$._PPP_.registerActiveSequenceChangedFxn()');

csInterface.evalScript('$._PPP_.confirmPProHostVersion()');

// New in 13.1
csInterface.evalScript('$._PPP_.forceLogfilesOn()');  // turn on log files when launching

// Good idea from our friends at Evolphin; make the ExtendScript locale match the JavaScript locale!

var prefix	= '$._PPP_.setLocale(\'';
var postfix	= '\');';
var entireCallWithParams = prefix + locale + postfix;



//Use the in and out point to cut
  //select all tracks
  //make cut
  //go to out point
  //select all tracks
  //make cut
  //select between in and out
  //remove

//Use in and out point to push


//this will add an event listener to every key.
// window.addEventListener('keydown',function(e){
//         alert(e.keyCode)
//         // a is 65
// });



  function runAll() {
        var cs = new CSInterface;


    cs.evalScript('$.runScript.removePiece()')
  }

  function shouldWork(){
    var currentOs = (navigator.userAgent.indexOf("Mac") != -1) ? "Mac" : "Windows";


    var keyInterests = (currentOs == "Windows") ? [

    { "keyCode": 83 }

    ] : [

      { "keyCode": 53 }

    ];
  keyEventsInterest = JSON.stringify([{
      "keyCode": 0x08
    }, // "BACKSPACE"
    {
      "keyCode": 0x0D
    }, // "RETURN"
    {
      "keyCode": 0x20
    }, // "SPACE"
    {
      "keyCode": 0x21
    }, // "PAGE UP"
    {
      "keyCode": 0x22
    }, // "PAGE DOWN"
    {
      "keyCode": 0x23
    }, // "END"
    {
      "keyCode": 0x24
    }, // "HOME"
    {
      "keyCode": 0x25
    }, // "LEFT ARROW"
    {
      "keyCode": 0x26
    }, // "UP ARROW"
    {
      "keyCode": 0x27
    }, // "RIGHT ARROW"
    {
      "keyCode": 0x28
    }, // "DOWN ARROW"
    {
      "keyCode": 0x2D
    }, // "DELETE"
    {
      "keyCode": 0x30
    }, // "0"
    {
      "keyCode": 0x30,
      "shiftKey": true
    },
    {
      "keyCode": 0x31
    }, // "1"
    {
      "keyCode": 0x31,
      "shiftKey": true
    },
    {
      "keyCode": 0x32
    }, // "2"
    {
      "keyCode": 0x32,
      "shiftKey": true
    },
    {
      "keyCode": 0x33
    }, // "3"
    {
      "keyCode": 0x33,
      "shiftKey": true
    },
    {
      "keyCode": 0x34
    }, // "4"
    {
      "keyCode": 0x34,
      "shiftKey": true
    },
    {
      "keyCode": 0x35
    }, // "5"
    {
      "keyCode": 0x35,
      "shiftKey": true
    },
    {
      "keyCode": 0x36
    }, // "6"
    {
      "keyCode": 0x36,
      "shiftKey": true
    },
    {
      "keyCode": 0x37
    }, // "7"
    {
      "keyCode": 0x37,
      "shiftKey": true
    },
    {
      "keyCode": 0x38
    }, // "8"
    {
      "keyCode": 0x38,
      "shiftKey": true
    },
    {
      "keyCode": 0x39
    }, // "9"
    {
      "keyCode": 0x39,
      "shiftKey": true
    },
    {
      "keyCode": 0x41
    }, // "a"
    {
      "keyCode": 0x41,
      "shiftKey": true
    },
    {
      "keyCode": 0x41,
      "ctrlKey": true
    },
    {
      "keyCode": 0x42
    }, // "b"
    {
      "keyCode": 0x42,
      "shiftKey": true
    },
    {
      "keyCode": 0x43
    }, // "c"
    {
      "keyCode": 0x43,
      "shiftKey": true
    },
    {
      "keyCode": 0x43,
      "ctrlKey": true
    },
    {
      "keyCode": 0x44
    }, // "d"
    {
      "keyCode": 0x44,
      "shiftKey": true
    },
    {
      "keyCode": 0x45
    }, // "e"
    {
      "keyCode": 0x45,
      "shiftKey": true
    },
    {
      "keyCode": 0x46
    }, // "f"
    {
      "keyCode": 0x46,
      "shiftKey": true
    },
    {
      "keyCode": 0x47
    }, // "g"
    {
      "keyCode": 0x47,
      "shiftKey": true
    },
    {
      "keyCode": 0x48
    }, // "h"
    {
      "keyCode": 0x48,
      "shiftKey": true
    },
    {
      "keyCode": 0x49
    }, // "i"
    {
      "keyCode": 0x49,
      "shiftKey": true
    },
    {
      "keyCode": 0x4A
    }, // "j"
    {
      "keyCode": 0x4A,
      "shiftKey": true
    },
    {
      "keyCode": 0x4B
    }, // "k"
    {
      "keyCode": 0x4B,
      "shiftKey": true
    },
    {
      "keyCode": 0x4C
    }, // "l"
    {
      "keyCode": 0x4C,
      "shiftKey": true
    },
    {
      "keyCode": 0x4D
    }, // "m"
    {
      "keyCode": 0x4D,
      "shiftKey": true
    },
    {
      "keyCode": 0x4E
    }, // "n"
    {
      "keyCode": 0x4E,
      "shiftKey": true
    },
    {
      "keyCode": 0x4F
    }, // "o"
    {
      "keyCode": 0x4F,
      "shiftKey": true
    },
    {
      "keyCode": 0x50
    }, // "p"
    {
      "keyCode": 0x50,
      "shiftKey": true
    },
    {
      "keyCode": 0x51
    }, // "q"
    {
      "keyCode": 0x51,
      "shiftKey": true
    },
    {
      "keyCode": 0x52
    }, // "r"
    {
      "keyCode": 0x52,
      "shiftKey": true
    },
    {
      "keyCode": 0x53
    }, // "s"
    {
      "keyCode": 0x53,
      "shiftKey": true
    },
    {
      "keyCode": 0x54
    }, // "t"
    {
      "keyCode": 0x54,
      "shiftKey": true
    },
    {
      "keyCode": 0x55
    }, // "u"
    {
      "keyCode": 0x55,
      "shiftKey": true
    },
    {
      "keyCode": 0x56
    }, // "v"
    {
      "keyCode": 0x56,
      "shiftKey": true
    },
    {
      "keyCode": 0x56,
      "ctrlKey": true
    },
    {
      "keyCode": 0x57
    }, // "w"
    {
      "keyCode": 0x57,
      "shiftKey": true
    },
    {
      "keyCode": 0x58
    }, // "x"
    {
      "keyCode": 0x58,
      "shiftKey": true
    },
    {
      "keyCode": 0x58,
      "ctrlKey": true
    },
    {
      "keyCode": 0x59
    }, // "y"
    {
      "keyCode": 0x59,
      "shiftKey": true
    },
    {
      "keyCode": 0x5A
    }, // "z"
    {
      "keyCode": 0x5A,
      "shiftKey": true
    },
    {
      "keyCode": 0x5A,
      "ctrlKey": true
    },
    {
      "keyCode": 0x60
    }, // "0 on Numeric Keypad"
    {
      "keyCode": 0x61
    }, // "1 on Numeric Keypad"
    {
      "keyCode": 0x62
    }, // "2 on Numeric Keypad"
    {
      "keyCode": 0x63
    }, // "3 on Numeric Keypad"
    {
      "keyCode": 0x64
    }, // "4 on Numeric Keypad"
    {
      "keyCode": 0x65
    }, // "5 on Numeric Keypad"
    {
      "keyCode": 0x66
    }, // "6 on Numeric Keypad"
    {
      "keyCode": 0x67
    }, // "7 on Numeric Keypad"
    {
      "keyCode": 0x68
    }, // "8 on Numeric Keypad"
    {
      "keyCode": 0x69
    } // "9 on Numeric Keypad"
  ]);
  csInterface.registerKeyEventsInterest( JSON.stringify( keyEventsInterest ));
  csInterface.addEventListener("keypress",function(e){
            alert("whats up")
              console.log("hello");

        });
      }
})
