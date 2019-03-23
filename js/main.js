(function (){
    const cells = document.getElementById("gay-table").children;
    for (let i = 0; i < cells.length; i++) {
        const cell = cells.item(i);
        cell.addEventListener('mouseenter', () => cell.classList.add('wiggle'));
        cell.addEventListener('animationend', () => {
            cell.classList.remove('wiggle');
        });
    }
})();