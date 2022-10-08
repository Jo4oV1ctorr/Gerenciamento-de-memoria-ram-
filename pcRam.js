const os = require('os');

setInterval(() => {

    const {arch, platform, totalmem, freemem, type, hostname, uptime } = os;
    const tRam = totalmem() /1024/1024;
    const fRam = freemem() /1024/1024;
    const usage = (fRam / tRam) * 100;
    const stats = {
    
    os: platform(),
    arch:arch(),
    totalRam:`${parseInt(tRam)} MB`,
    freeRAM:`${parseInt(fRam)} MB`,
    tipo:type(),
    Namehost:hostname(),
    Atividade:uptime(),
    usage:`${usage.toFixed(2)} %`,

    }
    

    console.clear();
    console.table(stats);
    exports.stats = stats;
   
}, 1000);
