// Name Math
// ID: Mathplusbyshaman2016
// By: SHAMAN2016 <https://scratch.mit.edu/users/shaman2016/>

(function (Scratch) {
    "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }

    class modals {
      getInfo() {
        return {
          id: "Mathplusbyshaman2016",
          name: "Math +",
          color1: "#a3c0e1",
          blocks: [
            {
              opcode: "block1",
              blockType: Scratch.BlockType.reporter,
              text: "[p1] + [p2]",
              arguments: {
                p1: {
                  defaultValue: "100",
                  type: Scratch.ArgumentType.NUMBER,
                },
                p2: {
                  defaultValue: "45",
                  type: Scratch.ArgumentType.NUMBER,
                },
            },
           },
          ],
        };
      }
block1(args) {
  Per1 = [args.p1]);
  Per2 = [args.p2]);
  return (per1 + per2)
}
    }
    Scratch.extensions.register(new modals());
  })(Scratch);
