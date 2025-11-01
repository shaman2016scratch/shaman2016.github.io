// Name: Python Runner
// ID: PyRunner
// By: SHAMAN2016 <https://scratch.mit.edu/users/shaman2016/>

(function (Scratch) {
    "use strict";
  let PyOutput = ''
  let PyData = '[]'
  let PyImport = '[]'
  let PyPip = '[]'
  let PyTerminal = '[]'
  let PyRasshireniya = '[]'

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }

    class PyRunner {
      getInfo() {
        return {
          id: "PyRunner",
          name: "Python Runner",
          color1: "#a3c0e1",
          blocks: [
            {
              opcode: "block1",
              blockType: Scratch.BlockType.COMMAND,
              text: "print [text]",
              arguments: {
                text: {
                  defaultValue: "hello world!",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            },
          ],
        };
      }
block1(args) {
  Per1 = [args.text]);
  PyOutput = `${PyOutput}${Per1}`;
}
    }
    Scratch.extensions.register(new PyRunner());
  })(Scratch);
