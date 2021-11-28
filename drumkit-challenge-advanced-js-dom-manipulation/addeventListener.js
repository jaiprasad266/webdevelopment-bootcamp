
function anotherAddEventListener(typeOfEvent,callback){

    var eventThatHappened = {
        eventType : "keypress",
        key : "p",
    }

    callback(eventThatHappened);
}
