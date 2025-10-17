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
           }, {
              opcode: "block2",
              blockType: Scratch.BlockType.reporter,
              text: "[p1] - [p2]",
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
           }, {
              opcode: "block3",
              blockType: Scratch.BlockType.reporter,
              text: "[p1] × [p2]",
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
           }, {
              opcode: "block4",
              blockType: Scratch.BlockType.reporter,
              text: "[p1] ÷ [p2]",
              arguments: {
                p1: {
                  defaultValue: "100",
                  type: Scratch.ArgumentType.NUMBER,
                },
                p2: {
                  defaultValue: "2",
                  type: Scratch.ArgumentType.NUMBER,
                },
            },
           }, {
              opcode: "block5",
              blockType: Scratch.BlockType.reporter,
              text: "[p1] mod [p2]",
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
           }, {
              opcode: "block6",
              blockType: Scratch.BlockType.reporter,
              text: "[p1] ÷% [p2]",
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
           }, {
              opcode: "block7",
              blockType: Scratch.BlockType.reporter,
              text: "abs [p1]",
              arguments: {
                p1: {
                  defaultValue: "100",
                  type: Scratch.ArgumentType.NUMBER,
                }, {
              opcode: "block8",
              blockType: Scratch.BlockType.reporter,
              text: "The whole is bigger [p1]",
              arguments: {
                p1: {
                  defaultValue: "100.7",
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
  breturn = Per1 + Per2
  return (breturn)
}
block2(args) {
  Per1 = [args.p1]);
  Per2 = [args.p2]);
  breturn = Per1 - Per2
  return (breturn)
}
block3(args) {
  Per1 = [args.p1]);
  Per2 = [args.p2]);
  breturn = Per1 * Per2
  return (breturn)
}
block4(args) {
  Per1 = [args.p1]);
  Per2 = [args.p2]);
  breturn = Per1 / Per2
  return (breturn)
}
block5(args) {
  Per1 = [args.p1]);
  Per2 = [args.p2]);
  breturn = Per1 % Per2
  return (breturn)
}
block6(args) {
  Per1 = [args.p1]);
  Per2 = [args.p2]);
  breturn = Per1 % Per2
  Per1 = Per1 - breturn
  breturn = Per1 ÷ Per2
  return (breturn)
}
block7(args) {
  Per1 = [args.p1]);
  breturn = Math.abs(Per1)
  return (breturn)
}
block8(args) {
  Per1 = [args.p1]);
  breturn = Math.ceil(Per1)
  return (breturn)
}
    }
    Scratch.extensions.register(new modals());
  })(Scratch);
