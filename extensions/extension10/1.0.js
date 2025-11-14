// Name: Modification Http
// ID: ModHttpShaman2016
// Description: Extension for http requests
// By: SHAMAN2016 <https://scratch.mit.edu/users/shaman2016/>

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }
  ModHttpShaman2016 = {}

    class ModHttpShaman2016 {
      getInfo() {
        return {
          id: "ModHttpShaman2016",
          name: "Modification Http",
          color1: "#a3c0e1",
          blocks: [
            {
              opcode: "setHead",
              blockType: Scratch.BlockType.COMMAND,
              text: "set headers [header]",
              arguments: {
                header: {
                  defaultValue: '{"Content-Type": "application/json"}',
                  type: Scratch.ArgumentType.STRING,
                },
              },
            }, {
              opcode: "mget",
              blockType: Scratch.BlockType.REPORTER,
              text: "get [url]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            }, {
              opcode: "mpost",
              blockType: Scratch.BlockType.REPORTER,
              text: "post [url]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            }, {
              opcode: "mput",
              blockType: Scratch.BlockType.REPORTER,
              text: "put [url]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            }, {
              opcode: "mdelete",
              blockType: Scratch.BlockType.REPORTER,
              text: "delete [url]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            }, {
              opcode: "mhead",
              blockType: Scratch.BlockType.REPORTER,
              text: "head [url]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            },
          ],
        };
      }
      setHead(args) {
        ModHttpShaman2016.headers = args['header']
      }
      mget(args) {
        Otvet = fetch(args['url'], {  
          method: 'GET',  
          headers: ModHttpShaman2016.headers
        });
        return JSON.stringify(Otvet)
      }
      mpost(args) {
        Otvet = fetch(args['url'], {  
          method: 'POST',  
          headers: ModHttpShaman2016.headers
        });
        return JSON.stringify(Otvet)
      }
      mput(args) {
        Otvet = fetch(args['url'], {  
          method: 'PUT',  
          headers: ModHttpShaman2016.headers
        });
        return JSON.stringify(Otvet)
      }
      mdelete(args) {
        Otvet = fetch(args['url'], {  
          method: 'DELETE',  
          headers: ModHttpShaman2016.headers
        });
        return JSON.stringify(Otvet)
      }
      mhead(args) {
        Otvet = fetch(args['url'], {  
          method: 'HEAD',  
          headers: ModHttpShaman2016.headers
        });
        return JSON.stringify(Otvet)
      }
    }
    Scratch.extensions.register(new ModHttpShaman2016());
  })(Scratch);
