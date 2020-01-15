const util = require('util')
const OSS = require('ali-oss')
const fs = require('fs')
const path = require('path')
const promisifyReaddir = util.promisify(fs.readdir)
const promisifyStat = util.promisify(fs.stat)

const ALIOSSKEY = {
  region: 'oss-cn-shanghai',
  key: 'LTAI4FpyZQxZRe9T53Zx6Rn1',
  secret: 'Tk0s5u3oHoIVvC1zGmM02veuSI5JaL',
  bucket: 'gpagame'
}

const client = new OSS({
  region: ALIOSSKEY.region,
  accessKeyId: ALIOSSKEY.key,
  accessKeySecret: ALIOSSKEY.secret,
  bucket: ALIOSSKEY.bucket
})

const publicPath = path.resolve(__dirname, './build')

async function run(proPath = '') {

  const dir = await promisifyReaddir(`${publicPath}${proPath}`)

  for (let i = 0; i < dir.length; i++) {
    const stat = await promisifyStat(path.resolve(`${publicPath}${proPath}`, dir[i]))

    if (stat.isFile()) {
      const fileStream = fs.createReadStream(path.resolve(`${publicPath}${proPath}`, dir[i]))
      console.log(`上传文件: ${proPath}/${dir[i]}`)
      const result = await client.putStream(`${proPath}/${dir[i]}`, fileStream)
    } else if (stat.isDirectory()) {
      await run(`${proPath}/${dir[i]}`)
    }
  }
}

run()