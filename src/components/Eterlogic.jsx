import React from 'react'

const Eterlogic = () => {
  return (
    <div>
        **If you install this under “Run as other user”, you must run as administrator before the program will function.***
Navigate to ccis22/install/Eterlogic Port Splitter
Open “New port splitter”
Run SetupVSPE_64.msi
Go back to Eterlogic Port Splitter folder, copy license key from “Key.txt”
Open program, go to help enter license key, paste key
Creating a virtual port for scanner –
Check device manager to see what COM port the scanner is
Go back to port splitter, click on “Create new device…”
Device type – Virtual splitter
Check box that says “Special mode: create single virtual port which can be opened many times”
“COM Port to use as a data source” – COM port that the scanner was in step 1
Under “Selected virtual port settings”, choose a port that is not in use, usually 10 and above. It does not matter as long as it isn’t in use under device manager.
Click finish
Save config file as – choose location, temp is usually fine
Let the officer know where it is in case they need to start it. You can also put this config file under shell:common startup so that it always launches on startup.

    </div>
  )
}

export default Eterlogic