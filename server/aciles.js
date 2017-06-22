aciles = {
  "send": function(server, message) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', server);
    //xhr.withCredentials = true;
    //xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(String.fromCharCode(0x1E) + message + "\n");
  },
  "receiver": function(server, callback, errors_callback) {
    var messageID = 0;
    var poller = function() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', server);
      xhr.send(null);
      xhr.onreadystatechange = function () {
        var DONE = 4;
        if (xhr.readyState === DONE) {
          if (xhr.status >= 200 && xhr.status < 299) {
            var newMessageID = parseInt(xhr.getResponseHeader("X-Wiggles-ID"));
            if (newMessageID > messageID) {
              messageID = newMessageID;
              callback(xhr.responseText);
            } else {
              //console.log("duplicate message", xhr.responseText);
            }
          } else if (errors_callback) {
            errors_callback(xhr.status);
          }
          setTimeout(poller, 0);
        }
      }
    }
    // initiate the first poller
    poller();
    // initiate the overlapping second poller 5 second later
    setTimeout(poller, 5000);
  }
}
