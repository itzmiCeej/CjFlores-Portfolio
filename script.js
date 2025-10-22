<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cj-flores</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    </head>
    <style>
        html {
    scroll-behavior: smooth;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    background: url(assets/background.jpg) center / cover;
    background-attachment: fixed;
}
body:has(input:checked) {
    background: url(assets/bg-2.jpg) center / cover;
    background-attachment: fixed;
}

/* header */
header {
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
}

header img {
    height: 80px;
}
.logo {
    display: flex;
    align-items: center;
    color: white;
    font-size: 3vh;
    text-decoration: none;
}
span {
    color:  rgb(200, 20, 20);
}
.head-link a {
    color: white ;
    text-decoration: none;
    text-transform: uppercase ;
    font-size: 1.8vh;
    margin-right: 30px;
}
.head-link a:hover {
    font-size: 2vh;
    border-radius: 10px;
    padding: 10px;
    text-decoration: underline;
    color:  rgb(200, 20, 20);
}
.head-btn a {
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 1.8vh;
}
.login {
    color: white;
    background-color: rgb(200, 20, 20);
    padding: 6px 15px;
    border-radius: 30px;
    font-size: 2vh;
}
.login:hover {
    font-size: 2vh;
    color: rgb(200, 20, 20);
    background-color: white;
}
.register {
    color: rgb(200, 20, 20);
    background-color: white;
    padding: 6px 15px;
    border-radius: 30px;
    font-size: 2vh;
}
.register:hover {
    font-size: 2vh;
    color: white;
    background-color: rgb(200, 20, 20);
}
.menu {
    display: none;
    font-size: 30px;
    color: white;
    cursor: pointer;
}
#menu-toggle {
    display: none;
}

h1 {
    color: white;
    background-color: rgb(200, 20, 20);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 20px;
    font-size: 3.5vh;
    padding: 10px;
}
/* home */
.home {
    padding-top: 150px;
}
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8%;
}

.hero-text h2 {
    color: white;
    font-size: 4vh;
    text-shadow: 0px 0px 10px rgb(200, 20, 20),
                0px 0px 20px rgb(200, 20, 20),
                0px 0px 40px rgb(200, 20, 20),
                0px 0px 80px rgb(200, 20, 20),
                0px 0px 10px rgb(200, 20, 20);
}

.hero-text h3 {
    font-size: 2.5vh;
    text-transform: capitalize;
    background: linear-gradient(-45deg, #ff0000, #ffff00, #00ff00, #00ffff, #191970, #ff00ff);
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate-gradient 5s linear infinite;
}
@keyframes animate-gradient {
    to {
        background-position: 400%;
    }
}
.social-link i {
    color: white;
    background-color: rgba(0, 0, 0, 0.7);;
    padding: 6px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 3.5vh;
    transition: all .42s;
    margin-top: 20px;
}
.social-link i:hover {
    transform: rotateX(360deg);
    transition: .2s;
    color: white;
    background-color: rgb(200, 20, 20);
}

.hero img {
    border-radius: 50%;
    height: 600px;
}
.my-portrait {
    animation: bounce 1.5s ease-in-out infinite;
}
@keyframes bounce {
    0% {
        transform: translatey(0px)
    }
    50% {
        transform: translatey(-20px)
    }
    100% {
        transform: translatey(0px);
    }
}



/* about */
.about {
    padding-top: 150px;
}
.about-body {
    align-items: center;
    text-align: center;
    padding: 100px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 30px;
    border: 3px solid rgb(200, 20, 20);
    margin: 6%;
}
.about-body img {
    height: 300px;
    transition: .42s;
    animation: rotate 10s infinite;
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.about-text p {
    color: white;
    text-transform: capitalize;
    font-size: 1.5vh;
    text-align: center;
}



/* skills */
.skill {
    padding-top: 150px;
}
.skill-body {
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    padding: 50px;
}
table{
    margin-top: 50px;
    width: 100%;
}
table, tr, th, td{
border: 2px solid rgb(200, 20, 20);
border-collapse: collapse;
text-align: center;
}
a {
    text-decoration: none;
    color: black;
}
tr th{
    color: white;
    background-color: rgb(200, 20, 20);
    text-transform: uppercase;
}
td i{
    color: rgb(200, 20, 20);
    font-size: 4vh;
}
td{
    color: white;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.4);
}
tr:hover{
    background-color: rgb(200, 20, 20);
}




/* Testi */
.testi {
    padding-top: 150px;
}
#testimonials {
    padding-top: 150px;
    color: #22223b;
    text-align: center;
    overflow: hidden;
}
.testimonials-slider-wrapper {
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
}

