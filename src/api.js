const getHeroList = async (keyword,page,limit) => {
    const response = await fetch(`http://localhost:8080/api/v1/hero/list?keyword=${keyword}&page=${page}&limit=${limit}`);
    return response.json();
}

export {getHeroList}