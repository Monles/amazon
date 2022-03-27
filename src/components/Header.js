import React from 'react';
import Image from 'next/image';

function Header() {
	return (
		<header>
			{/* head */}
			<div>
				<div>
					<Image
						src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
						layout='fill'
						width={150}
						height={40}
						alt=''
					/>
				</div>
			</div>
			{/* bottom */}
		</header>
	);
}

export default Header;
