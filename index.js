function csp() {
    window.open("https://docs.google.com/document/d/1fe8WqC-8ANao3NeNtd517elGpjtQd-Mb7myZg2J4xYY/edit?tab=t.0", "_blank");
}

function csa() {
    window.open("https://docs.google.com/document/d/1HQrQpz4c7BPawGUj5knEQYSd88lH2uRgwz2KuLSGBWw/edit?usp=sharing","_blank");
}

function dsa() {
    window.open("https://docs.google.com/document/d/1EKe8ApCdyGswZcFHimbYrD_YyvYTdRvnyIlS0eeZWWc/edit?usp=sharing","_blank");
}

function caps() {
    window.open("https://docs.google.com/document/d/1VPM1zYZzSlGkjDre80V5IrqwnBAaFGxt4L4tO11R1X0/edit?tab=t.0","_blank");
}

function dis() {
    window.open("https://docs.google.com/document/d/1OOcgEaf3etS67lBQ-YZ1VLIybsRjvmGBehnaR_O1wvc/edit?tab=t.0","_blank");
}

function cspimg() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank");
}

function csaimg() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank");
}

const imgs = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10", "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"]
let curr = 0;

function carouselFor() {
    if (curr === 2) {
        curr = 0;
    }
    else {
        curr++;
    }
    document.getElementById("caroImg").setAttribute("src", imgs[curr]);
}

function carouselBack() {
    if (curr === 0) {
        curr = 2;
    }
    else {
        curr--;
    }
    document.getElementById("caroImg").setAttribute("src", imgs[curr]);
}

function courseReloc() {
    if (document.getElementById("dropDownAPC").style.display === "none") {

        document.getElementById("dropDownAPC").style.display = "flex";
        document.getElementById("dropDownAPA").style.display = "flex";
        document.getElementById("dropDownDSA").style.display = "flex";
        document.getElementById("dropDownCAP").style.display = "flex";
        document.getElementById("dropDownDIS").style.display = "flex";

    } else {
        document.getElementById("dropDownAPC").style.display = "none";
        document.getElementById("dropDownAPA").style.display = "none";
        document.getElementById("dropDownDSA").style.display = "none";
        document.getElementById("dropDownCAP").style.display = "none";
        document.getElementById("dropDownDIS").style.display = "none";
    }
}

function hambutClick() {
    if (document.getElementById("sdBar").style.display === "flex") {
        document.getElementById("sdBar").style.display = "none";
        document.getElementById("main").style.paddingLeft = "0%"
        document.getElementById("hambut").style.color = "white";
        document.getElementById("hambut").style.borderColor = "white";
    } else {
        document.getElementById("sdBar").style.display = "flex";
        document.getElementById("main").style.paddingLeft = "18%"
        document.getElementById("hambut").style.color = "black";
        document.getElementById("hambut").style.borderColor = "black";
    }

}

