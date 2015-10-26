/**
 *
 * Manage dynamic loading of pages from the
 * main navigation menu
 *
 */


// Define a click binding for all anchors on the footer
$( ".footer-nav a" ).on( "click", function( event ) {

  // Prevent the usual navigation behavior
  event.preventDefault();
  
  //get url of the menu item that was clicked
  var url = $(this).attr('href');
 
  //replace content on screen with requested page
  $('.content-body').load(url);

});