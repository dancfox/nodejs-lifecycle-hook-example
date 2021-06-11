console.log("******** enter the init block   ********");

let resolved = "No";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)).then(() => {resolved = "Yes!"});
}

/**
 * This is the portion of the lifecycle hook that is
 * implemented by customers. In this case we are creating
 * a blocking call to a sleep method for 5 seconds.
 * 
 * If you run this example in your terminal you can see the
 * that await is honored, the function blocks, and then 
 * wakes up prior to invocation.
 */
exports.initializeFunction = async () => {
  console.log("******** enter initializeFunction hook ********");
  console.log("******** Is promised resolved? " + resolved + " ********");
  console.log("******** sleep for 5 seconds... ********")
  let p = await sleep(5000);
  console.log("******** wake up                ********");
}

exports.handler = async (event, context) => {
    console.log("******** enter the handler        ********");
    console.log("******** Is promised resolved? " + resolved + " ********");

    return 'Function complete.';
}
