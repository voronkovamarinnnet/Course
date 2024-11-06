<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Проверка треугольника</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        input {
            padding: 5px;
            margin: 10px;
        }
        button {
            padding: 10px 20px;
            cursor: pointer;
        }
        .result {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>Проверка треугольника</h1>
    <p>Введите длины сторон треугольника (X, Y, Z):</p>
    <input type="number" id="x" placeholder="Сторона X" step="0.01">
    <input type="number" id="y" placeholder="Сторона Y" step="0.01">
    <input type="number" id="z" placeholder="Сторона Z" step="0.01">
    <br>
    <button onclick="checkTriangle()">Проверить</button>
    
    <div class="result" id="result"></div>

    <script>
        function checkTriangle() {
            // Получаем значения сторон
            let X = parseFloat(document.getElementById('x').value);
            let Y = parseFloat(document.getElementById('y').value);
            let Z = parseFloat(document.getElementById('z').value);
            let resultDiv = document.getElementById('result');
            
            // Проверка на существование треугольника
            if (X + Y > Z && Y + Z > X && Z + X > Y) {
                // Если треугольник существует, проверяем на прямоугольность
                let isRightAngled = (
                    Math.abs(X * X + Y * Y - Z * Z) < 1e-6 ||
                    Math.abs(Y * Y + Z * Z - X * X) < 1e-6 ||
                    Math.abs(Z * Z + X * X - Y * Y) < 1e-6
                );
                
                if (isRightAngled) {
                    resultDiv.textContent = "Треугольник существует и является прямоугольным.";
                } else {
                    resultDiv.textContent = "Треугольник существует, но не является прямоугольным.";
                }
            } else {
                resultDiv.textContent = "Треугольник с такими сторонами не существует.";
            }
        }
    </script>
</body>
</html>
