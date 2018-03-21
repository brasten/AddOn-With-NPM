var libraryOne = createLibraryOne('This is my message');

/**
 * This logs a message from our add-on onOpen using LibraryOne.
 */
function onOpen(e) {
  libraryOne.logMessage();
}
