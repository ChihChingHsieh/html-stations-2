function displayList() {
    const list = document.getElementById('fruits');
    
    const ul = document.createElement('ul');
    
    Array.from(list.getElementsByTagName('p')).forEach(p => {
      const li = document.createElement('li');
      li.textContent = p.textContent;
      ul.appendChild(li);
    });
    
    list.innerHTML = '';
    list.appendChild(ul);
  }
  