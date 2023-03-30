interface User {
    id: number;
    name: string;
    email: string;
    phone: number;
  }
  
  const fetchData = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  };
  
  const renderTable = async (): Promise<void> => {
    const data = await fetchData();
    const table = document.getElementById('table_body')! as HTMLElement;
    

  data.map((item: User) => {
    const row = document.createElement('tr');
    const id = document.createElement('td');
    const name = document.createElement('td');
    const email = document.createElement('td');
    const phone = document.createElement('td');


    id.textContent = item.id.toString();
    name.textContent = item.name;
    email.textContent = item.email.toString();
    phone.textContent = item.phone.toString();

    row.appendChild(id);
    row.appendChild(name);
    row.appendChild(email);
    row.appendChild(phone);


    table.appendChild(row);
  })
             
  };
  
  renderTable();