// ID: RussiaScriptRinner
// By: SHAMAN2016 <https://scratch.mit.edu/users/shaman2016/>

(function (Scratch) {
    "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }

    class RussiaScriptRunner {
      getInfo() {
        return {
          id: "RussiaScriptRunner",
          name: "RussiaScriptRunner",
          color1: "#a3c0e1",
          blocks: [
            {
              opcode: "RunRussiaScript",
              blockType: Scratch.BlockType.command,
              text: "Run [code]",
              arguments: {
                p1: {
                  defaultValue: "",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            },
          ],
        };
      }
      RunRussiaScript(args) {
        Per1 = [args.code];
        RunRussiaScript({"libs":"","terminal":"","code":args.code})
      }
    }
    Scratch.extensions.register(new RussiaScriptRunner());
  })(Scratch);
