function generate(){
    let name = document.querySelector(".name").value;
    const edu = document.querySelector(".edu").value;
    const exp = document.querySelector(".exp").value;
    const cont = document.querySelector(".cont").value;
    const skills = document.querySelector(".skills").value;
    const hobbies = document.querySelector(".hobbies").value;
    name=String(name).toUpperCase()
    document.body.innerHTML = 
        `<div class="resume">
            <p class="headings">${name}</p>
            <div>
                <p class="headings">Education</p>
                <p class="content">${edu}</p>
            </div>
            <div>
                <p class="headings">Skills</p>
                <p class="content">${skills}</p>
            </div>
            <div>
                <p class="headings">Experience</p>
                <p class="content">${exp}</p>
            </div>
            <div>
                <p class="headings">Contact</p>
                <p class="content">${cont}</p>
            </div>
            <div>
                <p class="headings">Hobbies</p>
                <p class="content">${hobbies}</p>
            </div>
        </div>`
}