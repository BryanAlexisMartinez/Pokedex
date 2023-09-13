let footer = document.getElementById("footer");


//WINDOW LOAD
window.addEventListener("load", function (event) {
    event.preventDefault();

    footer.insertAdjacentHTML("beforeend",
        `
        <ul class="list-unstyled d-flex justify-content-between">
        <li>
            <a href="https://es-la.facebook.com/" target="_blank">
                <img id="githubLogo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Icon"/>
            </a>
        </li>
    
        <li>
            <a href="https://es-la.facebook.com/" target="_blank">
                <img id="linkedinLogo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn Icon"/>
            </a>
        </li>
    </ul>
    
    <ul class="list-unstyled d-flex justify-content-between">
        <li>
            <p>Bryan Alexis Martinez Alvarado ©</p>
        </li>
    </ul>
    
    

    


    
    `
    );
});//Window load