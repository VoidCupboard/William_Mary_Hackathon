import * as express from "express";
import * as cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors({ origin: "*" }));

const getToken = async () => {
    const res = await fetch("https://openapi.it.wm.edu/auth/v1/login" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            client_id: "tribehacks",
            secret_id: "E74euRJIhUcoJAf2nCDXDM8hE45KQPBOvuq7bkRRisKxb"
        })
    })

    const json = await res.json()

    return json.access_token
}

app.get("/activeterms", async (req: express.Request, res: express.Response) => {
    const _res = await fetch(
        "https://openapi.it.wm.edu/courses/production/v1/activeterms",
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDgzODU2MjUsImlhdCI6MTY0ODM4MzgyNSwibmJmIjoxNjQ4MzgzODI1LCJpZGVudGl0eSI6InRyaWJlaGFja3MifQ.HU2MCyr_ZHFWbfwZJJNxvzPqQbW_8EYPo93_ZuB6cfg"
            },
        }
    );

    res.status(200).json(await _res.json());
});

app.get("/subjectlist", async (req: express.Request, res: express.Response) => {
    const _res = await fetch(
        "https://openapi.it.wm.edu/courses/production/v1/subjectlist",
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + await getToken(),
            }
        }
    );

    res.status(200).json(await _res.json());
});

app.get("/coursesection/:id", async (req: express.Request, res: express.Response) => {
    const _res = await fetch(
        "https://openapi.it.wm.edu/courses/production/v1/coursesections/" +
        req.params.id,
        {
            method: "GET",
            headers: {
                Authorization: "Bearer " + await getToken(),
            },
        }
    );

    res.status(200).json(await _res.json());
});

app.get("/opencourses/:subject/:term", async (req: express.Request, res: express.Response) => {
    const _res = await fetch(
        "https://openapi.it.wm.edu/courses/production/v1/opencourses/" +
        req.params.subject + "/" + req.params.term,
        {
            method: "GET",
            headers: {
                Authorization: "Bearer " + await getToken(),
            },
        }
    );

    res.status(200).json(await _res.json());
});



app.listen(process.env.PORT || 3001);
