// Name: JavaScript Runner
// ID: shaman2016JavaScriptRunner
// Author: SHAMAN2016 <https://scratch.mit.edu/users/SHAMAN2016/>

(function (Scratch) {
    "use strict";

    if (!Scratch.extensions.unsandboxed) {
        return alert("This extension needs to be unsandboxed to run!");
    }

    const Cast = Scratch.Cast;
    let sandboxed = true;

    const functions = `
        function output(out) {return out;} function error(err) { output(`error: ${err}`); } function warn(warn) { output(`warn: ${warn}`); } function arrayFrom2(a1,a2) { output(`[${a1},${a2}]`); } function arrayFrom3(a1,a2,a3) { output(`[${a1},${a2},${a3}]`) }
    `

    class JavaScriptExtension {
        getInfo() {
            return {
                "id": "shaman2016JavaScriptRunner",
                "name": "JavaScript Runner",
                "docsURI": "https://shaman2016scratch.github.io/shaman2016.github.io/extensions/extension6" 
                "color1": "#0fbd8c",
                "blocks": [
                    {
                        "func": "handleChangeSandboxed",
                        "text": sandboxed ? "Run unsandboxed" : "Run sandboxed",
                        "blockType": Scratch.BlockType.BUTTON
                    },
                    {
                        "opcode": "command",
                        "text": "command [CODE]",
                        "blockType": Scratch.BlockType.COMMAND,
                        "arguments": {
                            "CODE": {
                                "type": Scratch.ArgumentType.STRING,
                                "defaultValue": "alert(\"Hello World\")"
                            }
                        }
                    },
                    {
                        "opcode": "reporter",
                        "text": "reporter [CODE]",
                        "blockType": Scratch.BlockType.REPORTER,
                        "arguments": {
                            "CODE": {
                                "type": Scratch.ArgumentType.STRING,
                                "defaultValue": "output(\"Hello World\")"
                            }
                        }
                    },
                    {
                        "opcode": "boolean",
                        "text": "boolean [CODE]",
                        "blockType": Scratch.BlockType.BOOLEAN,
                        "arguments": {
                            "CODE": {
                                "type": Scratch.ArgumentType.STRING,
                                "defaultValue": "output(1 < 2)"
                            }
                        }
                    },
                    {
                        "opcode": "array",
                        "text": "array [CODE]",
                        "blockType": Scratch.BlockType.ARRAY,
                        "arguments": {
                            "CODE": {
                                "type": Scratch.ArgumentType.STRING,
                                "defaultValue": "output([\"apple\", \"banana\"])"
                            }
                        }
                    },
                    {
                        "opcode": "object",
                        "text": "object [CODE]",
                        "blockType": Scratch.BlockType.OBJECT,
                        "arguments": {
                            "CODE": {
                                "type": Scratch.ArgumentType.STRING,
                                "defaultValue": "output({\"apple\": \"banana\"})"
                            }
                        }
                    }
                ]
            }
        }

        handleChangeSandboxed () {
            sandboxed = !sandboxed;
            Scratch.vm.extensionManager.refreshBlocks();
        }
        _execute (code) {
            new Promise((resolve, reject) => {
                const script = document.createElement('script');
                if (!sandboxed) {
                    script.onerror = () => {
                        reject(new Error(`Error in unsandboxed script. Check console for more info`));
                    };
                    script.src = `data:application/javascript,${encodeURIComponent(functions)};${encodeURIComponent(code)}`;
                    document.body.appendChild(script);
                    return;
                }
                script.onload = () => resolve();
                script.onerror = () => {
                    reject(new Error(`Error in sandboxed script. Check the console for more info`));
                };
                script.src = `data:application/javascript,${encodeURIComponent(functions)};${encodeURIComponent(code)}`;
                document.body.appendChild(script);
            })
        }

        command (args) {
            this._execute(args.CODE);
        }
        reporter (args) {
            const string = Cast.toString(this._execute(args.CODE));
            return string;
        }
        boolean (args) {
            const boolean = Cast.toBoolean(this._execute(args.CODE));
            return boolean;
        }
        array (args) {
            const array = Cast.toList(this._execute(args.CODE));
            return array;
        }
        object (args) {
            const object = Cast.toObject(this._execute(args.CODE));
            return object;
        }
    }

    Scratch.extensions.register(new JavaScriptExtension);
})(Scratch);
