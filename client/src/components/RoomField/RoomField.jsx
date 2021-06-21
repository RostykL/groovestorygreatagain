import {Description, Title, Wrapper, Top, QtyLeft} from "./roomFieldStyled";

export default function RoomField({title, description, qtyInRoom}) {
  const leftSpace = qtyInRoom.in < qtyInRoom.max ;
  return (
  	<Wrapper>
	  <Top>
		<Title>{title}</Title>
		<QtyLeft leftSpace={leftSpace}>{qtyInRoom.in}/{qtyInRoom.max}</QtyLeft>
	  </Top>
	  <Description>{description}</Description>
	</Wrapper>
  );
}