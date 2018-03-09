console.log("hello,mossad~")

var fpsEle = document.createElement("div")
var fpsState = {
  _fps: 0
}

Object.defineProperty(fpsState, 'fps', {
  get: function() {
    return this._fps
  },
  set: function(value) {
    fpsEle.innerText = value
    this._fps = value
  }
})

fpsState.fps = 0

fpsEle.style.cssText = "position: fixed; top: 0; right: 0;"
fpsEle.innerText = fpsState.fps

document.body.appendChild(fpsEle)


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
  var ps = (now - lastFameTime)
  var fps = Math.round(1000 / ps)

  lastFameTime = now
  allFrameCount++
  frame++

  if (now > 1000 + lastTime) {
    var fps = Math.round((frame * 1000) / (now - lastTime))
    console.log(`${new Date()} 1S内 FPS：`, fps) 
    fpsState.fps = fps
    frame = 0
    lastTime = now
  }

  rAF(loop)
}
 
loop()
