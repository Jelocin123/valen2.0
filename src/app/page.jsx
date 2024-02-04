"use client";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const phrases = [
    "no",
    "Oh, come on, give love a chance!",
    "Don't break my heart, say yes!",
    "You're just playing hard to get, right?",
    "But who could say no to all this love?",
    "Are you sure? I've got chocolates!",
    "Think again, I come with hugs and kisses!",
    "No? Is this your final answer, or can I persuade you?",
    "Don't be a heartbreaker, be my Valentine!",
    "I promise it'll be fun! Say yes!",
    "I'll make it worth your while, say yes!",
    "Come on, say yes and let's make some sweet memories!",
    "A 'No' now could turn into a 'Yes' later, think about it!",
    "But I got all dressed up for you! Say yes?",
    "Let's make this Valentine's Day unforgettable, say yes!",
    "I may not have a magic spell, but saying yes would be enchanting!",
    "No? I'll bring even more love if you say yes!",
  ];

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <main className="container d-flex align-items-center justify-content-center vh-100">
      <div className={styles.content}>
        {yesPressed ? (
          <>
            <div className="d-flex justify-content-center ">
              <img
                className=""
                src="https://gifdb.com/images/high/cute-love-kisses-for-you-uujbuokzyop19e4w.gif"
              />
            </div>
            <div className="text-center">Ok yay!!!</div>
            <p className="text-center mt-2">
              Ayanah I LOVE YOU SO MUCH, MY BEAUTIFUL PRINCESS
            </p>
            <div className="d-flex justify-content-center ">
              <button
                className="btn"
                type="button"
                id={styles.btnBg}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                CLICK MEEE!!!!!!!!
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Dear Ayanah my baby	&hearts;
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">Ayanah, I want you to know that I love you so extremely much, you mean the absolute world to me and I don’t know what I would do without you, you’re the reason I smile and the reason I breath, you are genuinely such a sweet and perfect human being, and I can’t tell you how lucky I am to be able to call you mine.knowing you has been the best thing that has happened to me, you fill my life with happiness and enjoyment, every single day, even when you dont know it, from the silly little things you do or say, you just make me smile and laugh to the point I catch myself thinking What did I do to deserve such a genuine and kind and funny and perfect human in my life, I cant wait to the day where we finally get to meet each other and just have the longest and tightest hug in the world and shower each other in our love.I Appreciate you more than I could ever put in to words, you’re my soulmate and my rock, youre my foundation to life, I know with you in my life every thing will be okay.I know you’re going through a lot right now and I can sometimes be a little bit too much or demand too much attention when you dont have the energy for it but that’s just simply because I wanna talk to you 24/7 like im addicted to you and having your attention, its genuinely the best feeling in the world knowning you’re giving me attention. I want you to know that im here for you no matter what you go through and I’ll always support you and be there for you in good and bad times. I love you so so so much my Beautiful Ayanah&hearts;&hearts;&hearts;</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                className="col-3 mt-3"
                src="https://gifdb.com/images/high/cute-love-bear-i-love-you-xa4rf40i5cj3xrlg.gif"
              />
              <img
                className="col-3 mt-3"
                src="https://i.pinimg.com/originals/bb/b3/90/bbb39048fdc864dc5d3fdacb98d89693.gif"
              />
              <img
                className="col-3 mt-3"
                src="https://i.pinimg.com/originals/a5/7a/c3/a57ac35aa5e8e0d054e500c1f3e9f173.gif"
              />
              <img
                className="col-3 mt-3"
                src="https://i.pinimg.com/originals/79/6f/dd/796fdda81b2e0eb8bf8028b8893f6e3c.gif"
              />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center">Will you be my Valentine?</h1>
            <div className="d-flex justify-content-center ">
              <img
                className=""
                src="https://i.pinimg.com/originals/2a/34/c9/2a34c95330d483685437ae5698b12fd9.gif"
              />
            </div>

            <div className=" d-flex justify-content-center ">
              <button
                className={`btn btn-success me-2  `}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="btn btn-danger ">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>

            <img
              className="col-3 mt-3"
              src="https://i.pinimg.com/originals/27/52/e5/2752e584c4f7e3e17ca00d6a98ec78ac.gif"
            />
            <img
              className="col-3 mt-3"
              src="https://i.pinimg.com/originals/4e/31/6e/4e316e9d4ffbafdbe837587811b917b2.gif"
            />
            <img
              className="col-3 mt-3"
              src="https://i.pinimg.com/originals/c3/ca/f3/c3caf3b0b32885fab4d5de1b62bf62c9.gif"
            />
            <img
              className="col-3 mt-3"
              src="https://gifdb.com/images/high/love-heart-bear-magic-9graem1zmi96v04i.gif"
            />
          </>
        )}
      </div>
    </main>
  );
}
