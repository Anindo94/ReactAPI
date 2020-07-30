// import React from "react";

// const Form = (ingredients) => {
// 	return (
// 		<div className="data">
// 			<table>
// 				<thead>
// 					<tr>
// 						<th>Id</th>
// 						<th>Name</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{ingredients.length > 0 ? (
// 						ingredients.map(({ strIngredient1, i }) => {
// 							return (
// 								<tr key={i}>
// 									<td>{strIngredient1}</td>
// 									<td>{ingredients.name}</td>
// 								</tr>
// 							);
// 						})
// 					) : (
// 						<tr>
// 							<td colSpan="5">Loading...</td>
// 						</tr>
// 					)}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };
// export default Form;

import React from "react";

function Form({ ingredients }) {
	// console.log(ingredients);
	return ingredients.map(({ strIngredient1, i }) => (
		<div key={i}>{strIngredient1}</div>
	));
}

export default Form;
