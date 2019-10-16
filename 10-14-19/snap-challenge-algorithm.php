<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Snap Challenge Functions</title>
	<script src="snap-challenge-functions-two.js"></script>
</head>

<body>
	<p>
		<label>Pounds</label>
		<input id="inputPounds"
				 type="number"
				placeholder="Pounds"
				oninput="weightConverter(this.value)"
				onchange="weightConverter(this.value)">
	</p>
	<p>
		Grams: <span id="outputGrams"></span>
	</p>
</body>