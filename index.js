function tester(funcs, args) {

    funcs.forEach(func => {
        console.time("time")
        for(var i = 0; i < 100000; i++ ){
            func(args);
        };
        console.timeEnd("time");
    });
}


