
function LibraryOne_(msg) {
  this.msg = msg;
};

LibraryOne_.prototype.logMessage = function() {
  console.log('Logged from LibraryOne: ', this.msg);
};

function createLibraryOne(msg) {
  return new LibraryOne_(msg);
}
