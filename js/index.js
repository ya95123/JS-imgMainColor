const colorThief = new ColorThief()
const cards = document.querySelectorAll(".card")
const cardImgs = document.querySelectorAll(".card-img")
let color = []



// Make sure image is finished loading
cardImgs.forEach((item, idx) => {
  const bgColor = (r, g, b) => {
    cards[idx].style.background = `rgba(${r},${g},${b},0.85)`
  }

  const getImgColor = () => {
    color = colorThief.getColor(item)
    console.log(color)
    bgColor(color[0], color[1], color[2])
  }

  // 獲取已經載完
  if (item.complete) {
    getImgColor()
    return
  }
  // 獲取正在載入中的
  item.addEventListener('load', getImgColor)
})