.testimonials-container {
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    padding: 20px;
    animation: slideTestimonials 30s linear infinite;
    width: calc(320px * 12 + 30px * 11);
}
@keyframes slideTestimonials {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.testimonial-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 100px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-width: 320px;
    margin-top: 10vh;
}

.testimonial-card:hover {
    transform: translateY(-10px);
    border: 3px solid rgb(200, 20, 20);
}

.testimonial-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
}

.testimonial-quote {
    font-size: 2vh;
    color: red;
    margin-bottom: 15px;
}
.stars-rate i {
    color: rgb(230, 230, 10);
}

.testimonial-name {
    font-size: 1em;
    font-weight: bold;
    color: white;
}


/* Project */
.project {
    padding-top: 150px;
}
.project h3 {
    color: rgb(200, 20, 20);
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5vh;
}
.project-body {
    padding: 50px;
}
.card-1 img {
    height: 100px;
    border-radius: 10px;
}
.cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
}
.card-1 {
    padding: 50px;
    background: rgba(0, 0, 0, 0.5);
    margin: 20px;
    border-radius: 20px;
    text-align: center;
}
.card-1:hover {
    border: 4px solid rgb(200, 20, 20);
    transform: translateY(-20px);
}

/* Certificate */
.certi {
    padding-top: 150px;

}
.certi h1 {
    color: white;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 20px;
    font-size: 3.5vh;
}
.certi-body {
    margin: 100px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 30px;
}
.certi img {
    height: 500px;
    border-radius: 30px;
}
.friends {
    padding: 50px;
    text-align: center;
}
.friends h2 {
    color: white;
    text-transform: uppercase;
}
.friends p {
    color: white;
    text-transform: capitalize;
}



/* Contact */
.cta {
    margin-top: 100px;
}
.cta-body {
    background: rgba(0, 0, 0, 0.4);
    margin: 100px;
    border-radius: 30px;
    padding: 80px;
}

