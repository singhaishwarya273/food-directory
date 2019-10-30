





export const GetSearchRecipies = (content,search)=>  async(dispatch) => {
	
	
	
	
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${content}=${search}
`	
).then(d=>d.json());
console.log(response.meals);
dispatch(SetSearchRecipies(response.meals))
};


export const SetSearchRecipies = data => {
		return {
			type: 'SET_DETAILS',
			data
		};
};

export const GetDetail = (name)=>  async(dispatch) => {
	console.log('a');
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`	
).then(d=>d.json());
console.log(response.meals);
if(response.meals){
dispatch(SetDetail(response.meals[0]))
};
};



export const SetDetail = data => {
		return {
			type: 'SET_DETAIL',
			data
		};
};

