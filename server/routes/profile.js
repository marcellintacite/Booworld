"use strict";
const express = require("express");
const router = express.Router();

const profiles = [
  {
    id: 1,
    name: "A Martinez",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio accusamus tempora, praesentium rerum asperiores? Facilis, esse impedit. Dolor reiciendis dolorum inventore in porro cumque provident ipsa a rem voluptatum impedit fugit esse distinctio nobis laudantium ullam minima, itaque ex ipsam maxime consequatur atque hic incidunt et. Porro nisi odit ipsa rem modi sunt expedita perferendis possimus similique corporis officiis doloribus a quibusdam nulla nemo ullam velit dicta, sit tempore omnis in laborum animi. Explicabo quia, eveniet exercitationem maiores, ea sequi atque tempora suscipit molestiae ex ipsam commodi recusandae eligendi, nulla esse at iusto nostrum blanditiis alias repellat! Expedita, exercitationem!",
    mbti: "ISFJ",
    enneagram: "9w3",
    variant: "sp/so",
    tritype: 725,
    socionics: "SEE",
    sloan: "RCOEN",
    psyche: "FEVL",
    image: "https://soulverse.boo.world/images/1.png",
  },
];
const comment = [
  {
    name: "Daniel Craig",
    title: "Just not an INTJ",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum culpa quasi quae accusamus corrupti rerum sequi molestiae hic, officiis incidunt, nulla fugiat debitis deserunt?",
    votingOption: [
      {
        mbti: "INFP",
        enneagram: "1w2",
        Zadiac: "Canser",
      },
    ],
    like: 20,
  },
];

module.exports = function () {
  router.get("/*", function (req, res, next) {
    comment;
    res.render("profile_template", {
      profile: profiles[0],
      comments: comment,
    });
  });

  router.post("/", (req, res) => {
    const data = req.body;
    const number = Math.round(Math.random() * 100);
    const ndata = {
      name: "A Martinez",
      title: data.title,
      detail: data.details,
      votingOption: [
        {
          mbti: data.mbti,
          enneagram: data.Enneagram,
          Zadiac: data.zodiac,
        },
      ],
      like: number,
    };
    comment.push(ndata);
    res.redirect("/");
  });

  return router;
};
