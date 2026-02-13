function process(val: unknown) { //with the any type the if checking is not necessary but we can get runtime error
    if (typeof val === 'object' && !!val && 'log' in val && typeof val.log === 'function') {
        val.log();
    }
}