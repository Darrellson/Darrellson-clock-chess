//inserting the images
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {  // JavaScript-ში, forEach() არის მეთოდი, რომელიც გამოიყენება მასივის ან NodeList-ის ელემენტების განმეორებით.
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="${image.innerText}.png" alt="">` //n JavaScript-ში, ${} სინტაქსი გამოიყენება თარგის ლიტერალური სტრიქონში სტრიქონების ინტერპოლაციის შესასრულებლად ან სტრიქონში გამონათქვამების ან ცვლადების ჩასართავად.
                image.style.cursor = 'pointer' // კურსორის თვისების „მაჩვენებელზე“ დაყენება ცვლის კურსორის გარეგნობას მანიშნებელი ხელით, რაც მიუთითებს, რომ ელემენტი არის ინტერაქტიული და დაწკაპუნებით,
            }
            else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage() //ფუნქცია JavaScript-ში პასუხისმგებელია სურათების დამატებაზე

//Coloring the board

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {
        getId = color.id // არის მარტივი დავალების განცხადება, რომელიც ამოიღებს HTML ელემენტის id ატრიბუტს, რომელიც წარმოდგენილია ცვლადის ფერით და ანიჭებს მას ცვლადს
        arr = Array.from(getId) // არის მეთოდი, რომელიც გამოიყენება ახალი მასივის შესაქმნელად მასივის მსგავსი ან გამეორებადი ობიექტიდან.
        arr.shift() // მეთოდი გამოიყენება მასივებით, რათა ამოიღონ პირველი ელემენტი მასივიდან და დააბრუნონ ამოღებული ელემენტი.
        aside = eval(arr.pop()) // არის ფუნქცია, რომელიც აფასებს JavaScript კოდს, რომელიც წარმოდგენილია სტრიქონის სახით. შლის ბოლო ელემენტს მასივიდან და აბრუნებს ამ ელემენტს.
        aup = eval(arr.shift()) // შლის პირველ ელემენტს arr მასივიდან და აბრუნებს ამ ელემენტს
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(232 235 239)' // color.style.backgroundColor-ის დაყენება 'rgb(232 235 239)' განსაზღვრავს HTML ელემენტის ფონის ფერს, რომელიც წარმოდგენილია ცვლადი ფერით.
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(125 135 150)'
        }
    })
}
coloring()


//function to not remove the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => { // ის ახვევს ყველა ელემენტს კლასში .box. თუ მიმდინარე ელემენტს i1 აქვს ფონის ფერი "ლურჯი", ის გადადის შიდა მარყუჟში.
        
        
        if (i1.style.backgroundColor == 'blue') {

            document.querySelectorAll('.box').forEach(i2 => { // ის კვლავ იმეორებს ყველა ელემენტს კლასში .box. თუ მიმდინარე ელემენტს i2 აქვს "მწვანე ყვითელი" ფონის ფერი და მისი შიდა ტექსტი ცარიელი არ არის, ის ასრულებს შემდეგ ოპერაციებს:
               

                if (i2.style.backgroundColor == 'greenyellow' && i2.innerText.length !== 0) {


                    greenyellowText = i2.innerText  // greenyellowText და blueText ენიჭება i2 და i1 innerText, შესაბამისად.blueColor და greenyellowColor ენიჭება blueText-ისა და greenyellowText-ის პირველი სიმბოლო სტრინგებად გადაქცევის შემდეგ.
                    

                    blueText = i1.innerText

                    blueColor = ((Array.from(blueText)).shift()).toString()
                    greenyellowColor = ((Array.from(greenyellowText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(232 235 239)'
                    }
                    if (a % 2 !== 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(125 135 150)'
                    }

                }
            })
        }
    })
}



function drag(ev, team) { // შეამოწმეთ, ეკუთვნის თუ არა ფიგურა მოთამაშის გუნდს
    if (team === 'black') {
      ev.dataTransfer.setData('text', ev.target.id); // შავი ფიგურებისთვის შვება
    } else {
      ev.preventDefault(); // თეთრი ფიგურების გადაწევის თავიდან აცილება
    }
  }
  
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  }

