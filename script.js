function createTable() {
    // Prompt the user for the number of rows and columns
    const rows = prompt("Input number of rows");
    const columns = prompt("Input number of columns");

    // Convert inputs to integers
    const rn = parseInt(rows);
    const cn = parseInt(columns);

    // Validate inputs
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return; // Exit the function if inputs are invalid
    }

    // Get the table element
    const table = document.getElementById('myTable');

    // Clear any existing table content
    table.innerHTML = '';

    // Create the table rows and cells
    for (let i = 0; i < rn; i++) {
        const row = document.createElement('tr'); // Create a new row
        for (let j = 0; j < cn; j++) {
            const cell = document.createElement('td'); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Set cell content
            row.appendChild(cell); // Append cell to the row
        }
        table.appendChild(row); // Append row to the table
    }
}
