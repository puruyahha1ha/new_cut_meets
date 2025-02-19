const ITEMS_PER_PAGE = 10;
export async function fetchFilteredModels(
    query: string,
    currentPage: number
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        // const res = await fetch(
        //     `http://localhost:3001/models?query=${query}&offset=${offset}&limit=${ITEMS_PER_PAGE}` 
        // );
        // const models = await res.json();

        // 一旦ダミーデータを返す
        const models = [];
        for (let i = 0; i < ITEMS_PER_PAGE; i++) {
            console.log(`offset: ${offset}, i: ${i}`); // デバッグ用ログ
            // 動的なデータを返す
            models.push({
                id: i,
                title: `タイトル${offset + i}`,
                comment: `コメント${offset + i}`,
                name: `名前${offset + i}`,
                shopname: `店名${offset + i}`,
                profilePicture: '/cutmodel.jpg',
                price: 1000 * (offset + i),
                imagePath: '/cutmodel.jpg',
            });
        }

        return models;
    } catch (error) {
        console.error(error);
        return [];
    }
}