
function Addons () {
  this.version = "0.0.1";
  this.hello = function() {
    if (console != undefined) {
      console.log("Hello from Addons.io");
    }
  };
}

var addons = new Addons();
addons.hello();

