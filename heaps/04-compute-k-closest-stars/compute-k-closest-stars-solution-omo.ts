type Position = {
    x: number;
    y: number;
    z: number;
};

type HeapObject = {
    star: Position;
    distance: number;
};

function calculateDistance(a: Position): number {
    return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2) + Math.pow(a.z, 2));
}


function generateHeapObjectArray(stars: Position[]): HeapObject[] {
    // return stars.map(star => {star, distance: calculateDistance(star)});
    const result: HeapObject[] = stars.map((star) => ({
        star: star,
        distance: calculateDistance(star),
    }));
    return result;
}


const getClosestStars = (k: number, stars: Position[]): Position[] => {
    const heapObjects = generateHeapObjectArray(stars);
    let newarr: HeapObject[] = [];


    // O(n*k)
    heapObjects.forEach((obj) => {


        if (newarr.length < k) {
            newarr.push(obj);
        } else {
            // Max heap
            let maxIndex = 0;
            const maxValue = Math.max(...newarr.map((o) => o.distance));
            // @ts-ignore
            maxIndex = newarr.findIndex((o) => o.distance === maxValue);
            if (obj.distance < maxValue) {
                newarr[maxIndex] = obj;
            }
        }
    });
    return newarr.map((o) => o.star);
};


console.log(
    getClosestStars(3, [
        { x: 4, y: 3, z: 0 },
        { x: 6, y: 8, z: 0 },
        { x: 4, y: 0, z: 3 },
        { x: 3, y: 4, z: 0 },
    ]),
);
