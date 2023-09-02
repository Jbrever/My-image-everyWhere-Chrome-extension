chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message){
    if(message.txt==="hello"){
        let imgs = document.querySelectorAll('img')
        let image = [
            "IMG_0337.jpeg"
        ]
        for(pic of imgs){
           let src = 'myimages/'+image[0]
           let url = chrome.extension.getURL(src)
           pic.src= url
        }
    }
}