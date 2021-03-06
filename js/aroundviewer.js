var filSelBtnState = false;

function handleFiles(files){
    if (!files.length) {
        
    } else {
        var placeHolder = document.getElementById('virtualArea');
        placeHolder.innerHTML= "<p>your image is loading</p>"; //must update to change the texture instead
        var img = document.createElement('img');
        img.setAttribute('id', 'texture')
        img.src = window.URL.createObjectURL(files[0]);
        var skys = document.getElementsByTagName('a-sky');
        img.onload = function() {
            
            var sky = document.createElement('a-sky');
            var scene = document.createElement('a-scene');
            var assets = document.createElement('a-assets');
            virtualPlaceholder = document.getElementById('virtualArea');
            virtualPlaceholder.innerHTML = "";

            assets.appendChild(img);
            sky.setAttribute('src', '#texture');
            scene.appendChild(assets);
            scene.appendChild(sky);
            virtualPlaceholder.appendChild(scene);

            window.URL.revokeObjectURL(this.src);
        }
    }
}

function init(){
    var uploadBtn = document.getElementById("selectButton"),
        fileElem = document.getElementById("fileSelection");

    uploadBtn.addEventListener("click", function (e) {
        var fs = document.getElementById('fileSelector');
        if(filSelBtnState)
            fs.style.animationName="maximize";
        else
            fs.style.animationName="minimize";
        filSelBtnState = !filSelBtnState;

        if (fileElem && filSelBtnState) {
            fileElem.click();
        }
        e.preventDefault(); // prevent navigation to "#"
        }, false);
}
