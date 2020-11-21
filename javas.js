 //ketikan

  var text="BANTU FOLLOW IG AING BRO...@MWMAULANA310";
    var delay=100;
    let currentChar=1;
    var destination="[none]";
    function type()
    {
    {
    var dest=document.getElementById(destination);
    if (dest)
    {
    dest.innerHTML=text.substr(0, currentChar)+"<blink>_</blink>";
    currentChar++;
    if (currentChar>text.length)
    {
    currentChar=1;
    setTimeout("type()", 5000);
    }
    else
    {
    setTimeout("type()", delay);
    }
    }
    }
    }
    function startTyping(textParam, delayParam, destinationParam)
    {
    text=textParam;
    delay=delayParam;
    currentChar=1;
    destination=destinationParam;
    type();
    }



