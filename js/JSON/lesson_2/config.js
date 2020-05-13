let DATA;
$.get("cfg.json", function (data) {
    DATA = data;
    console.log(data);
    // console.log(Object.keys(data));
    function searchNegativeLimit(data) {
        let res = [];
        let accounts = data.Accounts;
        for (var key in accounts) {
            let a = accounts[key];

            // Case 0
            // res = [+a.FlowCurrentLimit, +a.FlowLimit,+a.StorageLimit, +a.VCpuCurrentLimit, +a.VCpuLimit].reduce((acc, el)=> {
            //     if(el < 0) {
            //         acc.push(key);
            //     }
            //     return acc;
            // }, res);

            // Case 1
            // if (+a.FlowCurrentLimit < 0 || +a.FlowLimit < 0 || +a.StorageLimit < 0 || +a.VCpuCurrentLimit < 0 || +a.VCpuLimit < 0) {
            //     res.push(key);
            // }

            // Case 2
            // if ([+a.FlowCurrentLimit, +a.FlowLimit,+a.StorageLimit, +a.VCpuCurrentLimit, +a.VCpuLimit].reduce((acc, el) => acc || el < 0, true)) {
            //     res.push(key);
            // }

            // Case 3
            if ([+a.FlowCurrentLimit, +a.FlowLimit, +a.StorageLimit, +a.VCpuCurrentLimit, +a.VCpuLimit].filter((e) => e < 0).length > 0) {
                res.push(key);
            }
        }
        return _.uniq(res);
    }

    function searchNegativeLimit({
        Accounts
    }) {
        console.log(Accounts);
        return Object.keys(Accounts).filter(
            (a) => +Accounts[a].FlowCurrentLimit < 0 ||
            +Accounts[a].FlowLimit < 0 ||
            +Accounts[a].StorageLimit < 0 ||
            +Accounts[a].VCpuCurrentLimit < 0 ||
            +Accounts[a].VCpuLimit < 0
        );
    }

    function searchPDISKCATEGORYSSD({
        Hosts
    }) {
        let count = 0;
        for (var key in Hosts) {
            let a = Hosts[key].Disks;
            let res = a.reduce((acc, ssd) => {
                if (ssd["PDiskCategory"] === "PDISK_CATEGORY_SSD") {
                    acc += 1;
                }
                return acc;
            }, 0);
            count = count + res;
        }
        return count;
    }




    function searchRawlogs({
        Tasks
    }) {
        let res = [];
        for (var key in Tasks) {
            let a = Tasks[key];
            let names = a.SrcTables;
            // console.log(names[0].indexOf("raw_logs"));
            for (let name of names) {
                if (name.indexOf("raw_logs") === 0) {
                    res.push(key);
                }
            }

        }
        return _.uniq(res);
    }
    // console.log(searchRawlogs(data));

    // searchName(data);
    function searchEnabled({
        Sources
    }) {
        let count = 0;
        for (let key in Sources) {
            if (Sources[key].Enabled !== '0') {
                count += 1;
            }
        }
        return count;
    }
    searchEnabled(data);
    // console.log(searchPDISKCATEGORYSSD(data));
    function traverseKeys(data, keys) {
        let value;
        for (var k in data) {
            value = data[k];
            if (k.indexOf('Name', k.length - 4) >= 0) {
                keys[k] = 1;
            }
            if (typeof value === 'object') {
                traverseKeys(value, keys);
            }
        }

    }
    // console.log(traverseKeys(data,keys));

    function searchName(data) {
        let keys = {}; // "*Name" -> 1
        traverseKeys(data, keys);
        return Object.keys(keys);
    }
    // console.log(searchName(data));
    function compareKeys(data) {
        let arrExecutionQueues = Object.entries(data.ExecutionQueues);
        let arrTasks = Object.entries(data.Tasks);
        // console.log(arrExecutionQueues);
        // console.log(arrTasks);
        for (let i = 0; i < arrTasks.length; i++) {
            let task = arrTasks[i][1].Attrs;
            let QueueName = task.QueueName;
            // console.log(task.QueueName);
            for (let j = 0; j < arrExecutionQueues.length; j++) {
                let ExecutionQueue = arrExecutionQueues[j][0];
                let ExecutorName = arrExecutionQueues[j][1].ExecutorName;
                // console.log(ExecutorName);
                if (QueueName === ExecutionQueue) {
                    task.ExecutorName = ExecutorName;
                } else if (task.hasOwnProperty('QueueName') === false) {
                    task.ExecutorName = 'default';
                }
            }


        }
    }
    // compareKeys(data);

    function addExecutors(data){
        for (let task in data.Tasks) {
            let queue = data.Tasks[task].Attrs.QueueName; 
            data.Tasks[task].Attrs.ExecutorName = data.ExecutionQueues[queue].ExecutorName;
            console.log(data.Tasks[task].Attrs.ExecutorName);
        }
    }
    addExecutors(data);

});