.cta-body h2 {
    color: rgb(200, 20, 20);
    text-align: center;
    font-size: 3vh;
    text-transform: uppercase;
}
.cta-body p {
    text-align: center;
    color: white;
    font-size: 2vh;
    margin-left: 20px;
}
.footer-1 {
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer-1 a {
    color: rgb(200, 20, 20);
    font-size: 4vh;
}


.copy-right p {
    color: rgb(200, 20, 20);
    text-align: center;
    text-transform: capitalize;
    font-size: 2vh;
    font-weight: 900;
}

@media (max-width:991) and (min-width:769) {
    .logo {
    font-size: 2vh;
}
.head-link a {
    font-size: 1vh;
}
}

@media (max-width: 768px) {
.menu {
    display: block;
}
.head-link {
    position: fixed;
    top: 80px;
    left: -100%;
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: calc(100vh - 80px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: left 0.3s ease;
    gap: 30px;
}
#menu-toggle:checked ~ .head-link {
    left: 0;
}
.head-link a {
    font-size: 2vh;
}

.hero {
    flex-direction: column;
    text-align: center;
}

.hero img {
    height: 250px;
    margin-top: 20px;
}
@media (max-width: 1024px) and (min-width: 769px) {
.hero img {
    height: 350px;
}
.hero-text h2 {
    font-size: 3vh;
}
.head-link a {
    font-size: 1.6vh;
}
}
.copy-right p {
    color: rgb(200, 20, 20);
    text-align: center;
    font-size: 2vh;
    font-weight: 900;
    padding: 20px;
}
    </style>
</head>
<body>
    <header>
    <div class="logo-name">
    <a href="#home" class="logo"><img src="logo.png" alt=""><Span>C</Span>jflores</a>
    <label for="menu-toggle" class="menu"><i class="bx bx-menu"></i></label>
    </div>
    <div class="head-link">
        <ul>
            <a href="#home">Home</a>>
            <a href="#about">About</a>
            <a href="#skill">Skill</a>
            <a href="#testi">Testimonials</a>
            <a href="#project">Project</a>
            <a href="#certi">Certificate</a>
            <a href="#cta">Contact</a>
        </ul>
        <div class="menu">
            <label for="chk1">
                <i class="bx bx-menu"></i>
            </label>
        </div>
    </div>
</header>

<!-- HOME -->
    <section class="home" id="home">
        <div class="hero"> 
            <div class="hero-text">
                <h2>Flores, Christopher James A</h2>
                <h3>Web and Game Developer / Animation</h3>
                <div class="social-link">
                    <a href="https://www.facebook.com/share/1B2t6uSNXG/"><i class='bx bxl-facebook'></i></a>
                    <a href="https://www.instagram.com/itzmi_ceej?igsh=dzBiZnNjb3h4ZzU="><i class='bx bxl-instagram' ></i></a>
                    <a href="#"><i class='bx bxl-twitter' ></i></a>
                    <a href="https://cjflores0514@gmail.com"><i class='bx bxl-gmail' ></i></a>
                    <a href="https://www.youtube.com/@cjflores2657"><i class='bx bxl-youtube' ></i></a>
                </div>
            </div>
            
                <img src="my-portrait.jpg" class="my-portrait" alt="portrait">
        </div>
    </section>

    <!-- ABOUT -->
    <section class="about" id="about">
        <div class="about-body">
            <img src="logo.png" alt="logo">

            <div class="about-text">
                <p>As a Web and Game Developer with expertise in security and animation, I turn ideas into interactive, visually compelling, and secure digital experiences that engage users and stand out in the digital world.
                </p>
            </div>
        </div>
    </section>


    <!-- SKILL -->
    <section class="skill" id="skill">
        <div class="skill-body">
             <table cellpadding="30">
    <tr>
        <th>Logo</th>
        <th>Language</th>
        <th>Percentage</th>
        <th>Grade</th>
    </tr>
    <tr>
    <td><i class='bx bxl-html5' ></i></td>
    <td>Html</td>
    <td>80%</td>
    <td>Excellent</td>
    </tr>
    <tr>
        <td><i class='bx bxl-css3'></i></td>
        <td>Css</td>
        <td>60%</td>
        <td>Excellent</td>
    </tr>
    <tr>
        <td><i class='bx bxl-javascript'></i></td>
        <td>Java Script</td>
        <td>30%</td>
        <td>Poor</td>
    </tr>
    <tr>
        <td><i class='bx bxl-c-plus-plus' ></i></td>
        <td>C++</td>
        <td>30%</td>
        <td>poor</td>
    </tr>
    </table>
        </div>
    </section>

    <!-- Testi -->
    <section class="testi" id="testi">
            <div class="testimonials-slider-wrapper">
                <div class="testimonials-container">
                    <div class="testimonial-card">
                        <img src="classmates/simblante.jpeg" alt="Client 1" class="testimonial-avatar">
                        <p class="testimonial-quote">Dennis Simblante</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">ito po talaga yung pinaka idol ko sa lahat</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/wayne.jpg" alt="Client 2" class="testimonial-avatar">
                        <p class="testimonial-quote">Wayne Corbita</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Idol talaga kita Cj Flores, Love u</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/borja.jpeg" alt="Client 3" class="testimonial-avatar">
                        <p class="testimonial-quote">Ace Borja</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Master pa picture po ako pag nag kita tayo</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/valencia.jpg" alt="Client 4" class="testimonial-avatar">
                        <p class="testimonial-quote">Rj Valencia</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Angass Sobrang galing tas Gwappings pa</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/agtas.jpg" alt="Client 5" class="testimonial-avatar">
                        <p class="testimonial-quote">Leorence agtas</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Boss pa shout out sobrang idol po kita</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/luis.jpg" alt="Client 6" class="testimonial-avatar">
                        <p class="testimonial-quote">Luis Arias</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Nice deal Boss sana pomogi at kumyut kapa lalo</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/zafe.jpg" alt="Client 1" class="testimonial-avatar">
                        <p class="testimonial-quote">Emi Zafe</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Idol pa seminar nang mga ganyang galaw</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/galdo.jpg" alt="Client 2" class="testimonial-avatar">
                        <p class="testimonial-quote">Hazel Galdo</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">idol pa shout out sana mapansin</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/rubio.jpg" alt="Client 3" class="testimonial-avatar">
                        <p class="testimonial-quote">Jake Rubio</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Kuys please upload ka ulet nang mga bagong tutorial</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/nogales.jpg" alt="Client 4" class="testimonial-avatar">
                        <p class="testimonial-quote">Shean Nogales</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Aminado talaga ako mas gwappings saken to</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/victoriano.jpg" alt="Client 5" class="testimonial-avatar">
                        <p class="testimonial-quote">Rhed Victoriano</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Done deal pre, next time ulet super Satisfied</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/viado.jpg" alt="Client 6" class="testimonial-avatar">
                        <p class="testimonial-quote">Edriyan Viado</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Nice project Bossing your the best</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/cawaling.jpg" alt="Client 6" class="testimonial-avatar">
                        <p class="testimonial-quote">Jasper Cawaling</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Inaabangan ko po palage mga bago mong ilalabas na video sir</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/mira.jpg" alt="Client 6" class="testimonial-avatar">
                        <p class="testimonial-quote">Erika Mira</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Boss pagawa ako ulet project 100 kase grade ko last pagawa ko sayo</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/shine.jpg" alt="Client 6" class="testimonial-avatar">
                        <p class="testimonial-quote">Shine</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">Super Angas boss sana upload ka ulet agad</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="classmates/gilbas.jpg" alt="Client 6" class="testimonial-avatar">
                        <p class="testimonial-quote">Romel Gilbas</p>
                        <div class="stars-rate">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <a href="#"><i class='bx bxs-star'></i></a>
                        </div>
                        <p class="testimonial-name">PA shout out sir, matagal mo na po akong fan</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Project -->
        <section class="project" id="project">
        <div class="project-body">
            <div class="cards">
                <div class="card-1">
                <a href="Portfolio.html"><img src="assets/computer-logo.jpg" alt=""></i></a>
                <h3>Web developer</h3>
                <p></p>
                </div>

                <div class="card-1">
                <a href="table.html"><img src="assets/game-logo.jpg" alt=""></i></a>
                <h3>Game Developer</h3>
                </div>

                <div class="card-1">
                <a href="table.html"><img src="assets/animation-logo.webp" alt=""></i></a>
                <h3>Animation</h3>
                </div>

                <div class="card-1">
                <a href="table.html"><img src="assets/editor-logo.jpg" alt=""></i></a>
                <h3>Video Editing</h3>
                </div>
                
                <div class="card-1">
                <a href="table.html"><img src="assets/security-logo.jpg" alt=""></i></a>
                <h3>Security</h3>
                </div>
            </div>
            </div>
        </div>
    </section>


    <section class="certi" id="certi">
        <div class="certi-body">
            <div class="friends">
                <img src="classmates/badings.jpg" alt="Friends">
                <div class="text">
                <h2>Certificate of Badings Company</h2>
                <p>A front-end prototype of a student portal created using HTML, CSS, and JavaScript. Designed to manage events, announcements, and club activities, with a focus on user experience and responsive design.
                </p>
            </div>
            </div>
        </div>
    </section>


    
<section class="cta" id="cta">
        <div class="cta-body">
            <h2>Please contact me</h2>
            <div class="cta-footer">
            <div class="cta-text">
            <p>If you have any question? this is my following contact Information.</p>

            <div class="footer-1">
            <a href="#"><i class='bx bxl-gmail'></i></a>
            <p>cjflores0514@gmail.com</p>
            </div>

            <div class="footer-1">
            <a href="#"><i class='bx bxl-facebook' ></i></a>
            <p>Cjflores_32</p>
            </div>

            <div class="footer-1">
            <a href="#"><i class='bx bx-phone' ></i></a>
            <p>+6393 6644 4308</p>
            </div>
            </div>
            </div>
        </div>
    </section>


    <div class="copy-right">
        <p>Copyright FLORES @2025 All Rights Reserved</p>
    </div>

</body>
</html>