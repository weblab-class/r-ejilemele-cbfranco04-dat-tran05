import React, {useEffect, useState} from "react";
import "./Game.css";
import Maze from "../modules/Maze.js";
import Timer from "../modules/Timer.js"
import { handleDownInput, handleUpInput } from "../../client-game-logic/Player.js";

const Game = () => {

    useEffect(() => {
        window.addEventListener("keydown", handleDownInput);
        window.addEventListener("keyup", handleUpInput);
        
        return () => {
            window.removeEventListener("keydown", handleDownInput);
            window.addEventListener("keyup", handleUpInput);
        }
    }, []);

    return (
        <div className="bg-primary-bg w-full h-full min-h-screen px-4 py-2 font-custom tracking-widest">
            <h1 className="font-bold text-center text-4xl text-primary-text">Perks</h1>
            <div className="PerkContainer">
                    <div className="Perk" />
                    <div className="Perk" />
                    <div className="Perk" />
                    <div className="Perk" />
                    <div className="Perk" />
            </div>
            <div className="flex justify-center m-8">
                <Maze />
            </div>
            <Timer />
        </div>
    )

}

export default Game;
