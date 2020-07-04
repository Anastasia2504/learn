let DATA;
$.get("cfg.json", function (data) {
    DATA = data;
    console.log(data);

    function findTables2(data, arr) {
        let res = [];

        let arrPair = Object.entries(data.Tables);
        for (let i = 0; i < arr.length; i++) {
            let tag = arr[i].tag;
            let index = {};
            for (let j = 0; j < arrPair.length; j++) {
                if (tag === arrPair[j][1].Tag) {
                    res.push(index);
                    index['table'] = arrPair[j][0];
                }
            }
            for (let key in arr[i]) {
                if (key !== 'tag') {
                    index[key] = arr[i][key];
                }
            }
        }

        console.log(res);
        return res;
    }

    function findTables(data, arr) {
        let index = {};
        let arrPair = Object.entries(data.Tables);
        for (let j = 0; j < arrPair.length; j++) {
            let tag = arrPair[j][1].Tag;
            index[tag] = arrPair[j][0]; // tag -> table
        }
        // console.log(index);

        let res = [];

        for (let i = 0; i < arr.length; i++) {
            let tag = arr[i].tag;
            let obj = {};
            res.push(obj);
            obj['table'] = index[tag];

            for (let key in arr[i]) {
                if (key !== 'tag') {
                    obj[key] = arr[i][key];
                }
            }
        }

        console.log(res);
        return res;
    }

    findTables(data,
        [{
            tag: 224,
            key: "hello",
            value: 13
        }, {
            tag: 18,
            key: "hello"
        }]); // => [{table: "", key: "", value: 13}, { table: "", key: ""}]
});