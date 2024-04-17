const TodoUl = document.getElementById('TodoUl');
const InProgressUl = document.getElementById('InProgressUl');
const DoneUl = document.getElementById('DoneUl');

const Li = document.querySelectorAll('li');

const DropZones = document.querySelectorAll('.dropzone');

const originalBackgroundColor = cardSection1.style.backgroundColor;



for (const li of Li){
    li.addEventListener('dragstart', event => {
        console.log('start drag...');
        event.dataTransfer.setData('text/plain', li.id);
    });
    li.addEventListener('dragend', event =>{
        li.scrollIntoView({ behavior: 'smooth' });
    })
}

for (const dropZ of DropZones){

        dropZ.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        dropZ.addEventListener('drop', event =>{
            const Id = event.dataTransfer.getData('text/plain');
            const LiToAppend = document.getElementById(Id);
            dropZ.append(LiToAppend);
        })
}

    





/* DropZones.forEach(dropzone => {
    // Drag over event
    dropzone.addEventListener('dragover', (event) => {
        // Prevent default to allow drop
        event.preventDefault();
    });

    // Drop event
    dropzone.addEventListener('drop', (event) => {
        // Prevent default to avoid browser behavior
        event.preventDefault();
        // Get data from the drag event
        const data = event.dataTransfer.getData('text/plain');
        // Check if the dropzone has the class 'dropzone'
        if (dropzone.classList.contains('dropzone')) {
            // Append the draggable element to the dropzone
            dropzone.append(Li);
        }
    });
}); */