import {PopupWrapper, PopupWindow} from "./popupStyled";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggle_popup} from "../../redux/actions/POPUP/togglePopup";

export default function Popup({children}) {
  const popupState = useSelector(state => state.popup.opened);
  const dispatch = useDispatch()
  return (
  	<>
	  {popupState && <PopupWrapper onClick={() => dispatch(toggle_popup())}>
		<PopupWindow
			width={400}
			height={250}
			onClick={e => e.stopPropagation()}
			animate={{scale: 1.2}}
			transition={{duration: 0.2}}
		>
		  {children}
		</PopupWindow>
	  </PopupWrapper>}
	  </>
  );
}