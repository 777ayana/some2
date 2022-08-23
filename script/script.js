const body = document.body
const header = document.createElement("header")
const logo_block = document.createElement("div")
logo_block.classList.add("logo_block")
const img = document.createElement("img")
img.src = "./img/logo.png"
const logo_blockH1 = document.createElement("h1")
logo_blockH1.textContent = "SLOGAN SLOGAN SLOGAN"




const navbar = document.createElement("nav")
const nav_ul = document.createElement("ul")
nav_ul.classList.add("menu")
const menu_item = ["Главная", "О приложении", "О проекте", "Скачать", "Контакты"]
for (let i = 0; i < menu_item.length; i++) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.classList.add("menu_item")
    a.textContent = menu_item[i]
    li.append(a)
    nav_ul.append(li)
}




const question_block = document.createElement("section")
question_block.classList.add("question_block")
for (let i = 0; i < 3; i++) {
    const question_img = document.createElement("div")
    question_img.classList.add("question_img")
    const img = document.createElement("img")
    img.src = "./img/3photos.png"
    const p = document.createElement("p")
    p.textContent = "Часто ли Вы опаздываете на работу (учёбу)?"
    question_img.append(img, p)
    question_block.append(question_img)
}

const main = document.createElement("main")
const part2 = document.createElement('section')
part2.classList.add('part2')
const p2_title = document.createElement("p")
p2_title.classList.add('part2__title')
p2_title.textContent = "О приложении"

const video = document.createElement("div")
video.classList.add("video")
const img_video = document.createElement("img")
img_video.classList.add("video_back")
img_video.src = "./img/video.png"
const img_play = document.createElement("img")
img_play.classList.add("play")
img_play.src = "./img/play-button.png"

const section = document.createElement('section')


const section_quest = document.createElement('section')
section_quest.classList.add('section_quest')
const block_imgs = document.createElement('div')
block_imgs.classList.add('block_imgs')
for (let i = 0; i < 5; i++) {
     const fives = document.createElement('img')
     fives.src ='./img/questionsFive.png'
     block_imgs.append(fives)
     section_quest.append(block_imgs)

}
const project = document.createElement('section')
project.classList.add('project')
const about_project = document.createElement('p')
about_project.classList.add('about_project')
const 
















video.append(img_video, img_play)
main.append(part2,section_quest )
part2.append(p2_title, video)
navbar.append(nav_ul)
project.append(project, about_project)

logo_block.append(img, logo_blockH1)
header.append(logo_block, navbar, question_block)
body.append(header, main)




