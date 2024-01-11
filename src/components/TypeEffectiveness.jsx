import { useState, useEffect } from "react";

import * as icons from "./assets/icons/Icons";

export default function TypeEffectiveness({ typeUrl }) {
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
  const [doubleDamageTo, setDoubleDamageTo] = useState([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  const [halfDamageTo, setHalfDamageTo] = useState([]);
  const [noDamageFrom, setNoDamageFrom] = useState([]);
  const [noDamageTo, setNoDamageTo] = useState([]);

  useEffect(() => {
    if (typeUrl) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${typeUrl}`);
          if (!response.ok) {
            throw new Error(
              `Network response was not ok. Status: ${response.status}, ${response.statusText}`
            );
          }

          const dataRelations = await response.json();
          const data = dataRelations?.damage_relations;

          setDoubleDamageFrom(data.double_damage_from);
          setDoubleDamageTo(data.double_damage_to);
          setHalfDamageFrom(data.half_damage_from);
          setHalfDamageTo(data.half_damage_to);
          setNoDamageFrom(data.no_damage_from);
          setNoDamageTo(data.no_damage_to);
        } catch (error) {
          console.error("Error fetching Pokemon data:", error);
        }
      };
      fetchData();
    }
  }, [typeUrl]);

  const getTypeInfo = (type) => {
    let color, icon;

    switch (type) {
      case "bug":
        color = "#92BC2C";
        icon = icons.bug;
        break;
      case "dark":
        color = "#595761";
        icon = icons.dark;
        break;
      case "dragon":
        color = "#0C69C8";
        icon = icons.dragon;
        break;
      case "electric":
        color = "#F2D94E";
        icon = icons.electric;
        break;
      case "fairy":
        color = "#EE90E6";
        icon = icons.fairy;
        break;
      case "fighting":
        color = "#D3425F";
        icon = icons.fighting;
        break;
      case "fire":
        color = "#FBA54C";
        icon = icons.fire;
        break;
      case "flying":
        color = "#A1BBEC";
        icon = icons.flying;
        break;
      case "ghost":
        color = "#5F6DBC";
        icon = icons.ghost;
        break;
      case "grass":
        color = "#5FBD58";
        icon = icons.grass;
        break;
      case "ground":
        color = "#DA7C4D";
        icon = icons.ground;
        break;
      case "ice":
        color = "#75D0C1";
        icon = icons.ice;
        break;
      case "normal":
        color = "#A0A29F";
        icon = icons.normal;
        break;
      case "poison":
        color = "#B763CF";
        icon = icons.poison;
        break;
      case "psychic":
        color = "#FA8581";
        icon = icons.psychic;
        break;
      case "rock":
        color = "#C9BB8A";
        icon = icons.rock;
        break;
      case "steel":
        color = "#5695A3";
        icon = icons.steel;
        break;
      case "water":
        color = "#539DDF";
        icon = icons.water;
        break;

      default:
    }

    return { color, icon };
  };

  const renderType = (damage, idx) => {
    const { color, icon } = getTypeInfo(damage.name);
    return (
      <div key={idx} className="type">
        <div className="icon" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div className="name" style={{ backgroundColor: color }}>
          {damage.name}
        </div>
      </div>
    );
  };

  const renderDoubleDamageFrom = () => doubleDamageFrom?.map(renderType);
  const renderDoubleDamageTo = () => doubleDamageTo?.map(renderType);
  const renderHalfDamageFrom = () => halfDamageFrom?.map(renderType);
  const renderHalfDamageTo = () => halfDamageTo?.map(renderType);
  const renderNoDamageFrom = () => noDamageFrom?.map(renderType);
  const renderNoDamageTo = () => noDamageTo?.map(renderType);

  return (
    <div className="type-effectiveness-container">
      <div className="header">Type Effectiveness</div>
      <div className="damage-container">
        <div className="damage">
          <div className="damage-title" style={{ backgroundColor: "#0C69C8" }}>
            Double Damage To
          </div>
          {renderDoubleDamageTo()}
        </div>
        <div className="damage">
          <div className="damage-title" style={{ backgroundColor: "#ba1c3b" }}>
            Double Damage From
          </div>
          {renderDoubleDamageFrom()}
        </div>
        <div className="damage">
          <div className="damage-title" style={{ backgroundColor: "#FBA54C" }}>
            Half Damage To
          </div>
          {renderHalfDamageTo()}
        </div>
        <div className="damage">
          <div className="damage-title" style={{ backgroundColor: "#DA7C4D" }}>
            Half Damage From
          </div>
          {renderHalfDamageFrom()}
        </div>
        <div className="damage">
          <div className="damage-title" style={{ backgroundColor: "#737373" }}>
            No Damage To
          </div>
          {renderNoDamageTo()}
        </div>
        <div className="damage">
          <div className="damage-title" style={{ backgroundColor: "#737373" }}>
            No Damage From
          </div>
          {renderNoDamageFrom()}
        </div>
      </div>
    </div>
  );
}
