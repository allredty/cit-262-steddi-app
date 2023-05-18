import helloworld from "../utils/helloworld.js";
import assert from "assert"

it ("Should say hello", ()=>{
const hello = helloworld();

    assert.equal(hello, "hello");

})