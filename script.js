var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+917904551220'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+91 7904551220</label></div> </a> <a href='mailto:sathish20041011@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='images/gmail.svg' alt=''><label class='number'>mail id:sathish20041011@gmail.com</label></div> </a> <a href='https://www.linkedin.com/in/sathish-waran-s-165661257/' target='_blank' rel='noopener noreferrer'> <div class='socialItem' id='call'><img class='socialItemI' src='images/linkedin.svg' alt=''><label class='number'>Sathish Waran S</label></div> </a> <a target='_blank' href='https://github.com/Sathish1110'> <div class='socialItem' id='call'><img class='socialItemI' src='images/github.svg' alt=''><label class='number'>Sathish1110</label></div> </a> <a href='https://leetcode.com/u/Sathish_1110/' target='_blank' rel='noopener noreferrer'> <div class='socialItem' id='call'><img class='socialItemI' src='images/leetcode.jpg' alt=''><label class='number'>Sathish_1110</label></div> </a> <a target='_blank' href='https://wa.me/7904551220'> <div class='socialItem' id='call'><img class='socialItemI' src='images/whatsapp.svg' alt=''><label class='number'>7904551220</label></div> </a> </div>";
var resumeString = "<a href='assets/Sathishwaran S Resume.pdf' target='_blank'><img src='images/resume_thumbnail.png' class='resumeThumbnail'></a><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.svg'><label>Sathishwaran_Resume.pdf</label></div><a href='assets/Sathishwaran S Resume.pdf' download='Sathish Waran S Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243.0318591334597!2d80.24955043018981!3d12.93920039095952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1750510355457!5m2!1sen!2sin' width='300' height='200' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' class='map'></iframe></div><label class='add'><address>No:2/1240A<br>7th Cross Street Karpaga Vinayagar Nagar Vettuvankeni<br>Chennai ,Tamilnadu , India 600115</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}
document.addEventListener("click", function (event) {
    var fullScreenDP = document.getElementById("fullScreenDP");
    if (fullScreenDP.style.display === 'flex') {
        if (!event.target.closest(".dp") && !event.target.closest(".closeBTN") && event.target.closest("#fullScreenDP")) {
            fullScreenDP.style.display = 'none';
        }
    }
});



function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function() { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    console.log("Received input:", inputText);
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Sathish Waran S</a>.</span><br><br>I am a tech-driven individual with a strong passion for<span class='bold'> App development</span>,<span class='bold'> Web Development</span> and <span class='bold'> practical problem-solving</span><br><br>I enjoy building real-world solutions — from <span class='bold'>chatbot applications</span> using <span class='bold'> Flutter</span> and FastAPI to creative, user-friendly web experiences.<br><br>As the <span class='bold'>NSS Coordinator</span> at my institution, I actively lead social service initiatives, combining <span class='bold'>leadership</span> with a sense of community impact. I'm also a proactive student organizer at <span class='bold'> NDLI Club</span>, having conducted symposiums, tech events, and library-based programs that blend creativity with learning.<br><br>Send <span class='bold' id='glow'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I can comfortably write code in following languages :<br><span class='bold'>Java<br>Python<br>C<br>Dart<br>HTML<br>CSS</span><br><br>I've experience with following frameworks :<span class='bold'><br>Flutter<br>Android<br>ReactJs</span><br><br> I uses the following Development Tools:<span class='bold'><br>Android Studio<br>Visual Studio Code<br>GitHub<br>Git</span><br><br>I have a basic understanding of the following technologies:<span class='bold'><br>FastAPI<br>NodeJs</span>");
            break;

        case "education":
            sendTextMessage("I currently pursuing Final Year <span class='bold'>B.E Computer Science and Engineering</span> from <span class='bold'>Sri Sairam Engineering College - Chennai</span> with a CGPA of <span class='bold'>7.83</span> out of grade scale 10.<br><br>I have completed my Schooling from <span class='bold'>Nellai Nadar Mat.Hr.Sec School - Chennai</span> with a percentage of <span class='bold'>87.17%</span> in 12th Grade and with a percentage of <span class='bold'>75%</span> in 10th Grade.");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/sathish_1110/'><span class='bold'> Sathish Waran S</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("Do You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Sathish1110'> <div class='socialItem' id='call'><img class='socialItemI' src='images/github.svg' alt=''><label class='number'>Sathish1110</label></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send <span class='bold' id='glow'>'help'</span> to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}
// function sendTextMessage() {
//     setTimeout(setLastSeen, 1000);
//     var date = new Date();
//     var myLI = document.createElement("li");
//     var myDiv = document.createElement("div");
//     var greendiv = document.createElement("div");
//     var dateLabel = document.createElement("label");
//     dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
//     myDiv.setAttribute("class", "received");
//     greendiv.setAttribute("class", "grey");
//     dateLabel.setAttribute("class", "dateLabel");
//     greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
//     myDiv.appendChild(greendiv);
//     myLI.appendChild(myDiv);
//     greendiv.appendChild(dateLabel);
//     document.getElementById("listUL").appendChild(myLI);
//     var s = document.getElementById("chatting");
//     s.scrollTop = s.scrollHeight;
//     playSound();
// }
function sendTextMessage(text) {
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();

    myDiv.setAttribute("class", "recieved");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");

    greendiv.innerHTML = text;  // Use innerHTML to support <span> and <br>
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);

    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
    setLastSeen();
}


function playSound() {
    audio.play();
}
