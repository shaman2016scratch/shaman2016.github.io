// Name: JavaScript Runner
// ID: shaman2016JavaScriptRunner
// Author: SHAMAN2016 <https://scratch.mit.edu/users/SHAMAN2016/>

(async function(Scratch) {

    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

  function output(g) {
     return (g)
  }
  function error(g) {
    return (`Error: ${g}`)
  }
  function warn(g) {
    return (`Warn: ${g}`)
  }

    class Extension {
        getInfo() {
          return {
            "id": "shaman2016JavaScriptRunner",
            "name": "JavaScript Runner",
            "color1": "#0fbd8c",
            "blocks": [{
              "opcode": "block_1",
              "text": "JS [n1], args [args]",
              "blockType": "command",
              "arguments": {
                "n1": {
                  "type": "string",
                  "defaultValue": "alert(\"Hello World\")"
                },
                "args": {
                  "type": "string",
                  "defaultValue": {}
                }
              }
            }, {
              "opcode": "block_2",
              "text": "JS [n2], args [args]",
              "blockType": "reporter",
              "arguments": {
                "n2": {
                  "type": "string",
                  "defaultValue": "output(\"hello\")"
                },
                "args": {
                  "type": "string",
                  "defaultValue": {}
                }
              }
            }, {
              "opcode": "block_3",
              "text": "JS [n3], args [args]",
              "blockType": "Boolean",
              "arguments": {
                "n3": {
                  "type": "string",
                  "defaultValue": "output(1 < 2)"
                },
                "args": {
                  "type": "string",
                  "defaultValue": {}
                }
              }
            }]
          }
        }
      async block_1(args) {
        shaman2016JavaScriptRunner = {}
        shaman2016JavaScriptRunner.code = `function(arg) { args["n1"] }`
        shaman2016JavaScriptRunner.code(args['args'])
      }
      async block_2(args) {
        shaman2016JavaScriptRunner = {}
        shaman2016JavaScriptRunner.code = `function(arg) { args["n2"] }`
        return shaman2016JavaScriptRunner.code(args['args'])
      }
      async block_3(args) {
        shaman2016JavaScriptRunner = {}
        shaman2016JavaScriptRunner.code = `function(arg) { args["n3"] }`
        return shaman2016JavaScriptRunner.code(args['args'])
      }
    }

    let extension = new Extension();

    Scratch.extensions.register(extension);
})(Scratch);
