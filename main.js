(function () {
  function main() {
    window.addEventListener("keydown", (event) => {
      if (event.target.tagName === "INPUT") {
        console.log("in input")
      }
      if (event.target.tagName === "TEXTAREA") {
        console.log("in textarea")
      }
      console.log("tagName:" + event.target.tagName)
      console.log("key:" + event.key)
      console.log("code:" + event.code)
      console.log("ctrlKey:" + event.ctrlKey)
      console.log("shiftKey" + event.shiftKey)
      console.log("altKey" + event.altKey)
      console.log("metaKey" + event.metaKey)
      // keyCode is deprecated, use key instead
      console.log("keyCode:" + event.keyCode)
      // stop event propagation
      event.stopImmediatePropagation();
      event.preventDefault();
    });
  }
  main()
})()
