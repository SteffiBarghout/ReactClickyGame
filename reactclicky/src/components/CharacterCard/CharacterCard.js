import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ id, name, image, handlePicked }) => (
    <div class = "box effect1">
        <div
            className = "card"
            id = {id}
            name = {name}
            onClick = {handlePicked}
        >
            <image alt= "" src = "image"></image>
        </div>
    </div>
)

export default CharacterCard;