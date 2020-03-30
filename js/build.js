var container = document.querySelector('#container')

container.className='container-fluid'

var link1=document.createElement('a');
link1.textContent="high on";
link1.className = "nav-item nav-link active";
link1.setAttribute("href", "#");

var link2=document.createElement('a');
link2.textContent="Home";
link2.className = "nav-item nav-link active small pl-5";
link2.setAttribute("href", "#");

var link3=document.createElement('a');
link3.textContent="Categories";
link3.className = "nav-item nav-link active small pl-5";
link3.setAttribute("href", "#");


var headerDive=document.createElement('div');
headerDiv.className = "nav navbar-nav h3";
headerDiv.append(Link1);
headerDiv.append(link2);
headerDiv.append(link3);

var headerNav = document.createElement('nav');
headerNav.style="background-color; rgb(82, 167, 250";
headerNav.append(headerDiv);

container.append(headerNav);