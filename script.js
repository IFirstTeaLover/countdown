function findNearest(target) {
    let uah = 0;
    let days = 0;

    while (uah < target) {
        days++;
        uah += days;
    }

    const previousSum = uah - days;
    const diffPrevious = Math.abs(previousSum - target);
    const diffCurrent = Math.abs(uah - target);

    if (diffPrevious < diffCurrent) {
        return { days: days - 1, uah: previousSum };
    } else {
        return { days, uah };
    }
}

document.getElementById('findButton').addEventListener('click', () => {
    const input = document.getElementById('targetInput');
    const resultText = document.getElementById('resultText');
    const averageText = document.getElementById('averageText');
    const target = parseInt(input.value, 10);

    if (isNaN(target) || target <= 0) {
        resultText.textContent = 'Пожалуйста, введите положительное число.';
        averageText.textContent = '';
        return;
    }

    const result = findNearest(target);
    const average = (result.uah / result.days).toFixed(2);

    resultText.textContent = `Ближайшее число: ${result.uah}, за ${result.days} дней.`;
    averageText.textContent = `Среднее количество в день: ${average} гривен.`;
});
