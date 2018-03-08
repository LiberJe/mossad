console.log("hello,mossad~")

// var fpsEle = document.createElement("div")
// var fpsState = {
//   _fps: 0
// }

// Object.defineProperty(fpsState, 'fps', {
//   get: function() {
//     return this._fps
//   },
//   set: function(value) {
//     fpsEle.innerText = value
//     this._fps = value
//   }
// })

// fpsState.fps = 0

// fpsEle.style.cssText = "position: fixed; top: 0; right: 0;"
// fpsEle.innerText = fpsState.fps

// document.body.appendChild(fpsEle)

// var mossad = setInterval(function() {
//   fpsState.fps += 1
// }, 1000)


var rAF = function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }
  )
}()
 
var frame = 0
var allFrameCount = 0
var lastTime = Date.now()
var lastFameTime = Date.now()
 
var loop = function () {
  var now = Date.now()
  var fs = (now - lastFameTime)
  var fps = Math.round(1000 / fs)

  lastFameTime = now
  // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
  allFrameCount++
  frame++

  if (now > 1000 + lastTime) {
    var fps = Math.round((frame * 1000) / (now - lastTime))
    console.log(`${new Date()} 1S内 FPS：`, fps) 
    frame = 0
    lastTime = now
  }

  rAF(loop)
}
 
loop()
