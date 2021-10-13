import React from "react";
import GetRequest from "./apiRequests";

export default function Avatar() {
  return (
    <div className="avatar">
      <h2>Avatar Characters</h2>
      <GetRequest endpoint="https://api.sampleapis.com/avatar/characters">
        <AvatarCharacter></AvatarCharacter>
      </GetRequest>
    </div>
  );
}

function AvatarCharacter(props) {
  return props.items.map((character) => (
    <div className="character" key={character.id}>
      <h3>{character.name}</h3>
    </div>
  ));
}
