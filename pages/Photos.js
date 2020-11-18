import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import Image from '../components/images'
import {Context } from '../Context'
import { getClass } from '../utils';

function Photos() {
	const {allPhotos} = useContext(Context);
	return (
		<main className="photos">
			{allPhotos.map(( photo , i) => {
				return (
					<Image key={photo.id} photo={photo} className={getClass(i)}></Image>
				)
			})  
			}
		
		</main>
	);
}

export default Photos;
