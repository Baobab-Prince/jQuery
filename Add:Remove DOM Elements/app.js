/* jQurey: Adding and Removing Elements */

$('.target')
  .append('<div class="child">Append</div>', '<p> Ha! Ha! Ha!</p>')
  .prepend('<div class="child">Prepend</div>')
  .before('<div class="sibling">Before</div>')
  .after('<div class="sibling">After</div>');

$('p').append('<b>😂🤣</b>');

//$('.target').remove();
//$('p').remove();
//$('target').empty()
$('p').remove('.filter');
