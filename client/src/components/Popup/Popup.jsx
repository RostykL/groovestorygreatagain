import {useDispatch, useSelector} from "react-redux";
import {PopupWindow, PopupWrapper} from "./popupStyled";
import {toggle} from "../../features/slices/popup/popup";

export default function Popup({children}) {
  const isOpened = useSelector(state => state.toggle.isOpen);
  const dispatch = useDispatch()

  return (
	  <>
		{isOpened && <PopupWrapper onClick={() => dispatch(toggle())}>
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