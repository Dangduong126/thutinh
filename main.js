// Thay đổi nội dung búc thư ở đây
var letterContent ="Gửi Bông iuu. Tổng kết nhiều chút về năm 2024 vừa qua. Tớ đã rất là may mắn khi tháng cuối năm rùi mà vẫn gặp được một người quan tâm tớ,để ý tớ như cậu. Đấy là thành quả lớn nhất trong năm vừa qua của tớ rùi. Được gặp,được trò chuyện với cậu,được thích cậu là điều vui vẻ và hạnh phúc nhất năm 2024 của tớ. Nếu không có cậu xuất hiện thì 2024 với XDang này là một năm rất là tẻ nhạt, Bông là màu hồng trong năm của tớ á. Còn tiếp theo thì, tớ muốn xin lỗi Bông một chút vì đã gặp phải tớ TT. Tớ là một đứa mà khá là tự ti rụt rè,tớ cũng không biết nói chuyện, cũng chưa đủ tinh tế. Hơn vậy nữa là thật sự tớ chưa có kinh nghiệm trong vấn đề yêu đương tình cảm này nhiều, tớ chưa yêu ai trước đó. Vậy nên khi gặp Bông ở ngoài,đi chơi với Bông, tớ cũng chẳng biết nói gì nhiều, tớ chỉ biết tập trung vào Bông. Tớ xin lỗi vì điều đó làm Bông cảm thấy không thoải mái khi trò chuyện, cũng khiến Bông ngại không biết nói gì. Hôm đó khi mà Bông nói chắc chỉ hợp để làm bạn ý, thật sự tớ rất rối vì tớ biết mình khó có thể làm bạn được. Tớ thích Bông rất nhiều,rất rất nhiều nên đâu có thể làm bạn được. Bạn mà thích nhau thì làm bạn kiểu mô, đúng không? Tớ cũng chỉ biết cưng Bông, chiều Bông nhất có thể, tớ muốn bên cạnh Bông, chia sẻ với Bông rất nhiều. Xin lỗi Bông nhưng mà cho phép cái anh này thêm cơ hội nhé.Sang năm mới, tớ sẽ cố gắng cởi mở hơn, hiểu Bông hơn, nói chuyện với Bông nhiều hơn, đỡ xà lơ, hạt nhài hơn, bớt ngoo, nhớ Bông thương Bông thích Bông nhiều hơn. Target trong năm mới của tui đó. Cuối cùng là,gửi muôn ngàn lời chúc tốt đẹp nhất đến Bông và gia đình.Chúc Bông ngày càng xinh hơn,đáng yêu hơn,khoẻ mạnh hơn,giỏi giang hơn nữa. Và đặc biệt là mong năm mới Bông cũng sẽ giống tớ, thích tớ lại nhiều chút:>>>.Mong năm mới chúng mình sẽ từ bỏ tình bạn, sang tình bồ nhaaa. Thank you my love so much for reading this letter, moa moa.
 "

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 45 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
