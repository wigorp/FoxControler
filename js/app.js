let index = 1;

const actionPills = document.querySelectorAll('.action-pill-btn');

actionPills.forEach((actionPill) => {
    actionPill.addEventListener('click', () => {
        removeActiveness();
        actionPill.classList.add('active-pill');

        index = actionPill.ariaValueNow;
    });
});

function removeActiveness() {
    actionPills.forEach((actionPill) => {
        actionPill.classList.remove('active-pill');
    });
}

function filterTable() {
    let input, filter, table, tr, td, i, textValue;
    input = document.getElementById('search-field');
    filter = input.value.toUpperCase();
    table = document.getElementById('table');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[index];
        if (td) {
            textValue = td.textContent || td.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}
