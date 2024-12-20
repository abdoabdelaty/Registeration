document.getElementById('btn-logout').addEventListener('click', function() {
    localStorage.removeItem('userName');
    window.location.href = './index.html';
  });

document.getElementById('wellcome').innerHTML = `Welcome ${JSON.parse(localStorage.getItem("userName"))}`;