function addRow() {
  const div = document.createElement('div');

  div.className = 'row';

  div.innerHTML = `
  <div class="container">
  <div class="boxer">
   <div class="counter">
	<a class="cr" href="test1.html">[ 1 ]</a>
	<a class="cr" href="test2.html">[ 2 ]</a>
	<a class="cr" href="test3.html">[ 3 ]</a>
	<a class="cr" href="test4.html">[ 4 ]</a>
	<a class="cr" href="test5.html">[ 5 ]</a>
	<a class="cr" href="test6.html">[ 6 ]</a>
	<a class="cr" href="test7.html">[ 7 ]</a>
	<a class="cr" href="test8.html">[ 8 ]</a>
	<a class="cr" href="test9.html">[ 9 ]</a>
	<a class="cr" href="test10.html">[ 10 ]</a>
</div>
</div>
</div>
  `;

  document.getElementById('pagecounter').appendChild(div);
}

