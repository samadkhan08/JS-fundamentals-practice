async function dataFetch(){
	const fetchingData = await fetch('https://dummyjson.com/products')
	const apifetching = await fetchingData.json()
	console.log(apifetching)
}
dataFetch()





async function fetchData(){
	try{
		const apiLink = await fetch('https://dummyjson.com/products/1')
		const apiLinkfetching = await apiLink.json()
		console.log(apiLinkfetching)
	} catch(error){
		console.log("error")
	}
}
fetchData()





async function apiTest(){
	try{
		const api = await fetch('https://dummyjson.com/products/search?q=phone')
		const testApi = await api.json()
		console.log(testApi)
	} catch(error){
		console.log("error")
	}
}
apiTest()






const url = 'https://dummy-user1.p.rapidapi.com/users/q?ageLT=40&ageGT=30';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ad4ae388amsh263acc21453cb4dp1d3c85jsn120c1c9ca4cb',
		'X-RapidAPI-Host': 'dummy-user1.p.rapidapi.com'
	}
};

async function API(){
try {
	const apiResponse = await fetch(url, options);
	const apiResult = await apiResponse.json();
	console.log(apiResult);
} catch (error) {
	console.error("error");
}
}
API()