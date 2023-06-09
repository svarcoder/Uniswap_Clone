import * as React from "react";
import { ModalBody, ModalContent, ModelHead } from "./style";

const CustomModal = (props: any) => {
	const { show, toggleModal, borderRadius, heading, styles } = props;
	const handleClickOutside = (e: any) => {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
	};

	return (
		<ModalBody
			show={show}
			onMouseDown={handleClickOutside}
			style={{ ...styles }}>
			<ModalContent borderRadius={borderRadius}>
				<ModelHead>
					<h2>{heading}</h2>
					<span onClick={() => toggleModal(!show)}>Close</span>
				</ModelHead>
				{props.children}
			</ModalContent>
		</ModalBody>
	);
};
export default CustomModal;
