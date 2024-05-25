document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    const themeSelector = document.getElementById('theme-selector');
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = 1;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
          const btnValue = button.textContent.trim();

          if (button.id === 'btn-reset') {
            display.textContent = '';
          } else if (button.id === 'btn-del') {
            display.textContent = display.textContent.slice(0, -1);
          } else if (button.id === 'btn-equals') {
            try {
              display.textContent = eval(display.textContent.replace(/x/g, '*').replace(/÷/g, '/'));
            } catch {
              display.textContent = 'Error';
            }
          } else {
            display.textContent += btnValue;
          }
        });
      });

      
      document.querySelectorAll('input[name="toggle"]').forEach((radio) => {
        radio.addEventListener('change', function() {
            document.body.classList.remove('theme1', 'theme2', 'theme3');
            if (this.id === 'option1') {
                document.body.classList.add('theme1');
            } else if (this.id === 'option2') {
                document.body.classList.add('theme2');
            } else if (this.id === 'option3') {
                document.body.classList.add('theme3');
            }
        });
    });
    });