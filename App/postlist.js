import React from 'react';

 const Postlist= (contest) => (
 	<div className= "postPreview">
 		<div>
 			{contest.categoryName}
 		</div>
 		<div>
 			{contest.contestName}
 		</div>
 		<hr>
 		</hr>
 	</div>
 )

 export default Postlist;