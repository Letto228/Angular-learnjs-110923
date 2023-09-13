function doSomething(n) {
  if(n === 0) {
    console.log("TASK COMPLETED!")
    return
  }
  console.log("Doing something.")
  doSomething(n - 1)
}
doSomething(3)
