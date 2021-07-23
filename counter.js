function addRow() {
  const div = document.createElement('div');

  div.className = 'row';

  div.innerHTML = `
  <div class="container">
  <div class="boxer">
   <div class="counter">
	<a class="cr" href="index.html">[ 1 ]</a>
	<a class="cr" href="test2.html">[ 2 ]</a>
	<a class="cr" href="test3.html">[ 3 ]</a>
	<a class="cr" href="test4.html">[ 4 ]</a>
</div>
</div>
</div>
  `;

  document.getElementById('pagecounter').appendChild(div);
}

