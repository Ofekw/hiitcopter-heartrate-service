# hiitcopter-heartrate-service
Please see this repo for the game: https://github.com/Ofekw/HIIT-Copter
## How To setup and use heartrate service:
* Clone this repo: https://github.com/Ofekw/hiitcopter-heartrate-service
* Install Node.js
* Open up the solution and run it in Visual Studio (you may need to install dependencies first such as the unviersal store SDK)
* Once the bluetooth software is running, pair any generic bluetooth heart rate sensor to the computer and select it within the software
* Once a heart rate is shown visually,
* Open up a console in the root directory of the repo and type: `npm install`
* After node module dependencies are installed: `npm start`
* If the game is running on a different machine, open up a new console and find the current device's ip (`ipconfig`)
* Go to the assets folder of the game, open the config.js file; if the server is running on the same computer simply type in `localhost:8080`, otherwise place the afermentioned ip of the device running the bluetooth server with the `8080` port, ie: `1.1.1.10:8080`
