import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors({ origin: "*" }));

app.get("/activeterms", async (req, res) => {
    const _res = await fetch(
        "https://openapi.it.wm.edu/courses/production/v1/activeterms",
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDgzODMwMTksImlhdCI6MTY0ODM4MTIxOSwibmJmIjoxNjQ4MzgxMjE5LCJpZGVudGl0eSI6InRyaWJlaGFja3MifQ.9qgL4mkAwlKgFNfF34mVPN5TKzVOQK0bxVBIwmhcXmk"
            },
        }
    );

    res.status(200).json(await _res.json());
});

app.get("/subjectlist", async (req, res) => {
    const _res = await fetch(
        "https://openapi.it.wm.edu/courses/production/v1/subjectlist",
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDgzODMwMTksImlhdCI6MTY0ODM4MTIxOSwibmJmIjoxNjQ4MzgxMjE5LCJpZGVudGl0eSI6InRyaWJlaGFja3MifQ.9qgL4mkAwlKgFNfF34mVPN5TKzVOQK0bxVBIwmhcXmk",
            }
        }
    );

    res.status(200).json(await _res.json());
});

app.get("/coursesection/:id", async (req, res) => {
    const _res = await fetch(
        "https://openapi.it.wm.edu/courses/production/v1/coursesections/" +
        req.params.id,
        {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDgzODMwMTksImlhdCI6MTY0ODM4MTIxOSwibmJmIjoxNjQ4MzgxMjE5LCJpZGVudGl0eSI6InRyaWJlaGFja3MifQ.9qgL4mkAwlKgFNfF34mVPN5TKzVOQK0bxVBIwmhcXmk",
            },
        }
    );

    res.status(200).json(await _res.json());
});

app.get("/opencourses/:subject/:term", async (req, res) => {
    const _res = await fetch(
        "https://openapi.it.wm.edu/courses/production/v1/opencourses/" +
        req.params.subject + "/" + req.params.term,
        {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDgzODMwMTksImlhdCI6MTY0ODM4MTIxOSwibmJmIjoxNjQ4MzgxMjE5LCJpZGVudGl0eSI6InRyaWJlaGFja3MifQ.9qgL4mkAwlKgFNfF34mVPN5TKzVOQK0bxVBIwmhcXmk",
            },
        }
    );

    res.status(200).json(await _res.json());
});



app.listen(3001);
