import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='ma4 mt0'>
			<p className='f3'>
				{'This will detect faces in the image.'}
			</p>
			<div>
			<div className='center form pa4 br3 shadow-5'>
				<input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
				<button className='w-30 grow f4 link ph3 pv2 dib whtie bg-light-pink' onClick={onButtonSubmit}>Detect</button>
			</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;