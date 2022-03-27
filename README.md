## William Mary Hackathon

![login](https://user-images.githubusercontent.com/82395440/160281132-ea74f4ad-a11d-4fe1-8581-cb2e0731ffd6.png)

A Discord Bot and A Website for William & Mary REST API

## Setting up the environment

1) Clone the repo: `git clone https://github.com/0xsapphir3/William_Mary_Hackathon.git`

# Setting up the discord bot

If you want to setup your discord bot, follow these steps:

1) Move to the directory of the bot's source code. (`cd website`)
2) Install all the packages (`yarn` | `npm i`)
3) Create `.env`. (`touch .env`)
4) Add these content:

```
TOKEN = <TOKEN>
ACCESS_TOKEN = <ACCESS_TOKEN>
```

You can gather `<TOKEN>` by creating a new application (https://discord.com/developers/applications) and adding a bot to the application and then copy the token.

You can gather the `<ACCESS_TOKEN>` by sending a request to the `https://openapi.it.wm.edu/auth/v1/login` API endpoint and gather the access token.

5) Lastly, start the bot by running `yarn start` | `npm run start`

<hr>

# Setting up website

1) Same as that of the bot, clone the repo
2) Move to the website directory (`cd website/`)
3) Start the website (`yarn dev` | `npm run dev`)

<hr>

## Pull requests
 
Pull requests are open!
