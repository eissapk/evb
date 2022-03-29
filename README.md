### project structure

* `setup` dir has the engimavb exe app that should be installed on your windows `you should install this before anything`

* `foo` dir contains the node project that you wish to bundle `you should paste your project files here`

* `build` dir will be having the manifest file .evb and the final bundled .exe file

### Used modules
`generate-evb` this module is used to create evb manifest file that can be used via engimavb program to create the bundled .exe file (Cli & GUI)


You can modify the props paths inside `enigmavb` of package.json as you need

### Using CLI
```bash
npm i
```
```bash
npm run build
```

### Using GUI
1. download [enigma-virtual-box](https://enigma-virtual-box.software.informer.com/download/) and install it
2. open the enigma-virtual-box and click browse under this title `enter input file name` and select the exe file of the exported nwjs desktop app
3. click browse under `enter output file name` as a dest location
4. then click add button at the very bottom left and choose `add folder recursive` and select the folder of the exported nwjs desktop app
5. click process and after it finishes you will find the exe file in the dest location
