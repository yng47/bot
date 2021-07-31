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
	<a class="cr" href="test11.html">[ 11 ]</a>
	<a class="cr" href="test12.html">[ 12 ]</a>
	<a class="cr" href="test13.html">[ 13 ]</a>
	<a class="cr" href="test14.html">[ 14 ]</a>
	<a class="cr" href="test15.html">[ 15 ]</a>
	<a class="cr" href="test16.html">[ 16 ]</a>
	<a class="cr" href="test17.html">[ 17 ]</a>
	<a class="cr" href="test18.html">[ 18 ]</a>
	<a class="cr" href="test19.html">[ 19 ]</a>
	<a class="cr" href="test20.html">[ 20 ]</a>
	<a class="cr" href="test21.html">[ 21 ]</a>
</div>
</div>
</div>
  `;

  document.getElementById('pagecounter').appendChild(div);
}

