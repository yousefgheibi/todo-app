document.querySelector('#push').onclick = function (){
    if(document.querySelector('#newtask input').value.length === 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa fa-trash-alt"></i>
                </button>
        `;

        document.querySelector('#newtask input').value == "";
        var current_tasks = document.querySelectorAll(".delete");

        for (var i=0; i< current_tasks.length;i++){
            current_tasks[i].onclick = function (){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");

        for (var i=0; i< tasks.length; i++){
            tasks[i].onclick = function (){
                this.classList.toggle('completed');
            }
        }

        document.querySelector('#newtask input').value = "";
    }

}


const toggleSwitch = document.querySelector('.toggle-button');

function switchTheme(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);